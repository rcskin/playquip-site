//products (individual) page

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client.js";

const productQuery = `
  *[_type == "product" && slug.current == $productSlug][0]{
    title,
    "slug": slug.current,
    mainImage{
      "url": asset->url
    },
    galleryImages[]{
  "url": asset->url
},
    threeDModelUrl,
    description,
    specImage{
      "url": asset->url
    },
    specifications[],
    downloads[]{
      title,
      file{
        "url": asset->url
      }
    },
    categories[]->{
      title,
      "slug": slug.current,
      umbrellaCategory->{
        title,
        "slug": slug.current
      }
    }
  }
`;

export default async function ProductDetail({ params }) {
  const { umbrellaSlug, categorySlug, productSlug } = params;

  const product = await client.fetch(productQuery, { productSlug }, { cache: "no-cache" });
  console.log("Fetched Product:", product);

  if (!product) {
    notFound();
  }

  const matchingCategory = product.categories?.find(
    (cat) => cat.slug === categorySlug
  );
  if (
    !matchingCategory ||
    matchingCategory.umbrellaCategory.slug !== umbrellaSlug
  ) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="text-sm breadcrumbs px-4 py-4 bg-gray-100">
        <ul className="container mx-auto">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href={`/products/${matchingCategory.umbrellaCategory.slug}`}>
              {matchingCategory.umbrellaCategory.title}
            </Link>
          </li>
          <li>
            <Link
              href={`/products/${matchingCategory.umbrellaCategory.slug}/${matchingCategory.slug}`}
            >
              {matchingCategory.title}
            </Link>
          </li>
          <li>{product.title}</li>
        </ul>
      </div>

      {/* Product Details Section */}
      <section className="container mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <ImageGallery
              mainImage={product.mainImage.url}
              galleryImages={product.galleryImages || []}
              alt={product.title}
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-amber-600">{product.title}</h1>
            {product.threeDModelUrl && (
              <iframe
                src={product.threeDModelUrl}
                className="w-full h-96 border rounded-lg shadow-md"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto text-gray-700 text-lg leading-relaxed">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">
            Description
          </h2>
          <PortableText value={product.description} />
        </div>

        {/* Specifications and Spec Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Specifications Table */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">
              Specifications
            </h2>
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <tbody>
                {product.specifications?.map((spec) => (
                  <tr key={spec._key} className="border-b">
                    <td className="py-3 px-4 font-medium text-gray-600 border-r">
                      {spec.specName}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {spec.specValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Spec Image */}
          {product.specImage?.url && (
            <div>
              <Image
                src={product.specImage.url}
                alt={`${product.title} Specification`}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
