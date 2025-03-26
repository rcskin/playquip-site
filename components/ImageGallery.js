"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ mainImage, galleryImages, alt }) {
  const validGalleryImages = galleryImages || [];
  const allImages = [mainImage, ...validGalleryImages.map((img) => img.url)];

  const [currentImage, setCurrentImage] = useState(mainImage);

  console.log("Gallery Images in Component:", validGalleryImages); // Debugging

  return (
    <div>
      {/* Main Image */}
      <div data-testid="main-image-container" className="mb-4 w-full max-w-[800px] h-[500px] relative">
        <Image
          src={currentImage}
          alt={alt}
          layout="fill"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Gallery Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-2">
          {allImages.map((img, index) => (
            <div
              key={index}
              data-testid="thumbnail-container"
              className={`cursor-pointer p-1 rounded-md border bg-white ${
                currentImage === img ? "border-blue-500 shadow-md" : "border-gray-300"
              }`}
              style={{
                width: "120px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onClick={() => setCurrentImage(img)}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden", // Ensures the image is clipped
                }}
              >
                <Image
                  src={img}
                  alt={`${alt} Thumbnail ${index + 1}`}
                  width={120}
                  height={90}
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
