"use client"

import { useEffect, useState, useRef } from "react"
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

  // Reduce overlay opacity
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const overlay = document.querySelector('[data-slot="dialog-overlay"]')
      if (overlay) {
        ;(overlay as HTMLElement).style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Also check immediately
    const overlay = document.querySelector('[data-slot="dialog-overlay"]')
    if (overlay) {
      ;(overlay as HTMLElement).style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    }

    return () => observer.disconnect()
  }, [])

  const certificates = [
    {
      image: "/Accreditations/certificate2.jpg",
      alt: "AERB Registration Certificate"
    },
    {
      image: "/Accreditations/certificate3.jpg",
      alt: "NABL Accreditation Certificate"
    },
    {
      image: "/accreditations2/ANIMESH SRIVASTAVA RT_RSOApproval_Letter_1723771.pdf_20250927110153552_page-0001.jpg",
      alt: "RSO Approval Letter - Animesh Srivastava"
    },
    {
      image: "/accreditations2/ASHISH THAKUR_RSOApproval_Letter_1379774_page-0001.jpg",
      alt: "RSO Approval Letter - Ashish Thakur"
    },
    {
      image: "/accreditations2/JHAVE RAM_RSOApproval_Letter_1421399_page-0001.jpg",
      alt: "RSO Approval Letter - Jhave Ram"
    },
    {
      image: "/accreditations2/KAHAN SINGH_RSOApproval_Letter_1492381 (1)_page-0001.jpg",
      alt: "RSO Approval Letter - Kahan Singh"
    },
    {
      image: "/accreditations2/RAJ KUMAR_RSOApproval_Letter_1380446_page-0001.jpg",
      alt: "RSO Approval Letter - Raj Kumar"
    },
    {
      image: "/accreditations2/RAJESH KUMAR DUBEY_RSOApproval_Letter_1492384 (1)_page-0001.jpg",
      alt: "RSO Approval Letter - Rajesh Kumar Dubey"
    },
    {
      image: "/accreditations2/RAVI KASHYAP_RSOApproval_Letter_1283267.pdf_20231009123020383_page-0001.jpg",
      alt: "RSO Approval Letter - Ravi Kashyap"
    },
    {
      image: "/accreditations2/RT_RSOApproval_Letter_1735399_page-0001.jpg",
      alt: "RSO Approval Letter"
    },
    {
      image: "/accreditations2/SOHAN LAL THAKUR_RSOApproval_Letter_1283083.pdf_20231009091012596_page-0001.jpg",
      alt: "RSO Approval Letter - Sohan Lal Thakur"
    },
    {
      image: "/accreditations2/SOMNATH MUKHERJEE RT_RSOApproval_Letter_1722114.pdf_20250924195508890_page-0001.jpg",
      alt: "RSO Approval Letter - Somnath Mukherjee"
    },
    {
      image: "/accreditations2/SUBRAHMANYA B_RSOApproval_Letter_1580155 (1)_page-0001.jpg",
      alt: "RSO Approval Letter - Subrahmanya B"
    },
    {
      image: "/accreditations2/VARUN RATHAUR_RSOApproval_Letter_1628953.pdf_20250430133529906 (2)_page-0001.jpg",
      alt: "RSO Approval Letter - Varun Rathaur"
    },
    {
      image: "/accreditations2/VENKTESH DUBEY_RSOApproval_Letter_1283270.pdf_20231009123216427_page-0001.jpg",
      alt: "RSO Approval Letter - Venktesh Dubey"
    }
  ]

  // Zoomable Image Component
  const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
    const [zoom, setZoom] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [clickStartPos, setClickStartPos] = useState({ x: 0, y: 0 })
    const imageRef = useRef<HTMLDivElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    const minZoom = 1
    const maxZoom = 5
    const zoomStep = 0.25
    const clickZoomLevels = [1, 2, 3] // Zoom levels for click-to-zoom

    const handleZoomIn = () => {
      setZoom((prev) => Math.min(prev + zoomStep, maxZoom))
    }

    const handleZoomOut = () => {
      setZoom((prev) => {
        const newZoom = Math.max(prev - zoomStep, minZoom)
        if (newZoom === minZoom) {
          setPosition({ x: 0, y: 0 })
        }
        return newZoom
      })
    }

    const handleReset = () => {
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }

    const handleWheel = (e: React.WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        const delta = e.deltaY > 0 ? -zoomStep : zoomStep
        setZoom((prev) => {
          const newZoom = Math.max(minZoom, Math.min(prev + delta, maxZoom))
          if (newZoom === minZoom) {
            setPosition({ x: 0, y: 0 })
          }
          return newZoom
        })
      }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
      // Store initial click position
      setClickStartPos({ x: e.clientX, y: e.clientY })
      
      if (zoom > 1) {
        setIsDragging(true)
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
      }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      if (isDragging && zoom > 1) {
        // If moved significantly, it's a drag, not a click
        const moveDistance = Math.sqrt(
          Math.pow(e.clientX - clickStartPos.x, 2) + 
          Math.pow(e.clientY - clickStartPos.y, 2)
        )
        
        if (moveDistance > 5) {
          setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
          })
        }
      }
    }

    const handleMouseUp = (e: React.MouseEvent) => {
      // Check if it was a click (not a drag)
      const moveDistance = Math.sqrt(
        Math.pow(e.clientX - clickStartPos.x, 2) + 
        Math.pow(e.clientY - clickStartPos.y, 2)
      )
      
      // If moved less than 5px, treat as click
      if (moveDistance < 5) {
        handleImageClick(e)
      }
      
      setIsDragging(false)
    }

    const handleImageClick = (e: React.MouseEvent) => {
      if (!imageRef.current || !imgRef.current) return

      const containerRect = imageRef.current.getBoundingClientRect()
      const imgRect = imgRef.current.getBoundingClientRect()
      
      // Get click position relative to container center
      const clickX = e.clientX - containerRect.left - containerRect.width / 2
      const clickY = e.clientY - containerRect.top - containerRect.height / 2

      // Find current zoom level index
      const currentIndex = clickZoomLevels.findIndex(level => Math.abs(zoom - level) < 0.1)
      const nextIndex = currentIndex === -1 || currentIndex === clickZoomLevels.length - 1 
        ? 0 
        : currentIndex + 1
      
      const nextZoom = clickZoomLevels[nextIndex]

      if (nextZoom === 1) {
        // Reset to center
        setZoom(1)
        setPosition({ x: 0, y: 0 })
      } else {
        // Calculate position to center the click point
        const scaleChange = nextZoom / (zoom || 1)
        const newX = clickX * (1 - scaleChange)
        const newY = clickY * (1 - scaleChange)
        
        setZoom(nextZoom)
        setPosition({ x: newX, y: newY })
      }
    }

    useEffect(() => {
      if (zoom === 1) {
        setPosition({ x: 0, y: 0 })
      }
    }, [zoom])

    return (
      <div className="relative w-full h-full">
        {/* Zoom Indicator */}
        {zoom > 1 && (
          <div className="absolute top-4 left-4 z-50 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-border/50">
            <span className="text-sm font-medium text-foreground">
              {Math.round(zoom * 100)}%
            </span>
          </div>
        )}

        {/* Image Container */}
        <div
          ref={imageRef}
          className={`relative w-full h-full min-h-[90vh] overflow-hidden flex items-center justify-center ${
            zoom > 1 
              ? "cursor-grab active:cursor-grabbing" 
              : "cursor-zoom-in"
          }`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transformOrigin: "center center",
            }}
          >
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    )
  }

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
                <DialogContent className="!max-w-full !w-[calc(100%-0rem)] !h-full !p-0 !m-0 !bg-transparent !border-0 !shadow-none !rounded-none">
                  <DialogTitle className="sr-only">{cert.alt}</DialogTitle>
                  <div className="relative w-full h-full bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <ZoomableImage src={cert.image} alt={cert.alt} />
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

