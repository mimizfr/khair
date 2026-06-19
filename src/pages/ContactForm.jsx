import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

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
      <div className="bg-[#FAFAF7] py-20 text-center min-h-screen">
        <p className="text-sm text-text-muted">Error: No professional selected for contact.</p>
        <button onClick={onBack} className="mt-4 bg-[#2F6F6D] text-white px-4 py-2 rounded-xl">Back</button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Combine session preference with the message since schema has single 'message' column
    // If you added the 'session_pref' column to Supabase, move this to its own field
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
      <div className="bg-[#FAFAF7] py-16 min-h-screen">
        <div className="layout-container max-w-xl mx-auto text-center bg-[#FAFAF7] border border-primary/20 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-text">Inquiry Submitted Successfully</h1>
          <p className="text-sm text-text-muted mt-3 leading-relaxed">
            Your contact inquiry has been securely sent to <strong>{professional.name}</strong> and stored in our system.
          </p>

          <div className="bg-[#edf4f3] rounded-xl p-5 my-6 text-left text-xs text-text border border-primary/10 space-y-2.5">
            <div className="flex justify-between">
              <span className="font-bold text-primary">Parent Name:</span>
              <span>{parentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-primary">Professional:</span>
              <span>{professional.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-primary">Preferred Session:</span>
              <span>{sessionPref}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-primary">Notification sent to:</span>
              <span>{parentEmail}</span>
            </div>
          </div>

          <div className="text-xs text-text-muted leading-relaxed space-y-2">
            <p>
              <strong>What happens next?</strong> {professional.name} will review your inquiry and contact you directly at your provided email/phone to arrange a consultation.
            </p>
            <p className="font-medium text-accent">
              No service fees have been charged. All contract details are settled directly between you.
            </p>
          </div>

          <button
            onClick={onBack}
            className="mt-8 w-full bg-[#2F6F6D] hover:bg-[#245654] text-[#FAFAF7] font-semibold py-3 px-6 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
          >
            Return to Professional Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF7] py-12 min-h-screen">
      <div className="layout-container max-w-2xl mx-auto">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover mb-8 group focus-visible:ring-2 focus-visible:ring-primary rounded p-1 calm-transition"
        >
          <ArrowLeft className="w-4 h-4 calm-transition group-hover:-translate-x-1" />
          <span>Back to Profile</span>
        </button>

        {/* Form panel */}
        <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="border-b border-[#A7C4BC]/25 pb-4">
            <h1 className="text-2xl font-bold text-text">Request Vetted Support Contact</h1>
            <p className="text-xs text-text-muted mt-1">
              You are sending a secure inquiry request to <strong>{professional.name}</strong> ({professional.specialty}).
            </p>
          </div>

          {/* Verification note */}
          <div className="bg-[#edf4f3] rounded-xl p-4 border border-primary/20 flex gap-3 text-xs text-text-muted leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5 fill-current" />
            <div>
              <strong>Secure Verification Desk</strong>
              <p className="mt-0.5">
                Khair verifies clinical qualifications, licensing, and conduct checks before listings occur. We do not charge scheduling markups.
              </p>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Parent Name */}
            <div className="space-y-1">
              <label htmlFor="parentName" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                Parent Name <span className="text-red-500">*</span>
              </label>
              <input
                id="parentName"
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="parentEmail" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="parentEmail"
                  type="email"
                  required
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="parentPhone" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="parentPhone"
                  type="tel"
                  required
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  placeholder="+971 50 123 4567"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>
            </div>

            {/* Child Age & Session Pref */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="childAge" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Child's Age or Grade <span className="text-red-500">*</span>
                </label>
                <input
                  id="childAge"
                  type="text"
                  required
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="e.g., 6 years old / Grade 1"
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="sessionPref" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                  Session Type Preference
                </label>
                <select
                  id="sessionPref"
                  value={sessionPref}
                  onChange={(e) => setSessionPref(e.target.value)}
                  className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition"
                >
                  <option value="Hybrid">Hybrid (Combination)</option>
                  <option value="In-person">In-person (Home / School)</option>
                  <option value="Online">Online Sessions</option>
                </select>
              </div>
            </div>

            {/* Message / Needs */}
            <div className="space-y-1">
              <label htmlFor="needsDescription" className="text-[11px] font-bold uppercase tracking-wider text-text-muted block">
                Primary Concerns / Support Needs <span className="text-red-500">*</span>
              </label>
              <textarea
                id="needsDescription"
                required
                rows="4"
                value={needsDescription}
                onChange={(e) => setNeedsDescription(e.target.value)}
                placeholder="Briefly describe what support you are looking for (e.g. Speech articulation, fine motor practice, dyslexia reading support)..."
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-2.5 px-3 text-sm text-text focus-visible:border-primary calm-transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-[#FAFAF7] font-bold py-3.5 px-6 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary shadow-sm mt-4"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}