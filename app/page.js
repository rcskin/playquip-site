// app/page.js

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div
        data-testid="hero-section"
        className="hero min-h-screen"
        style={{ backgroundImage: `url('/images/hero-picture.jpg')` }}
      >
        <div data-testid="hero-overlay" className="hero-overlay bg-opacity-60"></div>
        <div data-testid="hero-content" className="hero-content text-center text-neutral-content">
          <div data-testid="hero-content-container" className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Playquip</h1>
            <p className="mb-5">
              Premium quality playground equipment for kids of all ages.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section data-testid="info-section" className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            About Playquip Leisure
          </h2>
          <p className="text-lg leading-relaxed">
            Playquip Leisure is a British company specializing in the design,
            construction, and installation of high-quality play areas. While we
            offer a standard product range, our true expertise lies in creating
            custom, innovative play experiences tailored to each client's vision.
            Explore our Design Concepts page to see some of our unique bespoke
            projects, from those brought to life to those awaiting the perfect site.
          </p>
        </div>
      </section>
    </main>
  );
}

