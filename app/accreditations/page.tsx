"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Award, FileText, Shield, CheckCircle2 } from "lucide-react"
import { Navbar, Footer, ServicesSection } from "@/components/layout"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/overlays/dialog"

export default function AccreditationsPage() {
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

  const certificates = [
    {
      image: "/Accreditations/certificate1.jpg",
      alt: "AERB Approval Certificate"
    },
    {
      image: "/Accreditations/certificate2.jpg",
      alt: "AERB Registration Certificate"
    },
    {
      image: "/Accreditations/certificate3.jpg",
      alt: "NABL Accreditation Certificate"
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
                Accreditations
              </span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 animate-on-scroll">
            <h1 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold mb-4 2xl:mb-6 3xl:mb-8 animate-fade-in-up-wide delay-100">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>
            <div className="w-16 h-1 2xl:w-20 2xl:h-1 3xl:w-24 3xl:h-1.5 bg-gradient-to-r from-accent to-primary rounded-full animate-fade-in-up-wide delay-200" />
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-16 mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32">
            {certificates.map((cert, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div
                    className="group relative overflow-hidden hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-on-scroll cursor-pointer"
                  >
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[90rem] 4xl:max-w-[110rem] w-full p-0 bg-transparent border-0 shadow-none">
                  <DialogTitle className="sr-only">{cert.alt}</DialogTitle>
                  <div className="relative w-full flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-lg p-4 2xl:p-6">
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Accreditation Info Section */}
          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl 2xl:rounded-3xl p-8 2xl:p-10 3xl:p-12 4xl:p-16 border border-accent/20 mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 animate-on-scroll">
            <div className="flex items-start gap-6 2xl:gap-8 3xl:gap-10">
              <div className="p-4 2xl:p-5 3xl:p-6 rounded-xl 2xl:rounded-2xl bg-accent/20 flex-shrink-0 animate-fade-in-up delay-100">
                <FileText className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-accent" />
              </div>
              <div className="flex-1 animate-fade-in-up delay-200">
                <h3 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold mb-4 2xl:mb-6 text-foreground">
                  Our Accreditations & Certifications
                </h3>
                <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 leading-relaxed mb-6 2xl:mb-8">
                  <span className="font-semibold text-accent">ANTESO Biomedical (OPC) Pvt Ltd</span> is proud to be{" "}
                  <span className="font-semibold text-accent">AERB authorized</span> and{" "}
                  <span className="font-semibold text-accent">NABL accredited</span> for providing comprehensive quality assurance, 
                  maintenance, and repair services for radiology equipment. Our certifications demonstrate our commitment to 
                  maintaining the highest standards of quality, safety, and regulatory compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-6">
                  <div className="flex items-center gap-3 2xl:gap-4 p-4 2xl:p-5 rounded-xl bg-card border border-border/50">
                    <Shield className="w-6 h-6 2xl:w-8 2xl:h-8 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-base 2xl:text-lg">AERB Authorized</p>
                      <p className="text-sm 2xl:text-base text-foreground/70">Atomic Energy Regulatory Board</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 2xl:gap-4 p-4 2xl:p-5 rounded-xl bg-card border border-border/50">
                    <Award className="w-6 h-6 2xl:w-8 2xl:h-8 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-base 2xl:text-lg">NABL Accredited</p>
                      <p className="text-sm 2xl:text-base text-foreground/70">ISO/IEC 17025:2017</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <Footer />
    </main>
  )
}

