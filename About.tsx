
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Clock,
  Heart,
  Shield,
  Star,
  GraduationCap,
  Stethoscope,
  MapPin,
  Phone,
  Instagram,
  Calendar
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Siddharth Mahajan",
      position: "Pediatric Dentist (Pedodontist)",
      qualification: "MDS - Paedodontics and Preventive Dentistry, BDS",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      specialization: "Pediatric dentistry, Cosmetic dentistry, Implantology, Prosthetic dentistry",
      education: [
        "MDS - Paedodontics and Preventive Dentistry (Sri Guru Ram Das Institute of Dental Sciences Research, 2015)",
        "MDS - Orthodontics and Dentofacial Orthopaedics (Sri Guru Ram Das Institute of Dental Sciences Research, 2015)",
        "BDS (BRS Dental College & Hospital, 2011)",
        "BDS (Genesis Institute of Dental Sciences Research, 2010)"
      ],
      schedule: "Tue-Sat: 3:00PM-7:30PM & 9:30PM-1:30AM, Sun: 3:30PM-7:30PM",
      consultationFee: "₹300",
      memberships: "Indian Dental Association"
    },
    {
      name: "Dr. Isha Mahajan",
      position: "Orthodontist (Braces Specialist)",
      qualification: "MDS - Orthodontics and Dentofacial Orthopaedics",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      specialization: "Lingual orthodontics, Certified Invisalign provider, Dentofacial Orthopedics, Smile Makeover",
      education: [
        "Graduation and Masters in Orthodontics and Dentofacial Orthopaedics (Baba Farid University of Health Sciences, Punjab)"
      ],
      schedule: "Mon-Sat: 9:30AM-2:00PM & 4:30PM-8:30PM, Sun: 10:00AM-2:00PM",
      consultationFee: "₹300",
      memberships: "Certified Invisalign Provider"
    }
  ];

  const achievements = [
    { icon: Award, title: "Established 2015", description: "9+ years serving Chandigarh" },
    { icon: Star, title: "5.0/5 Rating", description: "Based on 693+ patient reviews" },
    { icon: Users, title: "Multi-specialty Clinic", description: "Professional services for all ages" },
    { icon: Shield, title: "Latest Technology", description: "Intraoral Scanner & modern equipment" }
  ];

  const clinicFeatures = [
    "Intraoral Scanner Technology",
    "COVID-19 Safety Protocols",
    "Air Purifier Systems",
    "Sanitized Treatment Areas",
    "Modern Equipment",
    "Humane Treatment Approach"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/10 via-transparent to-dental-teal/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              About Dentistree
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              The Dental Clinic and Implant Centre - Building perfect teeth to create genuine smiles since 2015
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                <Star className="h-5 w-5 mr-2" />
                5.0/5 Rating
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                <Users className="h-5 w-5 mr-2" />
                693+ Reviews
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                <Award className="h-5 w-5 mr-2" />
                Est. 2015
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Established in 2015, Dentistree The Dental Clinic and Implant Centre has been
                    serving Chandigarh for over 9 years as a multispeciality dental clinic dedicated
                    to providing professional dental services to patients of all age groups.
                  </p>
                  <p className="leading-relaxed">
                    Our expertise lies in building perfect teeth to create genuine smiles. Located
                    in the heart of Chandigarh's Sector 22B, we combine the latest medical technology
                    with a humane treatment approach.
                  </p>
                  <p className="leading-relaxed">
                    We are proud to be one of the few clinics in Chandigarh equipped with an
                    Intraoral Scanner, ensuring precise diagnostics and treatment planning for
                    our patients.
                  </p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover-lift border-l-4 border-l-dental-teal">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="h-6 w-6 text-dental-teal" />
                      <h3 className="font-semibold text-dental-blue">Location</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      H. No. 1854, Himalaya Marg<br/>
                      Sector 22B, Chandigarh, 160022<br/>
                      Behind Aroma Petrol Pump
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift border-l-4 border-l-dental-blue">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="h-6 w-6 text-dental-blue" />
                      <h3 className="font-semibold text-dental-blue">Contact</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      +91 98766 01854<br/>
                      Consultation Fee: ₹300
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Dentistree Dental Clinic"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-dental-blue to-dental-teal rounded-full flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-dental-blue">@dentistree_chandigarh</p>
                      <p className="text-sm text-gray-600">1,481 followers</p>
                      <p className="text-xs text-dental-teal">#We_design_beautiful_smiles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue mb-6">
              State-of-the-Art Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modern clinic features the latest technology and safety protocols
              to ensure the best possible care for our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift text-center group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-dental-teal to-dental-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-dental-blue text-lg">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing
              you with the highest quality care and personalized treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-dental-teal text-white text-sm">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="md:col-span-3 p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-dental-blue mb-2">{member.name}</h3>
                      <p className="text-dental-teal font-semibold text-lg">{member.position}</p>
                      <p className="text-gray-600">{member.specialization}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-dental-teal mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-dental-blue">Education</p>
                          {member.education.map((edu, idx) => (
                            <p key={idx} className="text-sm text-gray-600">{edu}</p>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-dental-teal mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-dental-blue">Schedule</p>
                          <p className="text-sm text-gray-600">{member.schedule}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-dental-teal" />
                        <div>
                          <p className="font-medium text-dental-blue">Consultation Fee: {member.consultationFee}</p>
                        </div>
                      </div>

                      {member.memberships && (
                        <div className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-dental-teal mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-dental-blue">Professional Memberships</p>
                            <p className="text-sm text-gray-600">{member.memberships}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      className="bg-dental-blue hover:bg-dental-blue-dark text-white rounded-full px-6"
                      asChild
                    >
                      <Link to="/contact">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
              in dental care and patient satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift text-center group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-dental-teal to-dental-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-dental-blue text-xl mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
