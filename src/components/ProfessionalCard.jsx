import React from 'react';
import { ShieldCheck, MapPin, Briefcase, DollarSign, ArrowRight } from 'lucide-react';

export default function ProfessionalCard({ professional, onViewProfile, onRequestContact }) {
  const {
    id,
    name,
    specialty,
    location,
    experience,
    priceRange,
    verifiedBadge,
    avatarBg
  } = professional;

  const getInitials = (name) => {
    return name
      .replace(/^Dr\.\s+/i, '')
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="card-base p-7 flex flex-col justify-between group">
      <div>
        {/* Card Header: Avatar & Vetted Badge */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarBg || 'from-primary to-secondary'} flex items-center justify-center text-background font-semibold text-xl shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow`}>
            {getInitials(name)}
          </div>
          <div className="badge badge-success shadow-soft">
            <ShieldCheck className="w-3 h-3 fill-current" />
            <span>Vetted</span>
          </div>
        </div>

        {/* Professional Identity */}
        <div className="space-y-2 mb-5">
          <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-sm font-semibold text-primary">{specialty}</p>
          <div className="inline-block text-xs font-medium text-accent bg-accent-light border border-accent/20 px-2.5 py-1 rounded-lg">
            {verifiedBadge}
          </div>
        </div>

        {/* Attributes Grid */}
        <div className="border-t border-secondary/25 pt-5 pb-2 grid grid-cols-2 gap-y-3 gap-x-3 text-xs text-text/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">{location}, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">{experience} {experience === 1 ? 'year' : 'years'} exp</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0">
              <DollarSign className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">
              {priceRange ? priceRange : 'Price available on request'}
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA — Fixed: separate buttons, not nested */}
      <div className="flex gap-3 pt-5 mt-5 border-t border-secondary/25">
        <button
          onClick={() => onRequestContact(id)}
          className="flex-1 bg-primary text-background font-semibold py-3 px-4 rounded-xl text-sm shadow-soft hover:shadow-card transition-all"
        >
          Request Contact
        </button>
        <button
          onClick={() => onViewProfile(id)}
          className="flex-1 bg-background text-primary font-semibold py-3 px-4 rounded-xl border border-primary/30 text-sm hover:bg-primary-light transition-all flex items-center justify-center gap-2 group/btn"
        >
          <span>View Profile</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
