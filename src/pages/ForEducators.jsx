import React, { useState } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function ForEducators({ onAddApplication }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState('Speech-Language Therapist');
  const [licenseType, setLicenseType] = useState('DHA (Dubai Health Authority)');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [priceRange, setPriceRange] = useState('300 - 450');
  const [languages, setLanguages] = useState('');
  const [conditionsSupported, setConditionsSupported] = useState('');
  const [bio, setBio] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    
    const applicationPayload = {
      name,
      email,
      specialty,
      license_type: licenseType,
      license_number: licenseNumber,
      experience: experience ? `${experience} years` : '',
      price_range: priceRange,
      languages: languages.split(',').map(l => l.trim()).filter(Boolean),
      conditions_supported: conditionsSupported.split(',').map(c => c.trim()).filter(Boolean),
      bio
    };

    try {
      const success = await onAddApplication(applicationPayload);
      
      if (success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please check your connection and try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setError(null);
    setName('');
    setEmail('');
    setLicenseNumber('');
    setExperience('');
    setLanguages('');
    setConditionsSupported('');
    setBio('');
  };

  const handleApplyScroll = () => {
    const formEl = document.getElementById('application-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FAFAF7] py-16 min-h-screen">
        <div className="layout-container max-w-xl mx-auto text-center bg-[#FAFAF7] border border-primary/20 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-text">Application Submitted</h1>
          <p className="text-sm text-text-muted mt-3 leading-relaxed">
            Thank you for applying to join the Khair community of verified specialists. Your application has been securely stored for review.
          </p>

          <div className="bg-[#edf4f3] rounded-xl p-5 my-6 text-left text-xs border border-primary/15 space-y-2.5">
            <div className="flex justify-between">
              <span className="font-bold text-primary">Educator Name:</span>
              <span>{name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-primary">Specialty:</span>
              <span>{specialty}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-primary">License Vetting:</span>
              <span>{licenseNumber} ({licenseType})</span>
            </div>
          </div>

          <div className="text-xs text-text-muted leading-relaxed space-y-2">
            <p>
              <strong>What happens next?</strong> Our licensing board will review your credentials. This process takes <strong>3 to 5 business days</strong>.
            </p>
            <p>
              Once approved, we will notify you at <strong>{email}</strong>, publish your profile, and notify matching families.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="mt-8 bg-transparent hover:bg-secondary-light text-primary font-semibold py-2.5 px-6 border border-primary/25 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF7] py-12">
      {/* Hero / Benefits */}
      <section className="layout-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-text leading-tight">
              Join the Vetted Community of Educational Specialists
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              Khair connects you directly with parents seeking special education support, therapy, and learning guidance in the UAE. We charge zero referral markups, ensuring full pricing freedom and transparent clinical relationships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                  <span className="text-accent">★</span>
                  <span>Build Trusted Visibility</span>
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Every listed specialist carries a vetted badge verified via DHA/MOH regulatory files.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                  <span className="text-accent">♥</span>
                  <span>Zero Markup Referral</span>
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Parents coordinate with you directly. You retain 100% of your hourly clinical session rates.
                </p>
              </div>
            </div>

            <button
              onClick={handleApplyScroll}
              className="bg-primary hover:bg-primary-hover text-[#FAFAF7] font-bold py-3.5 px-8 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Vetting Steps */}
          <div className="bg-[#edf4f3] rounded-2xl p-8 border border-primary/20 space-y-5">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 fill-current" />
              <span>Vetting & Verification Process</span>
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              To guarantee parent safety, every specialist joins through four key checkpoints:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-[#FAFAF7] font-bold text-xs flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-xs font-bold text-text">Credentials Intake</h4>
                  <p className="text-[11px] text-text-muted">Submit your academic transcripts and government-issued professional practice licenses.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-[#FAFAF7] font-bold text-xs flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-xs font-bold text-text">License Check & Reference Audits</h4>
                  <p className="text-[11px] text-text-muted">Our safety board directly checks licensure status with the DHA, ADEK, HAAD, or MOH directories.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-[#FAFAF7] font-bold text-xs flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-xs font-bold text-text">Background & Conduct Review</h4>
                  <p className="text-[11px] text-text-muted">Provide a valid local police conduct certificate checking criminal registries.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C89F7B] text-[#FAFAF7] font-bold text-xs flex items-center justify-center shrink-0">4</div>
                <div>
                  <h4 className="text-xs font-bold text-text">Directory Onboarding</h4>
                  <p className="text-[11px] text-text-muted">Once cleared, we publish your profile, enable search visibility, and notify matching families.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Form Section */}
      <section id="application-form" className="layout-container max-w-2xl border-t border-[#A7C4BC]/25 pt-12">
        <div className="bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="border-b border-[#A7C4BC]/25 pb-4">
            <h2 className="text-2xl font-bold text-text">Professional Verification Application</h2>
            <p className="text-xs text-text-muted mt-1">
              Please enter your qualifications below. Our licensing desk will check all regulatory credentials.
            </p>
          </div>

          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="educatorName" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="educatorName"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. / Mr. / Ms. Full Name"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="educatorEmail" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="educatorEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="educator@domain.com"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>
            </div>

            {/* Specialty & License Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="educatorSpecialty" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Specialty
                </label>
                <select
                  id="educatorSpecialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                >
                  <option value="Speech-Language Therapist">Speech-Language Therapist</option>
                  <option value="Occupational Therapist">Occupational Therapist</option>
                  <option value="Special Educator">Special Educator</option>
                  <option value="Learning Specialist">Learning Specialist</option>
                  <option value="Educational Psychologist">Educational Psychologist</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="licenseType" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  License Jurisdiction
                </label>
                <select
                  id="licenseType"
                  value={licenseType}
                  onChange={(e) => setLicenseType(e.target.value)}
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                >
                  <option value="DHA (Dubai Health Authority)">DHA (Dubai Health Authority)</option>
                  <option value="ADEK (Abu Dhabi Education & Knowledge)">ADEK (Abu Dhabi Education & Knowledge)</option>
                  <option value="MOH (Ministry of Health UAE)">MOH (Ministry of Health UAE)</option>
                  <option value="KHDA (Knowledge & Human Development Authority)">KHDA (Knowledge & Human Development Authority)</option>
                </select>
              </div>
            </div>

            {/* License Number & Years Exp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="licenseNumber" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Professional License Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="licenseNumber"
                  type="text"
                  required
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  placeholder="e.g., DHA-L-998877"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="experience" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  id="experience"
                  type="number"
                  required
                  min="0"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>
            </div>

            {/* Price Range & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="priceRange" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Hourly Rate Range (AED/hour)
                </label>
                <input
                  id="priceRange"
                  type="text"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  placeholder="e.g., 300 - 450"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="languages" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Languages Spoken <span className="text-red-500">*</span>
                </label>
                <input
                  id="languages"
                  type="text"
                  required
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  placeholder="e.g., English, Arabic"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>
            </div>

            {/* Conditions Supported */}
            <div className="space-y-1">
              <label htmlFor="conditionsSupported" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                Conditions / Needs Supported <span className="text-red-500">*</span>
              </label>
              <input
                id="conditionsSupported"
                type="text"
                required
                value={conditionsSupported}
                onChange={(e) => setConditionsSupported(e.target.value)}
                placeholder="e.g., ADHD, Dyslexia, Autism, Speech Delay (separated by commas)"
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
              />
            </div>

            {/* Bio description */}
            <div className="space-y-1">
              <label htmlFor="educatorBio" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                Professional Bio Summary <span className="text-red-500">*</span>
              </label>
              <textarea
                id="educatorBio"
                required
                rows="4"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Describe your qualifications, clinical approaches, and educational philosophy..."
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition resize-none"
              />
            </div>

            {/* Submit application */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2F6F6D] hover:bg-[#245654] disabled:opacity-50 disabled:cursor-not-allowed text-[#FAFAF7] font-bold py-3.5 px-6 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary shadow-sm mt-4"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Verification Request'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}