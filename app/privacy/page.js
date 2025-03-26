export const metadata = {
    title: 'Privacy Policy - Playquip Leisure',
  };
  
  export default function PrivacyPolicy() {
    return (
      <main className="min-h-screen bg-base-200">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          <div className="bg-base-100 shadow-lg p-6 rounded-lg">
            <p>
              At Playquip Leisure, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Personal details such as name, email, and phone number when you contact us.</li>
              <li>Website usage data through cookies and analytics.</li>
              <li>Information provided when signing up for our services.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
            <p>Your data may be used for the following purposes:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Providing and managing our services.</li>
              <li>Improving our website and customer experience.</li>
              <li>Communicating with you regarding inquiries or service updates.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">3. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance user experience. You can manage your cookie preferences 
              through your browser settings.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">4. Third-Party Data Sharing</h2>
            <p>
              We do not sell or rent personal data to third parties. However, we may share necessary 
              information with service providers for business operations.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
            <p>
              We take appropriate security measures to protect your personal data from unauthorized access, 
              loss, or misuse.
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Request access to your personal data.</li>
              <li>Request correction or deletion of inaccurate data.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, please contact us at 
              <a href="mailto:info@playquip.co.uk" className="text-blue-500 underline"> info@playquip.co.uk</a>.
            </p>
          </div>
        </section>
      </main>
    );
  }