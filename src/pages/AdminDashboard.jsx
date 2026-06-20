import React, { useState } from 'react';
import { ShieldAlert, Check, X, ShieldCheck, Clock, Award, LogOut, User, Search, FileText } from 'lucide-react';

export default function AdminDashboard({ 
  applications, 
  professionals, 
  onApprove, 
  onReject, 
  onLogout,
  adminEmail 
}) {
  const [processingId, setProcessingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleApprove = async (appId) => {
    setProcessingId(appId);
    await onApprove(appId);
    setProcessingId(null);
  };

  const handleReject = async (appId) => {
    setProcessingId(appId);
    await onReject(appId);
    setProcessingId(null);
  };

  const filteredApps = applications.filter(app => 
    app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background py-16 min-h-screen">
      <div className="layout-container">
        {/* Page Header with Admin Info */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fade-in-up">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Administration</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight">Khair Admin Verification Desk</h1>
            <p className="text-base text-text-muted mt-3 leading-relaxed max-w-2xl">
              Review, approve, or reject new professional applications. Approved educators will be dynamically added to the public directory.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-surface border border-secondary/30 rounded-2xl px-5 py-3 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-text">{adminEmail}</p>
              <p className="text-[10px] text-primary uppercase font-bold tracking-wider">Administrator</p>
            </div>
            <div className="w-px h-8 bg-secondary/30 mx-1" />
            <button
              onClick={onLogout}
              className="p-2 text-error/70 hover:text-error hover:bg-error/5 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-error/30"
              title="Logout"
            >
              <LogOut className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 stagger-children">
          <div className="card-base p-7 flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
              <ShieldCheck className="w-7 h-7 fill-current" />
            </div>
            <div>
              <span className="block text-3xl font-bold text-text">{professionals.length}</span>
              <span className="text-sm text-text-muted">Vetted Professionals Active</span>
            </div>
          </div>

          <div className="card-base p-7 flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <span className="block text-3xl font-bold text-text">{applications.length}</span>
              <span className="text-sm text-text-muted">Pending Application Reviews</span>
            </div>
          </div>

          <div className="bg-primary-light/60 border border-primary/20 rounded-2xl p-7 flex items-center gap-5 hover-lift">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="block text-xs font-bold text-primary uppercase tracking-wider">Vetting Standard</span>
              <span className="text-xs text-text-muted leading-tight block mt-1">
                License directories are cross-referenced with DHA, ADEK, and MOH databases.
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: Pending Applications */}
        <section className="space-y-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-secondary/20 pb-4">
            <h2 className="text-2xl font-bold text-text">
              Pending Applications <span className="text-accent text-lg">({applications.length})</span>
            </h2>
            {applications.length > 0 && (
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-background border border-secondary/40 rounded-xl text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
                />
              </div>
            )}
          </div>

          {filteredApps.length > 0 ? (
            <div className="space-y-8 stagger-children">
              {filteredApps.map((app) => (
                <div key={app.id} className="card-base p-8 space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-secondary/20 pb-6">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-text">{app.name}</h3>
                      <p className="text-sm text-primary font-semibold">{app.specialty}</p>
                      <span className="text-xs text-text-muted">
                        Submitted: {app.dateSubmitted || new Date(app.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleApprove(app.id)}
                        disabled={processingId === app.id}
                        className="bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-background font-semibold py-2.5 px-5 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 shadow-soft hover:shadow-glow focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Check className="w-4 h-4" />
                        <span>{processingId === app.id ? 'Approving...' : 'Approve License'}</span>
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        disabled={processingId === app.id}
                        className="bg-transparent hover:bg-error/10 disabled:opacity-50 disabled:cursor-not-allowed text-error font-semibold py-2.5 px-5 border border-error/20 hover:border-error/40 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-error/30"
                      >
                        <X className="w-4 h-4" />
                        <span>{processingId === app.id ? 'Processing...' : 'Reject'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-text">
                    <div className="space-y-2">
                      <span className="font-bold text-text-muted text-xs uppercase tracking-wider">License Vetting</span>
                      <p className="font-medium bg-primary-light border border-primary/20 px-3 py-2 rounded-lg text-xs">
                        {app.license_number || app.licenseNumber} ({app.license_type || app.licenseType})
                      </p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-bold text-text-muted text-xs uppercase tracking-wider">Experience & Rate</span>
                      <p className="text-text-muted">{app.experience} • {app.price_range || app.priceRange} AED / hr</p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-bold text-text-muted text-xs uppercase tracking-wider">Languages & Needs</span>
                      <p className="text-text-muted text-xs">Languages: {(app.languages || []).join(', ')}</p>
                      <p className="text-text-muted text-xs mt-1">Needs: {(app.conditions_supported || app.conditionsSupported || []).join(', ')}</p>
                    </div>
                  </div>

                  <div className="bg-background border border-secondary/25 rounded-xl p-5 text-sm text-text-muted leading-relaxed shadow-soft">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <strong className="text-text text-xs uppercase tracking-wider">Applicant Bio Statement</strong>
                    </div>
                    <p className="whitespace-pre-wrap mt-1">{app.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-primary-light/40 rounded-3xl p-12 text-center border border-primary/15 max-w-md mx-auto animate-scale-in">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-text">No Pending Reviews</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                All educator verification applications have been processed. The public directory database is currently up to date.
              </p>
            </div>
          )}
        </section>

        {/* Section 2: Active Registry Directory */}
        <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-text border-b border-secondary/20 pb-4">
            Active Registry Directory <span className="text-accent text-lg">({professionals.length})</span>
          </h2>

          <div className="card-base overflow-hidden border-secondary/30">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-light/50 border-b border-secondary/30 text-primary font-bold uppercase tracking-wider text-xs">
                    <th className="py-5 px-6">Name</th>
                    <th className="py-5 px-6">Specialty</th>
                    <th className="py-5 px-6">License Number</th>
                    <th className="py-5 px-6">Location</th>
                    <th className="py-5 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/15 text-text/90">
                  {professionals.map((prof) => (
                    <tr key={prof.id} className="hover:bg-primary-light/30 transition-all duration-300 group">
                      <td className="py-5 px-6 font-bold group-hover:text-primary transition-colors duration-300">{prof.name}</td>
                      <td className="py-5 px-6">{prof.specialty}</td>
                      <td className="py-5 px-6 font-mono text-accent">
                        {(prof.verification_details?.licenseNumber) || 
                         (prof.verificationDetails?.licenseNumber) || 
                         (prof.license_number) || 
                         'N/A'}
                      </td>
                      <td className="py-5 px-6">{prof.location}</td>
                      <td className="py-5 px-6">
                        <span className="badge badge-success">
                          Listed / Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {professionals.length === 0 && (
              <div className="p-12 text-center text-text-muted text-sm">
                No professionals currently listed in the directory.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}