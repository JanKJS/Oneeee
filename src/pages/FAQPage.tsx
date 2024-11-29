import React from 'react';

export default function FAQPage() {
  return (
    <div className="card p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">1. What is CryptoWatcher?</h2>
          <p>
            CryptoWatcher is a platform designed to list and showcase cryptocurrencies and exchanges. 
            We aim to provide accurate, up-to-date information to help users explore the crypto market.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">2. How can I list my cryptocurrency or exchange on CryptoWatcher?</h2>
          <p>To list your cryptocurrency or exchange, follow these steps:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Complete the listing form with all required details.</li>
            <li>Pay the listing fee of $99 USD or its equivalent in cryptocurrency to our designated wallet.</li>
            <li>Submit proof of payment, and our team will review and publish your listing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">3. What is the listing fee?</h2>
          <p>
            The listing fee is $99 USD or the equivalent amount in cryptocurrency. This fee covers processing 
            and reviewing your listing and helps maintain the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">4. Can I pay the listing fee in any cryptocurrency?</h2>
          <p>
            Yes, you can pay the equivalent of $99 USD in most major cryptocurrencies. Details for supported 
            cryptocurrencies and our wallet address will be provided during the payment process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">5. Are listing fees refundable?</h2>
          <p>
            No, listing fees are non-refundable unless there is an error or system failure on our part. 
            Please double-check all details before making your payment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">6. How long does it take for my listing to appear on the platform?</h2>
          <p>
            Once payment is verified, listings are usually published within 1-3 business days. If additional 
            information is needed, we will contact you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">7. What kind of cryptocurrencies or exchanges can I list?</h2>
          <p className="mb-4">We accept listings for legitimate cryptocurrencies and exchanges. However, we reserve the right to reject submissions that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate laws or regulations.</li>
            <li>Lack sufficient information or transparency.</li>
            <li>Are associated with fraudulent or unethical practices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">8. Can I update or edit my listing?</h2>
          <p>
            Yes, you can request updates to your listing by contacting our support team. Additional fees may 
            apply for significant changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">9. How do I ensure my cryptocurrency is listed successfully?</h2>
          <p>To improve your chances of a successful listing:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide complete and accurate details in the listing form.</li>
            <li>Ensure timely payment of the listing fee.</li>
            <li>Respond promptly to any follow-up requests from our team.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">10. What happens if my listing is rejected?</h2>
          <p>
            If your listing is rejected, we will notify you with the reason. Rejected listings may not qualify 
            for a refund unless the rejection is due to an error on our part.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">11. How secure is my information?</h2>
          <p>
            Your information is protected under our Privacy Policy. We use industry-standard measures to secure 
            your data and ensure it is used responsibly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">12. Can I advertise on CryptoWatcher?</h2>
          <p>
            Yes, we offer advertising opportunities for cryptocurrencies, exchanges, and related services. 
            Contact us at info@cryptowatcher.org for more details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">13. Who can I contact for support?</h2>
          <p>
            For support, please email us at info@cryptowatcher.org. Our team is available to assist you with 
            any questions or concerns.
          </p>
        </section>
      </div>
    </div>
  );
}