'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import PageMetadata from '@/components/PageMetaData';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        const { name, phone, email, message } = data;

        // ******EMAIL ADDRESS TO SEND THE FORM DATA********
        const ToEmail = "edlamanideep0@gmail.com";  //EMAIL ADDRESS TO SEND THE FORM DATA

        const mailTo = `https://mail.google.com/mail/?view=cm&fs=1&to=${ToEmail}&su=Appointment%20Request&body=${encodeURIComponent(
            `Hello Ayurveda Team,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

Thank you.`
        )}`;

        window.open(mailTo, '_blank');
        reset();
    };

    return (
        <section className="bg-gradient-to-r from-green-50 to-green-100 relative overflow-hidden">
            <PageMetadata
                title="Contact Ayurveda Hospital Hyderabad | Book Appointment | Bowrampet"
                description="Contact Ayurveda Hospital in Hyderabad. Book appointments at Bowrampet & Nallagandla branches. Call +91 9123456789 for expert Ayurvedic consultation and treatments."
                keywords="ayurvedic hospital, ayurveda clinic, book ayurveda appointment hyderabad, ayurvedic doctor consultation hyderabad, ayurveda hospital contact, ayurveda hospital near me hyderabad"
                ogUrl="/"
                canonicalUrl="/"
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="order-2 md:order-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                            <p className="text-gray-600">Get in touch with us for your Ayurvedic treatment needs</p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">+91 9123456789</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">Ayurveda@ayurveda.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-4">Hospital Addresses</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Gandimisamma Address */}
                                        <div>
                                            <h5 className="font-medium text-green-800 mb-1">Gandimisamma</h5>
                                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                                5th Floor, Ayurveda Towers,<br />
                                                Gandimisamma, Jeedimetla,<br />
                                                Bowrampet, Hyderabad,<br />
                                                Telangana - 500043<br />
                                                <strong>Location:</strong>{' '}
                                                <a
                                                    href="https://www.google.com/maps/place/Edvenswa+Ayurveda+-+Bowrampet/@17.5545446,78.3985051,17z/data=!4m6!3m5!1s0x3bcb8f3c508b38f7:0xf8c5c7162510b65c!8m2!3d17.5548725!4d78.4010335!16s%2Fg%2F11j8cl0wfn?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block ml-1"
                                                >
                                                    <Image
                                                        src="/ContactUsLogos/google-maps.png"
                                                        alt="Google Maps"
                                                        width={23}
                                                        height={23}
                                                        className="hover:scale-110 transition-transform duration-200"
                                                    />
                                                </a>
                                            </p>
                                        </div>

                                        {/* Nallagandla Address */}
                                        <div>
                                            <h5 className="font-medium text-green-800 mb-1">Nallagandla</h5>
                                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                                Survey 312 & 313, Sai Krishna Bhavan,<br />
                                                Sri Sairam Nagar Colony, Plot 14,<br />
                                                1st Cross Rd, Tellapur, Nallagandla,<br />
                                                Hyderabad, Telangana - 500019<br />
                                                <strong>Location:</strong>{' '}
                                                <a
                                                    href="https://www.google.com/maps/place/Edvenswa+Ayurveda+-+Nallagandla/@17.4580984,78.3043612,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93476b34cbc7:0xf781a7ffc040ce61!8m2!3d17.4580984!4d78.3069361!16s%2Fg%2F11wmmpdhpp?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block ml-1"
                                                >
                                                    <Image
                                                        src="/ContactUsLogos/google-maps.png"
                                                        alt="Google Maps"
                                                        width={23}
                                                        height={23}
                                                        className="hover:scale-110 transition-transform duration-200"
                                                    />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Clock className="w-6 h-6 text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Working Hours</h4>
                                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                    <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex items-start space-x-4">
                                <div className="w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Follow Us</h4>
                                    <div className="flex gap-4 mt-2">
                                        <a href="https://www.facebook.com/edvenswaayurveda" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/ContactUsLogos/facebook.png"
                                                alt="Facebook"
                                                width={32}
                                                height={32}
                                                className="hover:scale-110 transition-transform duration-200"
                                            />
                                        </a>
                                        <a href="https://www.instagram.com/edvenswa_ayurveda/" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/ContactUsLogos/instagram.png"
                                                alt="Instagram"
                                                width={32}
                                                height={32}
                                                className="hover:scale-110 transition-transform duration-200"
                                            />
                                        </a>
                                        <a href="https://www.google.com/maps/place/Edvenswa+Ayurveda+-+Bowrampet/@17.5545446,78.3985051,17z/data=!4m6!3m5!1s0x3bcb8f3c508b38f7:0xf8c5c7162510b65c!8m2!3d17.5548725!4d78.4010335!16s%2Fg%2F11j8cl0wfn?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/ContactUsLogos/google-maps.png"
                                                alt="Google"
                                                width={29}
                                                height={29}
                                                className="hover:scale-110 transition-transform duration-200"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className="order-1 md:order-2 mt-4 mb-6 bg-white rounded-2xl shadow-lg p-8">

                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Appointment</h3>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                                {typeof errors.name?.message === 'string' && (
                                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                                )}                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Enter a valid 10-digit phone number',
                                        },
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                                {typeof errors.phone?.message === 'string' && (
                                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                                )}                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Enter a valid email address',
                                        },
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                                {typeof errors.email?.message === 'string' && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                )}                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Describe your health concerns"
                                ></textarea>
                                {typeof errors.message?.message === 'string' && (
                                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                                )}                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;