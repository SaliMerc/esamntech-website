import Header from "../components/Header";
import Footer from "../components/Footer";

import DividerImage from '../components/Divider';
import LegalItemsDiv from '../components/LegalComponent';

import legalData from '../data/privacy-data.json';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="min-h-screen pt-30">
        <Header />
        <section className="px-5">
          <div className="text-center px-5 mb-3 space-y-3">
            <h2>Privacy Policy</h2>
            <div className="flex justify-center">
              <DividerImage />
            </div>
            <p className="md:my-5 heading-paragraphs">Effective Date:4th October 2025</p>
          </div>

          <div className="flex flex-col justify-left mx-auto px-4 sm:px-6 lg:px-4 max-w-7xl">
            <p>E-Samn Labs (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website e-samnlab.me or our services.</p>

            <LegalItemsDiv clauses={legalData.clauses} />

          </div>

        </section>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
