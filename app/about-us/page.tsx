"use client"
import React from 'react';
import NavigationMenu from '@/components/NavigationMenu';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';
import Image from 'next/image';
import HomeAboutSection from '@/components/HomeAboutSection';
import HomeDoctorSection from '@/components/HomeDoctorSection';

export default function AboutUs() {
  return (
    <section className="bg-green-50">
      {/* <NavigationMenu /> */}
      <PageMetadata
        title="About Ayurveda Hospital | Expert Ayurvedic Doctors in Hyderabad"
        description="Meet Dr. Anupama Uppuluri, gold medalist with 25+ years experience. Expert in chronic diseases,istic Ayurvedic treatments in Hyderabad. BAMS, MD Ayurveda qualified."
        keywords="dr anupama uppuluri, ayurvedic doctor hyderabad, BAMS MD ayurveda, panchakarma specialist hyderabad, chronic disease ayurveda treatment, gold medalist ayurvedic doctor, experienced ayurveda physician hyderabad"
        ogUrl="/"
        canonicalUrl="/"
      />

      <HomeAboutSection />
      <HomeDoctorSection />

      {/* Our Specialities */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 uppercase">
          Our Specialities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { title: "Diabetes", img: "/SpecialitiesImages/Diabetes.webp" },
            { title: "Thyroid", img: "/SpecialitiesImages/Thyroid.webp" },
            { title: "Obesity (Sthoulyam)", img: "/SpecialitiesImages/Obesity.webp" },
            { title: "Skin Problems", img: "/SpecialitiesImages/SkinProblems.webp" },
            { title: "Gynecological Problems", img: "/SpecialitiesImages/GynecologicalProblems.webp" },
            { title: "Digestion Problems", img: "/SpecialitiesImages/DigestionProblems.webp" },
            { title: "Lung Problems", img: "/SpecialitiesImages/lungs.webp" },
            { title: "Musculor Problems", img: "/SpecialitiesImages/MusculorProblems.webp" },
            { title: "Neuro Problems", img: "/SpecialitiesImages/NeuroProblems.webp" },
            { title: "Joint Problems", img: "/SpecialitiesImages/JointProblems.webp" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full overflow-hidden rounded-xl shadow-md bg-white transition hover:shadow-xl"
            >
              <div className="h-40 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-green-50 py-4 px-2 text-center flex-1 flex items-center justify-center">
                <h3 className="text-green-800 font-bold text-sm md:text-base">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}