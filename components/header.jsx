"use client"

import { useState, useEffect } from "react"
import { Home, Lightbulb, Settings, BookOpen, Mail, Linkedin, Facebook, Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textColor = isScrolled ? "text-[#092A6B]" : "text-white"
  const mutedTextColor = isScrolled ? "text-[#092A6B]/70" : "text-white/80"
  const bgColor = isScrolled ? "bg-white/95" : "bg-transparent"

  const navLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: Lightbulb, label: "About" },
    { href: "#Services", icon: Settings, label: "Services" },
    { href: "/projects", icon: BookOpen, label: "Projects" },
    { href: "/about#contact", icon: Mail, label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor} ${isScrolled ? 'shadow-md' : ''}  ${isScrolled ? 'border-gray-200' : 'border-white/10'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/company_logo.png" alt="Gomindz Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover" />
            <span className={`text-lg sm:text-xl font-semibold ${textColor} transition-colors duration-300`}>GOMINDZ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-2 text-sm xl:text-base font-outfit font-bold ${textColor} hover:scale-105 transition-all duration-200 relative group`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full" />
                </a>
              )
            })}
          </nav>

          {/* Desktop Social Media Icons */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={`${mutedTextColor} hover:bg-transparent hover:scale-110 transition-transform duration-200 w-9 h-9 sm:w-10 sm:h-10`}
              asChild
            >
              <a href="https://linkedin.com/company/gomindz" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${mutedTextColor} hover:bg-transparent hover:scale-110 transition-transform duration-200 w-9 h-9 sm:w-10 sm:h-10`}
              asChild
            >
              <a href="https://facebook.com/gomindz" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${mutedTextColor} hover:bg-transparent hover:scale-110 transition-transform duration-200 w-9 h-9 sm:w-10 sm:h-10`}
              asChild
            >
              <a href="https://instagram.com/gomindz" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${textColor} hover:bg-transparent`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 text-[#092A6B] font-outfit font-bold px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </a>
                )
              })}
            </nav>

            {/* Mobile Social Media */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-200">
              <a href="https://linkedin.com/company/gomindz" target="_blank" rel="noopener noreferrer" className="text-[#092A6B]/70 hover:text-[#092A6B] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/gomindz" target="_blank" rel="noopener noreferrer" className="text-[#092A6B]/70 hover:text-[#092A6B] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/gomindz" target="_blank" rel="noopener noreferrer" className="text-[#092A6B]/70 hover:text-[#092A6B] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}