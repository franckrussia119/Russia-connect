import React from "react";

interface CountryFlagProps {
  code: string; // 'cm' | 'ru' | 'fr' | 'gb' | 'ng'
  className?: string;
}

export default function CountryFlag({ code, className = "w-5 h-3.5 object-cover rounded-sm shadow-sm border border-white/10 shrink-0 inline-block align-middle" }: CountryFlagProps) {
  const lower = code.toLowerCase();
  
  // Use a highly reliable flag CDN (flagcdn.com) with no-referrer
  return (
    <img
      src={`https://flagcdn.com/w40/${lower}.png`}
      srcSet={`https://flagcdn.com/w80/${lower}.png 2x`}
      alt={`${code.toUpperCase()} Flag`}
      className={className}
      referrerPolicy="no-referrer"
      loading="lazy"
    />
  );
}
