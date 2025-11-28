"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { Navbar, Footer } from "@/components/layout"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-accent" />,
      label: "Address",
      value: "Flat No. 290, 2nd Floor, Block D, Pocket 7, Sector 6, Rohini, New Delhi – 110 085, INDIA"
    },
    {
      icon: <MapPin className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-accent" />,
      label: "Our Branches",
      value: "Regional Service Offices (RSOs) across India, including Bangalore, Hyderabad, Kolkata, Patna, Ranchi, Lucknow, Kullu, and several other strategic locations."
    },
    {
      icon: <Phone className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-accent" />,
      label: "Phone",
      value: "+91 011-47008720"
    },
    {
      icon: <Phone className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-accent" />,
      label: "Mobile",
      value: "+91 8470909720 / 8427349720 / 9010509720"
    },
    {
      icon: <Mail className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-accent" />,
      label: "Email",
      value: "info@antesobiomedicalopc.com",
      value2: "service@antesobiomedicalopc.com"
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
                Contact Us
              </span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 animate-on-scroll text-center">
            <h1 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-4 2xl:mb-6 3xl:mb-8 animate-fade-in-up-wide delay-100">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <div className="w-16 h-1 2xl:w-20 2xl:h-1 3xl:w-24 3xl:h-1.5 bg-gradient-to-r from-accent to-primary rounded-full animate-fade-in-up-wide delay-200 mx-auto" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            {/* Enquiry Form */}
            <div className="animate-fade-in-up-wide delay-300">
              <div className="relative p-5 2xl:p-6 3xl:p-7 4xl:p-8 rounded-2xl 2xl:rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:2xl:rounded-3xl before:bg-gradient-to-br before:from-accent/5 before:via-transparent before:to-primary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
                <h2 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold text-foreground mb-4 2xl:mb-5 3xl:mb-6 relative z-10">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Enquiry Form
                  </span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 2xl:space-y-5 3xl:space-y-6 relative z-10">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold text-foreground mb-2 2xl:mb-3">
                      Name <span className="text-accent font-bold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 2xl:px-5 2xl:py-3.5 3xl:px-6 3xl:py-4 rounded-xl 2xl:rounded-2xl bg-background/80 border-2 border-border/50 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 hover:border-accent/50 hover:bg-background/90 shadow-sm hover:shadow-md"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 rounded-xl 2xl:rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold text-foreground mb-2 2xl:mb-3">
                      Email <span className="text-accent font-bold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 2xl:px-5 2xl:py-3.5 3xl:px-6 3xl:py-4 rounded-xl 2xl:rounded-2xl bg-background/80 border-2 border-border/50 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 hover:border-accent/50 hover:bg-background/90 shadow-sm hover:shadow-md"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-0 rounded-xl 2xl:rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="mobile" className="block text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold text-foreground mb-2 2xl:mb-3">
                      Mobile <span className="text-accent font-bold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 2xl:px-5 2xl:py-3.5 3xl:px-6 3xl:py-4 rounded-xl 2xl:rounded-2xl bg-background/80 border-2 border-border/50 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 hover:border-accent/50 hover:bg-background/90 shadow-sm hover:shadow-md"
                        placeholder="Enter your mobile number"
                      />
                      <div className="absolute inset-0 rounded-xl 2xl:rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="message" className="block text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold text-foreground mb-2 2xl:mb-3">
                      Message <span className="text-accent font-bold">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 2xl:px-6 2xl:py-4.5 3xl:px-7 3xl:py-5 rounded-xl 2xl:rounded-2xl bg-background/80 border-2 border-border/50 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all duration-300 resize-y text-foreground placeholder:text-foreground/40 hover:border-accent/50 hover:bg-background/90 shadow-sm hover:shadow-md"
                        placeholder="Enter your message"
                      />
                      <div className="absolute inset-0 rounded-xl 2xl:rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full px-6 py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 rounded-xl 2xl:rounded-2xl bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto] text-accent-foreground font-bold text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 flex items-center justify-center gap-3 2xl:gap-4 overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <Send className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="relative z-10">Submit</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up-wide delay-400">
              <div className="space-y-4 2xl:space-y-5 3xl:space-y-6">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="group relative p-4 2xl:p-5 3xl:p-6 4xl:p-7 rounded-2xl 2xl:rounded-3xl bg-card/60 backdrop-blur-sm border-2 border-border/50 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    {/* Gradient Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-primary/0 to-accent/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-500 rounded-2xl 2xl:rounded-3xl" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex items-start gap-4 2xl:gap-5 3xl:gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        <div className="relative p-3 2xl:p-4 3xl:p-5 rounded-2xl 2xl:rounded-3xl bg-gradient-to-br from-accent/15 via-primary/10 to-accent/15 group-hover:from-accent/25 group-hover:via-primary/20 group-hover:to-accent/25 border border-accent/20 group-hover:border-accent/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <div className="relative">
                            {info.icon}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-bold text-accent mb-1.5 2xl:mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          <span className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-gradient-to-r from-accent to-primary group-hover:scale-125 transition-transform duration-300" />
                          {info.label}
                        </h3>
                        <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/80 group-hover:text-foreground leading-relaxed transition-colors duration-300">
                          {info.value}
                        </p>
                        {info.value2 && (
                          <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/80 group-hover:text-foreground leading-relaxed mt-2 transition-colors duration-300">
                            {info.value2}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl 2xl:rounded-[2rem] opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              <div className="relative rounded-2xl 2xl:rounded-3xl overflow-hidden border-2 border-border/50 group-hover:border-accent/50 shadow-2xl group-hover:shadow-accent/10 transition-all duration-500 animate-fade-in-up-wide delay-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3348613548183!2d77.11054412529207!3d28.709537025622744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015742f94df7%3A0x810e833525b3e7dd!2sPocket%2023%2C%20Sector%207%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1763891953109!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] 2xl:h-[500px] 3xl:h-[600px] relative z-0"
                  title="ANTESO Biomedical Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

