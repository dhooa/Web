'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Star, Coffee, Leaf, Home, Users, Phone, Mail, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data foto dengan deskripsi
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
      title: "Kamar Deluxe dengan Pemandangan Kebun Kopi",
      description: "Nikmati pemandangan perkebunan kopi hijau yang menenangkan dari jendela kamar deluxe kami. Setiap pagi, Anda akan terbangun dengan aroma kopi segar dan suara alam yang menyejukkan jiwa."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
      title: "Coffee Corner - Ruang Santai",
      description: "Ruang santai dengan konsep coffee corner yang nyaman. Dilengkapi dengan berbagai pilihan kopi premium dari perkebunan lokal dan suasana yang hangat untuk berkumpul bersama keluarga."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      title: "Kamar Suite dengan Balkon Pribadi",
      description: "Suite eksklusif dengan balkon pribadi yang menghadap langsung ke perkebunan kopi. Tempat sempurna untuk menikmati sunset sambil menyeruput kopi hangat buatan sendiri."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      title: "Fasilitas Coffee Workshop",
      description: "Pelajari cara membuat kopi yang sempurna di workshop kami. Dari proses roasting hingga brewing, Anda akan mendapatkan pengalaman lengkap dunia kopi dari para ahli."
    }
  ];

  const facilities = [
    { icon: <Coffee className="w-6 h-6" />, name: "Coffee Workshop", desc: "Belajar membuat kopi premium" },
    { icon: <Leaf className="w-6 h-6" />, name: "Organic Garden", desc: "Kebun organik dan tour perkebunan" },
    { icon: <Home className="w-6 h-6" />, name: "Family Room", desc: "Kamar keluarga yang nyaman" },
    { icon: <Users className="w-6 h-6" />, name: "Group Package", desc: "Paket khusus untuk grup" }
  ];

  // Animasi floating coffee beans
  const [beans, setBeans] = useState([]);

  useEffect(() => {
    const newBeans = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setBeans(newBeans);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
      setIsAnimating(false);
    }, 150);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Terima kasih! Reservasi Anda akan segera kami proses.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Floating Coffee Beans Animation */}
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="absolute opacity-20 pointer-events-none z-0"
          style={{
            left: `${bean.x}%`,
            top: `${bean.y}%`,
            animation: `float ${bean.duration}s ease-in-out infinite`,
            animationDelay: `${bean.delay}s`
          }}
        >
          <div className="w-4 h-6 bg-amber-700 rounded-full transform rotate-12 shadow-lg"></div>
        </div>
      ))}

      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-sm shadow-lg sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Green Coffee Shelter</h1>
                <p className="text-sm text-green-600">Penginapan & Coffee Experience</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#rooms" className="text-gray-700 hover:text-green-600 transition-colors">Kamar</a>
              <a href="#facilities" className="text-gray-700 hover:text-green-600 transition-colors">Fasilitas</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#home" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Home</a>
              <a href="#rooms" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Kamar</a>
              <a href="#facilities" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Fasilitas</a>
              <a href="#contact" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Kontak</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Selamat Datang di
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block md:inline"> Green Coffee Shelter</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideIn">
            Nikmati pengalaman menginap yang tak terlupakan di tengah perkebunan kopi hijau. 
            Kombinasi sempurna antara kenyamanan modern dan keindahan alam yang menenangkan.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-green-600 animate-slideIn">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Perkebunan Kopi Malang, Jawa Timur</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">(4.9/5)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery with Descriptions */}
      <section id="rooms" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Galeri Kamar & Fasilitas
          </h3>
          
          {/* Main Slider */}
          <div className="relative max-w-6xl mx-auto mb-8">
            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={photos[currentSlide].url}
                alt={photos[currentSlide].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className={`object-cover transition-all duration-500 ${
                  isAnimating ? 'scale-110 opacity-80' : 'scale-100 opacity-100'
                }`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                <h4 className="text-xl md:text-3xl font-bold mb-2">{photos[currentSlide].title}</h4>
                <p className="text-sm md:text-lg opacity-90 max-w-3xl">{photos[currentSlide].description}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-20 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? 'ring-4 ring-green-500 shadow-lg scale-105'
                    : 'hover:scale-102 hover:shadow-md'
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Fasilitas Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto">
                  {facility.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {facility.name}
                </h4>
                <p className="text-gray-600 text-center">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6">
                  Reservasi Sekarang
                </h3>
                <p className="text-base md:text-lg mb-8 opacity-90">
                  Dapatkan pengalaman menginap yang tak terlupakan di Green Coffee Shelter. 
                  Hubungi kami untuk informasi dan reservasi.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>+62 341 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>info@greencoffeeshelter.com</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Jl. Perkebunan Kopi No. 123, Malang, Jawa Timur</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <input
                      type="date"
                      className="flex-1 p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                    <input
                      type="date"
                      className="flex-1 p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Pesan Khusus"
                    rows="3"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Kirim Reservasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Green Coffee Shelter</span>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            &copy; 2025 Green Coffee Shelter. Semua hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
