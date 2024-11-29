import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';

interface ExchangeFormData {
  name: string;
  url: string;
  description: string;
  yearEstablished: string;
  country: string;
  supportedCurrencies: string;
  tradingPairs: string;
  volume24h: string;
  fees: string;
  kyc: boolean;
  margin: boolean;
  futures: boolean;
  contactName: string;
  contactEmail: string;
  contactPosition: string;
  twitter: string;
  telegram: string;
  agree: boolean;
}

export default function ExchangeListingFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ExchangeFormData>({
    name: '',
    url: '',
    description: '',
    yearEstablished: '',
    country: '',
    supportedCurrencies: '',
    tradingPairs: '',
    volume24h: '',
    fees: '',
    kyc: false,
    margin: false,
    futures: false,
    contactName: '',
    contactEmail: '',
    contactPosition: '',
    twitter: '',
    telegram: '',
    agree: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your submission! We will review your application and contact you soon.');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate('/listing')}
        className="flex items-center gap-2 text-text-secondary hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to listing options
      </button>

      <h1 className="text-3xl font-bold text-text-primary mb-6">List Your Exchange</h1>

      <div className="mb-8 p-4 bg-background-light/50 backdrop-blur-sm rounded-lg border border-background-lighter">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Important Information for Listing Exchanges
            </h3>
            <p className="text-text-secondary mb-3">
              We welcome you to list your exchange on our platform. Please note that a listing fee applies 
              to all submissions.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>• Fee Amount: $99 USD or the equivalent value in cryptocurrency.</li>
              <li>• Payment Method: The fee must be paid in cryptocurrency to our designated wallet.</li>
              <li>• This fee is mandatory for processing and finalizing the listing.</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Exchange Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., Binance"
              />
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium text-text-primary mb-2">
                Exchange URL *
              </label>
              <input
                type="url"
                id="url"
                name="url"
                required
                value={formData.url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                Exchange Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary resize-none"
                placeholder="Describe your exchange..."
              />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Exchange Details</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="yearEstablished" className="block text-sm font-medium text-text-primary mb-2">
                Year Established *
              </label>
              <input
                type="number"
                id="yearEstablished"
                name="yearEstablished"
                required
                min="2009"
                max={new Date().getFullYear()}
                value={formData.yearEstablished}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 2017"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-2">
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., United States"
              />
            </div>

            <div>
              <label htmlFor="supportedCurrencies" className="block text-sm font-medium text-text-primary mb-2">
                Number of Supported Currencies *
              </label>
              <input
                type="number"
                id="supportedCurrencies"
                name="supportedCurrencies"
                required
                min="1"
                value={formData.supportedCurrencies}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 100"
              />
            </div>

            <div>
              <label htmlFor="tradingPairs" className="block text-sm font-medium text-text-primary mb-2">
                Number of Trading Pairs *
              </label>
              <input
                type="number"
                id="tradingPairs"
                name="tradingPairs"
                required
                min="1"
                value={formData.tradingPairs}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 300"
              />
            </div>

            <div>
              <label htmlFor="volume24h" className="block text-sm font-medium text-text-primary mb-2">
                24h Trading Volume (USD) *
              </label>
              <input
                type="text"
                id="volume24h"
                name="volume24h"
                required
                value={formData.volume24h}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 1000000"
              />
            </div>

            <div>
              <label htmlFor="fees" className="block text-sm font-medium text-text-primary mb-2">
                Trading Fees Description *
              </label>
              <textarea
                id="fees"
                name="fees"
                required
                value={formData.fees}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary resize-none"
                placeholder="Describe your fee structure..."
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="kyc"
                  name="kyc"
                  checked={formData.kyc}
                  onChange={handleChange}
                />
                <label htmlFor="kyc" className="text-text-primary">KYC Required</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="margin"
                  name="margin"
                  checked={formData.margin}
                  onChange={handleChange}
                />
                <label htmlFor="margin" className="text-text-primary">Margin Trading Available</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="futures"
                  name="futures"
                  checked={formData.futures}
                  onChange={handleChange}
                />
                <label htmlFor="futures" className="text-text-primary">Futures Trading Available</label>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-text-primary mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="Full name"
              />
            </div>

            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-text-primary mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                required
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="contactPosition" className="block text-sm font-medium text-text-primary mb-2">
                Position/Title *
              </label>
              <input
                type="text"
                id="contactPosition"
                name="contactPosition"
                required
                value={formData.contactPosition}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., CEO"
              />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Social Media</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="twitter" className="block text-sm font-medium text-text-primary mb-2">
                Twitter URL
              </label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="https://twitter.com/"
              />
            </div>

            <div>
              <label htmlFor="telegram" className="block text-sm font-medium text-text-primary mb-2">
                Telegram URL
              </label>
              <input
                type="url"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="https://t.me/"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            required
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="agree" className="text-sm text-text-secondary">
            By submitting this form, you agree to our terms and conditions. We will review your application 
            and contact you within 2-3 business days.
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg 
                   transition-colors"
        >
          Submit Listing Request
        </button>
      </form>
    </div>
  );
}