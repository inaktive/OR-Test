
import React, { useState } from 'react';
import Hero from '../components/Hero';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    setSubmitted(true);
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Our work begins with a confidential conversation. We invite you to reach out to discuss your most pressing challenges."
      />
      <div className="py-20 bg-obsidian">
        <div className="container mx-auto px-6 max-w-2xl">
          {submitted ? (
            <div className="text-center bg-stone-dark p-12">
              <h2 className="font-serif text-2xl text-white">Thank You</h2>
              <p className="text-gray-300 mt-2">Your message has been received. We will be in contact shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full bg-stone-dark border border-stone text-white p-3 focus:outline-none focus:ring-2 focus:ring-stone-light"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full bg-stone-dark border border-stone text-white p-3 focus:outline-none focus:ring-2 focus:ring-stone-light"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="block w-full bg-stone-dark border border-stone text-white p-3 focus:outline-none focus:ring-2 focus:ring-stone-light"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-stone hover:bg-stone-light text-white uppercase tracking-widest font-semibold p-4 transition-colors duration-300"
                >
                  Begin the Conversation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
