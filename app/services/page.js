import Image from "next/image";

export const metadata = {
  title: "Our Services - Playquip Leisure",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-950 mb-8">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          At Playquip Leisure, we provide end-to-end playground solutions, from
          initial design and manufacturing to installation and maintenance.
        </p>
      </section>

      {/* Section 1: Design & Consultation */}
      <section className="bg-blue-950 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-96">
               <Image
                src="/images/designs/design-consultation.jpg" 
                alt="Design & Consultation"
                fill
                className="object-cover rounded-lg shadow-lg"
              /> 
            </div>
          </div>
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-gray-300 mb-4">
              Design & Consultation
            </h2>
            <p className="text-xl">
              Our expert team works with you to create bespoke playground
              solutions tailored to your needs. We ensure that each design
              maximizes space, budget, and safety, fostering creative and active
              play.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Manufacturing & Installation */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-blue-950 mb-4">
              Manufacturing & Installation
            </h2>
            <p className="text-xl text-gray-700">
              We manufacture high-quality, durable playground equipment that
              meets stringent safety regulations. Our skilled installation team
              ensures that every piece is securely placed and ready for use.
            </p>
          </div>
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-96">
               <Image
                src="/images/designs/manufacturing-installation.jpg" 
                alt="Manufacturing & Installation"
                fill
                className="object-cover rounded-lg shadow-lg"
              /> 
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Inspection & Maintenance */}
      <section className="bg-blue-950 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-96">
               <Image
                src="/images/designs/inspection-maintenance.jpg" 
                alt="Inspection & Maintenance"
                fill
                className="object-cover rounded-lg shadow-lg"
              /> 
            </div>
          </div>
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-gray-300 mb-4">
              Inspection & Maintenance
            </h2>
            <p className="text-xl">
              Safety is our priority. We offer professional inspection services
              and ongoing maintenance plans to keep playgrounds in top
              condition, ensuring they remain safe and enjoyable for years.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Bespoke Playground Solutions */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold text-blue-950 mb-4">
              Bespoke Playground Solutions
            </h2>
            <p className="text-xl text-gray-700">
              We specialize in custom playground solutions, bringing innovative
              ideas to life. Our team collaborates with clients to design unique
              play spaces that spark imagination and encourage active play.
            </p>
          </div>
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-72 md:h-96">
               <Image
                src="/images/designs/bespoke-playground.jpg" 
                alt="Bespoke Playground Solutions"
                fill
                className="object-cover rounded-lg shadow-lg"
              /> 
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Get in Touch */}
      <section className="bg-blue-950 text-gray-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-300 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Interested in our services?{" "}
            <a href="/contact" className="text-yellow-400 underline">
              Contact us today
            </a>{" "}
            to discuss your project and bring your vision to life.
          </p>
        </div>
      </section>
    </main>
  );
}