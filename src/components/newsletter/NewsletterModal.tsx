
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('newsletterModalSeen');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterModalSeen', 'true');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    
    setSubmitted(true);
    setError('');
    
    // Close modal after successful submission
    setTimeout(() => {
      closeModal();
    }, 3000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 animate-scale-in">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Join BTN Cali Official</h3>
          {!submitted ? (
            <p className="text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter for exclusive updates and content about Cali's journey!
            </p>
          ) : (
            <p className="text-green-600 dark:text-green-400 font-medium">
              Thank you for subscribing! You'll hear from us soon.
            </p>
          )}
        </div>
        
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-btn ${error ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            
            <button 
              type="submit" 
              className="w-full btn-primary py-3"
            >
              Subscribe Now
            </button>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              By subscribing, you agree to receive emails from BTN Cali Official. You can unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
