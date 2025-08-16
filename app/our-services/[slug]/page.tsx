import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/ourservices-data";
import Image from "next/image";
import PageMetadata from "@/components/PageMetaData";
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData.find((item) => item.slug === slug);

    if (!service) return notFound();


    return (
        <>
            <PageMetadata
                title={service.metadata[0].title}
                keywords={service.metadata[0].keywords}
                description={service.metadata[0].description}
                ogUrl={`/our-services/${service.slug}`}
                canonicalUrl={`/our-services/${service.slug}`}
            />

            <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-center text-green-800 mb-6">
                        {service.title}
                    </h1>
                    <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12">
                        {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-green-800 mb-4">
                                {service.title} - Excellence in Care
                            </h2>
                            {/* <p className="text-gray-700 leading-relaxed mb-6">{service.detail}</p> */}
                            <ul className="list-disc pl-5 space-y-2 text-green-700 font-medium">
                                {service.benefits.slice(0, 3).map((b, idx) => (
                                    <li key={idx}>{b.title}</li>
                                ))}
                            </ul>
                                <button className="mt-6 bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg transition">
                                    Book Your Appointment
                                </button>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">In-Depth Health Overview</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
                        {service.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
                            >
                                <h4 className="text-green-800 text-lg font-semibold mb-2">{benefit.title}</h4>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-4xl mx-auto">
                        <h4 className="text-xl font-semibold text-green-800 mb-4">
                            Why Choose Our {service.title}?
                        </h4>
                        <p className="text-gray-700 mb-4">
                            Our team ensures that every service we offer is rooted in traditional Ayurvedic principles while being customized to your unique health needs.
                        </p>
                        <div className="flex justify-around text-green-700 font-semibold mt-6">
                            <div><span className="text-2xl">1000+</span><br />Satisfied Clients</div>
                            <div><span className="text-2xl">20+</span><br />Specialized Services</div>
                            <div><span className="text-2xl">100%</span><br />Natural Care</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
