import { supabase } from '../lib/supabase'

export async function getProfessionals() {
  const { data, error } = await supabase
    .from('professionals')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function getProfessionalById(id) {
  const { data, error } = await supabase
    .from('professionals')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}