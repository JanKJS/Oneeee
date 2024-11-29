import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';

interface CryptoFormData {
  name: string;
  symbol: string;
  contractAddress: string;
  network: string;
  description: string;
  website: string;
  whitepaper: string;
  twitter: string;
  telegram: string;
  github: string;
  email: string;
  marketCap: string;
  circulatingSupply: string;
  totalSupply: string;
  launchDate: string;
  agree: boolean;
}

export default function CryptoListingFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CryptoFormData>({
    name: '',
    symbol: '',
    contractAddress: '',
    network: '',
    description: '',
    website: '',
    whitepaper: '',
    twitter: '',
    telegram: '',
    github: '',
    email: '',
    marketCap: '',
    circulatingSupply: '',
    totalSupply: '',
    launchDate: '',
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

      <h1 className="text-3xl font-bold text-text-primary mb-6">List Your Cryptocurrency</h1>

      <div className="mb-8 p-4 bg-background-light/50 backdrop-blur-sm rounded-lg border border-background-lighter">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Important Information for Listing Cryptocurrencies
            </h3>
            <p className="text-text-secondary mb-3">
              We welcome you to list your cryptocurrency on our platform. Please note that a listing fee applies 
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
                Cryptocurrency Name *
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
                placeholder="e.g., Bitcoin"
              />
            </div>

            <div>
              <label htmlFor="symbol" className="block text-sm font-medium text-text-primary mb-2">
                Symbol *
              </label>
              <input
                type="text"
                id="symbol"
                name="symbol"
                required
                value={formData.symbol}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., BTC"
              />
            </div>

            <div>
              <label htmlFor="contractAddress" className="block text-sm font-medium text-text-primary mb-2">
                Contract Address *
              </label>
              <input
                type="text"
                id="contractAddress"
                name="contractAddress"
                required
                value={formData.contractAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 0x..."
              />
            </div>

            <div>
              <label htmlFor="network" className="block text-sm font-medium text-text-primary mb-2">
                Network *
              </label>
              <select
                id="network"
                name="network"
                required
                value={formData.network}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
              >
                <option value="">Select network</option>
                <option value="ethereum">Ethereum</option>
                <option value="bsc">Binance Smart Chain</option>
                <option value="polygon">Polygon</option>
                <option value="solana">Solana</option>
                <option value="avalanche">Avalanche</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Project Details</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                Project Description *
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
                placeholder="Describe your project..."
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-text-primary mb-2">
                Website URL *
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="whitepaper" className="block text-sm font-medium text-text-primary mb-2">
                Whitepaper URL
              </label>
              <input
                type="url"
                id="whitepaper"
                name="whitepaper"
                value={formData.whitepaper}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="https://"
              />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Social Media & Contact</h2>
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

            <div>
              <label htmlFor="github" className="block text-sm font-medium text-text-primary mb-2">
                GitHub URL
              </label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="https://github.com/"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="contact@example.com"
              />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Token Metrics</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="marketCap" className="block text-sm font-medium text-text-primary mb-2">
                Market Cap (USD) *
              </label>
              <input
                type="text"
                id="marketCap"
                name="marketCap"
                required
                value={formData.marketCap}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 1000000"
              />
            </div>

            <div>
              <label htmlFor="circulatingSupply" className="block text-sm font-medium text-text-primary mb-2">
                Circulating Supply *
              </label>
              <input
                type="text"
                id="circulatingSupply"
                name="circulatingSupply"
                required
                value={formData.circulatingSupply}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 1000000"
              />
            </div>

            <div>
              <label htmlFor="totalSupply" className="block text-sm font-medium text-text-primary mb-2">
                Total Supply *
              </label>
              <input
                type="text"
                id="totalSupply"
                name="totalSupply"
                required
                value={formData.totalSupply}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                placeholder="e.g., 1000000"
              />
            </div>

            <div>
              <label htmlFor="launchDate" className="block text-sm font-medium text-text-primary mb-2">
                Launch Date *
              </label>
              <input
                type="date"
                id="launchDate"
                name="launchDate"
                required
                value={formData.launchDate}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
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