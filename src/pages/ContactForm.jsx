import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';

export default function ContactForm({ professional, onBack, onSubmitInquiry }) {
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [sessionPref, setSessionPref] = useState('Hybrid');
  const [needsDescription, setNeedsDescription] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  if (!professional) {
    return (
      <div className="bg-background py-24 text-center min-h-screen">
        <div className="layout-container max-w-md mx-auto animate-fade-in-up">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-text">Error: No professional selected for contact.</h3>
          <button onClick={onBack} className="mt-6 btn-primary text-sm">Back</button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const fullMessage = `Session Preference: ${sessionPref}\n\n${needsDescription}`;

    const inquiryPayload = {
      professional_id: professional.id,
      parent_name: parentName,
      email: parentEmail,
      phone: parentPhone,
      child_age: childAge,
      message: fullMessage
    };

    try {
      const success = await onSubmitInquiry(inquiryPayload);
      
      if (success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError('Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please check your connection and try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-background py-20 min-h-screen">
        <div className="layout-container max-w-xl mx-auto text-center card-base p-8 md:p-14 animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-glow">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text">Inquiry Submitted Successfully</h1>
          <p className="text-base text-text-muted mt-4 leading-relaxed">
            Your contact inquiry has been securely sent to <strong className="text-primary">{professional.name}</strong> and stored in our system.
          </p>

          <div className="bg-primary-light/50 rounded-2xl p-6 my-8 text-left text-sm text-text border border-primary/15 space-y-3 shadow-soft">
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="font-bold text-primary">Parent Name:</span>
              <span className="font-medium">{parentName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="font-bold text-primary">Professional:</span>
              <span className="font-medium">{professional.name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="font-bold text-primary">Preferred Session:</span>
              <span className="font-medium">{sessionPref}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-primary">Notification sent to:</span>
              <span className="font-medium">{parentEmail}</span>
            </div>
          </div>

          <div className="text-sm text-text-muted leading-relaxed space-y-3">
            <p>
              <strong className="text-text">What happens next?</strong> {professional.name} will review your inquiry and contact you directly at your provided email/phone to arrange a consultation.
            </p>
            <p className="font-medium text-accent bg-accent-light/50 px-4 py-2 rounded-xl border border-accent/20 inline-block">
              No service fees have been charged. All contract details are settled directly between you.
            </p>
          </div>

          <button
            onClick={onBack}
            className="mt-10 w-full btn-primary text-sm py-3.5"
          >
            Return to Professional Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-16 min-h-screen">
      <div className="layout-container max-w-2xl mx-auto">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover mb-10 group focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-2 hover:bg-primary/5 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Profile</span>
        </button>

        {/* Form panel */}
        <div className="card-base p-6 md:p-10 space-y-8 animate-fade-in-up">
          <div className="border-b border-secondary/25 pb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Send className="w-3 h-3" />
              <span>Secure Inquiry</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-text">Request Vetted Support Contact</h1>
            <p className="text-sm text-text-muted mt-2">
              You are sending a secure inquiry request to <strong className="text-primary">{professional.name}</strong> ({professional.specialty}).
            </p>
          </div>

          {/* Verification note */}
          <div className="bg-primary-light/50 rounded-2xl p-5 border border-primary/15 flex gap-4 text-sm text-text-muted leading-relaxed shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck className="w-5 h-5 fill-current" />
            </div>
            <div>
              <strong className="text-text block mb-0.5">Secure Verification Desk</strong>
              <p>
                Khair verifies clinical qualifications, licensing, and conduct checks before listings occur. We do not charge scheduling markups.
              </p>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-3 p-5 bg-error/10 border border-error/20 rounded-2xl animate-fade-in-down">
              <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p className="text-sm text-error font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Parent Name */}
            <div className="space-y-2">
              <label htmlFor="parentName" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                Parent Name <span className="text-error">*</span>
              </label>
              <input
                id="parentName"
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="parentEmail" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  id="parentEmail"
                  type="email"
                  required
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="parentPhone" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Phone Number <span className="text-error">*</span>
                </label>
                <input
                  id="parentPhone"
                  type="tel"
                  required
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  placeholder="+971 50 123 4567"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>
            </div>

            {/* Child Age & Session Pref */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="childAge" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Child's Age or Grade <span className="text-error">*</span>
                </label>
                <input
                  id="childAge"
                  type="text"
                  required
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="e.g., 6 years old / Grade 1"
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="sessionPref" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Session Type Preference
                </label>
                <select
                  id="sessionPref"
                  value={sessionPref}
                  onChange={(e) => setSessionPref(e.target.value)}
                  className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300 cursor-pointer hover:border-secondary-dark"
                >
                  <option value="Hybrid">Hybrid (Combination)</option>
                  <option value="In-person">In-person (Home / School)</option>
                  <option value="Online">Online Sessions</option>
                </select>
              </div>
            </div>

            {/* Message / Needs */}
            <div className="space-y-2">
              <label htmlFor="needsDescription" className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                Primary Concerns / Support Needs <span className="text-error">*</span>
              </label>
              <textarea
                id="needsDescription"
                required
                rows="5"
                value={needsDescription}
                onChange={(e) => setNeedsDescription(e.target.value)}
                placeholder="Briefly describe what support you are looking for (e.g. Speech articulation, fine motor practice, dyslexia reading support)..."
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit */}
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
                  Submit Inquiry
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}