import Button from '../components/Button';
import { Check } from 'lucide-react';

const Pricing = ({ title, price, originalPrice, features, text, buttonText, isDiscounted = false, isPopular = false, backgroundColor = 'white', textColor = '#FFFAF6', buttonBackground = 'beige' }) => {
    return (
        <div className={`transition-transform duration-300 hover:translate-y-[-10px] pricing-card h-[35rem] w-[20rem] rounded-t-[20px] rounded-bl-[20px] p-5 text-left flex flex-col justify-between shadow-md ${isPopular ? 'border-2 border-[#721B27]' : ''}`} style={{ backgroundColor, color: textColor }}>

            {isPopular && (
                <Button text="Popular" color="white" width="w-[40%]" />
            )}

            <div>
                <h4 className="mb-2">{title}</h4>
                <p className="text-sm mb-5">{text}</p>
            </div>

            {isDiscounted ? (
                <>
                    <p className="text-3xl font-bold mb-2 text-[#BCAC99]">
                        <span className="text-xl">Was</span> <span className='line-through'>KES {originalPrice}</span>
                    </p>
                    <p className="text-3xl font-bold mb-5">
                         KES {price}
                    </p>
                </>
            ) : (
                <p className="text-3xl font-bold mb-5">
                     KES {price}
                </p>
            )}

            <ul className="list-none p-0 mb-5 pb-5">
                {features.map((feature, index) => (
                    <li key={index} className="mb-2 flex">
                        <Check className="w-5 h-5 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
            <Button text={buttonText} color={buttonBackground} width="w-full" to="#contact" />
        </div>
    );
};

export default Pricing;