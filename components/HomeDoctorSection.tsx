import React from 'react';
import Link from 'next/link';

const HomeDoctorSection = () => {
    return (
        <section className="bg-gradient-to-br from-green-100 to-green-50 py-16 px-4">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-10">

                {/* Doctor Image with Experience Badge */}
                <div className="relative group w-full lg:w-1/2 flex justify-center">
                    <img
                        src="/DoctorsImages/DoctorImage11.jpg"
                        alt="Dr. John Doe"
                        className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl animate-fade-in h-auto"
                    />

                    {/* Experience Badge */}
                    <div
                        className="
      absolute 
      bottom-[-20px] sm:bottom-[-25px] 
      right-2 sm:right-4 md:right-6 
      bg-green-600 text-white px-4 py-3 rounded-xl shadow-md text-center z-10 
      transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:bg-green-700
    "
                    >
                        <div className="text-lg sm:text-xl md:text-2xl font-bold">25+</div>
                        <div className="text-xs sm:text-sm md:text-base">Years Experience</div>
                    </div>
                </div>

                {/* Doctor Description */}
                <div className="w-full lg:w-1/2 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">Dr. John Doe(Gold Medalist)</h2>
                    <p className="text-green-700 font-semibold mb-2">Chief Medical Officer</p>
                    <p className="text-gray-800 mb-4 text-sm md:text-base">
                        Dr. John Doe is a highly experienced Ayurvedic doctor with expertise in treating chronic diseases. He has a strong background in traditional Ayurvedic medicine combined with modern diagnostic techniques. His approach focuses on holistic healing and personalized treatment plans.
                    </p>

                    <div className="space-y-3">
                        {[
                            "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
                            "MD in Ayurveda (Panchakarma)",
                            "25+ years of clinical experience",
                            "Specialist in Chronic Disease Management"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span className="text-gray-700 text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Book Button */}
                        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-800 transition-all text-sm md:text-base">
                            Book Consultation
                        </button>
                </div>
            </div>
        </section>
    );
};

export default HomeDoctorSection;