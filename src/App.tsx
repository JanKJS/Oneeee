import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Coins, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavStats from './components/NavStats';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import MarketCapPage from './pages/MarketCapPage';
import FearAndGreedPage from './pages/FearAndGreedPage';
import GainersLosersPage from './pages/GainersLosersPage';
import VolumePage from './pages/VolumePage';
import ExchangesPage from './pages/ExchangesPage';
import DominancePage from './pages/DominancePage';
import GasTrackerPage from './pages/GasTrackerPage';
import CryptoOverviewPage from './pages/CryptoOverviewPage';
import ListingFormPage from './pages/ListingFormPage';
import CryptoListingFormPage from './pages/CryptoListingFormPage';
import ExchangeListingFormPage from './pages/ExchangeListingFormPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import SupportUsPage from './pages/SupportUsPage';
import SearchPage from './pages/SearchPage';
import CookieConsent from './components/CookieConsent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-custom from-background-gradient-from to-background-gradient-to flex flex-col">
          <nav className="bg-background-light/50 backdrop-blur-sm border-b border-background-lighter">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-start">
                  <Link 
                    to="/listing" 
                    className="bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors
                             sm:px-4 sm:py-2 p-2"
                  >
                    <span className="hidden sm:inline">Get Listed</span>
                    <Coins className="w-5 h-5 sm:hidden" />
                  </Link>
                </div>
                
                <Link to="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                  <Coins className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold text-text-primary">CryptoWatcher</span>
                </Link>

                <div className="flex-1 flex items-center justify-end">
                  <Link to="/search" className="text-text-tertiary hover:text-text-primary">
                    <Search className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <NavStats />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/coins/:coinId" element={<CoinPage />} />
              <Route path="/market-cap" element={<MarketCapPage />} />
              <Route path="/fear-and-greed" element={<FearAndGreedPage />} />
              <Route path="/gainers-losers" element={<GainersLosersPage />} />
              <Route path="/volume" element={<VolumePage />} />
              <Route path="/exchanges" element={<ExchangesPage />} />
              <Route path="/dominance" element={<DominancePage />} />
              <Route path="/gas" element={<GasTrackerPage />} />
              <Route path="/crypto-overview" element={<CryptoOverviewPage />} />
              <Route path="/listing" element={<ListingFormPage />} />
              <Route path="/listing/cryptocurrency" element={<CryptoListingFormPage />} />
              <Route path="/listing/exchange" element={<ExchangeListingFormPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/support-us" element={<SupportUsPage />} />
            </Routes>
          </main>

          <Footer />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}