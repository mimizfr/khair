import React from 'react';
import { Heart, Compass, ShieldCheck, Accessibility, Sparkles, Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="layout-container max-w-4xl relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text leading-tight tracking-tight">About Khair</h1>
          <p className="text-lg text-text-muted mt-4 leading-relaxed max-w-2xl">
            Bridging the trust gap in special needs educational support in the UAE.
          </p>
        </div>
      </section>

      <div className="layout-container max-w-4xl space-y-20 pb-24">
        {/* 1. MISSION STATEMENT */}
        <section className="bg-primary-light/60 border border-primary/20 rounded-3xl p-10 md:p-14 text-center space-y-6 relative overflow-hidden hover-lift">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto shadow-soft">
            <Heart className="w-7 h-7 fill-current" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</h2>
          <p className="text-xl md:text-2xl font-bold text-text max-w-2xl mx-auto leading-relaxed">
            "To empower parents of neurodivergent children by providing absolute verification, clear choices, and a calm space to connect with licensed support specialists."
          </p>
        </section>

        {/* 2. FOUNDER STORY */}
        <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-text border-b border-secondary/25 pb-3">The Origin of Khair</h2>
          <div className="space-y-5 text-base text-text-muted leading-relaxed">
            <p>
              Khair (meaning "goodness" or "benevolence" in Arabic) was founded in 2026 by a team of educators and parents in Dubai who experienced firsthand the difficulty of locating qualified therapists for children with learning profiles.
            </p>
            
            <div className="bg-accent-light/40 border-l-4 border-accent rounded-r-2xl p-8 my-8 relative shadow-soft">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-accent/20" />
              <p className="italic text-text relative z-10 pl-4">
                "When my son was diagnosed with ADHD and sensory processing difficulties, our family spent weeks calling clinics, validating credentials on outdated forums, and receiving mixed reviews. There was no single source of truth. I wanted a marketplace where license verification checkmarks were absolute and the user experience felt calm and trustworthy."
              </p>
              <span className="block mt-4 not-italic text-sm font-bold text-accent pl-4">— Mariam Al-Hadi, Founder of Khair</span>
            </div>

            <p>
              We realized that the problem was not a lack of qualified specialists in the UAE, but rather a lack of visibility and a trust gap. Excellent therapists existed, but parents were forced to navigate a maze of unvetted forums and clinic markups to find them.
            </p>
            <p>
              Khair was built to solve this. We removed the clinic intermediates and platform commission markups. By verifying clinical credentials directly with government boards (DHA, MOH, ADEK) and presenting them clearly, we enable parents to search, compare, and establish direct contact with experts in a calm environment.
            </p>
          </div>
        </section>

        {/* 3. CORE VALUES */}
        <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-text border-b border-secondary/25 pb-3">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 stagger-children">
            {/* Value 1 */}
            <div className="card-base p-7 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                <ShieldCheck className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">Absolute Rigor</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  We verify every license, degree, reference, and conduct certificate. We do not skip vetting steps.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="card-base p-7 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">Parent-Centered Empathy</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  We recognize that finding care can be emotionally taxing. We build products that are supportive, clear, and reassuring.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="card-base p-7 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                <Accessibility className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">Accessible Transparency</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  No hidden platform fees, no markups, and no visual clutter. Information is structured for clarity.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="card-base p-7 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">Low Sensory Load</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  We avoid flashy animations and heavy visual clutter. Our design prioritizes calm typography and generous space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHY KHAIR EXISTS */}
        <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-text border-b border-secondary/25 pb-3">Why Khair Exists</h2>
          <div className="space-y-5 text-base text-text-muted leading-relaxed">
            <p>
              The UAE has made incredible strides in advocating for neurodiversity. Schools are increasingly inclusive, and clinical centers offer excellent developmental pathways. However, a significant gap remains at the level of private support coordination:
            </p>
            <div className="space-y-4 pl-2">
              {[
                { title: 'Verifying Local Licensing', desc: 'Knowing whether a specialist holds a valid, active DHA license (Dubai Health Authority) or ADEK certificate should not require digging through regulatory file numbers.' },
                { title: 'Direct Coordination', desc: 'Intermediate agencies often charge high commission rates, making therapy costs unsustainable for families. Direct coordination ensures sustainability.' },
                { title: 'Early Intervention Access', desc: 'Delays in finding a therapist mean delays in child support. Providing immediate access to vetted profiles gets children the help they need sooner.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text">{item.title}</h4>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="pt-3">
              Khair acts as a quiet, reassuring bridge. By making qualifications searchable and accessible, we help UAE families move forward with confidence and ease.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}