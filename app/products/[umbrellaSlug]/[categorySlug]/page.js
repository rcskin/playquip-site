//categories page

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client.js";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

// Revalidate page every 60 seconds for freshness
export const revalidate = 60;

const categoryQuery = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    description,
    "slug": slug.current,
    umbrellaCategory->{
      title,
      "slug": slug.current
    },
    products[]->{
      title,
      "slug": slug.current,
      mainImage
    }
  }
`;

export default async function CategoryPage({ params }) {
  const { umbrellaSlug, categorySlug } = params;

  console.log("Route Params in Category Page:", params);

  // Fetch category data including products and umbrella reference
  const category = await client.fetch(categoryQuery, {
    slug: categorySlug,
  });

  // Fallback to 404 if category is missing or URL mismatch
  if (!category || category.umbrellaCategory?.slug !== umbrellaSlug) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-base-200">
      {/* Breadcrumb Navigation */}
      <div className="text-sm breadcrumbs px-4 py-4">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href={`/products/${category.umbrellaCategory.slug}`}>
              {category.umbrellaCategory.title}
            </Link>
          </li>
          <li>{category.title}</li>
        </ul>
      </div>

      <section className="container mx-auto px-4 py-8">
        {/* Category Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 text-blue-950">
          {category.title}
        </h1>

        {/* Optional portable description block */}
        {category.description && (
          <div className="bg-blue-950 text-gray-300 text-xl text-center rounded-lg px-6 py-4 mb-8 shadow-md">
            <PortableText value={category.description} />
          </div>
        )}
        {/* Scroll Indicator */}
        <div className="text-center mb-6">
          <span className="text-gray-600 animate-bounce">
            ↓ Scroll to see products ↓
          </span>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products?.map((product) => (
            <div key={product.slug} className="card bg-base-100 shadow-xl">
              <figure className="h-48 overflow-hidden relative">
                {product.mainImage && (
                  <Image
                    src={urlFor(product.mainImage).width(600).height(400).fit("crop").url()}
                    alt={product.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <div className="card-actions justify-end">
                  <Link
                    href={`/products/${category.umbrellaCategory.slug}/${category.slug}/${product.slug}`}
                    className="btn btn-primary hover:bg-orange-500 hover:border-orange-500"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
