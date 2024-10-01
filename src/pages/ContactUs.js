import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.surname.trim()) tempErrors.surname = "Surname is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        console.log('Sending form data:', formData);
        const response = await fetch('http://localhost:3002/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Response text:', responseText);

        let responseData;
        try {
          responseData = JSON.parse(responseText);
        } catch (e) {
          console.error('Error parsing JSON:', e);
          console.error('Raw response:', responseText);
          alert('Received invalid response from server. Please try again.');
          return;
        }

        if (response.ok) {
          alert('Your message has been sent successfully!');
          setFormData({
            firstName: '',
            surname: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        } else {
          console.error('Server response:', responseData);
          alert(`Error: ${responseData.details || responseData.error || 'There was an error sending your message. Please try again.'}`);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        alert(`Fetch error: ${error.message}`);
      }
    } else {
      alert('Please fill in all required fields correctly.');
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 h-full">
        <div className="w-full h-full m-auto px-4 py-6 shadow-md rounded-lg bg-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
            <div className="w-full lg:w-5/12">
              <img src={`${process.env.PUBLIC_URL}/images/contact-us.svg`}
                alt="Contact Us" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full lg:w-6/12 p-6 rounded-lg">
              <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-black inline-block">Get in Touch</h1>
                <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
              </div>
              <p className="font-bold mb-6 text-sm md:text-base text-gray-700">Have questions or need support? Our team is here to help. Reach out via email, phone, or our contact form, and we'll get back to you promptly.</p>

              <form onSubmit={handleSubmit} className='w-full'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block mb-2 font-bold text-sm text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full px-3 py-2 text-sm border ${errors.firstName ? 'border-red-500' : 'border-orange-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="surname" className="block mb-2 font-bold text-sm text-gray-700">Surname</label>
                    <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} className={`w-full px-3 py-2 text-sm border ${errors.surname ? 'border-red-500' : 'border-orange-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
                    {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-bold text-sm text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-3 py-2 text-sm border ${errors.email ? 'border-red-500' : 'border-orange-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 font-bold text-sm text-gray-700">Contact Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-3 py-2 text-sm border ${errors.phone ? 'border-red-500' : 'border-orange-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-bold text-sm text-gray-700">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-3 py-2 text-sm border ${errors.subject ? 'border-red-500' : 'border-orange-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-bold text-sm text-gray-700">Your Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className={`w-full px-3 py-2 text-sm border ${errors.message ? 'border-red-500' : 'border-orange-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div>
                  <button type="submit" className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-600 transition-colors duration-300">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;