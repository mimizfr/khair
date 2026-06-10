import React, { useState } from 'react';
import { Calendar, Users, FileText, Send, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';

export default function Community() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  const events = [
    {
      title: "Parent Support Group Meetup",
      category: "Monthly Support",
      date: "Saturday, June 20, 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Sensory Hub Cafe, Dubai",
      description: "A relaxed, in-person circle for parents of neurodivergent children to share experiences, exchange tips, and build a local community."
    },
    {
      title: "UAE Autism Advocacy Panel",
      category: "Advocacy & Support",
      date: "Wednesday, July 08, 2026",
      time: "7:00 PM - 8:30 PM",
      location: "Online (Zoom)",
      description: "Join school coordinators, legal experts, and advocates discussing educational rights and inclusion strategies inside UAE schools."
    }
  ];

  const workshops = [
    {
      title: "Sensory Friendly Play & Setup at Home",
      instructor: "Yasmin Haddad, OT",
      date: "Tuesday, June 16, 2026",
      time: "6:00 PM - 7:30 PM",
      type: "Webinar",
      description: "Learn basic sensory integration methods and practical ways to modify your child's playroom or homework desk to reduce sensory overload."
    },
    {
      title: "Positive Behavior Supports (PBS) in Daily Routines",
      instructor: "Aisha Al-Hashimi, BCBA",
      date: "Monday, June 29, 2026",
      time: "5:30 PM - 7:00 PM",
      type: "Interactive Workshop",
      description: "A step-by-step framework to establish positive habits, manage transitions, and implement behavior plans effectively at home."
    }
  ];

  const resources = [
    {
      title: "Vetted UAE School Accommodations Checklist",
      type: "PDF Guide",
      size: "1.2 MB",
      description: "A comprehensive checklist designed to help parents gather records and file accommodation requests for school admission interviews."
    },
    {
      title: "DHA License Verification: A Practitioner's Checklist",
      type: "regulatory guide",
      size: "820 KB",
      description: "An informational guide explaining clinical licensing categories (SLT, OT, Psychologist) and what specific stamps to look for."
    },
    {
      title: "Visual Routine Board Starter Kit",
      type: "Printable Cards",
      size: "3.4 MB",
      description: "Downloadable cards containing high-contrast, sensory-friendly icons to build transition boards for morning and bedtime routines."
    }
  ];

  return (
    <div className="bg-[#FAFAF7] py-12">
      <div className="layout-container">
        {/* Page Header */}
        <div className="mb-12 text-left max-w-2xl">
          <h1 className="text-3xl font-bold text-text">Community Events & Resources</h1>
          <p className="text-sm text-text-muted mt-2">
            Access parent events, educational webinars, guides, and routine templates designed by specialists in the UAE.
          </p>
        </div>

        {/* Grid Layout for Events & Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Section 1: Events */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2 flex items-center gap-2">
              <Calendar className="w-5.5 h-5.5 text-primary" />
              <span>Upcoming Events</span>
            </h2>

            <div className="space-y-4">
              {events.map((ev, idx) => (
                <div key={idx} className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded">
                      {ev.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-text">{ev.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{ev.description}</p>
                  <div className="border-t border-[#A7C4BC]/20 pt-3 mt-2 grid grid-cols-2 gap-2 text-[11px] text-text-muted">
                    <div><strong>Date:</strong> {ev.date}</div>
                    <div><strong>Time:</strong> {ev.time}</div>
                    <div className="col-span-2"><strong>Location:</strong> {ev.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Workshops */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2 flex items-center gap-2">
              <Users className="w-5.5 h-5.5 text-primary" />
              <span>Educational Workshops</span>
            </h2>

            <div className="space-y-4">
              {workshops.map((ws, idx) => (
                <div key={idx} className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded">
                      {ws.type}
                    </span>
                    <span className="text-[11px] text-text-muted">Led by: <strong>{ws.instructor}</strong></span>
                  </div>
                  <h3 className="text-base font-bold text-text">{ws.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{ws.description}</p>
                  <div className="border-t border-[#A7C4BC]/20 pt-3 mt-2 grid grid-cols-2 gap-2 text-[11px] text-text-muted">
                    <div><strong>Date:</strong> {ws.date}</div>
                    <div><strong>Time:</strong> {ws.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Printable & PDF Resources */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2 flex items-center gap-2">
            <FileText className="w-5.5 h-5.5 text-primary" />
            <span>Learning Resources & Toolkits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((res, idx) => (
              <div key={idx} className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-primary/50 calm-transition">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{res.type}</span>
                    <span className="text-[10px] text-text-muted bg-secondary-light border border-secondary/20 px-2 py-0.5 rounded">{res.size}</span>
                  </div>
                  <h3 className="text-sm font-bold text-text">{res.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{res.description}</p>
                </div>
                <button className="mt-5 w-full bg-secondary-light hover:bg-[#A7C4BC]/20 text-primary font-semibold py-2 px-4 border border-primary/20 rounded-xl text-xs flex items-center justify-center gap-1.5 calm-transition focus-visible:ring-2 focus-visible:ring-primary shadow-sm">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Download Resource</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Newsletter Signup */}
        <div className="bg-[#edf4f3] border border-primary/20 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
            <Bookmark className="w-6 h-6 fill-current text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-text">Join the Khair Support Newsletter</h2>
          <p className="text-xs text-text-muted mt-2 max-w-md mx-auto leading-relaxed">
            Stay informed with verified resources, early screening timelines, and announcements for parent-support groups across the UAE.
          </p>

          {isSubscribed ? (
            <div className="mt-6 bg-[#FAFAF7]/95 border border-primary/30 rounded-xl p-4 flex items-center justify-center gap-2 text-xs text-primary max-w-sm mx-auto shadow-sm">
              <CheckCircle2 className="w-4.5 h-4.5 text-primary" />
              <span>Subscription successful! Thank you.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-4 text-xs text-text focus-visible:border-primary calm-transition"
                aria-label="Email Address for newsletter"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-[#FAFAF7] font-bold py-2.5 px-6 rounded-xl calm-transition text-xs flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary shrink-0 shadow-sm"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
