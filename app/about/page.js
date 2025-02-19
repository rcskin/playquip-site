import Image from "next/image";

export const metadata = {
  title: "About Us - Playquip Leisure",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-950 mb-8">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          At Playquip Leisure, we bring imagination to life by designing and
          building bespoke play areas that inspire joy, creativity, and
          connection.
        </p>
      </section>

      {/* Section 1: Who We Are */}
      <section className="bg-blue-950 text-gray-300 py-12">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/images/products/site-infrastructure.jpg" // Replace with image client wants
                alt="Who We Are"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-gray-300 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-300 text-xl">
              Playquip Leisure is a proudly independent British company. Our
              team of experienced professionals is committed to crafting
              high-quality, safe, and innovative play areas. We specialize in
              bespoke playground solutions, turning client aspirations into
              tangible designs that captivate and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Design Philosophy
      <section className="container mx-auto h-96 px-4 py-12">
        <h2 className="text-5xl font-bold text-center text-blue-950 mb-4">
          Our Design Philosophy
        </h2>
        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto">
          We believe that every play area should be unique, reflecting the needs
          and imagination of the community it serves. Our designs are crafted
          with safety, sustainability, and fun in mind. From bold concepts to
          carefully selected materials, we strive to create spaces that foster
          creativity and exploration.
        </p>
      </section> */}
      {/* Section 2: Our Design Philosophy */}
<section className="container mx-auto px-4 py-12">
  <h2 className="text-5xl font-bold text-center text-blue-950 mb-4">
    Our Design Philosophy
  </h2>
  <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-8">
    We believe that every play area should be unique, reflecting the needs
    and imagination of the community it serves. Our designs are crafted
    with safety, sustainability, and fun in mind. From bold concepts to
    carefully selected materials, we strive to create spaces that foster
    creativity and exploration.
  </p>

  {/* Images Row */}
  <div className="grid grid-cols-3 sm:gap-6 lg:gap-2">
    {/* Safety */}
    <div className="flex justify-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <Image
          src="/images/safety.png"
          alt="Safety"
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* Sustainability */}
    <div className="flex justify-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <Image
          src="/images/sustainability.png"
          alt="Sustainability"
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* Fun */}
    <div className="flex justify-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <Image
          src="/images/fun.png"
          alt="Fun"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>


      {/* Section 3: What We Offer */}
      <section className="bg-blue-950 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-gray-300 mb-4">
              What We Offer
            </h2>
            <p className="text-xl">
              While we offer a standard range of playground products to suit
              most needs, our true expertise lies in creating bespoke designs.
              By working closely with clients, we transform their dreams into
              unique, innovative play experiences. From conception to delivery,
              we are with you every step of the way.
            </p>
          </div>
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/images/products/slides.jpg" // Replace with image client wants to use
                alt="What We Offer"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Explore Our Work */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 items-center">
        {/* Image */}
        <div className="md:col-span-1">
          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/images/hero-picture.jpg" // Replace with different image client wants
              alt="Explore Our Work"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Text */}
        <div className="md:col-span-2">
          <h2 className="text-5xl font-bold text-blue-950 mb-4">
            Explore Our Work
          </h2>
          <p className="text-gray-700 text-xl">
            Visit our Design Concepts page to see our creations. These include
            bespoke play areas that have been brought to life, as well as
            visionary designs awaiting their perfect home. Be inspired by the
            possibilities of what we can create together.
          </p>
        </div>
      </section>
    </main>
  );
}
