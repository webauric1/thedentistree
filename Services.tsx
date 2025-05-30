
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Shield,
  Sparkles,
  Smile,
  Heart,
  Baby,
  Zap,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "General Dentistry",
      description: "Comprehensive oral health care including routine checkups, cleanings, and preventive treatments to maintain optimal dental health.",
      features: [
        "General dental check-ups",
        "Scaling/Polishing",
        "Dental Fillings",
        "Dental Prophylaxis",
        "Dental Restoration",
        "Panoramic radiology",
        "Conservative Dentistry"
      ],
      duration: "30-60 mins",
      price: "₹300 onwards",
      image: "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children with Dr. Siddharth Mahajan, our expert Pediatric Dentist with 9+ years of experience.",
      features: [
        "Child dental care",
        "Pit and Fissure Sealant",
        "Dental Sealant",
        "Atypical Swallowing Treatment",
        "Child-friendly examinations",
        "Preventive treatments for kids"
      ],
      duration: "30-45 mins",
      price: "₹300 onwards",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Smile,
      title: "Orthodontic Treatments",
      description: "Expert orthodontic care by Dr. Isha Mahajan, certified Invisalign provider specializing in lingual orthodontics and dentofacial orthopedics.",
      features: [
        "Metal Braces",
        "Ceramic Braces",
        "Invisible And Clear Braces (Invisalign)",
        "Damon System",
        "Lingual Orthodontics",
        "Dentofacial Orthopedics"
      ],
      duration: "12-24 months",
      price: "₹25,000 onwards",
      image: "https://images.unsplash.com/photo-1606811841235-cecc9b2b9ea2?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic treatments designed to enhance the appearance of your teeth and boost your confidence.",
      features: [
        "Smile Design",
        "Smile Makeover",
        "Cosmetic Veneers/Bonding",
        "Ceramic Veneers/Crowns",
        "Zirconia Crowns",
        "Discolored Tooth Restoration",
        "Ceramic Crowns and Bridges",
        "Composite Bondings",
        "Cosmetic Filling",
        "Stained Teeth Treatment"
      ],
      duration: "1-3 hours",
      price: "₹2,000 onwards",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Heart,
      title: "Surgical Procedures",
      description: "Advanced surgical treatments performed with precision and care using the latest technology and techniques.",
      features: [
        "Tooth Extraction",
        "Surgical Tooth Extraction",
        "Impaction/Impacted Tooth Extraction",
        "Dental Implant Fixing",
        "Gum Disease Treatment/Surgery"
      ],
      duration: "30-120 mins",
      price: "₹1,500 onwards",
      image: "https://images.unsplash.com/photo-1606811841593-a2e3de17a1d0?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: "Specialized Treatments",
      description: "Advanced specialized dental treatments including root canal therapy, sedation dentistry, and sleep medicine.",
      features: [
        "RCT - Single Sitting",
        "Post and Core",
        "Porcelain inlays and onlays",
        "Inlays and Onlays",
        "Amalgam Removal",
        "Dental Sleep Medicine (Snoring and Sleep Apnea Management)",
        "Sedation Dentistry (Conscious Sedation & Deep Sedation)",
        "Treatment for Grinded Teeth",
        "Traumatic injuries Dental Ceramic",
        "Oral Thrush Treatment"
      ],
      duration: "60-180 mins",
      price: "₹2,500 onwards",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Comprehensive dental care services designed to meet all your oral health needs
            with the latest technology and gentle care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-xl overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dental-blue/20"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-dental-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 lg:p-12 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-dental-blue">
                          {service.title}
                        </h2>
                        <Badge className="bg-dental-teal text-white">
                          Popular
                        </Badge>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-dental-blue">What's Included:</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-dental-teal flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-dental-teal mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Duration</p>
                        <p className="font-semibold text-dental-blue">{service.duration}</p>
                      </div>
                      <div className="text-center">
                        <Star className="h-5 w-5 text-dental-teal mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Starting at</p>
                        <p className="font-semibold text-dental-blue">{service.price}</p>
                      </div>
                      <div className="text-center">
                        <Heart className="h-5 w-5 text-dental-teal mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Rating</p>
                        <p className="font-semibold text-dental-blue">4.9/5</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-dental-blue hover:bg-dental-blue-dark text-white px-6 py-3 rounded-full"
                        asChild
                      >
                        <Link to="/contact">Book Consultation</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-dental-teal text-dental-teal hover:bg-dental-teal hover:text-white px-6 py-3 rounded-full"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Dental Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert team to discuss your dental needs
            and create a personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-dental-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg"
              asChild
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dental-blue px-8 py-4 rounded-full text-lg"
            >
              Call Now: +91 98766 01854
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
