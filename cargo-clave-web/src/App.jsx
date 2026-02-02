import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import ResourcesHub from './pages/ResourcesHub';
import ResourceDetail from './pages/ResourceDetail';
import Contact from './pages/Contact';

// Solutions Sub-pages
import TradeManagement from './pages/solutions/TradeManagement';
import CargoOperations from './pages/solutions/CargoOperations';
import SurveyManagement from './pages/solutions/SurveyManagement';

// Stakeholder Sub-pages
import EnterpriseOperations from './pages/stakeholders/EnterpriseOperations';
import FreightForwarders from './pages/stakeholders/FreightForwarders';
import ImportersExporters from './pages/stakeholders/ImportersExporters';
import LogisticsTransport from './pages/stakeholders/LogisticsTransport';
import SurveyCompanies from './pages/stakeholders/SurveyCompanies';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/trade-management" element={<TradeManagement />} />
            <Route path="/solutions/cargo-operations" element={<CargoOperations />} />
            <Route path="/solutions/survey-management" element={<SurveyManagement />} />

            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<ResourcesHub />} />
            <Route path="/resources/:slug" element={<ResourceDetail />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/who-we-serve/enterprise-operations" element={<EnterpriseOperations />} />
            <Route path="/who-we-serve/freight-forwarders" element={<FreightForwarders />} />
            <Route path="/who-we-serve/importers-exporters" element={<ImportersExporters />} />
            <Route path="/who-we-serve/logistics-transport" element={<LogisticsTransport />} />
            <Route path="/who-we-serve/survey-companies" element={<SurveyCompanies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
