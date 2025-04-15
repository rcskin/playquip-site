//components/ImageGallery.js
"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function ImageGallery({ mainImage, galleryImages, alt }) {
  const allImages = [
    urlFor(mainImage).width(1200).url(),
    ...(galleryImages || []).map((img) => urlFor(img).width(1200).url()),
  ];

  const [currentImage, setCurrentImage] = useState(allImages[0]);

  // Track loading for the main image
  const [isImageLoading, setIsImageLoading] = useState(true);

  console.log("Gallery Images in Component:", allImages); // Debugging

  return (
    <div>
      {/* Main Image */}
      <div
        data-testid="main-image-container"
        className="mb-4 w-full max-w-[800px] h-[500px] relative"
      >
        <Image
          src={currentImage}
          alt={alt}
          fill
          className={`
            rounded-lg shadow-lg object-cover 
            transition-opacity duration-500
            ${isImageLoading ? "opacity-0" : "opacity-100"}
          `}
          // When the image finishes loading, hide skeleton
          onLoadingComplete={() => setIsImageLoading(false)}
        />

        {/* Skeleton Placeholder (DaisyUI) */}
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-base-100 rounded-lg">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}
      </div>

      {/* Gallery Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-2">
          {allImages.map((imgUrl, index) => (
            <div
              key={index}
              data-testid="thumbnail-container"
              className={`cursor-pointer p-1 rounded-md border bg-white ${
                currentImage === imgUrl
                  ? "border-blue-500 shadow-md"
                  : "border-gray-300"
              }`}
              style={{
                width: "120px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onClick={() => setCurrentImage(imgUrl)}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden", // Ensures the image is clipped
                }}
              >
                <Image
                  src={imgUrl}
                  alt={`${alt} Thumbnail ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
