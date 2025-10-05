import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImage from '../assets/general-images/hero-background.svg';

import Button from '../components/Button';
import DividerImage from '../components/Divider';
import OurServicesDiv from '../components/OurServices';
import ContactForm from '../components/ContactForm';

const Home = () => {

  const location = useLocation();

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
        <div className="px-5 text-center flex flex-col min-h-[90vh] justify-between pb-30">

          <div>
            <h1>Your Vision. <br className="md:hidden" /> Our Code. <br />Guaranteed Growth.</h1>
            <p>We partner with businesses to design and develop exceptional, scalable web and mobile solutions that turn complex challenges into competitive advantages.</p>
          </div>

          <div className="buttons flex gap-4 md:gap-7 justify-center">
            <Button text="Start Project Consultation" color="maroon" width="w-64" to="#contact" />
            <Button text="View Our Portfolio" color="beige" width="w-56" to="/portofolio" />
          </div>

        </div>
      </section>

      {/* services section */}
      <section className="px-5" id='services'>
        <div className="text-center">
          <h2>Our Services</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p>Delivering the Digital Solutions Your Business Needs to Thrive—Not Just Survive.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around">
          <OurServicesDiv />
          <OurServicesDiv />
          <OurServicesDiv />
          <OurServicesDiv />
        </div>

      </section>

      {/* why us section */}
      <section className="px-5" id='why-us'>
        <div className="text-center">
          <h2>Why Choose Us</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p className="md:hidden">We don't just build websites and apps, we engineer assets for business growth.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-start">
          <OurServicesDiv />
          <div className="text-center">
            <p className="hidden md:block">We don't just build websites and apps, <br /> we engineer assets for business growth.</p>
            <OurServicesDiv />
          </div>
          <OurServicesDiv />
        </div>
      </section>

      {/* process section */}
      <section className="px-5" id='process'>
        <div className="text-center">
          <h2>Our Simple Path to Digital Growth</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p>Transparent steps, predictable results.</p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-around">
            <OurServicesDiv />
            <OurServicesDiv />
            <OurServicesDiv />
            <OurServicesDiv />
          </div>
        </div>
      </section>

      {/* pricing section */}
      <section className="px-5" id='pricing'>
        <div className="text-center">
          <h2>Simple & Transparent Pricing</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p>Simple & Transparent Pricing</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around">
          <OurServicesDiv />
          <OurServicesDiv />
          <OurServicesDiv />
        </div>
      </section>

      {/* portofolio section */}
      <section className="px-5">
        <div className="text-center">
          <h2>Our Works</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p>Here are some of our previous works</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center">
          <OurServicesDiv />
          <OurServicesDiv />
          <OurServicesDiv />

          <div>
            <Link to='/portofolio'>
              <div className="flex">
                See All <ArrowRight size={24} color="#721B27" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section id="contact" className="px-5">
        <div className="text-center">
          <h2>Ready to Grow Your Business</h2>
          <div className="flex justify-center">
            <DividerImage />
          </div>
          <p>Lets turn your vision into a scalable solution</p>
        </div>
        <div>
          <ContactForm/>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
