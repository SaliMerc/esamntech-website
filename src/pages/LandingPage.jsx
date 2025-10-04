import Header from "../components/Header";
import backgroundImage from '../assets/general-images/hero-background.svg';

const Home = () => {
  return (
    <>
      <section className=" min-h-[100vh] pt-30 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
         <Header />
        <div className="px-5 text-center">
          <h1>Your Vision. Our Code. <br />Guaranteed Growth.</h1>
          <p>We partner with businesses to design and develop exceptional, scalable web and mobile solutions that turn complex challenges into competitive advantages.</p>
        </div>       
      </section>

      <section>
        <h2>Our Services</h2>
      </section>
    </>
  );
};

export default Home;
