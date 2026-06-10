import React, { useState } from 'react';
import { ShieldCheck, Heart, Users, ChevronDown, ChevronUp, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import ProfessionalCard from '../components/ProfessionalCard';

export default function Home({ professionals, setCurrentPage, setSelectedProfessionalId }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // Take first 3 professionals for preview cards
  const featuredProfs = professionals.slice(0, 3);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFindClick = () => {
    setCurrentPage('find-professionals');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    setCurrentPage('for-educators');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProfileView = (id) => {
    setSelectedProfessionalId(id);
    setCurrentPage('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "How does Khair verify professionals?",
      a: "Every professional undergoes a strict vetting checklist. We verify their academic degrees via the Ministry of Education, validate clinical licenses directly with UAE authorities (DHA, HAAD, or MOH), run local criminal record checks, and contact professional references before listing them."
    },
    {
      q: "Is there a fee to search and contact educators on Khair?",
      a: "No, Khair is free for parents to search, filter, and request contact with support professionals. The fees for sessions are discussed directly between you and the professional, with no platform markup."
    },
    {
      q: "What types of professionals can I find here?",
      a: "Our directory includes Speech-Language Therapists (SLTs), Occupational Therapists (OTs), Special Education Teachers, Behavior Analysts (BCBAs), and Educational Psychologists specializing in developmental and learning support."
    },
    {
      q: "Can I choose between online and in-person sessions?",
      a: "Yes. Many of our specialists offer flexible session configurations including online, hybrid (mix of online and home-based), or dedicated in-person support across the UAE."
    }
  ];

  return (
    <div className="bg-[#FAFAF7]">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#edf4f3] to-[#FAFAF7] py-20 md:py-28">
        <div className="layout-container text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Vetted Special Needs Support in the UAE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text leading-tight tracking-tight">
            Connecting parents with trusted educational support
          </h1>
          <p className="text-lg text-text-muted mt-6 leading-relaxed">
            Find verified therapists, special educators, and learning specialists for your child in a calm, stress-free marketplace built for families in the UAE.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleFindClick}
              className="bg-[#2F6F6D] hover:bg-[#245654] text-[#FAFAF7] font-semibold py-4 px-8 rounded-xl calm-transition text-base shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
            >
              Find Professionals
            </button>
            <button
              onClick={handleAboutClick}
              className="bg-[#FAFAF7] hover:bg-secondary-light text-primary font-semibold py-4 px-8 rounded-xl border border-primary/30 calm-transition text-base focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. USER-TYPE SECTION */}
      <section className="py-16 bg-[#FAFAF7] border-y border-[#A7C4BC]/20">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-text">Who We Support</h2>
            <p className="text-sm text-text-muted mt-2">Tailored experiences for the entire care network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Parents Card */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-8 flex flex-col justify-between calm-transition hover:border-primary/50 shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-text">For Parents</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Browse verified local specialists with clear prices, specialties, and qualifications. Request contact directly with absolute privacy.
                </p>
              </div>
              <button
                onClick={handleFindClick}
                className="mt-6 text-left text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1 group calm-transition"
              >
                <span>Search the directory</span>
                <span className="calm-transition group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Educators Card */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-8 flex flex-col justify-between calm-transition hover:border-primary/50 shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text">For Educators</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Build your verified professional profile. Highlight your licensing, expertise, and availability to reach families seeking your help.
                </p>
              </div>
              <button
                onClick={handleJoinClick}
                className="mt-6 text-left text-sm font-bold text-accent hover:text-accent-hover flex items-center gap-1 group calm-transition"
              >
                <span>Apply as professional</span>
                <span className="calm-transition group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Organizations Card */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-8 flex flex-col justify-between calm-transition hover:border-primary/50 shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text">For Organizations</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Partner with Khair to secure top-tier certified therapists and educational specialists for classrooms, camps, and specialized facilities.
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-6 text-left text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1 group calm-transition"
              >
                <span>Read our mission</span>
                <span className="calm-transition group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="layout-container">
          <div className="bg-[#faf6f2] border border-accent/25 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <AlertCircle className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text leading-tight">
                Addressing the Trust Gap in Special Needs Support
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-4 leading-relaxed max-w-3xl">
                Finding qualified care is challenging. Parents often navigate unverified recommendations, ambiguous licenses, and unclear therapy costs, leading to unnecessary delays in critical early intervention.
              </p>
              <p className="text-sm md:text-base text-text-muted mt-3 leading-relaxed max-w-3xl">
                Khair was built to create a calm, stress-free space that solves this trust gap. We verify every practitioner's government clinical credentials, background checks, and certifications, giving parents complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 Steps) */}
      <section className="py-20 bg-[#edf4f3]/50 border-t border-[#A7C4BC]/10">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-text">How Khair Works</h2>
            <p className="text-sm text-text-muted mt-3">Simple, clear steps to secure verified support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-[#FAFAF7] font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                1
              </div>
              <h3 className="text-xl font-bold text-text">Search and Filter</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                Filter by location (UAE), specialty (SLT, OT, SEN), availability, and child's supported condition.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-[#FAFAF7] font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                2
              </div>
              <h3 className="text-xl font-bold text-text">Review Vetted Profiles</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                Inspect verification checklists, licenses, prices, languages, and detailed clinical bios.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C89F7B] text-[#FAFAF7] font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                3
              </div>
              <h3 className="text-xl font-bold text-text">Connect Directly</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                Fill out a simple, secure contact form. The professional will reach out to schedule an initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROFESSIONALS */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="layout-container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-text">Featured Professionals</h2>
              <p className="text-sm text-text-muted mt-1">Vetted specialists with active availability in the UAE.</p>
            </div>
            <button
              onClick={handleFindClick}
              className="text-sm font-bold text-primary hover:text-primary-hover border-b border-primary pb-0.5 calm-transition"
            >
              View All Directory
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProfs.map((prof) => (
              <ProfessionalCard 
                key={prof.id} 
                professional={prof} 
                onViewProfile={handleProfileView} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST & VERIFICATION */}
      <section className="py-20 bg-[#FAFAF7] border-t border-[#A7C4BC]/25">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
                <span>Verification Rigor</span>
              </div>
              <h2 className="text-3xl font-bold text-text leading-tight">
                Our Vetting Standard: Why You Can Trust Khair
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                We believe parents shouldn't have to second-guess the credentials of those caring for their child. Our safety desk checks every detail:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Healthcare License Validation</h4>
                    <p className="text-xs text-text-muted">Direct validation of DHA, HAAD, or MOH clinical licenses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Ministry Degree Authentication</h4>
                    <p className="text-xs text-text-muted">Verification of educational transcripts and local Ministry equivalency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Background & Reference Screening</h4>
                    <p className="text-xs text-text-muted">Background checks and review of references from verified clinics/schools.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vetting Visual Display */}
            <div className="bg-[#edf4f3] rounded-2xl p-8 border border-primary/20 space-y-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 fill-current" />
                <span>Verification Status Desk</span>
              </h3>
              <div className="border border-white/50 bg-[#FAFAF7]/80 rounded-xl p-5 space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="font-medium text-text">DHA / MOH Clinical License</span>
                  <span className="bg-[#eef6f5] text-primary border border-primary/20 font-bold px-2 py-0.5 rounded uppercase text-[10px]">Direct Verified</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="font-medium text-text">Educational Degrees (M.Ed, PhD, BSc)</span>
                  <span className="bg-[#eef6f5] text-primary border border-primary/20 font-bold px-2 py-0.5 rounded uppercase text-[10px]">MOE Authenticated</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="font-medium text-text">Police Good Conduct Check</span>
                  <span className="bg-[#eef6f5] text-primary border border-primary/20 font-bold px-2 py-0.5 rounded uppercase text-[10px]">Cleared</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text">Clinical Onboarding Interview</span>
                  <span className="bg-[#eef6f5] text-primary border border-primary/20 font-bold px-2 py-0.5 rounded uppercase text-[10px]">Approved</span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                * Note: Licenses are re-verified every 12 months to ensure continuous legal practice compliance in the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY PREVIEW (Secondary Importance) */}
      <section className="py-20 bg-[#edf4f3]/30 border-y border-[#A7C4BC]/10">
        <div className="layout-container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-text">Community Support & Events</h2>
              <p className="text-sm text-text-muted mt-1">Informational parent webinars, worksheets, and resources.</p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('community');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-primary hover:text-primary-hover border border-primary/20 px-4 py-2 rounded-xl bg-white hover:bg-primary-light calm-transition"
            >
              Browse Community Page
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Webinar • June 18, 2026</span>
                <h4 className="text-base font-bold text-text mt-1">Sensory Friendly Environments at Home</h4>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  Join Occupational Therapist Yasmin Haddad for a practical workshop on setting up low-sensory homework and relaxation spaces.
                </p>
              </div>
            </div>

            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Resource Guide • PDF</span>
                <h4 className="text-base font-bold text-text mt-1">Navigating IEPs in UAE Schools</h4>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  A step-by-step checklist explaining how to request and establish an Individualized Education Plan (IEP) in UAE curriculum structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Interactive Accordions) */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="layout-container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text">Frequently Asked Questions</h2>
            <p className="text-sm text-text-muted mt-2">Answers to common questions about vetting and session coordination.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-2xl calm-transition overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left text-text font-semibold hover:text-primary calm-transition focus:outline-none"
                  aria-expanded={activeFaq === index}
                >
                  <span className="text-base">{faq.q}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text/60" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-sm text-text-muted leading-relaxed border-t border-[#A7C4BC]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-20 bg-[#1F2933] text-[#FAFAF7]">
        <div className="layout-container text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-secondary">Find Vetted Support Today</h2>
          <p className="text-sm text-[#FAFAF7]/85 mt-4 leading-relaxed">
            Take a gentle step forward. Connect with verified occupational therapists, speech therapists, behavior experts, and special educators located in the UAE.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleFindClick}
              className="bg-[#2F6F6D] hover:bg-[#245654] text-[#FAFAF7] font-semibold py-3.5 px-8 rounded-xl calm-transition text-sm border border-[#A7C4BC]/30 shadow-sm"
            >
              Find Professionals
            </button>
            <button
              onClick={handleJoinClick}
              className="bg-transparent hover:bg-white/10 text-secondary font-semibold py-3.5 px-8 rounded-xl border border-secondary/40 calm-transition text-sm"
            >
              Educator Registration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
