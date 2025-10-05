import { Link } from 'react-router-dom';

const PortfolioDiv = ({ title, text, to }) => {
  const baseStyles = "py-8 px-6 h-[20rem] w-[20rem] flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat";

  return (
    <a
      href={to}
      className={baseStyles}
      style={{
        backgroundImage: `url('/icons/portofolio-background.svg')`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center text-center gap-4">
        {/* Title */}
        <h3 className="text-[#000000] font-bold">
          {title || "Business Websites"}
        </h3>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[#721B27]"></div>

        {/* Description */}
        <p className="text-[#000000] leading-relaxed text-[0.9rem]">
          {text || "High-performance websites that convert visitors into leads and scale with your growth."}
        </p>
      </div>
    </a>
  );
};

export default PortfolioDiv;