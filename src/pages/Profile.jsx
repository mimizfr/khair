import React from 'react';
import { ShieldCheck, MapPin, Briefcase, DollarSign, Languages, Calendar, AlertCircle, ArrowLeft, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';

export default function Profile({ professional, onBack, onRequestContact }) {
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
    avatarBg
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
    <div className="bg-background py-16 min-h-screen">
      <div className="layout-container">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover mb-10 group focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-2 hover:bg-primary/5 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Search Directory</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6 lg:col-span-1 animate-fade-in-up">
            {/* Profile Card */}
            <div className="card-base p-8 flex flex-col items-center text-center">
              <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${avatarBg || 'from-primary to-secondary'} flex items-center justify-center text-background font-semibold text-4xl shadow-elevated mb-6 transition-all duration-300 hover:scale-105 hover:shadow-glow`}>
                {getInitials(name)}
              </div>

              <div className="badge badge-success mb-4 shadow-soft">
                <ShieldCheck className="w-3 h-3 fill-current" />
                <span>Verified Expert</span>
              </div>

              <h1 className="text-2xl font-bold text-text">{name}</h1>
              <p className="text-base font-semibold text-primary mt-1.5">{specialty}</p>
              <p className="text-xs text-accent font-medium mt-2 bg-accent-light/50 border border-accent/20 px-3 py-1 rounded-lg">
                {verifiedBadge || 'Verified Specialist'}
              </p>

              <div className="w-full border-t border-secondary/25 mt-8 pt-6 space-y-4 text-left text-sm">
                <div className="flex items-center gap-3 text-text/80 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Located in <strong className="text-text">{location || 'UAE'}, UAE</strong></span>
                </div>
                <div className="flex items-center gap-3 text-text/80 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span><strong className="text-text">{experience || 'N/A'} Years</strong> of Practice Experience</span>
                </div>
                <div className="flex items-center gap-3 text-text/80 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <DollarSign className="w-4 h-4" />
                  </div>
                      <span>Fee Range: <strong className="text-text">{priceRange ? `${priceRange} AED / hour` : 'Price available on request'}</strong></span>                </div>
                <div className="flex items-center gap-3 text-text/80 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Languages className="w-4 h-4" />
                  </div>
                  <span>Speaks: {safeLanguages.join(', ') || 'Not specified'}</span>
                </div>
                <div className="flex items-center gap-3 text-text/80 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>Session Modes: {safeSessionTypes.join(', ') || 'Not specified'}</span>
                </div>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="card-base p-8 space-y-5">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 fill-current" />
                <span>Khair Verification Checklist</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Ministry Vetted License</h4>
                    <p className="text-xs text-text-muted mt-0.5">License number verified: {safeDetails.licenseNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Degree Authenticated</h4>
                    <p className="text-xs text-text-muted mt-0.5">{safeDetails.degree}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Police Conduct Certificate</h4>
                    <p className="text-xs text-text-muted mt-0.5">Criminal background check cleared: {safeDetails.backgroundCheckDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">Professional References Vetted</h4>
                    <p className="text-xs text-text-muted mt-0.5">{safeDetails.referenceCount} professional references checked and approved.</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl p-4 border border-primary/10 shadow-soft">
                <p className="text-xs text-text-muted leading-relaxed">
                  Every document is directly audited by our licensing board. Verified credentials are re-evaluated annually.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {/* Bio */}
            <div className="card-base p-8 md:p-10 space-y-5">
              <h2 className="text-xl font-bold text-text border-b border-secondary/20 pb-3">Professional Profile</h2>
              <p className="text-base text-text-muted leading-relaxed whitespace-pre-wrap">{bio || 'No bio provided.'}</p>
            </div>

            {/* Conditions */}
            <div className="card-base p-8 md:p-10 space-y-5">
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
              <div className="card-base p-8 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Clinical Credentials</h3>
                <ul className="space-y-4 text-sm text-text-muted">
                  <li className="flex items-start gap-3 group">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span>Active License: <strong className="text-text">{safeDetails.licenseNumber}</strong></span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span>Academic: <strong className="text-text">{safeDetails.degree.split(',')[0]}</strong></span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span>Institution: <strong className="text-text">{safeDetails.degree.substring(safeDetails.degree.indexOf(',') + 1).trim()}</strong></span>
                  </li>
                </ul>
              </div>

              <div className="card-base p-8 space-y-5">
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
            <div className="bg-accent-light/40 border border-accent/20 rounded-2xl p-8 space-y-3 hover-lift">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wider">Vetting Process & Trust Explanation</h3>
              <p className="text-sm text-text-muted leading-relaxed">{trustExplanation || 'Verified by the Khair safety board.'}</p>
            </div>

            {/* CTA Card */}
            <div className="card-base p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 bg-gradient-to-br from-primary-light/60 to-background border-primary/20">
              <div>
                <h3 className="text-xl font-bold text-text flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Direct Contact Inquiry
                </h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  Send a secure request directly. They will review your child's criteria and contact you for consultation.
                </p>
              </div>
              <button
                onClick={() => onRequestContact(id)}
                className="btn-primary text-sm py-3.5 px-10 shadow-glow hover:shadow-elevated whitespace-nowrap shrink-0"
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