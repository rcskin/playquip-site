export const metadata = {
    title: 'Terms & Conditions - Playquip Leisure',
  };
  
  export default function TermsAndConditions() {
    return (
      <main className="min-h-screen bg-base-200">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
          <div className="bg-base-100 shadow-lg p-6 rounded-lg">
            <p>
              Welcome to Playquip Leisure. These terms and conditions outline the rules and regulations 
              for the use of our website and services.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
            <p>
              By accessing this website, you accept these terms and conditions in full. Do not continue 
              to use Playquip Leisure’s website if you do not accept all the terms and conditions stated 
              on this page.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">2. Intellectual Property</h2>
            <p>
              Unless otherwise stated, Playquip Leisure and/or its licensors own the intellectual property 
              rights for all material on this website. All intellectual property rights are reserved.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">3. Restrictions</h2>
            <p>You are specifically restricted from:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Publishing any website material in any media without permission.</li>
              <li>Selling, sublicensing, or commercializing any website material.</li>
              <li>Using this website in any way that is damaging.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">4. Your Privacy</h2>
            <p>Please read our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a>.</p>
  
            <h2 className="text-2xl font-semibold mt-6">5. Changes to Terms</h2>
            <p>We may revise these terms from time to time. By using this website, you agree to be bound by the current version of these terms and conditions.</p>
  
            <h2 className="text-2xl font-semibold mt-6">6. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@playquip.co.uk" className="text-blue-500 underline">info@playquip.co.uk</a>.</p>
          </div>
        </section>
      </main>
    );
  }