import axios from 'axios';

interface EmailData {
  name?: string;
  email: string;
  subject: string;
  message: string;
  type?: 'contact' | 'listing';
}

export const sendEmail = async (data: EmailData) => {
  try {
    // In a real application, this would be your backend API endpoint
    // For now, we'll just simulate sending to info@cryptowatcher.org
    console.log('Sending email to info@cryptowatcher.org:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};