"use client"

import { useState } from "react"
import {
  Network,
  Activity,
  Globe,
  Terminal,
  Play,
  Loader2,
  AlertCircle,
  CheckCircle,
  Clock,
  Router,
  Wifi,
  Server,
  Shield,
  Zap,
} from "lucide-react"

// Star Access Logo Component
const StarAccessLogo = ({ className = "w-8 h-8" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized Star Symbol */}
      <path
        d="M50 10 L60 35 L85 35 L66 52 L76 77 L50 60 L24 77 L34 52 L15 35 L40 35 Z"
        fill="currentColor"
        className="text-white"
      />
      <path
        d="M50 15 L58 32 L75 32 L62 45 L70 62 L50 50 L30 62 L38 45 L25 32 L42 32 Z"
        fill="currentColor"
        className="text-orange-200"
      />
      {/* Interconnected lines effect */}
      <circle cx="50" cy="50" r="3" fill="currentColor" className="text-white" />
      <path
        d="M50 25 Q65 40 50 55 Q35 40 50 25"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-orange-100"
      />
      <path
        d="M25 50 Q40 35 55 50 Q40 65 25 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-orange-100"
      />
    </svg>
  )
}

// Main App Component
const LookingGlassApp = () => {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {activeTab === "home" && <HomePage setActiveTab={setActiveTab} />}
        {activeTab === "tools" && <ToolsPage />}
        {activeTab === "about" && <AboutPage />}
      </main>
      <Footer />
    </div>
  )
}

// Header Component
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
          
{/* Star Access Logo */}
<div className="bg-white/20 backdrop-blur-sm p-1 rounded-xl border border-white/20">
  <img 
    src="/logo-starnet.png" 
    alt="StarNet Logo" 
    className="w-16 h-16 object-contain brightness-0 invert"
  />
</div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Star Access Looking Glass</h1>
              <p className="text-orange-100 text-base font-medium">Pusat Diagnostik Jaringan</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Sistem Online</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
              <Activity size={16} />
              <span className="text-sm font-medium">99.9% Waktu Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Navigation Component
const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "home", label: "Beranda", icon: Globe },
    { id: "tools", label: "Network Tools", icon: Terminal },
    { id: "about", label: "About", icon: Activity },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-orange-100 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex space-x-0">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-3 px-8 py-5 text-sm font-semibold transition-all duration-200 border-b-3 relative group ${
                activeTab === id
                  ? "text-orange-600 border-orange-500 bg-orange-50/80"
                  : "text-slate-600 border-transparent hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              <Icon
                size={18}
                className={`transition-transform duration-200 ${activeTab === id ? "scale-110" : "group-hover:scale-105"}`}
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Home Page Component
const HomePage = ({ setActiveTab }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
          <Zap size={16} />
          <span>Diagnostik Jaringan Profesional</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Star Access Network
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
            {" "}
            Network Diagnostic Tools
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Alat analisis dan pemecahan masalah jaringan profesional yang didukung oleh infrastruktur Star Access. Uji
          konektivitas, lacak rute, dan lakukan pencarian DNS dengan hasil real-time - karena semua dapat terhubung.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard number="99.9%" label="Waktu Aktif" icon={<Shield className="text-green-500" size={24} />} />
        <StatCard number="<50ms" label="Waktu Respons" icon={<Zap className="text-yellow-500" size={24} />} />
        <StatCard number="24/7" label="Ketersediaan" icon={<Clock className="text-blue-500" size={24} />} />
        <StatCard number="IPv6" label="Siap" icon={<Network className="text-purple-500" size={24} />} />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Router className="text-orange-600" size={28} />}
          title="Advanced Traceroute"
          description="Analisis jalur komprehensif dengan pengukuran latensi hop-by-hop dan informasi routing geografis untuk jaringan IPv4 dan IPv6."
          badge="Popular"
        />
        <FeatureCard
          icon={<Activity className="text-orange-600" size={28} />}
          title="Smart Ping Analysis"
          description="Pengujian konektivitas cerdas dengan deteksi packet loss, analisis jitter, dan pemantauan latensi real-time."
          badge="Fast"
        />
        <FeatureCard
          icon={<Network className="text-orange-600" size={28} />}
          title="MTR Network Analysis"
          description="Fungsionalitas gabungan ping dan traceroute yang menyediakan metrik performa jaringan detail dan identifikasi bottleneck."
          badge="Pro"
        />
        <FeatureCard
          icon={<Globe className="text-orange-600" size={28} />}
          title="DNS Resolution Suite"
          description="Toolkit diagnostik DNS lengkap termasuk pencarian record A, AAAA, MX, TXT dengan analisis waktu respons."
        />
        <FeatureCard
          icon={<Server className="text-orange-600" size={28} />}
          title="Multi-Location Testing"
          description="Uji dari berbagai lokasi geografis untuk mengidentifikasi masalah konektivitas regional dan masalah routing."
        />
        <FeatureCard
          icon={<Wifi className="text-orange-600" size={28} />}
          title="Real-time Monitoring"
          description="Output terminal langsung dengan indikator progress dan logging detail untuk analisis jaringan komprehensif."
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Siap Mendiagnosis Jaringan Anda?</h3>
        <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
          Mulai dengan alat diagnostik jaringan tingkat profesional kami. Tidak perlu registrasi.
        </p>
        <button
          onClick={() => setActiveTab("tools")}
          className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
        >
          Buka Network Diagnostic
        </button>
      </div>
    </div>
  )
}

