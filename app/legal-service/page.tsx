"use client";

import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";



export default function LegalServicePage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-32 pb-24 bg-black text-white overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          <div className="orb orb-5" />
          <div className="bg-dot-overlay" />
          <div className="bg-vignette" />
        </div>

        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Legal <span className="gradient-text-primary">Service</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              We respect your privacy and are committed to protecting your personal data.
            </p>
          </div>

          <div className="legal-bg rounded-2xl p-8 relative z-10">
            <h2 className="text-xl font-bold text-white mb-3"> <span className="gradient-text-primary">Privacy Policy</span></h2>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              At Akronix, we value and respect the privacy of our users and are committed to protecting the personal information you share with us when accessing our website, applications, and SaaS services. When you interact with our platform, we may collect certain information including your name, email address, contact details, business information, device information, IP address, browser type, and usage data such as pages visited and interaction patterns. This information is collected to provide, operate, and improve our services, personalize user experience, communicate important updates, ensure platform security, and maintain service functionality. Akronix may also use cookies and similar technologies to enhance performance, analyze website traffic, remember user preferences, and optimize the overall experience of our platform. We take appropriate administrative, technical, and security measures to safeguard user data against unauthorized access, misuse, or disclosure. Akronix does not sell or rent personal information to third parties; however, certain trusted third-party service providers such as hosting services, analytics tools, or payment processors may have limited access to information necessary to perform their services on our behalf while maintaining confidentiality and security standards. Users have the right to request access, correction, or deletion of their personal data where applicable. By continuing to access or use the Akronix platform, you acknowledge and consent to the collection, use, and processing of your information as described in this Privacy Policy. Akronix may update or modify this policy from time to time to reflect improvements, legal requirements, or service changes, and any updates will be posted on this page.
            </p>
            <Link href="/" className="text-sm text-white/60 hover:text-white">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}