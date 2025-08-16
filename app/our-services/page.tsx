"use client";
import React from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import PageMetadata from "@/components/PageMetaData";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "../data/ourservices-data";

export default function OurServices() {
    return (
        <section className="bg-gradient-to-br from-green-100 to-green-50">

            <PageMetadata
                title="Ayurvedic Services in Hyderabad | Consultations & Preventive Care | Edvenswa"
                description="Comprehensive Ayurvedic services in Hyderabad including consultations, Prakriti analysis, personalized treatment plans, diet counseling & Swarnamrutha Prashanam for children."
                keywords="ayurvedic consultation hyderabad, prakriti analysis hyderabad, pulse diagnosis ayurveda, personalized diet plans ayurveda, lifestyle counseling ayurveda, preventive ayurveda care, swarnamrutha prashanam hyderabad, ayurvedic health assessment"
                ogUrl="/services"
                canonicalUrl="/services"
            />

            {/* Page Heading */}
            <div className="text-center pt-3 mb-10 px-4">
                <h2 className="inline-block uppercase tracking-wider text-green-900 font-semibold bg-green-200 px-6 py-3 text-xl md:text-2xl rounded-full">
                    Our Services
                </h2>
                <p className="text-gray-700 mt-2 max-w-2xl mx-auto text-base md:text-lg">
                    Discover our specialized offerings that promote healing and balance through the power of Ayurveda.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="container mx-auto px-4 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {servicesData.map((service) => (
                    <Link key={service.slug} href={`/our-services/${service.slug}`}>
                        <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-24 h-24 min-w-[6rem] rounded overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 object-cover rounded"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-md md:text-lg font-semibold text-green-800 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{service.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
