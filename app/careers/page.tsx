"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle2, Users, Target, Briefcase, Mail, Heart, Lightbulb, Award, ArrowRight } from "lucide-react"
import { Navbar, Footer } from "@/components/layout"

export default function CareersPage() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const sectors = [
    "Marketing",
    "Customer Support",
    "Consultancy Services",
    "Quality Assurance",
    "Technical Services",
    "Research & Development"
  ]

  const values = [
    {
      icon: <Users className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-accent" />,
      title: "Flat Organization",
      description: "Empowering every team member with direct access to leadership and decision-making processes."
    },
    {
      icon: <Lightbulb className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-accent" />,
      title: "Innovation First",
      description: "Fostering a culture of continuous learning and cutting-edge solutions in biomedical technology."
    },
    {
      icon: <Award className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-accent" />,
      title: "Professional Excellence",
      description: "Maintaining the highest standards of ethical behavior and professional integrity."
    },
    {
      icon: <Heart className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-accent" />,
      title: "Employee Growth",
      description: "Investing in our people through comprehensive training and career development programs."
    }
  ]

  const jobOpenings = [
    {
      title: "Sales / Sr. Sales Executive",
      department: "Sales & Marketing",
      location: "Banglore, India",
      type: "Full-time",
      description: "We are looking for an experienced Sales Executive to join our dynamic team. The ideal candidate will be responsible for developing new business opportunities and maintaining relationships with healthcare institutions."
    }
  ]

  return (
    <main className="w-full bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 2xl:pt-40 3xl:pt-48 4xl:pt-56 pb-12 2xl:pb-16 3xl:pb-20 4xl:pb-24 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/8 to-transparent pointer-events-none" />
        <div className="max-w-4xl 2xl:max-w-[80rem] 3xl:max-w-[100rem] 4xl:max-w-[128rem] 5xl:max-w-[176rem] 6xl:max-w-[208rem] mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 animate-fade-in">
            <nav className="flex items-center gap-1" aria-label="Breadcrumb">
              <Link 
                href="/" 
                className="group relative flex items-center gap-1 px-3 2xl:px-3.5 3xl:px-4 py-1.5 2xl:py-2 3xl:py-2.5 rounded-lg text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg font-medium text-foreground/80 hover:text-accent-foreground hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all duration-300 hover:shadow-md hover:shadow-accent/20"
              >
                <span className="relative z-10">Home</span>
              </Link>
              <div className="flex items-center px-0.5">
                <ChevronRight className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 3xl:w-4 3xl:h-4 text-foreground/30" />
              </div>
              <span className="flex items-center gap-1 px-3 2xl:px-3.5 3xl:px-4 py-1.5 2xl:py-2 3xl:py-2.5 rounded-lg text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg font-semibold text-accent-foreground bg-gradient-to-r from-accent to-primary shadow-sm border border-accent/30">
                Careers
              </span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24 animate-on-scroll">
            <h1 className="text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold mb-4 2xl:mb-6 3xl:mb-8 animate-fade-in-up-wide delay-100">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Careers
              </span>
            </h1>
            <div className="w-24 h-1 2xl:w-32 2xl:h-1.5 3xl:w-40 3xl:h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-fade-in-up-wide delay-200" />
          </div>

          {/* Company Overview */}
          <div className="mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl 2xl:rounded-3xl p-8 2xl:p-10 3xl:p-12 4xl:p-16 border border-accent/20 animate-fade-in-up-wide delay-300">
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/90 leading-relaxed">
                <span className="font-semibold text-accent">ANTESO Biomedical (OPC) Pvt Ltd</span> is a company of Indian origin, 
                committed to excellence in <span className="font-semibold text-accent">Quality Assurance Testing of Radiology Equipments</span> 
                as per AERB Guidelines. We foster an innovative culture where diverse experiences converge to create cutting-edge solutions 
                in the biomedical field. Our team is our greatest asset, and we believe in empowering every employee to reach their full potential.
              </p>
            </div>
          </div>

          {/* Our Sectors */}
          <div className="mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            <div className="mb-8 2xl:mb-10 3xl:mb-12">
              <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold mb-3 2xl:mb-4 text-foreground animate-fade-in-up-wide delay-100">
                Our Sectors
              </h2>
              <div className="w-20 h-1 2xl:w-24 2xl:h-1.5 3xl:w-28 3xl:h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-fade-in-up-wide delay-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6 3xl:gap-8">
              {sectors.map((sector, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-3 2xl:gap-4 p-3 2xl:p-4 3xl:p-5 rounded-xl 2xl:rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon with gradient background */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-9 h-9 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <p className="relative z-10 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground font-semibold group-hover:text-accent transition-colors duration-300">
                    {sector}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* We Believe In Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-14 mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            <div className="relative h-64 2xl:h-72 3xl:h-80 4xl:h-96 rounded-2xl 2xl:rounded-3xl overflow-hidden animate-scale-in delay-300 flex items-center justify-center mt-4 2xl:mt-6 3xl:mt-8 4xl:mt-10">
              <img
                src="/career.jpg"
                alt="We Believe In"
                className="w-full h-full object-cover rounded-2xl 2xl:rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-center animate-fade-in-up-wide delay-400">
              <h2 className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 2xl:mb-5 3xl:mb-6 text-foreground">
                We Believe In
              </h2>
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl 2xl:rounded-3xl p-5 2xl:p-6 3xl:p-7 4xl:p-8 border border-primary/20">
                <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/90 leading-relaxed italic">
                  "We believe in a <span className="font-semibold text-accent">flat organization</span> where every voice matters. 
                  We empower our employees with the freedom to innovate and make decisions. Through continuous knowledge upgradation 
                  and comprehensive training programs, we strive to be the <span className="font-semibold text-accent">best Admired Biomedical company</span>. 
                  Our commitment to ethical behavior, professionalism, and innovation drives everything we do. 
                  <span className="font-semibold text-primary"> Our employees are our biggest assets</span>, and we invest in their growth 
                  to ensure mutual success."
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold mb-8 2xl:mb-10 3xl:mb-12 text-center text-foreground animate-fade-in-up-wide delay-100">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8 3xl:gap-10">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="p-6 2xl:p-8 3xl:p-10 rounded-xl 2xl:rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="mb-4 2xl:mb-6 p-3 2xl:p-4 rounded-xl bg-accent/10 w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold mb-3 2xl:mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold mb-6 2xl:mb-8 3xl:mb-10 text-foreground animate-fade-in-up-wide delay-100">
              Job Openings
            </h2>
            <div className="mb-6 2xl:mb-8">
              <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 font-semibold">
                Current Openings:
              </p>
            </div>
            <div className="space-y-6 2xl:space-y-8">
              {jobOpenings.map((job, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl 2xl:rounded-2xl p-6 2xl:p-8 3xl:p-10 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-2 2xl:mb-3 text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 2xl:gap-4 mb-4">
                        <span className="px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-lg bg-accent/10 text-accent text-sm 2xl:text-base font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-lg bg-primary/10 text-primary text-sm 2xl:text-base font-medium">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-lg bg-muted text-foreground/80 text-sm 2xl:text-base font-medium">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/80 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl 2xl:rounded-3xl p-8 2xl:p-10 3xl:p-12 4xl:p-16 border border-accent/20 animate-on-scroll">
            <div className="flex items-start gap-6 2xl:gap-8">
              <div className="p-4 2xl:p-5 3xl:p-6 rounded-xl 2xl:rounded-2xl bg-accent/20 flex-shrink-0 animate-fade-in-up delay-100">
                <Mail className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-accent" />
              </div>
              <div className="flex-1 animate-fade-in-up delay-200">
                <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 2xl:mb-6 text-foreground">
                  Don't See a Relevant Opening?
                </h3>
                <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 leading-relaxed mb-6 2xl:mb-8">
                  We're always looking for talented individuals to join our team. If you don't find a position that matches your profile, 
                  please send your resume to{" "}
                  <a 
                    href="mailto:info@antesobiomedicalopc.com" 
                    className="font-semibold text-accent hover:underline"
                  >
                    info@antesobiomedicalopc.com
                  </a>
                  . We'll keep your profile on file and contact you if a suitable position becomes available in the future.
                </p>
                <a
                  href="mailto:info@antesobiomedicalopc.com"
                  className="inline-flex items-center gap-2 px-6 py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 rounded-lg bg-gradient-to-r from-accent to-primary text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Your Resume</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

