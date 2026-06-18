import { supabase } from '../lib/supabase'

export async function getApplications() {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('status', 'pending')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function addApplication(application) {
  const { data, error } = await supabase
    .from('applications')
    .insert([{ ...application, status: 'pending' }])
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function deleteApplication(id) {
  const { error } = await supabase
    .from('applications')
    .delete()
    .eq('id', id)
  
  if (error) throw error
}

export async function approveApplication(id) {
  
  const { data: app, error: fetchError } = await supabase
    .from('applications')
    .select('*')
    .eq('id', id)
    .single()
  
  if (fetchError) throw fetchError

  
  const newProfessional = {
    name: app.name,
    specialty: app.specialty,
    location: 'Dubai',
    experience: app.experience,
    price_range: app.price_range,
    languages: app.languages,
    session_types: ['Hybrid', 'In-person'],
    conditions_supported: app.conditions_supported,
    verified_badge: app.license_type ? app.license_type.split('(')[0].trim() + ' Licensed Specialist' : 'Verified Specialist',
    verification_checklist: {
      licenseChecked: true,
      backgroundCheck: true,
      degreeAuthenticated: true,
      referencesVerified: true
    },
    verification_details: {
      licenseNumber: app.license_number,
      degree: 'Verified Degree Credentials',
      backgroundCheckDate: 'Newly Vetted',
      referenceCount: 2
    },
    bio: app.bio,
    services: [
      `Individual ${app.specialty} sessions`,
      'Diagnostic needs screening',
      'Parent collaboration checkins'
    ],
    trust_explanation: `${app.name} has been vetted by the Khair safety board in accordance with local regulations.`,
    avatar_bg: 'from-[#A7C4BC] to-[#C89F7B]',
    status: 'active'
  }

  const { data: prof, error: profError } = await supabase
    .from('professionals')
    .insert([newProfessional])
    .select()
    .single()
  
  if (profError) throw profError

 
  await deleteApplication(id)
  
  return prof
}