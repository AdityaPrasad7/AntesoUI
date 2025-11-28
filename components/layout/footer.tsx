"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
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

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="relative py-12 2xl:py-14 3xl:py-16 4xl:py-18 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32">
        <div className="max-w-4xl 2xl:max-w-[80rem] 3xl:max-w-[100rem] 4xl:max-w-[128rem] 5xl:max-w-[176rem] 6xl:max-w-[208rem] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-14 mb-10 2xl:mb-12 3xl:mb-14 4xl:mb-16 animate-on-scroll">
            {/* Company Info */}
            <div className="lg:col-span-1 animate-fade-in-up delay-100">
              <div className="flex items-center gap-3 2xl:gap-4 3xl:gap-5 mb-4 2xl:mb-5 3xl:mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/logo.png"
                      alt="ANTESO Biomedical Logo"
                      width={200}
                      height={85}
                      className="h-12 2xl:h-14 3xl:h-16 4xl:h-18 w-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70 leading-relaxed mb-4 2xl:mb-5">
                Advanced diagnostic imaging solutions for healthcare excellence. Committed to quality assurance and innovation.
              </p>
              <div className="flex items-center gap-2 text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg text-foreground/60">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up delay-200">
              <h4 className="font-bold mb-4 2xl:mb-5 3xl:mb-6 text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground relative inline-block">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Services</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
              </h4>
              <ul className="space-y-2 2xl:space-y-2.5 3xl:space-y-3">
                {[
                  { name: "X-Ray Systems", href: "/#services" },
                  { name: "CT Imaging", href: "/#services" },
                  { name: "Mammography", href: "/#services" },
                  { name: "Quality Assurance", href: "/services/quality-assurance" },
                ].map((link, j) => (
                  <li key={j} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + j * 0.05}s` }}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70 hover:text-accent transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="animate-fade-in-up delay-300">
              <h4 className="font-bold mb-4 2xl:mb-5 3xl:mb-6 text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground relative inline-block">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Company</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
              </h4>
              <ul className="space-y-2 2xl:space-y-2.5 3xl:space-y-3">
                {[
                  { name: "Profile", href: "/profile" },
                  { name: "Careers", href: "/careers" },
                  { name: "Accreditations", href: "/accreditations" },
                  { name: "Contact", href: "/contact" },
                ].map((link, j) => (
                  <li key={j} className="animate-fade-in-up" style={{ animationDelay: `${0.4 + j * 0.05}s` }}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70 hover:text-accent transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-fade-in-up delay-400">
              <h4 className="font-bold mb-4 2xl:mb-5 3xl:mb-6 text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground relative inline-block">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Contact</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
              </h4>
              <ul className="space-y-3 2xl:space-y-3.5 3xl:space-y-4">
                <li className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4 2xl:w-5 2xl:h-5 text-accent" />
                  </div>
                  <a href="mailto:info@antesobiomedicalopc.com" className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70 hover:text-accent transition-colors duration-300">
                    info@antesobiomedicalopc.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4 2xl:w-5 2xl:h-5 text-accent" />
                  </div>
                  <a href="tel:+918470909720" className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70 hover:text-accent transition-colors duration-300">
                    +91 847 090 9720
                  </a>
                </li>
                <li className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-4 h-4 2xl:w-5 2xl:h-5 text-accent" />
                  </div>
                  <span className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/70">
                    Head Office: Delhi | RSOs: Bangalore, Hyderabad, Kolkata, Patna, Ranchi, Lucknow, Kullu & more across India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-6 2xl:pt-7 3xl:pt-8 4xl:pt-9 animate-on-scroll">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 2xl:gap-8">
              <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/60 animate-fade-in-up delay-500 text-center">
                © {new Date().getFullYear()} <span className="font-semibold text-foreground/80">ANTESO Biomedical</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

