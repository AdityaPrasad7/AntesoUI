"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle2, MessageSquare, FileText, Users, Target, Shield } from "lucide-react"
import { Navbar, Footer } from "@/components/layout"

export default function ConsultationPage() {
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

  const consultationServices = [
    "Consultant services for Personal Monitoring Services (TLD badges)",
    "Room Layout plan as per AERB Requirements & Guidelines, AERB registration / license, Annual status report",
    "Pre Installation Survey of Radiation Equipment as per AERB Guidelines",
    "RSO Approval from AERB",
    "De Commissioning & Re Installation of Radiation Equipment as per AERB Guidelines",
    "Radiation safety training for Hospital Staff",
    "Commissioning / Acceptance testing",
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
              <Link
                href="/services"
                className="group relative flex items-center gap-1 px-3 2xl:px-3.5 3xl:px-4 py-1.5 2xl:py-2 3xl:py-2.5 rounded-lg text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg font-medium text-foreground/80 hover:text-accent-foreground hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all duration-300 hover:shadow-md hover:shadow-accent/20"
              >
                <span className="relative z-10">Services</span>
              </Link>
              <div className="flex items-center px-0.5">
                <ChevronRight className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 3xl:w-4 3xl:h-4 text-foreground/30" />
              </div>
              <span className="flex items-center gap-1 px-3 2xl:px-3.5 3xl:px-4 py-1.5 2xl:py-2 3xl:py-2.5 rounded-lg text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg font-semibold text-accent-foreground bg-gradient-to-r from-accent to-primary shadow-sm border border-accent/30">
                Consultation
              </span>
            </nav>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 mt-12 2xl:mt-16 3xl:mt-20 4xl:mt-24">
            {/* Left Content */}
            <div className="space-y-8 2xl:space-y-10 3xl:space-y-12 animate-on-scroll">
              <div>
                <h1 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 animate-fade-in-up-wide delay-100">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Consultations
                  </span>
                </h1>

                {/* Introduction */}
                <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl 2xl:rounded-3xl p-6 2xl:p-8 3xl:p-10 4xl:p-12 border border-accent/20 mb-8 2xl:mb-10 3xl:mb-12 animate-fade-in-up-wide delay-200">
                  <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/90 leading-relaxed">
                    Our expert consultation services provide comprehensive guidance and support for all your radiation safety and regulatory compliance needs. We ensure your facility meets all <span className="font-semibold text-accent">AERB requirements</span> and maintains the highest standards of safety.
                  </p>
                </div>

                 {/* Services List */}
                 <div className="space-y-2 2xl:space-y-2.5 3xl:space-y-3">
                   {consultationServices.map((service, i) => (
                     <div key={i} className="flex items-start gap-3 2xl:gap-4 p-3 2xl:p-3.5 3xl:p-4 rounded-xl 2xl:rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.05}s` }}>
                       <div className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                         <CheckCircle2 className="w-3 h-3 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5 text-white" />
                       </div>
                       <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground leading-relaxed flex-1">{service}</p>
                     </div>
                   ))}
                 </div>

                {/* Benefits Section */}
                <div className="mt-8 2xl:mt-10 3xl:mt-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl 2xl:rounded-3xl p-6 2xl:p-8 3xl:p-10 4xl:p-12 border border-primary/20 animate-fade-in-up-wide delay-500">
                  <div className="flex items-start gap-4 2xl:gap-6">
                    <div className="p-3 2xl:p-4 rounded-xl bg-primary/20">
                      <Target className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 2xl:mb-6 text-foreground">
                        Why Choose Our Consultation Services?
                      </h3>
                      <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 leading-relaxed">
                        Our experienced consultants work closely with your team to ensure seamless compliance, optimal facility design, and comprehensive training programs tailored to your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - QA Tools */}
            <div className="animate-on-scroll">
              <div className="sticky top-20 2xl:top-24">
                <div className="bg-gradient-to-br from-muted/50 to-background rounded-2xl 2xl:rounded-3xl p-6 2xl:p-8 3xl:p-10 4xl:p-12 border border-border shadow-lg">
                  <h2 className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-6 2xl:mb-8 text-accent animate-fade-in-up-wide delay-100">
                    QA Tools
                  </h2>
                  <div className="relative h-[800px] 2xl:h-[900px] 3xl:h-[1000px] overflow-hidden rounded-xl 2xl:rounded-2xl mask-gradient">
                    <div className="animate-scroll-continuous">
                      <div className="flex flex-col">
                        {[...Array(2)].map((_, loopIndex) => (
                          <div key={loopIndex} className="flex flex-col gap-4 2xl:gap-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <div key={`${loopIndex}-${num}`} className="flex-shrink-0 w-full rounded-xl 2xl:rounded-2xl overflow-hidden bg-muted/30 p-2 animate-fade-in-up" style={{ animationDelay: `${0.2 + (num - 1) * 0.05}s` }}>
                                <img
                                  src={`/tools/tools${num}.jpg`}
                                  alt={`QA Tool ${num}`}
                                  className="w-full h-auto object-cover rounded-lg animate-scale-in"
                                  style={{ animationDelay: `${0.3 + (num - 1) * 0.05}s` }}
                                  loading="eager"
                                  onError={(e) => {
                                    console.error(`Failed to load image: /tools/tools${num}.jpg`);
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

