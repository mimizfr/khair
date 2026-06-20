import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Calendar, RotateCcw, SlidersHorizontal } from 'lucide-react';
import ProfessionalCard from '../components/ProfessionalCard';

export default function FindProfessionals({ professionals, onSelectProfessional, setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  const specialties = ['All', ...new Set(professionals.map(p => p.specialty))];
  const locations = ['All', ...new Set(professionals.map(p => p.location))];
  const availabilities = ['All', 'Weekdays', 'Weekends', 'Evenings', 'Online', 'In-person'];

  const filteredProfessionals = professionals.filter((prof) => {
    const matchesSearch = 
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpecialty = selectedSpecialty === 'All' || prof.specialty === selectedSpecialty;
    const matchesLocation = selectedLocation === 'All' || prof.location === selectedLocation;

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

  const activeFilterCount = [
    selectedSpecialty !== 'All',
    selectedLocation !== 'All',
    selectedAvailability !== 'All',
    searchQuery !== ''
  ].filter(Boolean).length;

  return (
    <div className="bg-background py-16 min-h-screen">
      <div className="layout-container">
        {/* Page Header */}
        <div className="mb-12 text-left max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Directory</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text">Search Verified Support Professionals</h1>
          <p className="text-base text-text-muted mt-3 leading-relaxed">
            Use the filters below to locate verified specialists in the UAE who meet your child's specific criteria.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="card-base p-6 md:p-8 mb-10 space-y-6">
          {/* Search bar */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text/40 group-focus-within:text-primary transition-colors duration-300">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search by professional name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-secondary/40 rounded-xl py-3.5 pl-12 pr-4 text-sm text-text placeholder:text-text-light focus-visible:border-primary focus-visible:shadow-glow transition-all duration-300"
            />
          </div>

          {/* Individual Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Specialty filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <Briefcase className="w-3 h-3" />
                Specialty
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-3.5 text-sm text-text focus-visible:border-primary transition-all duration-300 cursor-pointer hover:border-secondary-dark"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Location filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-3.5 text-sm text-text focus-visible:border-primary transition-all duration-300 cursor-pointer hover:border-secondary-dark"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc === 'All' ? 'All Emirates' : loc}</option>
                ))}
              </select>
            </div>

            {/* Availability filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                Availability / Mode
              </label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full bg-background border border-secondary/40 rounded-xl py-3 px-3.5 text-sm text-text focus-visible:border-primary transition-all duration-300 cursor-pointer hover:border-secondary-dark"
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
                disabled={activeFilterCount === 0}
                className="w-full bg-secondary-light hover:bg-secondary/30 text-primary font-semibold py-3 px-4 rounded-xl border border-primary/20 text-sm flex items-center justify-center gap-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary shadow-soft disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-card"
              >
                <RotateCcw className={`w-4 h-4 transition-transform duration-300 ${activeFilterCount > 0 ? 'group-hover:-rotate-180' : ''}`} />
                <span>Reset Filters</span>
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{activeFilterCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex justify-between items-center mb-8 text-sm text-text-muted">
          <span>
            Found <strong className="text-primary text-base">{filteredProfessionals.length}</strong> verified professional{filteredProfessionals.length !== 1 ? 's' : ''}
          </span>
          {activeFilterCount > 0 && (
            <span className="text-xs bg-accent-light text-accent px-3 py-1 rounded-full font-medium border border-accent/20">
              {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} active
            </span>
          )}
        </div>

        {/* Grid List */}
        {filteredProfessionals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredProfessionals.map((prof) => (
              <ProfessionalCard
                key={prof.id}
                professional={prof}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        ) : (
          <div className="bg-primary-light/40 rounded-3xl p-16 text-center border border-primary/15 max-w-xl mx-auto mt-12 animate-scale-in">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-text">No Professionals Found</h3>
            <p className="text-sm text-text-muted mt-3 leading-relaxed max-w-sm mx-auto">
              We couldn't find any professionals matching your search queries or selected filters. Try resetting the criteria or modifying your search keywords.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-8 btn-primary text-sm py-3 px-8"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}