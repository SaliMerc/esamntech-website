const ServicesDiv = ({ title, text, marginTop, icon }) => {
  const baseStyles = "py-8 px-6 bg-[#721B27] h-[20rem] w-[20rem] rounded transition-colors duration-200 flex flex-col items-center justify-center rounded-t-[20px] rounded-bl-[60px] rounded-br-[20px]";

  return (
    <div
      className={`${baseStyles} md:${marginTop || "mt-2"}`}
      style={{ marginTop: marginTop || "1rem" }} 
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
        <h3 className="!text-[#FFFAF6] font-bold">
          {title || "Business Websites"}
        </h3>
        
        {/* Divider */}
        <div className="w-full h-[2px] bg-white"></div>
        
        {/* Description */}
        <p className="text-[#FFFAF6] leading-relaxed text-[0.9rem]">
          {text || "High-performance websites that convert visitors into leads and scale with your growth."}
        </p>
      </div>
    </div>
  );
};

export default ServicesDiv;
