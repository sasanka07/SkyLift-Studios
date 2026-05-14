import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Logo + Name */}
        <div className="flex justify-center items-center gap-1">
          <Image
            src="/logo.png"
            alt="SkyLift Studios"
            width={60}
            height={20}
            priority
          />
          <h3 className="text-xl font-semibold">SkyLift Studios</h3>
        </div>

        {/* Tagline */}
        <p className="mt-3 text-slate-400">
          Elevating Brands Digitally
        </p>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-8"></div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-slate-500">
          SkyLift Studios © 2026 - All Rights Reserved
        </p>

      </div>
    </footer>
  );
}