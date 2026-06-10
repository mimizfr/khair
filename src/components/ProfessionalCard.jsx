import React from 'react';
import { ShieldCheck, MapPin, Briefcase, DollarSign, ArrowRight } from 'lucide-react';

export default function ProfessionalCard({ professional, onViewProfile }) {
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

  // Get initials for the avatar
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
    <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/60 calm-transition shadow-sm hover:shadow-md">
      <div>
        {/* Card Header: Avatar & Vetted Badge */}
        <div className="flex justify-between items-start gap-4 mb-5">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarBg || 'from-[#2F6F6D] to-[#A7C4BC]'} flex items-center justify-center text-[#FAFAF7] font-semibold text-lg shadow-inner`}>
            {getInitials(name)}
          </div>
          <div className="flex items-center gap-1.5 bg-[#edf4f3] border border-[#2F6F6D]/20 text-[#2F6F6D] text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 fill-current" />
            <span>Vetted</span>
          </div>
        </div>

        {/* Professional Identity */}
        <div className="space-y-1 mb-4">
          <h3 className="text-lg font-bold text-text hover:text-primary calm-transition">{name}</h3>
          <p className="text-sm font-semibold text-primary">{specialty}</p>
          <div className="inline-block text-[11px] font-medium text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
            {verifiedBadge}
          </div>
        </div>

        {/* Attributes Grid */}
        <div className="border-t border-[#A7C4BC]/25 pt-4 pb-2 grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-text/80">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span>{location}, UAE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-secondary" />
            <span>{experience} years exp</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <DollarSign className="w-3.5 h-3.5 text-secondary" />
            <span>{priceRange} AED / hour</span>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="border-t border-[#A7C4BC]/25 pt-4 mt-4">
        <button
          onClick={() => onViewProfile(id)}
          className="w-full bg-[#FAFAF7] hover:bg-primary-light text-primary hover:text-primary-hover font-semibold py-2.5 px-4 rounded-xl border border-primary/30 calm-transition text-xs flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
        >
          <span>View Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
