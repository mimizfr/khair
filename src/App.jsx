import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import FindProfessionals from './pages/FindProfessionals';
import Profile from './pages/Profile';
import ContactForm from './pages/ContactForm';
import ForEducators from './pages/ForEducators';
import Community from './pages/Community';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

// Mock seed data
import { INITIAL_PROFESSIONALS } from './data/professionals';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProfessionalId, setSelectedProfessionalId] = useState(null);
  
  // Auth state
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Database of professionals
  const [professionals, setProfessionals] = useState(INITIAL_PROFESSIONALS);
  const [applications, setApplications] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Check Supabase session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isAdmin = user?.app_metadata?.role === 'admin' || user?.user_metadata?.role === 'admin';

  const selectedProfessional = professionals.find(p => p.id === selectedProfessionalId);

  // Application handlers
  const handleAddApplication = (newApp) => {
    setApplications(prev => [...prev, newApp]);
  };

  const handleApproveApplication = (appId) => {
    const appToApprove = applications.find(app => app.id === appId);
    if (!appToApprove) return;

    const newProfessional = {
      id: `prof-${Date.now()}`,
      name: appToApprove.name,
      specialty: appToApprove.specialty,
      location: "Dubai",
      experience: appToApprove.experience,
      priceRange: appToApprove.priceRange,
      languages: appToApprove.languages,
      sessionTypes: ["Hybrid", "In-person"],
      conditionsSupported: appToApprove.conditionsSupported,
      verifiedBadge: appToApprove.licenseType.substring(0, appToApprove.licenseType.indexOf('(')).trim() + " Licensed Specialist",
      verificationChecklist: {
        licenseChecked: true,
        backgroundCheck: true,
        degreeAuthenticated: true,
        referencesVerified: true
      },
      verificationDetails: {
        licenseNumber: appToApprove.licenseNumber,
        degree: "Verified Degree Credentials",
        backgroundCheckDate: "Newly Vetted",
        referenceCount: 2
      },
      bio: appToApprove.bio,
      services: [
        `Individual ${appToApprove.specialty} sessions`,
        "Diagnostic needs screening",
        "Parent collaboration checkins"
      ],
      trustExplanation: `${appToApprove.name} has been vetted by the Khair safety board in accordance with local regulations. Direct credential audits were verified successfully.`,
      avatarBg: "from-[#A7C4BC] to-[#C89F7B]"
    };

    setProfessionals(prev => [...prev, newProfessional]);
    setApplications(prev => prev.filter(app => app.id !== appId));
  };

  const handleRejectApplication = (appId) => {
    setApplications(prev => prev.filter(app => app.id !== appId));
  };

  const handleSubmitInquiry = (newInquiry) => {
    setInquiries(prev => [...prev, newInquiry]);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (authLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAF7]">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <Home
            professionals={professionals}
            setCurrentPage={setCurrentPage}
            setSelectedProfessionalId={setSelectedProfessionalId}
          />
        );
      case 'find-professionals':
        return (
          <FindProfessionals
            professionals={professionals}
            onSelectProfessional={setSelectedProfessionalId}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'profile':
        return (
          <Profile
            professional={selectedProfessional}
            onBack={() => {
              setCurrentPage('find-professionals');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestContact={(id) => {
              setSelectedProfessionalId(id);
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      case 'contact':
        return (
          <ContactForm
            professional={selectedProfessional}
            onBack={() => {
              setCurrentPage('profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSubmitInquiry={handleSubmitInquiry}
          />
        );
      case 'for-educators':
        return (
          <ForEducators
            onAddApplication={handleAddApplication}
          />
        );
      case 'community':
        return <Community />;
      case 'about':
        return <About />;
      case 'admin':
        //redirect to login if not admin
        if (!isAdmin) {
          return <AdminLogin onLoginSuccess={() => setCurrentPage('admin')} />;
        }
        return (
          <AdminDashboard
            applications={applications}
            professionals={professionals}
            onApprove={handleApproveApplication}
            onReject={handleRejectApplication}
            onLogout={handleLogout}
            adminEmail={user?.email}
          />
        );
      default:
        return (
          <Home
            professionals={professionals}
            setCurrentPage={setCurrentPage}
            setSelectedProfessionalId={setSelectedProfessionalId}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF7]">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isAdmin={isAdmin}
        onLogout={handleLogout}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}