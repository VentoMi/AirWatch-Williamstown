import { createClient } from '@supabase/supabase-js'

const URL = 'https://uyqhijoovnuxpvtgxaqy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5cWhpam9vdm51eHB2dGd4YXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMzY0ODYsImV4cCI6MTk5NzcxMjQ4Nn0.MSMcLgmTGYYwSLgn6Pmc206Y2lncDxsEmBUtYJ7Ommg';

export const supabase = createClient(URL, API_KEY);
