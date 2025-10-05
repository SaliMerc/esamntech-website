const ServicesDiv = ({ text, marginTop, icon }) => {
  const baseStyles = "py-2 px-4 bg-[#721B27] h-[20rem] w-[20rem] rounded font-semibold transition-colors duration-200 flex items-center justify-center rounded-t-[20px] rounded-bl-[60px] rounded-br-[20px]";

  return (
    
    <div
      className={`${baseStyles} ${marginTop || "mt-2"}`}
      style={{ marginTop: marginTop || "1rem" }} 
    >
      {text}
    </div>
  );
};

export default ServicesDiv;