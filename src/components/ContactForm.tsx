import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, AlertTriangle } from 'lucide-react';
// Removed unused supabase import
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '' // Anti-bot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    // Bot detection - if honeypot is filled, silently "succeed" without sending
    if (formData.honeypot) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        honeypot: ''
      });
      
      return;
    }
    
    // Validate required fields on client-side before sending
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields (name, email, and message).");
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      // const { data, error } = await supabase.functions.invoke('send-contact-email', {
      //   body: {
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     company: formData.company,
      //     message: formData.message
      //   }
      // });

      interface EmailJSResponse {
        text: string;
      }

      interface EmailJSParams {
        serviceId: string;
        templateId: string;
        publicKey: string;
      }

      const sendEmail = (): void => {
        emailjs
          .sendForm(
            "service_tk76s5n",
            "template_b2w0k28",
            form.current as HTMLFormElement,
            "EOF6ntTJC2lDe4Toc"
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error: EmailJSResponse) => {
              console.log('FAILED...', error.text);
            }
          );
      };

      sendEmail();

      // if (error) {
      //   console.error('Supabase function error:', error);
      //   throw new Error(error.message || 'Error sending message');
      // }

      // // Check for errors in the response data itself
      // if (data && data.error) {
      //   console.error('Function response error:', data.error);
      //   throw new Error(data.error || 'Error processing your message');
      // }

      // console.log('Success response:', data);
      
      // toast({
      //   title: "Message sent!",
      //   description: "Thank you for contacting us. We'll get back to you soon.",
      // });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        honeypot: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Please try again later or contact us directly at mekloyintegrated@gmail.com"
      );
      
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at mekloyintegrated@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold text-mekloy-blue mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions about our products or services? Want to request a quote or discuss a project? 
          Fill out the form and we'll get back to you as soon as possible.
        </p>
        
        {/* Contact Info Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-mekloy-blue/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-mekloy-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-mekloy-blue">Phone</h3>
              <a href="tel:+2348143728843" className="text-gray-700 hover:text-mekloy-blue">
                +234 814 372 8843
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-mekloy-blue/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-mekloy-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-mekloy-blue">Email</h3>
              <a href="mailto:mekloyintegrated@gmail.com" className="text-gray-700 hover:text-mekloy-blue">
                mekloyintegrated@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-mekloy-blue/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-mekloy-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-mekloy-blue">Office</h3>
              <p className="text-gray-700">Bayelsa State, Nigeria</p>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Link */}
        <div className="mt-10">
          <a 
            href="https://wa.me/2348143728843?text=Hello%20Mekloy,%20I'm%20interested%20in%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.882-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
      
      <div>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            {errorMessage && (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            
            <form ref={form} onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your Company Ltd"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                {/* Honeypot field for bot detection - hidden with CSS */}
                <div className="honeypot" style={{ opacity: 0, position: 'absolute', top: '-1000px', left: '-1000px' }}>
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <Input
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-mekloy-blue hover:bg-blue-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
