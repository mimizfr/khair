import React from 'react';
import { ShieldAlert, Check, X, ShieldCheck, Users, Clock, Award, LogOut, User } from 'lucide-react';

export default function AdminDashboard({ 
  applications, 
  professionals, 
  onApprove, 
  onReject, 
  onLogout,
  adminEmail 
}) {
  return (
    <div className="bg-[#FAFAF7] py-12 min-h-screen">
      <div className="layout-container">
        {/* Page Header with Admin Info */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-text">Khair Admin Verification Desk</h1>
            <p className="text-sm text-text-muted mt-2">
              Review, approve, or reject new professional applications. Approved educators will be dynamically added to the public directory.
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-white border border-[#A7C4BC]/30 rounded-xl px-4 py-2 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-text">{adminEmail}</p>
              <p className="text-[10px] text-primary uppercase font-bold">Admin</p>
            </div>
            <button
              onClick={onLogout}
              className="ml-2 p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Vetted Professionals */}
          <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-text">{professionals.length}</span>
              <span className="text-xs text-text-muted">Vetted Professionals Active</span>
            </div>
          </div>

          {/* Pending Reviews */}
          <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C89F7B]/10 flex items-center justify-center text-accent">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-text">{applications.length}</span>
              <span className="text-xs text-text-muted">Pending Application Reviews</span>
            </div>
          </div>

          {/* Verification standard info */}
          <div className="bg-[#edf4f3] border border-primary/20 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-bold text-primary uppercase tracking-wider">Vetting Standard</span>
              <span className="text-[11px] text-text-muted leading-tight block mt-0.5">
                License directories are cross-referenced with DHA, ADEK, and MOH databases.
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: Pending Applications */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2">
            Pending Applications ({applications.length})
          </h2>

          {applications.length > 0 ? (
            <div className="space-y-6">
              {applications.map((app) => (
                <div key={app.id} className="bg-[#FAFAF7] border border-accent/30 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
                  {/* Top Bar info */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#A7C4BC]/20 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-text">{app.name}</h3>
                      <p className="text-xs text-primary font-semibold mt-0.5">{app.specialty}</p>
                      <span className="text-[10px] text-text-muted mt-1 block">Submitted: {app.dateSubmitted}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2.5">
                      <button
                        onClick={() => onApprove(app.id)}
                        className="bg-primary hover:bg-primary-hover text-[#FAFAF7] font-semibold py-2 px-4 rounded-xl text-xs flex items-center gap-1 calm-transition shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Check className="w-4 h-4" />
                        <span>Approve License</span>
                      </button>
                      <button
                        onClick={() => onReject(app.id)}
                        className="bg-transparent hover:bg-red-500/10 text-red-600 font-semibold py-2 px-4 border border-red-200 hover:border-red-300 rounded-xl text-xs flex items-center gap-1 calm-transition focus-visible:ring-2 focus-visible:ring-red-400"
                      >
                        <X className="w-4 h-4" />
                        <span>Reject Application</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-text">
                    <div className="space-y-1">
                      <span className="font-bold text-text-muted">License Vetting:</span>
                      <p className="font-medium bg-secondary-light border border-secondary/20 px-2.5 py-1 rounded inline-block">
                        {app.licenseNumber} ({app.licenseType})
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-text-muted">Experience & Rate:</span>
                      <p>{app.experience} years exp • {app.priceRange} AED / hr</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-text-muted">Languages & Needs:</span>
                      <p>Languages: {app.languages.join(', ')}</p>
                      <p className="mt-1">Needs: {app.conditionsSupported.join(', ')}</p>
                    </div>
                  </div>

                  {/* Application Bio */}
                  <div className="bg-[#FAFAF7] border border-[#A7C4BC]/25 rounded-xl p-4 text-xs text-text-muted leading-relaxed">
                    <strong>Applicant Bio Statement:</strong>
                    <p className="mt-1 whitespace-pre-wrap">{app.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#edf4f3] rounded-2xl p-8 text-center border border-primary/20 max-w-md mx-auto">
              <ShieldAlert className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-bold text-text">No Pending Reviews</h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                All educator verification applications have been processed. The public directory database is currently up to date.
              </p>
            </div>
          )}
        </section>

        {/* Section 2: Active Registry Directory */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-text border-b border-[#A7C4BC]/25 pb-2">
            Active Registry Directory ({professionals.length})
          </h2>

          <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#edf4f3] border-b border-[#A7C4BC]/30 text-primary font-bold uppercase tracking-wider">
                    <th className="py-4.5 px-6">Name</th>
                    <th className="py-4.5 px-6">Specialty</th>
                    <th className="py-4.5 px-6">License Number</th>
                    <th className="py-4.5 px-6">Location</th>
                    <th className="py-4.5 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#A7C4BC]/20 text-text/90">
                  {professionals.map((prof) => (
                    <tr key={prof.id} className="hover:bg-[#FAFAF7]/50 calm-transition">
                      <td className="py-4 px-6 font-bold">{prof.name}</td>
                      <td className="py-4 px-6">{prof.specialty}</td>
                      <td className="py-4 px-6 font-mono text-accent">{prof.verificationDetails.licenseNumber}</td>
                      <td className="py-4 px-6">{prof.location}</td>
                      <td className="py-4 px-6">
                        <span className="bg-[#edf4f3] text-primary border border-primary/10 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                          Listed / Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}