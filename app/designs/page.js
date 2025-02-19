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
import Image from 'next/image';

export const metadata = {
  title: 'Playground Designs - Playground Ltd',
};

export default function Designs() {
  const images = [
    { src: '/images/designs/design1.jpg', alt: 'Doddinghurst Play Area' },
    { src: '/images/designs/design2.jpg', alt: 'Ryton Pools Adventure' },
    { src: '/images/designs/design3.jpg', alt: 'High Woods Adventure' },
    { src: '/images/designs/design4.jpg', alt: 'Mad Hatters Castle' },
    { src: '/images/designs/design5.jpg', alt: 'Castle Park Play Area' },
    // Add more images as needed
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <section className="mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Playground Designs
        </h1>
        <p className="text-lg leading-relaxed mb-12 text-center">
          At Playground Ltd, we believe that a successful play experience begins with understanding our customers' visions. We collaborate closely with you to create innovative designs that reflect your specific desires for your play area.
          <br /><br />
          While many competitors connect individual pieces of equipment with paths, we focus on designing cohesive play environments where every element complements the others. This approach results in more engaging and unified play areas.
          <br /><br />
          Our concepts are developed in partnership with our clients to create unique, robust play spaces. These areas not only promote physical activity but also stimulate children's minds.
          <br /><br />
          <strong>Body and mind in harmony.</strong>
        </p>
      </section>

      {/* Carousel with Padding and Scroll Indicators */}
      <div className="relative">
        <div className="overflow-x-auto snap-x snap-mandatory px-4">
          <div className="flex space-x-4">
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
                  className="rounded-box w-full h-auto"
                />
                {/* Overlay with Caption */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-box"
                >
                  <p className="text-white text-center px-2">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-base-200 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-base-200 to-transparent pointer-events-none"></div>
      </div>
    </main>
  );
}
