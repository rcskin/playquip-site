//products/page.js
//Types of Play equipment

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client.js";
import { urlFor } from "@/sanity/lib/image"; //added Sanity's image helper instead of hardcoded asset URLs


export const metadata = {
  title: "Our Products - PlayQuip Leisure",
};

//tell Next.js to revalidate the page every 60 seconds
//ensures if I/clients update content in Sanity, it actually reflects on the site without a full redeploy.
export const revalidate = 60;

export default async function ProductsPage() {
  //Grab all umbrella categories from Sanity... image now comes raw, not pre-transformed
  const umbrellaCategories = await client.fetch(`
    *[_type == "umbrellaCategory"] {
      title,
      "slug": slug.current,
      image, //now passes the raw image object instead of asset->url
      description,
      categories[]-> {
        title,
        "slug": slug.current,
        description,
        image
      }
    }
  `);

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
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umbrellaCategories.map((uc) => (
            <div key={uc.slug} className="card bg-base-100 shadow-xl">
              <figure className="h-48 overflow-hidden relative">
                {uc.image && (
                  //no more .asset->url — using urlFor() to build optimized, dynamic image URLs via Sanity's builder
                  <Image
                    src={urlFor(uc.image).width(600).height(400).fit("crop").url()}
                    alt={uc.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{uc.title}</h2>
                <div className="card-actions justify-end">
                  {/* slug-based routing to individual umbrella category pages */}
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
