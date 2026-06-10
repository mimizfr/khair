import React from 'react';
import { ShieldCheck, MapPin, Briefcase, DollarSign, Languages, Calendar, AlertCircle, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Profile({ professional, onBack, onRequestContact }) {
  if (!professional) {
    return (
      <div className="bg-[#FAFAF7] py-20 text-center min-h-screen">
        <div className="layout-container max-w-md mx-auto">
          <AlertCircle className="w-12 h-12 text-[#C89F7B] mx-auto mb-4" />
          <h3 className="text-lg font-bold text-text">Profile Not Found</h3>
          <p className="text-sm text-text-muted mt-2">The selected professional could not be found or does not exist.</p>
          <button
            onClick={onBack}
            className="mt-6 bg-[#2F6F6D] hover:bg-[#245654] text-[#FAFAF7] font-semibold py-2.5 px-6 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary"
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
    languages,
    sessionTypes,
    conditionsSupported,
    verifiedBadge,
    verificationChecklist,
    verificationDetails,
    bio,
    services,
    trustExplanation,
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
    <div className="bg-[#FAFAF7] py-12 min-h-screen">
      <div className="layout-container">
        {/* Navigation Breadcrumb */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover mb-8 group focus-visible:ring-2 focus-visible:ring-primary rounded p-1 calm-transition"
        >
          <ArrowLeft className="w-4 h-4 calm-transition group-hover:-translate-x-1" />
          <span>Back to Search Directory</span>
        </button>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: Sidebar & Checklist */}
          <div className="space-y-6 lg:col-span-1">
            {/* Main Info Card */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${avatarBg || 'from-[#2F6F6D] to-[#A7C4BC]'} flex items-center justify-center text-[#FAFAF7] font-semibold text-3xl shadow-md mb-4`}>
                {getInitials(name)}
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#edf4f3] border border-[#2F6F6D]/20 text-[#2F6F6D] text-xs font-bold px-3 py-1 rounded-full shadow-sm mb-3">
                <ShieldCheck className="w-3.5 h-3.5 fill-current" />
                <span>Verified Expert</span>
              </div>

              <h1 className="text-xl font-bold text-text">{name}</h1>
              <p className="text-sm font-semibold text-primary mt-1">{specialty}</p>
              <p className="text-xs text-accent font-medium mt-1 bg-accent/5 border border-accent/20 px-2.5 py-0.5 rounded-md">
                {verifiedBadge}
              </p>

              {/* Attributes block */}
              <div className="w-full border-t border-[#A7C4BC]/25 mt-6 pt-6 space-y-4 text-left text-xs">
                <div className="flex items-center gap-3 text-text/80">
                  <MapPin className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <span>Located in <strong>{location}, UAE</strong></span>
                </div>
                <div className="flex items-center gap-3 text-text/80">
                  <Briefcase className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <span><strong>{experience} Years</strong> of Practice Experience</span>
                </div>
                <div className="flex items-center gap-3 text-text/80">
                  <DollarSign className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <span>Fee Range: <strong>{priceRange} AED / hour</strong></span>
                </div>
                <div className="flex items-center gap-3 text-text/80">
                  <Languages className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <span>Speaks: {languages.join(', ')}</span>
                </div>
                <div className="flex items-center gap-3 text-text/80">
                  <Calendar className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <span>Session Modes: {sessionTypes.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* STRICT SYSTEM REQ: VISIBLE VERIFICATION CHECKLIST CARD */}
            <div className="bg-[#edf4f3] border border-primary/20 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 fill-current text-primary" />
                <span>Khair Verification Checklist</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-text">Ministry Vetted License</h4>
                    <p className="text-[10px] text-text-muted mt-0.5">License number verified: {verificationDetails.licenseNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-text">Degree Authenticated</h4>
                    <p className="text-[10px] text-text-muted mt-0.5">{verificationDetails.degree}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-text">Police Conduct Certificate</h4>
                    <p className="text-[10px] text-text-muted mt-0.5">Criminal background check cleared: {verificationDetails.backgroundCheckDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-text">Professional References Vetted</h4>
                    <p className="text-[10px] text-text-muted mt-0.5">{verificationDetails.referenceCount} professional references checked and approved.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAF7] rounded-lg p-3 border border-primary/10">
                <p className="text-[10px] text-text-muted leading-relaxed">
                  Every document is directly audited by our licensing board. Verified credentials are re-evaluated annually.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio, Details, Services, Contact CTA */}
          <div className="space-y-6 lg:col-span-2">
            {/* Bio Section */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-text border-b border-[#A7C4BC]/20 pb-2">Professional Profile</h2>
              <p className="text-sm text-text-muted leading-relaxed whitespace-pre-wrap">{bio}</p>
            </div>

            {/* Conditions Supported (Expanded Field) */}
            <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-8 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-text">Conditions & Learning Needs Supported</h3>
              <div className="flex flex-wrap gap-2">
                {conditionsSupported.map((cond, idx) => (
                  <span
                    key={idx}
                    className="bg-accent/10 border border-accent/20 text-[#A7C4BC] text-[#1F2933] text-xs font-medium py-1.5 px-3 rounded-lg"
                  >
                    {cond}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials & Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Credentials detail block */}
              <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm space-y-3.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Clinical Credentials</h3>
                <ul className="space-y-3 text-xs text-text-muted">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C89F7B] shrink-0 mt-0.5" />
                    <span>Active License: <strong>{verificationDetails.licenseNumber}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C89F7B] shrink-0 mt-0.5" />
                    <span>Academic: <strong>{verificationDetails.degree.split(',')[0]}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C89F7B] shrink-0 mt-0.5" />
                    <span>Institution: <strong>{verificationDetails.degree.substring(verificationDetails.degree.indexOf(',') + 1).trim()}</strong></span>
                  </li>
                </ul>
              </div>

              {/* Services offered */}
              <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm space-y-3.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Services Offered</h3>
                <ul className="space-y-3 text-xs text-text-muted">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trust Explanation Section */}
            <div className="bg-accent-light/35 border border-accent/20 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wider">Vetting Process & Trust Explanation</h3>
              <p className="text-xs text-text-muted leading-relaxed">{trustExplanation}</p>
            </div>

            {/* Final Page CTA Section: Navigates to dedicated Contact Page */}
            <div className="bg-[#FAFAF7] border border-primary/20 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-bold text-text">Direct Contact Inquiry</h3>
                <p className="text-xs text-text-muted mt-1">
                  Send a secure request directly. They will review your child's criteria and contact you for consultation.
                </p>
              </div>
              <button
                onClick={() => onRequestContact(id)}
                className="bg-primary hover:bg-primary-hover text-[#FAFAF7] font-semibold py-3 px-8 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary shadow-sm whitespace-nowrap"
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
