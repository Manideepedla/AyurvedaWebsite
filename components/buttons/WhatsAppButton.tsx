'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=+918055000016&text=Hi%2C%20I%20want%20to%20know%20more!&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 md:hover:scale-110"
    >
      <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
    </Link>
  );
}