// app/treatments/[slug]/page.tsx

import { notFound } from "next/navigation";
import { treatments } from "@/app/data/treatments-data";
import Image from "next/image";
import PageMetadata from "@/components/PageMetaData";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function TreatmentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) return notFound();

  return (
    <>
      <PageMetadata
        title={treatment.metadata[0].title}
        keywords={treatment.metadata[0].keywords}
        description={treatment.metadata[0].description}
        ogUrl={`/treatments/${treatment.slug}`}
        canonicalUrl={`/treatments/${treatment.slug}`}
      />

      <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-green-800 mb-6">
            {treatment.title}
          </h1>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12">
            Experience the ancient healing wisdom of Ayurveda through our traditional
            Panchakarma treatments, designed to restore balance and rejuvenate your entire being.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <Image
              src={treatment.image}
              alt={treatment.title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                {treatment.title} - Traditional Full-Body Massage
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{treatment.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-green-700 font-medium">
                <li>Stimulates lymphatic drainage - promoting natural detoxification</li>
                <li>Lubricates joints - enhancing flexibility and relieving stiffness</li>
                <li>Enhances sleep quality - supporting healthy sleep cycles</li>
              </ul>
                <button className="mt-6 bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg transition">
                  Book Your Appointment
                </button>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Therapeutic Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
            {treatment.benefits.map((benefit, index) => (
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
              Why Choose Our Panchakarma Therapy?
            </h4>
            <p className="text-gray-700 mb-4">
              Regular Abhyangam not only maintains health and well-being but also plays a key role in
              disease prevention. It’s especially beneficial in managing lifestyle-related disorders
              such as stress, insomnia, fatigue, muscle tension, and early signs of aging.
            </p>
            <div className="flex justify-around text-green-700 font-semibold mt-6">
              <div><span className="text-2xl">500+</span><br />Happy Patients</div>
              <div><span className="text-2xl">15+</span><br />Years Experience</div>
              <div><span className="text-2xl">100%</span><br />Natural Treatments</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}