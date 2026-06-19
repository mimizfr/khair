import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FindProfessionals from './pages/FindProfessionals';
import Profile from './pages/Profile';
import ContactForm from './pages/ContactForm';
import ForEducators from './pages/ForEducators';
import Community from './pages/Community';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

import { getProfessionals } from "./services/professionalServices";
import { getApplications, addApplication, approveApplication, deleteApplication } from './services/applicationsService';
import { addInquiry } from './services/inquiriesService';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProfessionalId, setSelectedProfessionalId] = useState(null);
  
  // Auth state
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Data state
  const [professionals, setProfessionals] = useState([]);
  const [applications, setApplications] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Load data from Supabase
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [profs, apps] = await Promise.all([
          getProfessionals(),
          getApplications()
        ]);
        setProfessionals(profs);
        setApplications(apps);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError('Failed to load data. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const isAdmin = user?.app_metadata?.role === 'admin' || user?.user_metadata?.role === 'admin';
  const selectedProfessional = professionals.find(p => p.id === selectedProfessionalId);

  // Application Handlers
  const handleAddApplication = async (newApp) => {
    try {
      const inserted = await addApplication(newApp);
      setApplications(prev => [...prev, inserted]);
      return true;
    } catch (err) {
      console.error('Failed to submit application:', err);
      alert('Failed to submit application. Please try again.');
      return false;
    }
  };

  const handleApproveApplication = async (appId) => {
    try {
      await approveApplication(appId);
      // Refresh both lists
      const [profs, apps] = await Promise.all([
        getProfessionals(),
        getApplications()
      ]);
      setProfessionals(profs);
      setApplications(apps);
    } catch (err) {
      console.error('Failed to approve:', err);
      alert('Failed to approve application.');
    }
  };

  const handleRejectApplication = async (appId) => {
    try {
      await deleteApplication(appId);
      setApplications(prev => prev.filter(app => app.id !== appId));
    } catch (err) {
      console.error('Failed to reject:', err);
      alert('Failed to reject application.');
    }
  };

  // Contact Handlers
  const handleSubmitInquiry = async (newInquiry) => {
    try {
      await addInquiry(newInquiry);
      setInquiries(prev => [...prev, newInquiry]);
      return true;
    } catch (err) {
      console.error('Failed to submit inquiry:', err);
      alert('Failed to send message. Please try again.');
      return false;
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentPage('home');
  };

  // Loading states
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FAFAF7] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B8C85]"></div>
        <p className="mt-4 text-[#5B8C85]">Loading Khair...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FAFAF7] items-center justify-center">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-[#5B8C85] text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

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
        // 🔒 PROTECTION: redirect to login if not admin
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