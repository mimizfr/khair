import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, Send, Loader2, CheckCircle2, Star, Heart, Award, ArrowDown, Sparkles } from 'lucide-react';

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
      <div className="bg-background py-24 min-h-screen">
        <div className="layout-container max-w-xl mx-auto text-center card-base p-10 md:p-14 animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-glow">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text">Application Submitted</h1>
          <p className="text-base text-text-muted mt-4 leading-relaxed">
            Thank you for applying to join the Khair community of verified specialists. Your application has been securely stored for review.
          </p>

          <div className="bg-primary-light/50 rounded-2xl p-6 my-8 text-left text-sm text-text border border-primary/15 space-y-3 shadow-soft">
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="font-bold text-primary">Educator Name:</span>
              <span className="font-medium">{name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="font-bold text-primary">Specialty:</span>
              <span className="font-medium">{specialty}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-primary">License Vetting:</span>
              <span className="font-medium">{licenseNumber} ({licenseType})</span>
            </div>
          </div>

          <div className="text-sm text-text-muted leading-relaxed space-y-3">
            <p>
              <strong className="text-text">What happens next?</strong> Our licensing board will review your credentials. This process takes <strong className="text-text">3 to 5 business days</strong>.
            </p>
            <p>
              Once approved, we will notify you at <strong className="text-primary">{email}</strong>, publish your profile, and notify matching families.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="mt-10 btn-secondary text-sm py-3 px-8"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero / Benefits */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="layout-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>For Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-text leading-tight tracking-tight">
                Join the Vetted Community of Educational Specialists
              </h1>
              <p className="text-base text-text-muted leading-relaxed">
                Khair connects you directly with parents seeking special education support, therapy, and learning guidance in the UAE. We charge zero referral markups, ensuring full pricing freedom and transparent clinical relationships.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="card-base p-6 space-y-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text">Build Trusted Visibility</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Every listed specialist carries a vetted badge verified via DHA/MOH regulatory files.
                  </p>
                </div>

                <div className="card-base p-6 space-y-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text">Zero Markup Referral</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Parents coordinate with you directly. You retain 100% of your hourly clinical session rates.
                  </p>
                </div>
              </div>

              <button
                onClick={handleApplyScroll}
                className="btn-primary text-sm py-4 px-8 shadow-glow hover:shadow-elevated"
              >
                Apply Now
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Vetting Steps */}
            <div className="bg-primary-light/50 rounded-3xl p-8 md:p-10 border border-primary/15 space-y-6 relative animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-primary flex items-center gap-2.5 relative z-10">
                <ShieldCheck className="w-6 h-6 fill-current" />
                <span>Vetting & Verification Process</span>
              </h3>
              <p className="text-sm text-text-muted leading-relaxed relative z-10">
                To guarantee parent safety, every specialist joins through four key checkpoints:
              </p>

              <div className="space-y-5 relative z-10">
                {[
                  { num: '1', title: 'Credentials Intake', desc: 'Submit your academic transcripts and government-issued professional practice licenses.' },
                  { num: '2', title: 'License Check & Reference Audits', desc: 'Our safety board directly checks licensure status with the DHA, ADEK, HAAD, or MOH directories.' },
                  { num: '3', title: 'Background & Conduct Review', desc: 'Provide a valid local police conduct certificate checking criminal registries.' },
                  { num: '4', title: 'Directory Onboarding', desc: 'Once cleared, we publish your profile, enable search visibility, and notify matching families.', accent: true }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-all duration-300 ${
                      step.accent 
                        ? 'bg-accent text-background group-hover:bg-accent-dark' 
                        : 'bg-primary text-background group-hover:bg-primary-dark'
                    }`}>
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text">{step.title}</h4>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Form Section */}
      <section id="application-form" className="layout-container max-w-2xl border-t border-secondary/20 pt-16 pb-24">
        <div className="card-base p-8 md:p-10 space-y-8 animate-fade-in-up">
          <div className="border-b border-secondary/20 pb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Send className="w-3 h-3" />
              <span>Application</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text">Professional Verification Application</h2>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">
              Please enter your qualifications below. Our licensing desk will check all regulatory credentials.
            </p>
          </div>

          {error && (
            <div className="flex items-start gap-3 p-5 bg-error/10 border border-error/20 rounded-2xl animate-fade-in-down">
              <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p className="text-sm text-error font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="educatorName" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  id="educatorName"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. / Mr. / Ms. Full Name"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="educatorEmail" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  id="educatorEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="educator@domain.com"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>
            </div>

            {/* Specialty & License Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="educatorSpecialty" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Specialty
                </label>
                <select
                  id="educatorSpecialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300 cursor-pointer hover:border-secondary-dark"
                >
                  <option value="Speech-Language Therapist">Speech-Language Therapist</option>
                  <option value="Occupational Therapist">Occupational Therapist</option>
                  <option value="Special Educator">Special Educator</option>
                  <option value="Learning Specialist">Learning Specialist</option>
                  <option value="Educational Psychologist">Educational Psychologist</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="licenseType" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  License Jurisdiction
                </label>
                <select
                  id="licenseType"
                  value={licenseType}
                  onChange={(e) => setLicenseType(e.target.value)}
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300 cursor-pointer hover:border-secondary-dark"
                >
                  <option value="DHA (Dubai Health Authority)">DHA (Dubai Health Authority)</option>
                  <option value="ADEK (Abu Dhabi Education & Knowledge)">ADEK (Abu Dhabi Education & Knowledge)</option>
                  <option value="MOH (Ministry of Health UAE)">MOH (Ministry of Health UAE)</option>
                  <option value="KHDA (Knowledge & Human Development Authority)">KHDA (Knowledge & Human Development Authority)</option>
                </select>
              </div>
            </div>

            {/* License Number & Years Exp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="licenseNumber" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Professional License Number <span className="text-error">*</span>
                </label>
                <input
                  id="licenseNumber"
                  type="text"
                  required
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  placeholder="e.g., DHA-L-998877"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Years of Experience <span className="text-error">*</span>
                </label>
                <input
                  id="experience"
                  type="number"
                  required
                  min="0"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>
            </div>

            {/* Price Range & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="priceRange" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Hourly Rate Range (AED/hour)
                </label>
                <input
                  id="priceRange"
                  type="text"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  placeholder="e.g., 300 - 450"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="languages" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Languages Spoken <span className="text-error">*</span>
                </label>
                <input
                  id="languages"
                  type="text"
                  required
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  placeholder="e.g., English, Arabic"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>
            </div>

            {/* Conditions Supported */}
            <div className="space-y-2">
              <label htmlFor="conditionsSupported" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                Conditions / Needs Supported <span className="text-error">*</span>
              </label>
              <input
                id="conditionsSupported"
                type="text"
                required
                value={conditionsSupported}
                onChange={(e) => setConditionsSupported(e.target.value)}
                placeholder="e.g., ADHD, Dyslexia, Autism, Speech Delay (separated by commas)"
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
              />
            </div>

            {/* Bio description */}
            <div className="space-y-2">
              <label htmlFor="educatorBio" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                Professional Bio Summary <span className="text-error">*</span>
              </label>
              <textarea
                id="educatorBio"
                required
                rows="5"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Describe your qualifications, clinical approaches, and educational philosophy..."
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit application */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-sm py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-soft"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Verification Request
                </span>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}