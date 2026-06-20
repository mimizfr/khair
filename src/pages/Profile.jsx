import React, { useState } from 'react';
import { ShieldCheck, MapPin, Briefcase, DollarSign, Languages, Calendar, AlertCircle, ArrowLeft, CheckCircle2, ChevronRight, MessageSquare, User } from 'lucide-react';

export default function Profile({ professional, onBack, onRequestContact }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!professional) {
    return (
      <div className="bg-background py-24 text-center min-h-screen">
        <div className="layout-container max-w-md mx-auto animate-fade-in-up">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-text">Profile Not Found</h3>
          <p className="text-sm text-text-muted mt-3">The selected professional could not be found or does not exist.</p>
          <button
            onClick={onBack}
            className="mt-8 btn-primary text-sm"
          >
            Back to Directory
          </button>
        </div>
      </div>
    );
  }

  const {
    id,
    name,
    specialty,
    location,
    experience,
    priceRange,
    languages = [],
    sessionTypes = [],
    conditionsSupported = [],
    verifiedBadge,
    verificationDetails = {},
    bio,
    services = [],
    trustExplanation,
    avatarBg,
    photo_url
  } = professional;

  const safeDetails = {
    licenseNumber: verificationDetails?.licenseNumber || verificationDetails?.license_number || 'N/A',
    degree: verificationDetails?.degree || 'Verified',
    backgroundCheckDate: verificationDetails?.backgroundCheckDate || verificationDetails?.background_check_date || 'Verified',
    referenceCount: verificationDetails?.referenceCount || verificationDetails?.reference_count || 0
  };

  const safeLanguages = Array.isArray(languages) ? languages : [];
  const safeSessionTypes = Array.isArray(sessionTypes) ? sessionTypes : [];
  const safeConditions = Array.isArray(conditionsSupported) ? conditionsSupported : [];
  const safeServices = Array.isArray(services) ? services : [];

  const hasPhoto = photo_url && !imgError;

  const getInitials = (name) => {
    return name
      .replace(/^Dr\.\s+/i, '')
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  const getGradient = () => {
    const gradients = [
      'from-rose-400 to-orange-300',
      'from-violet-400 to-purple-300',
      'from-emerald-400 to-teal-300',
      'from-sky-400 to-blue-300',
      'from-amber-400 to-yellow-300'
    ];
    // Deterministic gradient based on name length
    return gradients[name.length % gradients.length];
  };

  return (
    <div className="bg-background py-12 md:py-16 min-h-screen">
      <div className="layout-container">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover mb-8 group focus-visible:ring-2 focus-visible:ring-primary rounded-xl px-3 py-2 -ml-3 hover:bg-primary/5 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Search Directory</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            {/* Profile Card */}
            <div className="card-base p-6 md:p-8 flex flex-col items-center text-center overflow-hidden relative">
              {/* Subtle decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Avatar / Photo */}
              <div className="relative mb-6 group">
                <div className={`
                  w-28 h-28 rounded-3xl overflow-hidden shadow-elevated transition-all duration-500 
                  ${hasPhoto ? '' : `bg-gradient-to-br ${avatarBg || getGradient()} flex items-center justify-center text-background font-semibold text-4xl`}
                  group-hover:scale-105 group-hover:shadow-glow
                `}>
                  {hasPhoto ? (
                    <>
                      {!imgLoaded && (
                        <div className="absolute inset-0 bg-secondary/30 animate-pulse rounded-3xl" />
                      )}
                      <img
                        src={photo_url}
                        alt={name}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </>
                  ) : (
                    <span className="drop-shadow-sm">{getInitials(name)}</span>
                  )}
                </div>
                
                {/* Verified badge on avatar */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-soft">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                </div>
              </div>

              <div className="badge badge-success mb-3 shadow-soft">
                <ShieldCheck className="w-3 h-3 fill-current" />
                <span>Verified Expert</span>
              </div>

              <h1 className="text-2xl font-bold text-text leading-tight">{name}</h1>
              <p className="text-base font-semibold text-primary mt-1.5">{specialty}</p>
              <p className="text-xs text-accent font-medium mt-2 bg-accent-light/50 border border-accent/20 px-3 py-1.5 rounded-lg">
                {verifiedBadge || 'Verified Specialist'}
              </p>

              <div className="w-full border-t border-secondary/20 mt-6 pt-6 space-y-4 text-left text-sm">
                <InfoRow icon={MapPin} label="Location" value={`${location || 'UAE'}, UAE`} />
                <InfoRow icon={Briefcase} label="Experience" value={`${experience || 'N/A'} Years of Practice`} />
                <InfoRow 
                  icon={DollarSign} 
                  label="Fee Range" 
                  value={priceRange ? `${priceRange} AED / hour` : 'Price available on request'} 
                />
                <InfoRow 
                  icon={Languages} 
                  label="Languages" 
                  value={safeLanguages.join(', ') || 'Not specified'} 
                />
                <InfoRow 
                  icon={Calendar} 
                  label="Session Modes" 
                  value={safeSessionTypes.join(', ') || 'Not specified'} 
                />
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="card-base p-6 md:p-8 space-y-5 relative overflow-hidden">
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 fill-current" />
                <span>Khair Verification Checklist</span>
              </h3>
              
              <div className="space-y-4">
                <CheckItem 
                  title="Ministry Vetted License" 
                  detail={`License number verified: ${safeDetails.licenseNumber}`} 
                />
                <CheckItem 
                  title="Degree Authenticated" 
                  detail={safeDetails.degree} 
                />
                <CheckItem 
                  title="Police Conduct Certificate" 
                  detail={`Criminal background check cleared: ${safeDetails.backgroundCheckDate}`} 
                />
                <CheckItem 
                  title="Professional References Vetted" 
                  detail={`${safeDetails.referenceCount} professional references checked and approved.`} 
                />
              </div>

              <div className="bg-background rounded-xl p-4 border border-primary/10 shadow-soft">
                <p className="text-xs text-text-muted leading-relaxed">
                  Every document is directly audited by our licensing board. Verified credentials are re-evaluated annually.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Bio */}
            <div className="card-base p-6 md:p-10 space-y-4">
              <h2 className="text-xl font-bold text-text border-b border-secondary/20 pb-3">Professional Profile</h2>
              <p className="text-base text-text-muted leading-relaxed whitespace-pre-wrap">{bio || 'No bio provided.'}</p>
            </div>

            {/* Conditions */}
            <div className="card-base p-6 md:p-10 space-y-4">
              <h3 className="text-lg font-bold text-text">Conditions & Learning Needs Supported</h3>
              {safeConditions.length > 0 ? (
                <div className="flex flex-wrap gap-2.5">
                  {safeConditions.map((cond, idx) => (
                    <span
                      key={idx}
                      className="bg-accent-light/60 border border-accent/20 text-text text-sm font-medium py-2 px-4 rounded-xl transition-all duration-300 hover:bg-accent/20 hover:border-accent/40 hover:-translate-y-0.5 cursor-default"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-text-muted">No specific conditions listed.</p>
              )}
            </div>

            {/* Credentials & Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base p-6 md:p-8 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Clinical Credentials</h3>
                <ul className="space-y-4 text-sm text-text-muted">
                  <DetailItem 
                    label="Active License" 
                    value={safeDetails.licenseNumber} 
                  />
                  <DetailItem 
                    label="Academic" 
                    value={safeDetails.degree.split(',')[0] || safeDetails.degree} 
                  />
                  <DetailItem 
                    label="Institution" 
                    value={safeDetails.degree.includes(',') ? safeDetails.degree.substring(safeDetails.degree.indexOf(',') + 1).trim() : 'Verified'} 
                  />
                </ul>
              </div>

              <div className="card-base p-6 md:p-8 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Services Offered</h3>
                {safeServices.length > 0 ? (
                  <ul className="space-y-4 text-sm text-text-muted">
                    {safeServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-text-muted">No services listed.</p>
                )}
              </div>
            </div>

            {/* Trust Explanation */}
            <div className="bg-accent-light/40 border border-accent/20 rounded-2xl p-6 md:p-8 space-y-3 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wider">Vetting Process & Trust Explanation</h3>
              <p className="text-sm text-text-muted leading-relaxed">{trustExplanation || 'Verified by the Khair safety board.'}</p>
            </div>

            {/* CTA Card */}
            <div className="card-base p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-br from-primary-light/60 to-background border-primary/20 transition-all duration-300 hover:shadow-elevated">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-text flex items-center gap-2 justify-center md:justify-start">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Direct Contact Inquiry
                </h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  Send a secure request directly. They will review your child's criteria and contact you for consultation.
                </p>
              </div>
              <button
                onClick={() => onRequestContact(id)}
                className="btn-primary text-sm py-3.5 px-10 shadow-glow hover:shadow-elevated whitespace-nowrap shrink-0 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Request Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Helper Components */

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 text-text/80 group">
      <div className="w-9 h-9 rounded-xl bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
        <Icon className="w-4 h-4" />
      </div>
      <span className="leading-snug">{value}</span>
    </div>
  );
}

function CheckItem({ title, detail }) {
  return (
    <div className="flex items-start gap-3 group">
      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-text">{title}</h4>
        <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
      <span className="leading-snug">
        {label}: <strong className="text-text">{value}</strong>
      </span>
    </li>
  );
}