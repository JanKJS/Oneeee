import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="card p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using CryptoWatcher, you confirm that you:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Have the authority to agree to these Terms on behalf of yourself or your organization.</li>
            <li>Agree to comply with all applicable laws and regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">2. Services Provided</h2>
          <p>
            CryptoWatcher offers tools and services for listing cryptocurrencies, exchanges, and related content. 
            We reserve the right to modify or discontinue any feature, temporarily or permanently, without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">3. Fees and Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Listing Fee: A $99 USD fee (or its cryptocurrency equivalent) is required to list cryptocurrencies 
              or exchanges. Payments must be made in cryptocurrency to our designated wallet.
            </li>
            <li>Fees are non-refundable except in cases of error or system failure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">4. User Responsibilities</h2>
          <p className="mb-4">When using CryptoWatcher, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Provide accurate and up-to-date information for listings.</li>
            <li>Not engage in fraudulent, illegal, or unethical activities.</li>
            <li>Safeguard your account credentials and wallet security.</li>
          </ul>
          <p className="mb-4">You agree not to use our platform for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Spamming, phishing, or other malicious activities.</li>
            <li>Posting content that is unlawful, misleading, or harmful.</li>
            <li>Violating intellectual property rights of third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            All content, trademarks, logos, and intellectual property on CryptoWatcher are owned by us or 
            licensed to us. You may not reproduce, modify, or distribute any content without prior written consent.
          </p>
          <p>
            Listings remain the property of their respective owners, but you grant CryptoWatcher a license to 
            display, promote, and archive them as part of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">CryptoWatcher is provided "as is" without warranties of any kind. We are not responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Losses arising from listing inaccuracies or user actions.</li>
            <li>Technical interruptions, delays, or errors in service.</li>
            <li>Unauthorized access to your account or wallet.</li>
          </ul>
          <p>
            To the extent permitted by law, CryptoWatcher's liability is limited to the amount paid by you for 
            services in the past 12 months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">7. Account Suspension and Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms or engage in 
            activities harmful to our platform or users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">8. Privacy</h2>
          <p>
            Your use of CryptoWatcher is also governed by our Privacy Policy, which outlines how we collect, 
            use, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">9. Third-Party Services</h2>
          <p>
            CryptoWatcher may link to third-party tools or websites. We do not endorse or assume responsibility 
            for their content, services, or policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">10. Modifications to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will take effect upon posting the 
            updated Terms on our website. Continued use of CryptoWatcher constitutes your acceptance of the 
            revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">11. Contact Us</h2>
          <p>
            For questions or concerns about these Terms, please contact us:<br />
            Email: info@cryptowatcher.org
          </p>
        </section>
      </div>
    </div>
  );
}