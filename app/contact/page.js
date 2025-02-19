// app/(site)/Contact/page.js

export const metadata = {
    title: 'Contact Us - Playquip Leisure',
  };
  
  export default function Contact() {
    return (
      <main className="min-h-screen bg-base-200">
        {/* Contact Section */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information and Map */}
            <div className="space-y-4">
              {/* Contact Card */}
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title">Our Office</h2>
                  <p>
                    Playquip Leisure Ltd.<br />
                    Unit 4 - Heath Industrial Estate<br /> 
                    Cockaynes Lane - Arlesford<br />
                    Essex CO7 8BZ, UK<br />
                    Phone: +44 01206 825869<br />
                    Email: info@playquip.co.uk
                  </p>
                </div>
              </div>
              {/* Google Map */}
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.0398719041013!2d0.9865325840010251!3d51.86022842276245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d90fda8e419167%3A0x1c8d2427bab1bcb6!2sPlayquip%20UK%20Ltd!5e0!3m2!1sen!2suk!4v1727966115173!5m2!1sen!2suk"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input type="text" placeholder="Name" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input type="email" placeholder="Email" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Your message"
                    rows="6"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
  