// Tools Page Component
const ToolsPage = () => {
  const [selectedTool, setSelectedTool] = useState("ping")
  const [target, setTarget] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState("")
  const [error, setError] = useState("")

  const tools = [
    { id: "ping", name: "Ping (IPv4)", icon: Activity, description: "Uji konektivitas dasar" },
    { id: "ping6", name: "Ping (IPv6)", icon: Activity, description: "Tes konektivitas IPv6" },
    { id: "traceroute", name: "Traceroute (IPv4)", icon: Router, description: "Lacak jalur jaringan" },
    { id: "traceroute6", name: "Traceroute (IPv6)", icon: Router, description: "Pelacakan jalur IPv6" },
    { id: "mtr", name: "MTR (IPv4)", icon: Network, description: "Alat analisis jaringan" },
    { id: "mtr6", name: "MTR (IPv6)", icon: Network, description: "Analisis jaringan IPv6" },
    { id: "host", name: "DNS Lookup", icon: Globe, description: "Resolusi nama domain" },
  ]

  const handleSubmit = async () => {
    if (!target.trim()) return

    setIsLoading(true)
    setError("")
    setResults("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response based on tool type
      let mockResult = ""
      switch (selectedTool) {
        case "ping":
          mockResult = `PING ${target} (93.184.216.34) 56(84) bytes of data.
64 bytes from 93.184.216.34: icmp_seq=1 ttl=56 time=23.2 ms
64 bytes from 93.184.216.34: icmp_seq=2 ttl=56 time=23.1 ms
64 bytes from 93.184.216.34: icmp_seq=3 ttl=56 time=23.3 ms
64 bytes from 93.184.216.34: icmp_seq=4 ttl=56 time=23.0 ms

--- ${target} ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 23.037/23.150/23.284/0.202 ms`
          break
        case "traceroute":
          mockResult = `traceroute to ${target} (93.184.216.34), 30 hops max, 60 byte packets
 1  gateway (192.168.1.1)  0.245 ms  0.198 ms  0.187 ms
 2  10.0.0.1 (10.0.0.1)  8.123 ms  8.089 ms  8.045 ms
 3  203.0.113.1 (203.0.113.1)  15.234 ms  15.189 ms  15.145 ms
 4  * * *
 5  93.184.216.34 (93.184.216.34)  23.456 ms  23.412 ms  23.368 ms`
          break
        case "host":
          mockResult = `${target} has address 93.184.216.34
${target} has IPv6 address 2606:2800:220:1:248:1893:25c8:1946
${target} mail is handled by 0 .`
          break
        default:
          mockResult = `Command executed successfully for ${target}`
      }

      setResults(mockResult)
    } catch (err) {
      setError("Gagal menjalankan perintah. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Network Diagnostic Tools</h2>
        <p className="text-slate-600 text-lg">
          Select a diagnostic tool and enter your target to begin comprehensive network analysis
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Tool Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-6 sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6 text-lg">Diagnostic Tools</h3>
            <div className="space-y-3">
              {tools.map(({ id, name, icon: Icon, description }) => (
                <button
                  key={id}
                  onClick={() => setSelectedTool(id)}
                  className={`w-full flex items-start space-x-3 p-4 rounded-xl text-left transition-all duration-200 group ${
                    selectedTool === id
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg scale-105"
                      : "hover:bg-orange-50 text-slate-700 hover:shadow-md"
                  }`}
                >
                  <Icon size={20} className={`mt-0.5 ${selectedTool === id ? "text-white" : "text-orange-600"}`} />
                  <div>
                    <div className="font-semibold text-sm">{name}</div>
                    <div className={`text-xs mt-1 ${selectedTool === id ? "text-orange-100" : "text-slate-500"}`}>
                      {description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tool Form and Results */}
        <div className="lg:col-span-3 space-y-8">
          {/* Input Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Host Target atau Alamat IP</label>
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  placeholder="example.com or 8.8.8.8"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 text-slate-900 placeholder-slate-400"
                  disabled={isLoading}
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || !target.trim()}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-4 px-6 rounded-xl hover:from-orange-700 hover:to-amber-600 disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed flex items-center justify-center space-x-3 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Menjalankan {tools.find((t) => t.id === selectedTool)?.name}...</span>
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    <span>Jalankan {tools.find((t) => t.id === selectedTool)?.name}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          {(results || error) && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center space-x-3 text-lg">
                <Terminal size={20} />
                <span>Hasil Diagnostik</span>
              </h3>
              {error ? (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start space-x-4">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-red-800 font-semibold text-lg">Kesalahan Eksekusi</p>
                    <p className="text-red-700 mt-1">Gagal menjalankan perintah. Silakan coba lagi.</p>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto shadow-inner">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap leading-relaxed">{results}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// About Page Component
const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">About Our Network Diagnostic Center</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Professional-grade network analysis tools designed for network administrators, developers, and IT
          professionals
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">What is Looking Glass?</h3>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Layanan Looking Glass kami menyediakan kemampuan diagnostik jaringan komprehensif melalui antarmuka web
              modern. Dibangun di atas infrastruktur tingkat enterprise, layanan ini menawarkan alat analisis jaringan
              real-time yang membantu mengidentifikasi masalah konektivitas, masalah routing, dan bottleneck performa.
            </p>
            <p>
              Baik Anda sedang memecahkan masalah konektivitas jaringan, menganalisis jalur routing, atau melakukan
              diagnostik DNS, platform kami menyediakan alat dan wawasan yang Anda butuhkan untuk mempertahankan
              performa jaringan optimal.
            </p>
            <p>
              Layanan ini disediakan gratis sebagai bagian dari komitmen kami untuk mendukung infrastruktur internet
              global dan membantu profesional jaringan mempertahankan konektivitas yang andal.
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Diagnostic Capabilities</h3>
          <div className="space-y-4">
            {[
              { tool: "Pengujian Ping", desc: "Analisis konektivitas dan latensi IPv4/IPv6" },
              { tool: "Analisis Traceroute", desc: "Pelacakan jalur jaringan lengkap dan analisis hop" },
              { tool: "Diagnostik MTR", desc: "Pemantauan performa jaringan lanjutan" },
              { tool: "Resolusi DNS", desc: "Analisis sistem nama domain komprehensif" },
              { tool: "Dukungan Multi-Protokol", desc: "Kompatibilitas penuh IPv4 dan IPv6" },
              { tool: "Hasil Real-time", desc: "Output terminal langsung dengan logging detail" },
            ].map(({ tool, desc }, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <div>
                  <div className="font-semibold text-slate-900">{tool}</div>
                  <div className="text-slate-600 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Panduan & Batasan Layanan</h3>
            <div className="space-y-3 text-orange-100">
              <div className="flex items-center space-x-3">
                <Clock size={16} />
                <span>Dibatasi 10 permintaan per menit per IP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield size={16} />
                <span>Timeout 30 detik untuk semua perintah diagnostik</span>
              </div>
              <div className="flex items-center space-x-3">
                <Terminal size={16} />
                <span>Hanya perintah diagnostik jaringan standar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Activity size={16} />
                <span>Layanan disediakan apa adanya untuk tujuan diagnostik</span>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
              <Server size={20} />
              <span className="font-semibold">Enterprise Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Feature Card Component
const FeatureCard = ({ icon, title, description, badge }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors duration-200">
            {icon}
          </div>
          {badge && (
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {badge}
            </span>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Stat Card Component
const StatCard = ({ number, label, icon }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 text-center hover:shadow-xl transition-all duration-200">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-2xl font-bold text-slate-900 mb-1">{number}</div>
      <div className="text-slate-600 text-sm font-medium">{label}</div>
    </div>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
           <div className="bg-white p-1 rounded-lg">
  <img 
    src="/logo-starnet.png" 
    alt="StarNet Logo" 
    className="w-14 h-14 object-contain"
  />
</div>
              <div>
                <span className="font-bold text-xl text-white">Star Access</span>
                <div className="text-orange-400 text-sm">Looking Glass</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Alat diagnostik jaringan profesional yang didukung infrastruktur tingkat enterprise. Membantu profesional
              jaringan mempertahankan konektivitas optimal di seluruh dunia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                Network Tools
              </a>
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                API Access
              </a>
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                Support
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">System Status</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-400 text-sm">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity size={14} className="text-green-400" />
                <span className="text-slate-400 text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Star Access. All rights reserved. • Network diagnostic tools for professional use.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default LookingGlassApp
