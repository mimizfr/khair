import React from 'react';
import { Heart, Compass, ShieldCheck, Accessibility, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#FAFAF7] py-12">
      <div className="layout-container max-w-4xl space-y-16">
        {/* Page Header */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-text">About Khair</h1>
          <p className="text-sm text-text-muted mt-2">
            Bridging the trust gap in special needs educational support in the UAE.
          </p>
        </div>

        {/* 1. MISSION STATEMENT */}
        <section className="bg-[#edf4f3] border border-primary/20 rounded-3xl p-8 md:p-10 shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
            <Heart className="w-6 h-6 fill-current text-primary" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</h2>
          <p className="text-xl font-bold text-text max-w-2xl mx-auto leading-relaxed">
            "To empower parents of neurodivergent children by providing absolute verification, clear choices, and a calm space to connect with licensed support specialists."
          </p>
        </section>

        {/* 2. FOUNDER STORY */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2">The Origin of Khair</h2>
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
            <p>
              Khair (meaning "goodness" or "benevolence" in Arabic) was founded in 2026 by a team of educators and parents in Dubai who experienced firsthand the difficulty of locating qualified therapists for children with learning profiles.
            </p>
            
            <div className="bg-[#faf6f2] border-l-4 border-accent rounded-r-xl p-5 my-6 italic text-text">
              "When my son was diagnosed with ADHD and sensory processing difficulties, our family spent weeks calling clinics, validating credentials on outdated forums, and receiving mixed reviews. There was no single source of truth. I wanted a marketplace where license verification checkmarks were absolute and the user experience felt calm and trustworthy."
              <span className="block mt-2 not-italic text-xs font-bold text-accent">— Mariam Al-Hadi, Founder of Khair</span>
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
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Value 1 */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text">Absolute Rigor</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  We verify every license, degree, reference, and conduct certificate. We do not skip vetting steps.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text">Parent-Centered Empathy</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  We recognize that finding care can be emotionally taxing. We build products that are supportive, clear, and reassuring.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Accessibility className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text">Accessible Transparency</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  No hidden platform fees, no markups, and no visual clutter. Information is structured for clarity.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text">Low Sensory Load</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  We avoid flashy animations and heavy visual clutter. Our design prioritizes calm typography and generous space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHY KHAIR EXISTS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2">Why Khair Exists</h2>
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
            <p>
              The UAE has made incredible strides in advocating for neurodiversity. Schools are increasingly inclusive, and clinical centers offer excellent developmental pathways. However, a significant gap remains at the level of private support coordination:
            </p>
            <ul className="list-disc list-inside space-y-2.5 text-xs pl-2 text-text">
              <li>
                <strong>Verifying Local Licensing:</strong> Knowing whether a specialist holds a valid, active DHA license (Dubai Health Authority) or ADEK certificate should not require digging through regulatory file numbers.
              </li>
              <li>
                <strong>Direct Coordination:</strong> Intermediate agencies often charge high commission rates, making therapy costs unsustainable for families. Direct coordination ensures sustainability.
              </li>
              <li>
                <strong>Early Intervention Access:</strong> Delays in finding a therapist mean delays in child support. Providing immediate access to vetted profiles gets children the help they need sooner.
              </li>
            </ul>
            <p className="pt-2">
              Khair acts as a quiet, reassuring bridge. By making qualifications searchable and accessible, we help UAE families move forward with confidence and ease.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
