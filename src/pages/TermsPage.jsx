import Header from "../components/Header";
import Footer from "../components/Footer";

import DividerImage from '../components/Divider';
import OurServicesDiv from '../components/OurServices';

const TermsAndConditions= () => {
  return (
    <>
    <section className="min-h-screen pt-30">
    <Header />
      <section className="px-5">
        <div className="text-center">
          <h2>Terms of Use</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p>Effective Date: 4th Octoberr 2025</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around">
          <OurServicesDiv />
          <OurServicesDiv />
          <OurServicesDiv />
          <OurServicesDiv />
        </div>

      </section>
      </section>
      <Footer/>
    </>
  );
};

export default TermsAndConditions;
