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
    <div className="group pt-1">
      {}
      <div 
        className="card-base p-7 flex flex-col justify-between transform transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:bg-secondary/5 group-hover:shadow-card-hover"
      >
        <div>
          {/* Card Header: Avatar & Vetted Badge */}
          <div className="flex justify-between items-start gap-4 mb-6">
            <div 
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarBg || 'from-primary to-secondary'} flex items-center justify-center text-background font-semibold text-xl shadow-inner transition-shadow duration-300 ease-out group-hover:shadow-glow`}
            >
              {getInitials(name)}
            </div>
            <div className="badge badge-success shadow-soft transition-shadow duration-300 group-hover:shadow-md">
              <ShieldCheck className="w-3 h-3 fill-current" />
              <span>Vetted</span>
            </div>
          </div>

          {/* Professional Identity */}
          <div className="space-y-2 mb-5">
            <h3 className="text-lg font-bold text-text transition-colors duration-300 group-hover:text-primary">
              {name}
            </h3>
            <p className="text-sm font-semibold text-primary">{specialty}</p>
            <div className="inline-block text-xs font-medium text-accent bg-accent-light border border-accent/20 px-2.5 py-1 rounded-lg transition-colors duration-300 group-hover:border-accent/40">
              {verifiedBadge}
            </div>
          </div>

          {/* Attributes Grid */}
          <div className="border-t border-secondary/25 pt-5 pb-2 grid grid-cols-2 gap-y-3 gap-x-3 text-xs text-text/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{location}, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">
                {experience} {experience === 1 ? 'year' : 'years'} exp
              </span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                <DollarSign className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">
                {priceRange ? priceRange : 'Price available on request'}
              </span>
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-5 mt-5 border-t border-secondary/25">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewProfile(id);
            }}
           
            className="w-full bg-background hover:bg-primary text-primary hover:text-background font-semibold py-3 px-4 rounded-xl border border-primary/30 hover:border-primary cursor-pointer transition-[colors,box-shadow] duration-200 text-sm flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-primary shadow-soft hover:shadow-glow group/btn"
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
