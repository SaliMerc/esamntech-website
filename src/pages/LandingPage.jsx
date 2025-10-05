import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImage from '../assets/general-images/hero-background.svg';

import Button from '../components/Button';
import DividerImage from '../components/Divider';

import OurServicesDiv from '../components/OurServices';
import WhyUsDiv from '../components/WhyUs';

import PortfolioData from '../data/portofolio-data.json';
import PortofolioDiv from '../components/Portofolio';
import PricingDiv from '../components/Pricing';

import ContactForm from '../components/ContactForm';



const Home = () => {

  const location = useLocation();
  const latestPortfolioItems = PortfolioData.slice(0, 3);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <>
      <section id='home' className=" min-h-screen pt-30 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header />
        <div className="px-5 pt-3 text-center flex flex-col min-h-[90vh] justify-between pb-30">

          <div className="">
            <h1>Your Vision. <br className="md:hidden" /> Our Code. <br />Guaranteed Growth.</h1>
            <div>
              <p className="text-[1rem] md:text-[1.5rem] mt-6 md:mt-3">We partner with businesses to design and develop exceptional, scalable web and <br className="hidden md:block" /> mobile solutions that turn complex challenges into competitive advantages.</p>
            </div>

          </div>

          <div className="buttons flex gap-4 md:gap-7 justify-center">
            <Button text="Start Project Consultation" color="maroon" width="w-64" to="#contact" />
            <Button text="View Our Portfolio" color="beige" width="w-56" to="/portofolio" />
          </div>

        </div>
      </section>

      {/* services section */}
      <section className="px-5 mt-7" id='services'>
        <div className="text-center space-y-3 mb-3">
          <h2>Our Services</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="heading-paragraphs">Delivering the Digital Solutions Your Business Needs to Thrive—Not Just Survive.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around">
          <OurServicesDiv title='Business Websites' text='High-performance websites 
that convert visitors into leads and 
scale with your growth.' icon='/icons/globe-icon.svg' />
          <OurServicesDiv title='E-Commerce Stores' text='Secure, user-friendly platforms
 built for maximum online revenue 
and seamless transactions.' marginTop='5rem' icon='/icons/cart-icon.svg' />
          <OurServicesDiv title='Custom Web and 
Mobile Apps' text='Bespoke software solutions that 
streamline operations and give you 
a strong competitive edge.' icon='/icons/custom-web-icon.svg' />
          <OurServicesDiv title='Web Maintenance' text='Comprehensive plans that keep
 your platform fast, secure, and 
up-to-date, ensuring 
uninterrupted growth.' marginTop='5rem' icon='/icons/maintenance-icon.svg' />
        </div>

      </section>

      {/* why us section */}
      <section className="px-5 mt-7" id='why-us'>
        <div className="text-center mb-3 space-y-3">
          <h2>Why Choose Us</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="md:hidden heading-paragraphs mb-5">We don't just build websites and apps, we engineer assets for business growth.</p>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row justify-around items-start">
          <WhyUsDiv title='Strategic Partnership' text='We act as an extension of your team, collaborating on every step to ensure lasting success.' backgroundImage='/icons/why-us-1.svg' icon='/icons/about-icon1.svg' />
          <div className="text-center">
            <p className="hidden md:block heading-paragraphs md:my-5">We don't just build websites and apps, <br /> we engineer assets for business growth.</p>
            <WhyUsDiv title='Growth-Focused Execution' text='Our flexible architecture easily handles massive growth and new features, eliminating expensive rebuilds.' backgroundImage='/icons/why-us-2.svg' icon='/icons/about-icon2.svg' />
          </div>
          <WhyUsDiv title='Dedicated Long-Term Partner' text='We are your committed digital partner, offering strategic guidance and proactive support long after launch.' backgroundImage='/icons/why-us-3.svg' icon='/icons/about-icon3.svg' />
        </div>
      </section>

      {/* process section */}
      <section className="mt-7" id='process'>
        <div className="text-center px-5 mb-3 space-y-3">
          <h2>Our Simple Path to Digital Growth</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="md:my-5 heading-paragraphs">Transparent steps, predictable results.</p>
        </div>
        <div className="min-h-[50rem] md:min-h-[30rem] bg-[#BCAC99] flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-5 my-3 px-5">
            <WhyUsDiv title='Discovery & Strategy' text='We align on goals, audience and need' backgroundImage='/icons/process-background.svg' icon='/icons/process-icon1.svg' />
            <WhyUsDiv title='Design & UI/UX' text='Wireframes, mockups, and prototype' backgroundImage='/icons/process-background.svg' icon='/icons/process-icon2.svg' />
            <WhyUsDiv title='Development  &Testing' text='Scalable, secure code with rigorous testing for smooth performance across all devices' backgroundImage='/icons/process-background.svg' icon='/icons/process-icon3.svg' />
            <WhyUsDiv title='Launch & Partnership' text='Seamless Launch and longterm support to ensure sustained growth' backgroundImage='/icons/process-background.svg' icon='/icons/process-icon4.svg' />
          </div>
        </div>
      </section>

      {/* pricing section */}
      <section className="px-5 mt-7" id='pricing'>
        <div className="text-center mb-3 space-y-3">
          <h2>Simple & Transparent Pricing</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="heading-paragraphs">Choose a plan that works for you</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <PricingDiv
            title="Starter"
            text="Ideal for small businesses or personal websites"
            price="25,000"
            features={[
              "Mobile responsive design",
              "Contact form and Basic SEO Setup",
              "Social Media Intergration",
              "1-3 Page Custom Website",
              "1 Month Maintenance & Support",
            ]}
            isPopular={false}
            buttonText="Get Started"
            backgroundColor="#721B27"
            textColor="#FFFAF6"
          />
          <PricingDiv
            title="Business"
            text="Optimized for growing SMEs and service businesses."
            price="60,000"
            features={[
              "Everything in starter",
              "Advanced SEO & Analytics Setup",
              "CRM Integration",
              "3 Months Maintenance & Support",
            ]}
            isPopular={true}
            buttonText="Get Started"
            backgroundColor="#BCAC99"
            buttonBackground="maroon"
            textColor="#000000"
          />
          <PricingDiv
            title="Custom Solution"
            text="Tailored Web and Mobile applications"
            price="60,000+"
            features={[
              "Everything in business",
              "Full-Stack development",
              "Ongoing maintenance and scaling support",
            ]}
            isPopular={false}
            backgroundColor="#721B27"
            textColor="#FFFAF6"
            buttonText="Get Quote"
          />
        </div>
      </section>

      {/* portofolio section */}
      <section className="px-5 mt-7">
        <div className="text-center mb-3 space-y-3">
          <h2>Our Works</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="heading-paragraphs mb-5">Here are some of our previous works</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

          {latestPortfolioItems.map((item, index) => (
            <PortofolioDiv
              key={index}
              title={item.title}
              text={item.text}
              to={item.to}
            />
          ))}

          <div>
            <Link to='/portofolio'>
              <div className="flex text-[#721B27] font-semibold">
                See All <ArrowRight size={24} color="#721B27" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section id="contact" className="px-5 mt-7">
        <div className="text-center mb-3 space-y-3">
          <h2>Ready to Grow Your Business</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="heading-paragraphs">Lets turn your vision into a scalable solution</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
