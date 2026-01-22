/**
 * Google Ads (gtag.js) configuration and conversion tracking utilities
 * for Next.js App Router with TypeScript
 */

// Configuration - these values should be set in .env.local
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
export const GOOGLE_ADS_CALL_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_LABEL;

/**
 * Sends a Google Ads conversion event
 * @param label - Conversion label
 * @param value - Optional conversion value
 * @param currency - Optional currency code (default: EUR)
 * @param callback - Optional callback function to execute after conversion
 */
export const trackGoogleAdsConversion = (
  label: string,
  value?: number,
  currency?: string,
  callback?: () => void
): void => {
  // Check if gtag is available (client-side only)
  if (typeof window === 'undefined' || typeof (window as Window & { gtag?: (event: string, action: string, params?: Record<string, unknown>) => void }).gtag !== 'function') {
    console.warn('gtag is not available');
    callback?.();
    return;
  }

  const gtag = (window as unknown as Window & { gtag: (event: string, action: string, params?: Record<string, unknown>) => void }).gtag;

  // Create conversion parameters
  const params: Record<string, unknown> = {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${label}`,
  };

  if (value !== undefined) {
    params.value = value;
  }

  if (currency) {
    params.currency = currency;
  }

  if (callback) {
    params.event_callback = callback;
  }

  // Send conversion event
  try {
    gtag('event', 'conversion', params);
  } catch (error) {
    console.error('Failed to track Google Ads conversion:', error);
    callback?.();
  }
};

/**
 * Tracks a click-to-call conversion and navigates to the phone URL
 * @param phoneNumber - Phone number to call (e.g., '+33123456789')
 * @param label - Conversion label
 * @param value - Optional conversion value
 * @param currency - Optional currency code (default: EUR)
 */
export const trackCallConversion = (
  phoneNumber: string,
  label: string,
  value?: number,
  currency?: string
): boolean => {
  trackGoogleAdsConversion(
    label,
    value,
    currency,
    () => {
      // Navigate to phone URL after conversion is tracked
      window.location.href = `tel:${phoneNumber}`;
    }
  );

  return false; // Prevent default link behavior
};
