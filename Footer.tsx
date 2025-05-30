
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Patient Info", href: "/patient-info" }
  ];

  const services = [
    "General Dentistry",
    "Pediatric Dentistry",
    "Orthodontic Treatments",
    "Cosmetic Dentistry",
    "Surgical Procedures",
    "Specialized Treatments",
    "Dental Implants",
    "Root Canal Treatment"
  ];

  return (
    <footer className="bg-dental-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-playfair mb-2">Dentistree</h3>
              <p className="text-blue-100">
                Your trusted dental care partner in Chandigarh, providing comprehensive
                dental services with a gentle touch and modern technology.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-dental-teal" />
                <span className="text-sm">H. No. 1854, Himalaya Marg, Sector 22B, Chandigarh, 160022</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dental-teal" />
                <span className="text-sm">+91 98766 01854</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-dental-teal" />
                <span className="text-sm">@dentistree_chandigarh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-dental-teal" />
                <span className="text-sm">Dr. Siddharth: Tue-Sat 3PM-7:30PM | Dr. Isha: Mon-Sat 9:30AM-2PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-blue-100 text-sm">
              Subscribe to our newsletter for dental health tips and clinic updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
              />
              <Button className="w-full bg-dental-teal hover:bg-dental-teal/90 text-white">
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/dentistree_chandigarh" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2024 Dentistree Dental Clinic. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-blue-100 text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span className="text-blue-100 text-sm">in Chandigarh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
