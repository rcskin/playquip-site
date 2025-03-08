// // app/(site)/Designs/page.js

// import Image from 'next/image';

// export const metadata = {
//   title: 'Playground Designs',
// };

// export default function Designs() {
//   const images = [
//     { src: '/images/designs/design1.jpg', alt: 'Doddinghurst Play Area' },
//     { src: '/images/designs/design2.jpg', alt: 'Ryton Pools Adventure' },
//     { src: '/images/designs/design3.jpg', alt: 'High Woods Adventure' },
//     { src: '/images/designs/design4.jpg', alt: 'Mad Hatters Castle' },
//     { src: '/images/designs/design5.jpg', alt: 'Castle Park Play Area' },
//     // Add more images as needed
//   ];

//   return (
//     <main className="min-h-screen bg-base-200">
//       <section className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">
//           Playground Designs
//         </h1>
//         <p className="text-lg leading-relaxed mb-12 text-center">
//           At Playquip Leisure, we believe that a successful play experience begins with understanding our customers' visions. We collaborate closely with you to create innovative designs that reflect your specific desires for your play area.
//           <br /><br />
//           While many competitors connect individual pieces of equipment with paths, we focus on designing cohesive play environments where every element complements the others. This approach results in more engaging and unified play areas.
//           <br /><br />
//           Our concepts are developed in partnership with our clients to create unique, robust play spaces. These areas not only promote physical activity but also stimulate children's minds.
//           <br /><br />
//           <strong>Body and mind in harmony.</strong>
//         </p>
//         {/* Carousel */}
//         <div className="carousel rounded-box">
//           {images.map((image, index) => (
//             <div key={index} className="carousel-item">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={200}
//                 height={200}
//                 className="rounded-box transform transition-transform duration-200 hover:scale-105 shadow-lg"
//               />
//               <p className="mt-2 text-center text-sm">{image.alt}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
// app/(site)/Designs/page.js
import Image from "next/image";

export const metadata = {
  title: "Playground Designs - Playground Ltd",
};

export default function Designs() {
  const images = [
    { src: "/images/designs/design1.jpg", alt: "Doddinghurst Play Area" },
    { src: "/images/designs/design2.jpg", alt: "Ryton Pools Adventure" },
    { src: "/images/designs/design3.jpg", alt: "High Woods Adventure" },
    { src: "/images/designs/design4.jpg", alt: "Mad Hatters Castle" },
    { src: "/images/designs/design5.jpg", alt: "Castle Park Play Area" },
    // Add more images as needed
  ];

  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-950 mb-8">
          Playground Designs
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          At Playground Ltd, we believe that a successful play experience begins
          with understanding our customers' visions. We collaborate closely to
          create innovative designs that bring play areas to life.
        </p>
      </section>


            {/* Section 3: Bringing Play to Life */}
            <section className="bg-blue-950 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-gray-300 mb-4">
              Bringing Play to Life
            </h2>
            <p className="text-xl">
              Our playground designs aren’t just about equipment—they tell
              stories, spark curiosity, and encourage exploration. We work
              closely with our clients to ensure each design is tailored to
              their needs.
            </p>
          </div>
          {/* Image (Corrected Height) */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-[400px]">
              <Image
                src="/images/designs/bringing-play-to-life.jpg"
                alt="Bringing Play to Life"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Carousel */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-bold text-center text-blue-950 mb-4">
          Explore Our Playground Designs
        </h2>
        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-8">
          Our designs combine physical activity with creative storytelling,
          ensuring that every play space is engaging, fun, and inspiring. Browse
          through our latest concepts below.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-x-auto snap-x snap-mandatory px-4">
            <div className="flex space-x-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-full md:w-2/3 lg:w-1/3 snap-start relative group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                  {/* Overlay with Caption */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                    <p className="text-white text-center px-2 text-lg font-semibold">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-base-200 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-base-200 to-transparent pointer-events-none"></div>
        </div>
      </section>

    </main>
  );
}
