import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anonymous key
const SUPABASE_URL = 'https://mmyaizegqhtmbffrmcjm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1teWFpemVncWh0bWJmZnJtY2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NTgxNDcsImV4cCI6MjA1MjUzNDE0N30.sux5z6kcdzmmNxaNBUwzj7xKvEfHt_CYkFJ9a8Xe5Bw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);