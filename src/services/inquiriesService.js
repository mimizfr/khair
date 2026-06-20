import { supabase } from '../lib/supabase'

export async function getInquiries() {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*, professionals(name)')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function addInquiry(inquiry) {
  const { data, error } = await supabase
    .from('inquiries')
    .insert([inquiry])
    .select()
    .single()
  
  if (error) throw error
  return data
}