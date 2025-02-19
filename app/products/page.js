//products/page.js
//Types of Play equipment

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client.js";


export const metadata = {
  title: "Our Products - PlayQuip Leisure",
};

const umbrellaQuery = `
  *[_type == "umbrellaCategory"] {
    title,
    "slug": slug.current,
    "imageUrl": coalesce(image.asset->url, null),
    description,
    categories[]-> {
      title,
      "slug": slug.current,
      description,
      "imageUrl": coalesce(image.asset->url, null)
    }
  }
`;


export default async function ProductsPage() {
  const umbrellaCategories = await client.fetch(umbrellaQuery, {
    cache: "no-cache",
  });
  console.log("Raw Umbrella Categories Response:", umbrellaCategories);




  return (
    <main className="min-h-screen bg-base-200">
      {/* Breadcrumb Navigation */}
      <div className="text-sm breadcrumbs px-4 py-4">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Products</li>
        </ul>
      </div>

      <section className="container mx-auto px-4 py-8">
        {/* Enhanced Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 text-blue-950">
          Types of Play Equipment
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umbrellaCategories.map((uc) => (
            <div key={uc.slug} className="card bg-base-100 shadow-xl">
              <figure className="h-48 overflow-hidden relative">
                {uc.imageUrl && (
                  <Image
                    src={uc.imageUrl}
                    alt={uc.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{uc.title}</h2>
                <div className="card-actions justify-end">
                  <Link
                    href={`/products/${uc.slug}`}
                    className="btn btn-primary hover:bg-orange-500 hover:border-orange-500"
                  >
                    View Categories
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
