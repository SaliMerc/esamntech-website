import { Pointer } from 'lucide-react';
import {Link} from 'react-router-dom'

const Button = ({ text, color, width, to, type, disabled, onClick }) => {
  const baseStyles = "py-3 px-6 rounded font-semibold transition-colors duration-200 flex items-center justify-center rounded-t-[20px] rounded-bl-[20px]";
  const colorStyles = {
    maroon: "bg-[#721B27] hover:bg-[#BCAC99] !text-[#FFFFFF] hover:!text-[#721B27] !border !border-[#721B27]", 
    beige: "bg-[#BCAC99] hover:bg-[#721B27] !text-[#721B27] hover:!text-[#FFFFFF] !border !border-[#721B27]", 
    white: "bg-[#FFFAF6]", 
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${colorStyles[color] || colorStyles.maroon} ${width || "w-48"}`}
        style={{ width: width || "12rem", cursor: Pointer }}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color] || colorStyles.maroon} ${width || "w-48"} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ width: width || "12rem" }} 
    >
      {text}
    </button>
  );
};

export default Button;