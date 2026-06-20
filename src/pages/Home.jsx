import React, { useState } from 'react';
import { ShieldCheck, Heart, Users, ChevronDown, ChevronUp, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import ProfessionalCard from '../components/ProfessionalCard';

export default function Home({ professionals, setCurrentPage, setSelectedProfessionalId }) {
  const [activeFaq, setActiveFaq] = useState(null);

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
    <div className="bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-primary-light/60 to-background pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-60 animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="layout-container text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in-up">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Vetted Special Needs Support in the UAE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Connecting parents with trusted educational support
          </h1>
          <p className="text-lg md:text-xl text-text-muted mt-6 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Find verified therapists, special educators, and learning specialists for your child in a calm, stress-free marketplace built for families in the UAE.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={handleFindClick}
              className="btn-primary text-base py-4 px-8 shadow-card hover:shadow-glow"
            >
              Find Professionals
            </button>
            <button
              onClick={handleAboutClick}
              className="btn-secondary text-base py-4 px-8"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. USER-TYPE SECTION */}
      <section className="section-padding bg-background border-y border-secondary/15">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Who We Support</h2>
            <p className="text-base text-text-muted mt-3">Tailored experiences for the entire care network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Parents Card */}
            <div className="card-base p-8 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                  <Heart className="w-7 h-7 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-text">For Parents</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Browse verified local specialists with clear prices, specialties, and qualifications. Request contact directly with absolute privacy.
                </p>
              </div>
              <button
                onClick={handleFindClick}
                className="mt-6 text-left text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1.5 group/btn transition-all duration-300"
              >
                <span>Search the directory</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Educators Card */}
            <div className="card-base p-8 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text">For Educators</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Build your verified professional profile. Highlight your licensing, expertise, and availability to reach families seeking your help.
                </p>
              </div>
              <button
                onClick={handleJoinClick}
                className="mt-6 text-left text-sm font-bold text-accent hover:text-accent-hover flex items-center gap-1.5 group/btn transition-all duration-300"
              >
                <span>Apply as professional</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Organizations Card */}
            <div className="card-base p-8 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                  <Users className="w-7 h-7" />
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
                className="mt-6 text-left text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1.5 group/btn transition-all duration-300"
              >
                <span>Read our mission</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="section-padding bg-background">
        <div className="layout-container">
          <div className="bg-accent-light/60 border border-accent/20 rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center hover-lift">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg">
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
      <section className="section-padding bg-primary-light/30 border-t border-secondary/10">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text">How Khair Works</h2>
            <p className="text-base text-text-muted mt-3">Simple, clear steps to secure verified support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative stagger-children">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
            
            {/* Step 1 */}
            <div className="text-center space-y-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-primary text-background font-bold text-xl flex items-center justify-center mx-auto shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-bold text-text">Search and Filter</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                Filter by location (UAE), specialty (SLT, OT, SEN), availability, and child's supported condition.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-primary text-background font-bold text-xl flex items-center justify-center mx-auto shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-bold text-text">Review Vetted Profiles</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                Inspect verification checklists, licenses, prices, languages, and detailed clinical bios.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-accent text-background font-bold text-xl flex items-center justify-center mx-auto shadow-card hover:shadow-lg transition-all duration-300 hover:scale-110">
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
      <section className="section-padding bg-background">
        <div className="layout-container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-14 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">Featured Professionals</h2>
              <p className="text-base text-text-muted mt-1">Vetted specialists with active availability in the UAE.</p>
            </div>
            <button
              onClick={handleFindClick}
              className="text-sm font-bold text-primary hover:text-primary-hover border-b-2 border-primary pb-1 transition-all duration-300 hover:gap-2"
            >
              View All Directory
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
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
      <section className="section-padding bg-background border-t border-secondary/20">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
                <span>Verification Rigor</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
                Our Vetting Standard: Why You Can Trust Khair
              </h2>
              <p className="text-base text-text-muted leading-relaxed">
                We believe parents shouldn't have to second-guess the credentials of those caring for their child. Our safety desk checks every detail:
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow shrink-0">
                    <ShieldCheck className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text">Healthcare License Validation</h4>
                    <p className="text-sm text-text-muted mt-1">Direct validation of DHA, HAAD, or MOH clinical licenses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow shrink-0">
                    <ShieldCheck className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text">Ministry Degree Authentication</h4>
                    <p className="text-sm text-text-muted mt-1">Verification of educational transcripts and local Ministry equivalency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow shrink-0">
                    <ShieldCheck className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text">Background & Reference Screening</h4>
                    <p className="text-sm text-text-muted mt-1">Background checks and review of references from verified clinics/schools.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vetting Visual Display */}
            <div className="bg-primary-light/50 rounded-3xl p-8 md:p-10 border border-primary/15 space-y-6 hover-lift">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 fill-current" />
                <span>Verification Status Desk</span>
              </h3>
              <div className="bg-surface/80 rounded-2xl p-6 space-y-4 text-sm border border-white/50 shadow-soft">
                <div className="flex justify-between items-center border-b border-primary/10 pb-3">
                  <span className="font-medium text-text">DHA / MOH Clinical License</span>
                  <span className="badge badge-success">Direct Verified</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-3">
                  <span className="font-medium text-text">Educational Degrees (M.Ed, PhD, BSc)</span>
                  <span className="badge badge-success">MOE Authenticated</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-3">
                  <span className="font-medium text-text">Police Good Conduct Check</span>
                  <span className="badge badge-success">Cleared</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text">Clinical Onboarding Interview</span>
                  <span className="badge badge-success">Approved</span>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                * Note: Licenses are re-verified every 12 months to ensure continuous legal practice compliance in the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY PREVIEW */}
      <section className="section-padding bg-primary-light/20 border-y border-secondary/10">
        <div className="layout-container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-14 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text">Community Support & Events</h2>
              <p className="text-base text-text-muted mt-1">Informational parent webinars, worksheets, and resources.</p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('community');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary text-sm"
            >
              Browse Community Page
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className="card-base p-7 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Webinar • June 18, 2026</span>
                <h4 className="text-lg font-bold text-text mt-1.5">Sensory Friendly Environments at Home</h4>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  Join Occupational Therapist Yasmin Haddad for a practical workshop on setting up low-sensory homework and relaxation spaces.
                </p>
              </div>
            </div>

            <div className="card-base p-7 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Resource Guide • PDF</span>
                <h4 className="text-lg font-bold text-text mt-1.5">Navigating IEPs in UAE Schools</h4>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  A step-by-step checklist explaining how to request and establish an Individualized Education Plan (IEP) in UAE curriculum structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="section-padding bg-background">
        <div className="layout-container max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Frequently Asked Questions</h2>
            <p className="text-base text-text-muted mt-2">Answers to common questions about vetting and session coordination.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-surface border border-secondary/30 rounded-2xl overflow-hidden transition-all duration-400 hover:border-secondary/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left text-text font-semibold transition-all duration-300 hover:text-primary focus:outline-none"
                  aria-expanded={activeFaq === index}
                >
                  <span className="text-base pr-4">{faq.q}</span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeFaq === index ? 'bg-primary text-white rotate-180' : 'bg-primary/10 text-primary'
                  }`}>
                    {activeFaq === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-calm ${
                  activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0 text-sm text-text-muted leading-relaxed border-t border-secondary/20">
                    <div className="pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-text text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="layout-container text-center max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Find Vetted Support Today</h2>
          <p className="text-base text-background/85 mt-5 leading-relaxed">
            Take a gentle step forward. Connect with verified occupational therapists, speech therapists, behavior experts, and special educators located in the UAE.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleFindClick}
              className="btn-primary text-sm py-4 px-8"
            >
              Find Professionals
            </button>
            <button
              onClick={handleJoinClick}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold py-4 px-8 rounded-xl border border-secondary/40 text-secondary hover:bg-white/10 transition-all duration-300"
            >
              Educator Registration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}