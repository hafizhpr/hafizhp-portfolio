import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import InquiryForm from "@/components/sections/InquiryForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <InquiryForm />
      <footer className="border-t border-slate-800 py-6 px-6 text-center">
        <p className="text-slate-700 text-xs font-mono">
          © 2026 Hafiz Hardiansyah Pratama · Built with Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
