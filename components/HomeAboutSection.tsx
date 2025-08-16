import React from 'react';
import Image from 'next/image';
import { Stethoscope, Leaf, Building } from "lucide-react";


const HomeAboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 to-green-50  py-3">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="inline-block uppercase tracking-wider text-green-900 font-semibold bg-green-200 px-6 py-3 text-xl md:text-2xl rounded-full mb-2">ABOUT US</h2>
          <h3 className="text-xl text-green-600 font-semibold">Best Ayurvedic Hospital in Hyderabad</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6 text-center">
            Edvenswa Ayurveda, your one-stop-portal at Bowrampet, Hyderabad is a leading source for holistic health and wellness information to help you make informed choices for a better and healthier lifestyle.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-center">
            Our skilled physicians use prescription blending tactics, specialized therapy plans, all the while bringing to you authentic Ayurvedic treatments and care plans. Expert Ayurvedic treatments and environment-friendly therapies follow comprehensive, individualized evaluation, diagnosis, and recommendations that integrate all areas of your life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
  <div className="w-20 h-20 rounded-full bg-green-500 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Doctors</h4>
              <p className="text-gray-600 text-sm">Experienced Ayurvedic practitioners with years of expertise</p>
            </div>
            
            <div className="text-center">
  <div className="w-20 h-20 rounded-full bg-green-500 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Natural Treatment</h4>
              <p className="text-gray-600 text-sm">100% natural and herbal treatments without side effects</p>
            </div>
            
<div className="text-center">
  <div className="w-20 h-20 rounded-full bg-green-500 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
    <Building className="w-10 h-10 text-white" />
  </div>
  <h4 className="font-semibold text-gray-800 mb-2">Modern Facilities</h4>
  <p className="text-gray-600 text-sm">State-of-the-art facilities with traditional wisdom</p>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
