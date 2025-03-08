import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client.js";
import ProductDetailClient from "./ProductDetailClient"; 

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