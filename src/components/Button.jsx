import { Link } from 'react-router-dom';

const Button = ({ text, color, width, to }) => {
  const colorStyles = {
    maroon: "bg-[#721B27] text-[#FFFFFF] border-[#721B27] hover:text-[#721B27]",
    beige: "bg-[#BCAC99] text-[#721B27] border-[#721B27] hover:text-[#FFFFFF]",
    white: "bg-[#FFFAF6] text-[#721B27]",
  };

  return (
    <Link
      to={to}
      className={`relative inline-block ${width} py-3 px-5 rounded-t-[20px] rounded-bl-[20px] font-bold text-center overflow-hidden border transition-colors duration-300 ease-in-out group ${colorStyles[color] || colorStyles.white}`}
    >
      <span className="relative z-10">{text}</span>
      {color !== 'white' && (
        <span
          className={`absolute inset-0 bg-[#721B27] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
            color === 'maroon' ? 'group-hover:bg-[#BCAC99]' : 'group-hover:bg-[#721B27]'
          }`}
        ></span>
      )}
    </Link>
  );
};

export default Button;