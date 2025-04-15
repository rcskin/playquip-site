//umbrella category page

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client.js";
import { urlFor } from "@/sanity/lib/image"; // importing Sanity's image utility
import { PortableText } from "@portabletext/react";

// Revalidate this page every 60 seconds
export const revalidate = 60;

// Updated query to pull the raw image field instead of hardcoding the asset URL
const umbrellaWithCategoriesQuery = `
  *[_type == "umbrellaCategory" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    description,
    categories[]->{
      title,
      "slug": slug.current,
      image
    }
  }
`;

export default async function UmbrellaCategoryPage({ params }) {
  const { umbrellaSlug } = params;

  // Standard fetch with ISR (no custom caching flags needed)
  const umbrellaCategory = await client.fetch(umbrellaWithCategoriesQuery, {
    slug: umbrellaSlug,
  });

  // If no matching content found, trigger Next.js 404 page
  if (!umbrellaCategory) {
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
            <li>{umbrellaCategory.title}</li>
          </ul>
        </div>

        <section className="container mx-auto px-4 py-8">
        {/* Umbrella category title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 text-blue-950">
          {umbrellaCategory.title}
        </h1>

          {/* Optional portable text description */}
        {umbrellaCategory.description && (
          <div className="bg-blue-950 text-gray-300 text-xl text-center rounded-lg px-6 py-4 mb-8 shadow-md">
            <PortableText value={umbrellaCategory.description} />
          </div>
        )}
          {/* Scroll Indicator */}
          <div className="text-center mb-6">
            <span className="text-gray-600 animate-bounce">
              ↓ Scroll to see products ↓
            </span>
          </div>

          {/* Grid of subcategories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umbrellaCategory.categories?.map((cat) => (
              <div key={cat.slug} className="card bg-base-100 shadow-xl">
                <figure className="h-48 overflow-hidden relative">
                  {cat.image && (
                    <Image
                    src={urlFor(cat.image).width(600).height(400).fit("crop").url()}
                    alt={cat.title}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cat.title}</h2>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/products/${umbrellaCategory.slug}/${cat.slug}`}
                      className="btn btn-primary hover:bg-orange-500 hover:border-orange-500"
                    >
                      View Products
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
