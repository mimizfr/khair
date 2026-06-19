import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Calendar, RotateCcw } from 'lucide-react';
import ProfessionalCard from '../components/ProfessionalCard';

export default function FindProfessionals({ professionals, onSelectProfessional, setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  // Unique list of specialties
  const specialties = ['All', ...new Set(professionals.map(p => p.specialty))];
  
  // Unique list of locations
  const locations = ['All', ...new Set(professionals.map(p => p.location))];

  // Unique list of availability times
  const availabilities = ['All', 'Weekdays', 'Weekends', 'Evenings', 'Online', 'In-person'];

  // Filtering logic
  const filteredProfessionals = professionals.filter((prof) => {
    // Search query matches name or specialty
    const matchesSearch = 
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    // Specialty filter
    const matchesSpecialty = selectedSpecialty === 'All' || prof.specialty === selectedSpecialty;

    // Location filter
    const matchesLocation = selectedLocation === 'All' || prof.location === selectedLocation;

    // Availability filter
    const matchesAvailability = selectedAvailability === 'All' || (() => {
      if (selectedAvailability === 'Weekdays') return prof.availability === 'Weekdays' || prof.availability === 'Flexible';
      if (selectedAvailability === 'Weekends') return prof.availability === 'Weekends' || prof.availability === 'Flexible';
      if (selectedAvailability === 'Evenings') return prof.availability === 'Evenings' || prof.availability === 'Flexible';
      if (selectedAvailability === 'Online') return (prof.session_types || prof.sessionTypes || []).includes('Online');
      if (selectedAvailability === 'In-person') return (prof.session_types || prof.sessionTypes || []).includes('In-person');
      return true;
    })();

    return matchesSearch && matchesSpecialty && matchesLocation && matchesAvailability;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('All');
    setSelectedLocation('All');
    setSelectedAvailability('All');
  };

  const handleViewProfile = (id) => {
    onSelectProfessional(id);
    setCurrentPage('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAFAF7] py-12 min-h-screen">
      <div className="layout-container">
        {/* Page Header */}
        <div className="mb-10 text-left max-w-2xl">
          <h1 className="text-3xl font-bold text-text">Search Verified Support Professionals</h1>
          <p className="text-sm text-text-muted mt-2">
            Use the filters below to locate verified specialists in the UAE who meet your child's specific criteria.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-2xl p-6 mb-8 space-y-5 shadow-sm">
          {/* Search bar */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text/50">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search by professional name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/45 rounded-xl py-3 pl-12 pr-4 text-sm text-text focus-visible:border-primary calm-transition"
            />
          </div>

          {/* Individual Dropdown Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Specialty filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Specialty</label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-xl py-2.5 px-3 text-xs text-text focus-visible:border-primary calm-transition"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Location filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-xl py-2.5 px-3 text-xs text-text focus-visible:border-primary calm-transition"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc === 'All' ? 'All Emirates' : loc}</option>
                ))}
              </select>
            </div>

            {/* Availability filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">Availability / Mode</label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full bg-[#FAFAF7] border border-[#A7C4BC]/40 rounded-xl py-2.5 px-3 text-xs text-text focus-visible:border-primary calm-transition"
              >
                {availabilities.map((avail) => (
                  <option key={avail} value={avail}>{avail === 'All' ? 'All Options' : avail}</option>
                ))}
              </select>
            </div>

            {/* Reset Filter Button */}
            <div className="flex items-end">
              <button
                onClick={handleResetFilters}
                className="w-full bg-secondary-light hover:bg-[#A7C4BC]/20 text-primary font-semibold py-2.5 px-4 rounded-xl border border-primary/25 text-xs flex items-center justify-center gap-1.5 calm-transition focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex justify-between items-center mb-6 text-xs text-text-muted">
          <span>Found <strong>{filteredProfessionals.length}</strong> verified professionals</span>
        </div>

        {/* Grid List */}
        {filteredProfessionals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProfessionals.map((prof) => (
              <ProfessionalCard
                key={prof.id}
                professional={prof}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#edf4f3] rounded-2xl p-12 text-center border border-primary/20 max-w-xl mx-auto mt-8">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-text">No Professionals Found</h3>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">
              We couldn't find any professionals matching your search queries or selected filters. Try resetting the criteria or modifying your search keywords.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 bg-[#2F6F6D] hover:bg-[#245654] text-[#FAFAF7] font-semibold py-2.5 px-6 rounded-xl calm-transition text-xs focus-visible:ring-2 focus-visible:ring-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
