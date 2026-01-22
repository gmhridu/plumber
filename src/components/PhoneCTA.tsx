import React from 'react';
import { Phone } from 'lucide-react';
import { trackCallConversion, GOOGLE_ADS_CALL_CONVERSION_LABEL } from '@/lib/google-ads';

interface PhoneCTAProps {
  phoneNumber: string;
  label?: string;
  value?: number;
  currency?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * Reusable CTA Phone Button Component with Google Ads Click-to-Call Conversion Tracking
 *
 * This component automatically tracks conversions when clicked using the configured
 * Google Ads conversion label. It falls back to basic functionality if tracking fails.
 */
export const PhoneCTA: React.FC<PhoneCTAProps> = ({
  phoneNumber,
  label = GOOGLE_ADS_CALL_CONVERSION_LABEL,
  value,
  currency = 'EUR',
  className = '',
  variant = 'primary',
}) => {
  // Handle button click with conversion tracking
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!label) {
      console.warn('Google Ads conversion label not configured');
      window.location.href = `tel:${phoneNumber}`;
      return;
    }

    // Track conversion and navigate to phone URL
    trackCallConversion(phoneNumber, label, value, currency);
  };

  // Button styles based on variant
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg shadow-green-200',
    secondary: 'bg-white text-green-600 hover:bg-gray-50 focus:ring-green-500 border-2 border-green-600',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      rel="nofollow"
      aria-label={`Appeler ${phoneNumber}`}
    >
      <Phone className="w-6 h-6" />
      <span>Appeler maintenant</span>
    </a>
  );
};

/**
 * Simple phone link component without tracking (for static content)
 */
export const PhoneLink: React.FC<PhoneCTAProps> = ({
  phoneNumber,
  className = '',
  variant = 'primary',
}) => {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg shadow-green-200',
    secondary: 'bg-white text-green-600 hover:bg-gray-50 focus:ring-green-500 border-2 border-green-600',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      rel="nofollow"
      aria-label={`Appeler ${phoneNumber}`}
    >
      <Phone className="w-6 h-6" />
      <span>Appeler maintenant</span>
    </a>
  );
};
