import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="card p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-text-secondary">
        <p>
          At CryptoWatcher, your privacy is a top priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By accessing or using CryptoWatcher, you agree to this policy.
        </p>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
          
          <h3 className="text-lg font-semibold text-text-primary mb-2">1.1 Personal Information</h3>
          <p className="mb-4">We may collect personally identifiable information when you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Register an account (e.g., name, email address, and contact details).</li>
            <li>Communicate with us (e.g., customer support inquiries).</li>
            <li>Complete transactions (e.g., payment details for listing fees).</li>
          </ul>

          <h3 className="text-lg font-semibold text-text-primary mb-2">1.2 Non-Personal Information</h3>
          <p className="mb-4">We may collect non-identifiable information, such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP address and browser type.</li>
            <li>Usage data and analytics, such as pages visited and session duration.</li>
          </ul>

          <h3 className="text-lg font-semibold text-text-primary mb-2">1.3 Cryptocurrency Transactions</h3>
          <p>
            To list a cryptocurrency or exchange on our platform, users must make payments via cryptocurrency. While we do not store sensitive wallet details, transaction records may be linked to your account for verification purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve our services.</li>
            <li>Process listings and verify payments.</li>
            <li>Respond to inquiries and provide support.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">3. Sharing and Disclosure</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. However, we may share information:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>With service providers to facilitate our operations (e.g., payment processors).</li>
            <li>When required by law or to protect our legal rights.</li>
            <li>In case of business transfers, such as a merger or acquisition.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">4. Data Security</h2>
          <p>
            We implement industry-standard measures to protect your data. However, no system can guarantee complete security. Users are responsible for safeguarding their accounts and wallets.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">5. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request a copy of data associated with your account.</li>
          </ul>
          <p>To exercise these rights, please contact us at info@cryptowatcher.org</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">6. Cookies and Tracking Technologies</h2>
          <p>
            CryptoWatcher uses cookies and similar technologies to enhance user experience and analyze site usage. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">7. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices or content. Please review their policies before providing personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">8. Updates to This Privacy Policy</h2>
          <p>
            CryptoWatcher reserves the right to modify this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">9. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:<br />
            Email: info@cryptowatcher.org
          </p>
        </section>
      </div>
    </div>
  );
}