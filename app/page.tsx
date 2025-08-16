"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import NavigationMenu from "@/components/NavigationMenu";
import PageMetadata from "@/components/PageMetaData";
import Footer from "@/components/Footer";
import AboutUs from "./about-us/page";
import OurServices from "./our-services/page";
import Treatments from "./treatments/page";
import ContactUs from "./contact-us/page";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeDoctorSection from "@/components/HomeDoctorSection";

const SimpleImageSlider = () => {
  const images = [
    { src: "/BannerImages/Banner1.png", alt: "Edvenswa Ayurveda" },
    { src: "/BannerImages/Banner2.png", alt: "Edvenswa Ayurveda" },
    { src: "/BannerImages/Banner3.png", alt: "Edvenswa Ayurveda" },
    { src: "/BannerImages/Banner4.png", alt: "Edvenswa Ayurveda" },
    { src: "/BannerImages/Banner5.png", alt: "Edvenswa Ayurveda" },
    { src: "/BannerImages/Banner6.png", alt: "Edvenswa Ayurveda" },
    { src: "/BannerImages/Banner7.png", alt: "Edvenswa Ayurveda" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[80vh] xl:[80vh] overflow-hidden m-0">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="xl:object-cover bg-white"
              priority={index === 0}
            />

            {/* BOOK NOW Button */}
            <div className="absolute bottom-16 right-1/4 transform -translate-x-3/10 z-10">
                <button
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             bg-green-600 hover:bg-green-800 text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 
                       text-sm sm:text-base md:text-lg rounded-full shadow-md whitespace-nowrap"
                >
                  BOOK NOW
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-white/50 shadow-lg"
                    : "bg-black/70 hover:bg-black/90"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous/Next Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-none transition-all duration-300"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-none transition-all duration-300"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageMetadata
        title="Best Ayurvedic Hospital in Hyderabad | Edvenswa Ayurveda | Expert Treatment"
        description="Leading Ayurvedic hospital in Hyderabad offering authentic treatments by expert doctors. 25+ years experience in Panchakarma, chronic disease treatment & natural healing at Bowrampet & Nallagandla."
        keywords="ayurvedic hospital hyderabad, best ayurveda doctor hyderabad, panchakarma treatment hyderabad, ayurvedic clinic bowrampet, natural treatment hyderabad, ayurveda specialist hyderabad, holistic healing hyderabad, herbal medicine hyderabad"
        ogUrl="/"
        canonicalUrl="/"
      />

      <Head>
        <title>Edvenswa Ayurveda - Driven by Empathy. Powered by Passion</title>
        <meta
          name="description"
          content="Edvenswa - Customer-first Ayurvedic solutions for wellness and healing."
        />
        <link rel="icon" href="/img/edvenswa-logo.png" />
      </Head>

      {/* Navigation */}
      {/* <NavigationMenu /> */}

      {/* Hero Image Slider */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[80vh] xl:[80vh] overflow-hidden">
        <SimpleImageSlider />
      </div>

      {/* Page Sections */}
      <main className="flex-1">
        {/* <AboutUs /> */}
        <HomeAboutSection />
        <HomeDoctorSection />
        <OurServices />
        <Treatments />
        <ContactUs />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
