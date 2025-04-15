//app/products/[umbrellaSlug]/[categorySlug]/[productSlug]/page.js
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client.js";
import ProductDetailClient from "./ProductDetailClient"; 

export const revalidate = 60;

const productQuery = `
  *[_type == "product" && slug.current == $productSlug][0]{
    title,
    "slug": slug.current,
    mainImage,
    galleryImages,
    threeDModelUrl,
    description,
    specImage,
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


export default async function ProductDetailPage({ params }) {
  const { umbrellaSlug, categorySlug, productSlug } = params;

  const product = await client.fetch(productQuery, { productSlug });

  if (!product) {
    notFound();
  }

  const matchingCategory = product.categories?.find(
    (cat) => cat.slug === categorySlug
  );

  if (!matchingCategory || matchingCategory.umbrellaCategory.slug !== umbrellaSlug) {
    notFound();
  }

  return <ProductDetailClient product={product} matchingCategory={matchingCategory} />;
}