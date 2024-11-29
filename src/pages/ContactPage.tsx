import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { sendEmail } from '../utils/email';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        ...formData,
        type: 'contact'
      });
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6 text-primary" />
          <h1 className="text-3xl font-bold text-text-primary">Contact Us</h1>
        </div>

        <p className="text-text-secondary mb-8">
          Have a question or feedback? We'd love to hear from you. Fill out the form below and our team 
          will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary
                       disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary
                       disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary
                       disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={6}
              className="w-full px-4 py-2 bg-background border border-background-lighter rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary
                       disabled:opacity-50 disabled:cursor-not-allowed resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary-dark 
                     text-white font-medium rounded-lg transition-colors disabled:opacity-50 
                     disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}