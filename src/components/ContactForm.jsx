import { useState, useEffect } from 'react';
import Button from './Button';

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

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyVwB68Pga_hh19rny1LSZWkrqMSbrQ2-wQPk7us-jsgCCDru82M5AiYmXy960WhLazFA/exec', {
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
        <legend className="text-gray-800 text-sm font-normal px-1">Name</legend>
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
        <legend className="text-gray-800 text-sm font-normal px-1">Phone Number</legend>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none"
          placeholder="Your phone number"
        />
      </fieldset>

      <fieldset className="mb-5 border border-[#721B27] rounded-md px-3 pt-0 pb-2">
        <legend className="text-gray-800 text-sm font-normal px-1">Email (Optional)</legend>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 placeholder-[#E8D4B8] rounded-md focus:outline-none"
          placeholder="Your email"
        />
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
        <legend className="text-gray-800 text-sm font-normal px-1">Project Details</legend>
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
        disabled={isSubmitting}
      />
    </form>
  );
};

export default ContactForm;