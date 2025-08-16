"use client";
import React from "react";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import PageMetadata from "@/components/PageMetaData";
import Image from "next/image";
import Link from "next/link";
import { treatments } from "../data/treatments-data";

export default function Treatments() {
    return (
        <section className="bg-gradient-to-br from-green-100 to-green-50 min-h-screen">

            <PageMetadata
                title="Ayurvedic Treatments in Hyderabad | Panchakarma Therapy | Edvenswa Ayurveda"
                description="Authentic Ayurvedic treatments in Hyderabad including Panchakarma, Abhyangam, Shirodhara, specialized Vasti therapies & wellness retreats. Expert therapeutic care with natural healing."
                keywords="panchakarma treatment hyderabad, ayurvedic therapies hyderabad, abhyangam massage hyderabad, shirodhara treatment hyderabad, kati vasti hyderabad, therapeutic ayurveda treatments, detox therapy hyderabad, rejuvenation treatments hyderabad"
                ogUrl="/treatments"
                canonicalUrl="/treatments"
            />

            <div className="text-center pt-3 mb-10 px-4">
                <h2 className="inline-block uppercase tracking-wider text-green-900 font-semibold bg-green-200 px-6 py-3 text-xl md:text-2xl rounded-full">
                    Treatments
                </h2>
                <p className="text-gray-700 mt-2 max-w-2xl mx-auto text-base md:text-lg">
                    Explore our therapeutic treatments designed to detoxify, rejuvenate, and restore your body through the science of Ayurveda.
                </p>
            </div>

            {/* Treatment Cards Grid */}
            <div className="container mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {treatments.map((item) => (
                    <Link href={`/treatments/${item.slug}`} key={item.slug}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-md font-bold text-green-800 mb-2 text-center">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-700 text-center">
                                    {item.shortDescription} {/* ✅ Use shortDescription here */}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}