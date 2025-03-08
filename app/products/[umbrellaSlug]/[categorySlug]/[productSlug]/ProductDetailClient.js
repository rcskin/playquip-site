"use client";

import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import { PortableText } from "@portabletext/react";
import { useWishList } from "@/app/context/WishListContext";
import toast from "react-hot-toast";

export default function ProductDetailClient({ product, matchingCategory }) {
  const { addToWishList } = useWishList();

  const handleAddToWishList = () => {
    addToWishList(product);

    toast.success(
      <span>
        🛒 <strong>{product.title}</strong> added to Wish List!{" "}
        <Link href="/wishlist" className="underline text-white font-bold">
          View Wish List
        </Link>
      </span>,
      {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#4CAF50",
          color: "#fff",
        },
        className: "font-semibold",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );
  };

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
            <h1 className="text-5xl font-bold text-amber-600">
              {product.title}
            </h1>
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

        <button
          onClick={handleAddToWishList}
          className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
        >
          Add to WishList
        </button>
      </section>
    </main>
  );
}
