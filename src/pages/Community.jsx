import React, { useState } from 'react';
import { Calendar, Users, FileText, Send, CheckCircle2, Bookmark, ArrowRight, Video, MapPin, Clock } from 'lucide-react';

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
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="layout-container max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text leading-tight tracking-tight">Community Events & Resources</h1>
          <p className="text-lg text-text-muted mt-4 leading-relaxed max-w-2xl">
            Access parent events, educational webinars, guides, and routine templates designed by specialists in the UAE.
          </p>
        </div>
      </section>

      <div className="layout-container pb-24 space-y-20">
        {/* Grid Layout for Events & Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Section 1: Events */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-text border-b border-secondary/25 pb-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Calendar className="w-5 h-5" />
              </div>
              <span>Upcoming Events</span>
            </h2>

            <div className="space-y-6 stagger-children">
              {events.map((ev, idx) => (
                <div key={idx} className="card-base p-7 space-y-4 group">
                  <div className="flex justify-between items-center">
                    <span className="badge badge-accent">
                      {ev.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors duration-300">{ev.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{ev.description}</p>
                  <div className="border-t border-secondary/20 pt-4 mt-2 grid grid-cols-1 gap-2.5 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      <span>{ev.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Workshops */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-2xl font-bold text-text border-b border-secondary/25 pb-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Video className="w-5 h-5" />
              </div>
              <span>Educational Workshops</span>
            </h2>

            <div className="space-y-6 stagger-children">
              {workshops.map((ws, idx) => (
                <div key={idx} className="card-base p-7 space-y-4 group">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="badge badge-success">
                      {ws.type}
                    </span>
                    <span className="text-xs text-text-muted bg-secondary-light border border-secondary/20 px-2.5 py-1 rounded-lg">Led by: <strong className="text-text">{ws.instructor}</strong></span>
                  </div>
                  <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors duration-300">{ws.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{ws.description}</p>
                  <div className="border-t border-secondary/20 pt-4 mt-2 grid grid-cols-2 gap-2.5 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      <span>{ws.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Printable & PDF Resources */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-text border-b border-secondary/25 pb-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <span>Learning Resources & Toolkits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {resources.map((res, idx) => (
              <div key={idx} className="card-base p-7 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{res.type}</span>
                    <span className="text-xs text-text-muted bg-secondary-light border border-secondary/20 px-2.5 py-1 rounded-lg font-medium">{res.size}</span>
                  </div>
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors duration-300">{res.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{res.description}</p>
                </div>
                <button className="mt-6 w-full btn-secondary text-xs py-2.5 group/btn">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Download Resource</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Newsletter Signup */}
        <div className="bg-primary-light/60 border border-primary/20 rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto relative overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 shadow-soft">
              <Bookmark className="w-7 h-7 fill-current" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text">Join the Khair Support Newsletter</h2>
            <p className="text-sm text-text-muted mt-3 max-w-md mx-auto leading-relaxed">
              Stay informed with verified resources, early screening timelines, and announcements for parent-support groups across the UAE.
            </p>

            {isSubscribed ? (
              <div className="mt-8 bg-background/95 border border-primary/20 rounded-xl p-5 flex items-center justify-center gap-3 text-sm text-primary max-w-sm mx-auto shadow-soft animate-scale-in">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Subscription successful! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                  aria-label="Email Address for newsletter"
                />
                <button
                  type="submit"
                  className="btn-primary text-sm py-3 px-6 shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}