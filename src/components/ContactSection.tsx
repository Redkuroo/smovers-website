"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2643496271535!2d125.64249637478846!3d7.210655014797296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f941e760cdcd3d%3A0xab73afe1517a6c07!2sSMovers%20Logistics%20Services!5e0!3m2!1sfil!2sph!4v1755056144799!5m2!1sfil!2sph";

  const companyDetails = [
    { label: "Company", value: "SMOvers Logistics Services" },
    { label: "Address", value: "Km 10, Purok 6, Buhisan, Tibungco, Davao City" },
    { label: "Business Type", value: "Sole Proprietorship" },
    { label: "Registration No.", value: "2476151" },
    { label: "TIN", value: "724-936-326-000" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="site-container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-blue-800/70">
            Contact Us
          </p>
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl lg:text-5xl">
            Let’s Plan Your Shipment
          </h2>
          <p className="mt-3 text-gray-600">
            Share your requirements and we’ll coordinate the next steps right away.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          {/* Left column: Map + Details */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-blue-900/10 bg-white shadow-lg">
              <iframe
                title="SMOvers Logistics Services Location"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 sm:h-80 lg:h-[420px]"
                allowFullScreen
              />
            </div>

            <div className="rounded-3xl border border-blue-900/10 bg-white p-6 shadow-lg sm:p-8">
              <div className="mb-6 flex items-center gap-3 text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-blue-900">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Visit or Contact Us</h3>
                  <p className="text-sm text-gray-600">All the essentials for booking and coordination.</p>
                </div>
              </div>

              <dl className="space-y-4">
                {companyDetails.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-blue-900/10 bg-blue-50/30 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-900/70">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800 sm:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right column: Form */}
          <div className="rounded-3xl border border-blue-900/10 bg-white p-6 shadow-xl sm:p-8 lg:sticky lg:top-24 lg:self-start">
            <div className="mb-6 text-left">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-800/70">
                Message Us
              </p>
              <h3 className="mt-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                Need Assistance or a Quote?
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Fill out the form and our team will respond within one business day.
              </p>
            </div>

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
            <div className="mt-8 space-y-4 text-left text-gray-600">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Phone className="h-5 w-5 text-blue-900" />
                <span>
                  Call us:{" "}
                  <a
                    href="tel:0917-772-3701"
                    className="font-medium text-blue-900 hover:underline"
                  >
                    0917-772-3701
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Mail className="h-5 w-5 text-blue-900" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:smoverslogistics@gmail.com"
                    className="font-medium text-blue-900 hover:underline"
                  >
                    smoverslogistics@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
