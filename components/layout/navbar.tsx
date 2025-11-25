"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen])

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border z-50 shadow-sm animate-fade-in">
      <div className="max-w-5xl 2xl:max-w-7xl 3xl:max-w-9xl 4xl:max-w-11xl 5xl:max-w-13xl 6xl:max-w-14xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32 h-20 2xl:h-24 3xl:h-28 4xl:h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 2xl:gap-4 3xl:gap-5">
          <Image
            src="/logo.png"
            alt="ANTESO Logo"
            width={260}
            height={85}
            className="h-16 2xl:h-20 3xl:h-24 4xl:h-28 w-auto object-cover"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-16">
          <Link
            href="/"
            className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Profile
          </Link>
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center gap-1.5 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 2xl:w-72 3xl:w-80 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden animate-fade-in">
                <div className="py-2">
                  <Link
                    href="/services/quality-assurance"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-3 2xl:py-3.5 text-sm 2xl:text-base 3xl:text-lg text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors border-b border-border/50"
                  >
                    Quality Assurance
                  </Link>
                  <Link
                    href="/services/consultation"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-3 2xl:py-3.5 text-sm 2xl:text-base 3xl:text-lg text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors border-b border-border/50"
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/services/repair-maintenance"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-3 2xl:py-3.5 text-sm 2xl:text-base 3xl:text-lg text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    Services, Repair & Maintenance
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/accreditations"
            className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Accreditations
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 2xl:gap-6 3xl:gap-8">
          {/* Theme Toggle Button */}
          {mounted ? (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative w-12 h-7 2xl:w-14 2xl:h-7 3xl:w-16 3xl:h-8 rounded-full bg-muted border border-border hover:border-accent transition-all duration-300 focus:outline-none"
              aria-label="Toggle theme"
            >
              <div className={`absolute top-0.5 left-0.5 2xl:top-0.5 2xl:left-0.5 3xl:top-0.5 3xl:left-0.5 w-6 h-6 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out ${
                theme === 'dark' ? 'translate-x-5 2xl:translate-x-6 3xl:translate-x-7' : 'translate-x-0'
              }`}>
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 text-white" />
                ) : (
                  <Sun className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 text-white" />
                )}
              </div>
            </button>
          ) : (
            <div className="relative w-12 h-7 2xl:w-14 2xl:h-7 3xl:w-16 3xl:h-8 rounded-full bg-muted border border-border">
              <div className="absolute top-0.5 left-0.5 2xl:top-0.5 2xl:left-0.5 3xl:top-0.5 3xl:left-0.5 w-6 h-6 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md translate-x-0">
                <Sun className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 text-white" />
              </div>
            </div>
          )}
          <Link
            href="/contact"
            className="px-5 py-2 2xl:px-6 2xl:py-2.5 3xl:px-7 3xl:py-3 rounded-lg border border-border hover:border-accent text-foreground text-sm 2xl:text-base 3xl:text-lg transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/careers"
            className="px-5 py-2 2xl:px-6 2xl:py-2.5 3xl:px-7 3xl:py-3 rounded-lg bg-gradient-to-r from-accent to-primary text-accent-foreground text-sm 2xl:text-base 3xl:text-lg hover:shadow-lg hover:shadow-accent/20 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-foreground/70 hover:text-foreground"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2 animate-fade-in">
                  <Link
                    href="/services/quality-assurance"
                    onClick={() => {
                      setServicesDropdownOpen(false)
                      setMobileMenuOpen(false)
                    }}
                    className="block text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Quality Assurance
                  </Link>
                  <Link
                    href="/services/consultation"
                    onClick={() => {
                      setServicesDropdownOpen(false)
                      setMobileMenuOpen(false)
                    }}
                    className="block text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/services/repair-maintenance"
                    onClick={() => {
                      setServicesDropdownOpen(false)
                      setMobileMenuOpen(false)
                    }}
                    className="block text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Services, Repair & Maintenance
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/accreditations"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accreditations
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-sm font-medium text-foreground/70">Theme</span>
              {mounted ? (
                <button
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                  }}
                  className="relative w-14 h-7 rounded-full bg-muted border border-border hover:border-accent transition-all duration-300 focus:outline-none"
                  aria-label="Toggle theme"
                >
                  <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out ${
                    theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                  }`}>
                    {theme === 'dark' ? (
                      <Moon className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Sun className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </button>
              ) : (
                <div className="relative w-14 h-7 rounded-full bg-muted border border-border">
                  <div className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md translate-x-0">
                    <Sun className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

