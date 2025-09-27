
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import ServicePage from './pages/ServicePage';
import IndustriesHub from './pages/IndustriesHub';
import IndustryPage from './pages/IndustryPage';
import InsightsHub from './pages/InsightsHub';
import InsightPage from './pages/InsightPage';
import ClientResultsHub from './pages/ClientResultsHub';
import ClientResultPage from './pages/ClientResultPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-obsidian">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/industries" element={<IndustriesHub />} />
            <Route path="/industries/:slug" element={<IndustryPage />} />
            <Route path="/insights" element={<InsightsHub />} />
            <Route path="/insights/:slug" element={<InsightPage />} />
            <Route path="/client-results" element={<ClientResultsHub />} />
            <Route path="/client-results/:slug" element={<ClientResultPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
