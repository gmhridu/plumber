"use client";

import React from "react";
import { Phone } from "lucide-react";
import styles from "./PhoneCTA.module.css";
import {
  trackCallConversion,
  GOOGLE_ADS_CALL_CONVERSION_LABEL,
} from "@/lib/google-ads";

interface PhoneCTAProps {
  phoneNumber: string;
  label?: string;
  value?: number;
  currency?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

/* -------------------------------------------------------------------------- */
/*                                PhoneCTA                                    */
/*      CTA button WITH Google Ads click-to-call conversion tracking           */
/* -------------------------------------------------------------------------- */

export const PhoneCTA: React.FC<PhoneCTAProps> = ({
  phoneNumber,
  label = GOOGLE_ADS_CALL_CONVERSION_LABEL,
  value,
  currency = "EUR",
  className = "",
  variant = "primary",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Fallback if label is missing
    if (!label) {
      console.warn("Google Ads conversion label not configured");
      window.location.href = `tel:${phoneNumber}`;
      return;
    }

    // Track conversion (Google Ads handles redirect)
    trackCallConversion(phoneNumber, label, value, currency);
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={`${styles.cta} ${styles[variant]} ${className}`}
      aria-label={`Appeler ${phoneNumber}`}
      rel="nofollow"
    >
      <Phone className={styles.icon} strokeWidth={2.5} />
      <span>{phoneNumber}</span>
    </a>
  );
};

// Testing

/* -------------------------------------------------------------------------- */
/*                                PhoneLink                                   */
/*          Simple phone link WITHOUT tracking (static content)                */
/* -------------------------------------------------------------------------- */

export const PhoneLink: React.FC<
  Pick<PhoneCTAProps, "phoneNumber" | "className" | "variant">
> = ({ phoneNumber, className = "", variant = "primary" }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`${styles.cta} ${styles[variant]} ${className}`}
      aria-label={`Appeler ${phoneNumber}`}
      rel="nofollow"
    >
      <Phone className={styles.icon} strokeWidth={2.5} />
      <span>{phoneNumber}</span>
    </a>
  );
};
