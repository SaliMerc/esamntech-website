import { Globe } from 'lucide-react';

const WhyUsDiv = ({ title, text, icon, backgroundImage }) => {
  const baseStyles = "py-8 px-6 h-[20rem] w-[20rem] flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat";

  return (
    <div
      className={baseStyles}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '/icons/why-us-1.svg' }}
    >
      <div className="flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:translate-y-[-10px]">
        {/* Icon */}
        <div>
          {icon ? (
            <img src={icon} alt="Service icon"/>
          ) : (
            <img src='/icons/custom-web-icon.svg' alt="Service icon"/>
          )}
        </div>
        
        {/* Title */}
        <h3 className="!text-[#000000] font-bold">
          {title || "Business Websites"}
        </h3>
        
        {/* Divider */}
        <div className="w-full h-[2px] bg-[#721B27]"></div>
        
        {/* Description */}
        <p className="text-[#000000] leading-relaxed text-[0.9rem]">
          {text || "High-performance websites that convert visitors into leads and scale with your growth."}
        </p>
      </div>
    </div>
  );
};

export default WhyUsDiv;