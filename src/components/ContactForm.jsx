import { useState, useEffect } from 'react';
import Button from './Button';

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9+\-\s]*$/;
    if (!phoneRegex.test(phone)) {
      return 'Phone number can only contain digits, +, -, or spaces';
    }
    if (!/[0-9]/.test(phone)) {
      return 'Phone number must contain at least one digit';
    }
    const digitsOnly = phone.replace(/[+\-\s]/g, '');
    if (digitsOnly.length < 10) {
      return 'Phone number must contain at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number must not exceed 15 digits';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email) return ''; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'phone') {
      setPhoneError(validatePhoneNumber(value));
    }
    if (name === 'email') {
      setEmailError(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneValidationError = validatePhoneNumber(formData.phone);
    const emailValidationError = validateEmail(formData.email);
    if (phoneValidationError || emailValidationError) {
      setPhoneError(phoneValidationError);
      setEmailError(emailValidationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        projectDetails: ''
      });
      setPhoneError('');
      setEmailError('');
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[90%] md:max-w-[60%] mx-auto p-8 rounded-lg shadow-md my-8 md:mb-10 text-black">
      <fieldset className="mb-5 border border-[#721B27] rounded-md px-3 pt-0 pb-2">
        <legend className="text-gray-800 text-sm font-normal px-1">Name*</legend>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none"
          placeholder="Your name"
        />
      </fieldset>

      <fieldset className="mb-5 border border-[#721B27] rounded-md px-3 pt-0 pb-2">
        <legend className="text-gray-800 text-sm font-normal px-1">Phone Number*</legend>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none ${phoneError ? 'border-red-500' : ''}`}
          placeholder="Your phone number"
        />
        {phoneError && (
          <p className="text-red-500 text-sm mt-1">{phoneError}</p>
        )}
      </fieldset>

      <fieldset className="mb-5 border border-[#721B27] rounded-md px-3 pt-0 pb-2">
        <legend className="text-gray-800 text-sm font-normal px-1">Email (Optional)</legend>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none ${emailError ? 'border-red-500' : ''}`}
          placeholder="Your email"
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </fieldset>

      <fieldset className="mb-5 border border-[#721B27] rounded-md px-3 pt-0 pb-2">
        <legend className="text-gray-800 text-sm font-normal px-1">Company (Optional)</legend>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none"
          placeholder="Your company"
        />
      </fieldset>

      <fieldset className="mb-6 border border-[#721B27] rounded-md px-3 pt-0 pb-2">
        <legend className="text-gray-800 text-sm font-normal px-1">Project Details*</legend>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none h-28 resize-none"
          placeholder="Tell us more about your project"
        />
      </fieldset>

      {submitStatus && (
        <div className="fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out">
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md shadow-lg flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Message sent successfully!</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-md shadow-lg flex items-center gap-2">
              <span className="text-xl">✕</span>
              <span>Failed to send message. Please try again.</span>
            </div>
          )}
        </div>
      )}

      <Button
        text={isSubmitting ? 'Sending...' : 'Send Message'}
        color="maroon"
        width="w-full"
        type="submit"
        disabled={isSubmitting || phoneError || emailError}
      />
    </form>
  );
};

export default ContactForm;