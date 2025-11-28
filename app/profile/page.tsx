"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, CheckCircle2, Award, Users, Shield, FileText, Target, ArrowRight } from "lucide-react"
import { Navbar, Footer } from "@/components/layout"

import ServicesSection from "@/components/layout/services-section"

export default function ProfilePage() {
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

  const equipmentTypes = [
    "X-Ray (R/F, DR, Fixed, Mobile, Portable)",
    "C-Arm",
    "Mammography",
    "Cath Lab (Interventional Radiology)",
    "Dental X-Ray (Intra-Oral, OPG, CBCT)",
    "CT Scan",
  ]

  const services = [
    "Safety and performance test of radiology equipment",
    {
      title: "Licenses advisory",
      subItems: [
        "Radiation Safety Training",
        "Commissioning / Acceptance testing",
        "Radiation Survey of the Radiology Equipment / Institute",
      ],
    },
  ]

  const commitments = [
    "To Achieve highest quality radiographs at minimum cost",
    "Maintain radiology equipment and personnel protection with the highest standards using appropriate quality assurance programs, including tractability of measurements to national standards with appropriate approval by AERB.",
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
                Profile
              </span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8 animate-on-scroll">
            <h1 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-4 2xl:mb-6 3xl:mb-8 animate-fade-in-up-wide delay-100">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Profile
              </span>
            </h1>
            <div className="w-16 h-1 2xl:w-20 2xl:h-1 3xl:w-24 3xl:h-1.5 bg-gradient-to-r from-accent to-primary rounded-full animate-fade-in-up-wide delay-200" />
          </div>

          {/* Company Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 items-center mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12 animate-on-scroll">
            <div className="space-y-6 2xl:space-y-8 3xl:space-y-10">
              <div className="inline-flex items-center gap-3 2xl:gap-4 p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl bg-accent/10 border border-accent/20 animate-fade-in-up delay-100">
                <MapPin className="w-6 h-6 2xl:w-8 2xl:h-8 text-accent" />
                <div>
                  <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-semibold text-foreground mb-1">
                    ANTESO Biomedical (OPC) Pvt Ltd
                  </p>
                  <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70">
                    Head Office: Delhi | RSOs: Bangalore, Hyderabad, Kolkata, Patna, Ranchi, Lucknow, Kullu & more across India
                  </p>
                </div>
              </div>

              <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/80 leading-relaxed animate-fade-in-up-wide delay-200">
                Our corporate operations are centrally managed from our Head Office in Delhi. To ensure seamless service delivery and better regional coverage, we have established Regional Service Offices (RSOs) in key cities, including Bangalore, Hyderabad, Kolkata, Patna, Ranchi, Lucknow, and Kullu. This widespread network enables us to provide faster support, efficient coordination, and a stronger presence across India.
              </p>
            </div>

            {/* Quality Assurance Logo */}
            <div className="flex justify-center lg:justify-end animate-on-scroll">
              <div className="animate-scale-in delay-300">
                <img
                  src="/qa.png"
                  alt="Quality Assurance"
                  className="w-72 h-72 2xl:w-80 2xl:h-80 3xl:w-96 3xl:h-96 object-cover"
                  style={{ display: 'block', opacity: 1, visibility: 'visible' }}
                />
              </div>
            </div>
          </div>

          {/* Range of Equipment */}
          <div className="mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 animate-on-scroll border-t border-border pt-20 2xl:pt-24 3xl:pt-28 4xl:pt-32">
            <div className="mb-10 2xl:mb-12 3xl:mb-14 4xl:mb-16">
              <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold text-foreground mb-2 2xl:mb-3 animate-fade-in-up-wide delay-100">
                Range of Equipment
              </h2>
              <div className="w-16 h-1 2xl:w-20 2xl:h-1.5 bg-gradient-to-r from-accent to-primary rounded-full animate-fade-in-up-wide delay-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-8">
              {equipmentTypes.map((equipment, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-3 2xl:gap-4 p-3 2xl:p-4 3xl:p-5 rounded-xl 2xl:rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5 text-white" />
                  </div>
                  
                  {/* Text content */}
                  <div className="relative z-10 flex-1">
                    <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300 leading-snug">
                      {equipment}
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Team Description */}
          <div className="mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 animate-on-scroll">
            <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl 2xl:rounded-3xl p-8 2xl:p-12 3xl:p-16 4xl:p-20 border border-accent/20">
              <div className="flex items-start gap-4 2xl:gap-6 mb-6 2xl:mb-8">
                <div className="p-3 2xl:p-4 rounded-xl bg-accent/20 animate-fade-in-up delay-100">
                  <Users className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 2xl:mb-6 text-foreground animate-fade-in-up-wide delay-100">
                    Our Professional Team
                  </h3>
                  <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 leading-relaxed animate-fade-in-up-wide delay-200">
                    Our professional team of engineers and technicians are fully trained, multi modality, multi-vendor
                    specialists who are backed up by physicians and radiation protection officers. You will find attached
                    quotations and supporting documents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* We Provide Services */}
          <div className="mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 animate-on-scroll border-t border-border pt-20 2xl:pt-24 3xl:pt-28 4xl:pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24">
              <div>
                <div className="flex items-center gap-4 2xl:gap-6 mb-8 2xl:mb-10">
                  <div className="p-3 2xl:p-4 rounded-xl bg-accent/20 animate-fade-in-up delay-100">
                    <Shield className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-accent" />
                  </div>
                  <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold text-foreground animate-fade-in-up-wide delay-100">
                    We Provide Services
                  </h2>
                </div>
                <div className="space-y-4 2xl:space-y-6">
                  {services.map((service, i) => (
                    <div key={i} className="space-y-3 2xl:space-y-4 animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                      {typeof service === "string" ? (
                        <div className="flex items-start gap-3 2xl:gap-4">
                          <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-accent flex-shrink-0 mt-1" />
                          <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/80">{service}</p>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start gap-3 2xl:gap-4">
                            <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-accent flex-shrink-0 mt-1" />
                            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-semibold text-foreground">
                              {service.title}
                            </p>
                          </div>
                          <div className="ml-8 2xl:ml-10 space-y-2 2xl:space-y-3">
                            {service.subItems.map((subItem, j) => (
                              <div key={j} className="flex items-start gap-3 2xl:gap-4 animate-fade-in-up" style={{ animationDelay: `${0.3 + j * 0.05}s` }}>
                                <ChevronRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-accent/70 flex-shrink-0 mt-1" />
                                <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70">
                                  {subItem}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Image */}
              <div className="relative rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-xl bg-background flex items-center justify-center animate-on-scroll">
                <div className="animate-scale-in delay-300">
                  <img
                    src="/team.jpg"
                    alt="ANTESO Biomedical professional team"
                    className="max-w-full h-auto rounded-2xl 2xl:rounded-3xl"
                    style={{ 
                      display: 'block', 
                      opacity: 1, 
                      visibility: 'visible',
                      mixBlendMode: 'darken',
                      filter: 'brightness(1.05) contrast(1.1)'
                    }}
                    onError={(e) => {
                      console.error('Image failed to load:', e)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* We Commit */}
          <div className="mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 animate-on-scroll">
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl 2xl:rounded-3xl p-8 2xl:p-12 3xl:p-16 4xl:p-20 border border-primary/20">
              <div className="flex items-center gap-4 2xl:gap-6 mb-8 2xl:mb-10">
                <div className="p-3 2xl:p-4 rounded-xl bg-primary/20 animate-fade-in-up delay-100">
                  <Target className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-primary" />
                </div>
                <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold text-foreground animate-fade-in-up-wide delay-100">
                  We Commit
                </h2>
              </div>
              <div className="space-y-4 2xl:space-y-6">
                {commitments.map((commitment, i) => (
                  <div key={i} className="flex items-start gap-3 2xl:gap-4 animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                    <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/80 leading-relaxed">
                      {commitment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Services Section */}
      <ServicesSection />

      <Footer />
    </main>
  )
}

