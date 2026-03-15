"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navigation />

      <main className="bg-black text-white min-h-screen pt-32 pb-24">
        <div className="container-xl">
          <div className="flex items-center gap-4 mb-8">
            
            <h1 className="text-3xl md:text-5xl font-extrabold">Terms and Conditions</h1>
          </div>

          <div className="prose prose-invert max-w-3xl">
            <p>
              This page is reserved for the Terms and Conditions. Paste the full content you want
              displayed here and I will integrate it into this layout with proper sections, anchors,
              and styling.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
