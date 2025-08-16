import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <Link href="/">
            <Image
              src="/EdvenswaAyurvedaLogo.png"
              alt="Edvenswa Ayurveda Logo"
              width={160}
              height={80}
              className="mb-4"
            />
          </Link>
          <p className="text-sm text-gray-200">
            Edvenswa Ayurveda is dedicated to holistic healing through
            time-tested Ayurvedic practices, combining ancient wisdom with
            modern wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link href="/our-services" className="hover:text-white">Services</Link></li>
            <li><Link href="/treatments" className="hover:text-white">Treatments</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link href="/our-services/consultations-preventive-care" className="hover:text-white">Consultations & Preventive Care</Link></li>
            <li><Link href="/our-services/personalized-assessments" className="hover:text-white">Personalized Assessments</Link></li> 
            <li><Link href="/our-services/tailored-treatment-plans" className="hover:text-white">Tailored Treatment Plans</Link></li>
            <li><Link href="/our-services/personalized-diet-plans" className="hover:text-white">Personalized Diet Plans</Link></li>
            <li><Link href="/our-services/lifestyle-advice" className="hover:text-white">Lifestyle Advice</Link></li>
            <li><Link href="/our-services/swarnamrutha-prashanam" className="hover:text-white">Swarnamrutha Prashanam</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-200">
            📍 Edvenswa Ayurveda, Bowrampet, Hyderabad, Telangana - 500043
          </p>
          <p className="mt-2 text-sm text-gray-200">📞 +91-9100052961</p>
          <p className="text-sm text-gray-200">📧 hyd@edvenswa-ayurveda.com</p>

          {/* Social Icons with PNGs */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/edvenswaayurveda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ContactUsLogos/facebook.png"
                alt="Facebook"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/edvenswa_ayurveda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ContactUsLogos/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.google.com/maps/place/Edvenswa+Ayurveda+-+Bowrampet/@17.5545446,78.3985051,17z/data=!4m6!3m5!1s0x3bcb8f3c508b38f7:0xf8c5c7162510b65c!8m2!3d17.5548725!4d78.4010335!16s%2Fg%2F11j8cl0wfn?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ContactUsLogos/google-maps.png"
                alt="Google"
                width={30}
                height={30}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-5 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Edvenswa Ayurveda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;