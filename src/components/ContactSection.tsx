"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    console.log('Submitting form with data:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setSubmitMessage(data.message || 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.error || 'Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly at smoverslogistics@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-16 px-4 bg-gray-50">
  <div className="site-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="relative w-full lg:w-1/2 max-w-md lg:max-w-none">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/help.png"
                alt="Contact us"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-900 rounded-sm rotate-45"></div>
              </div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-blue-900/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-900 rounded-sm rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-1/2">
            {/* Header with icons */}
     

            {/* Main heading */}
            <div className="mb-8">
              <p className="text-gray-600 mb-2">We’re here to support your logistics needs.</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
               Need Assistance or a Quote?
              </h2>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name*" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required 
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">*</span>
              </div>
              
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email*" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required 
              />
              
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Question*" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                rows={4} 
                required 
              />
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`cursor-pointer w-full rounded-lg px-6 py-4 font-bold text-lg transition duration-300 shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-900 hover:bg-blue-800'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </button>

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${
                  submitMessage.includes('Thank you') || submitMessage.includes('Message received successfully') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>

            {/* Contact info */}
            <div className="mt-8 text-center text-gray-600 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-blue-900" />
                Call us: <a href="tel:0917-772-3701" className="text-blue-900 font-medium hover:underline">0917-772-3701</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-blue-900" />
                Email: <a href="mailto:smoverslogistics@gmail.com" className="text-blue-900 font-medium hover:underline" > smoverslogistics@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
