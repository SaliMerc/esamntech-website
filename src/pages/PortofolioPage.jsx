import Header from "../components/Header";
import Footer from "../components/Footer";

import DividerImage from '../components/Divider';

import PortfolioData from '../data/portofolio-data.json';
import PortofolioDiv from '../components/Portofolio';

const Portofolio = () => {
  return (
    <>
      <section className="min-h-screen py-30">
        <Header />
        <section className="px-5 mt-7">
          <div className="text-center space-y-3 mb-3">
            <h2>Our Works</h2>
            <div className="flex justify-center">
              <DividerImage />
            </div>
            <p className="heading-paragraphs mb-5">Here are some of our previous works</p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
            {PortfolioData.map((item, index) => (
              <PortofolioDiv
                key={index}
                title={item.title}
                text={item.text}
                to={item.to}
              />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Portofolio;