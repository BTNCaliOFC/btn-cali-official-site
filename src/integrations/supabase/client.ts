// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wiofqfpicsewldvgxvhf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpb2ZxZnBpY3Nld2xkdmd4dmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDIzMzAsImV4cCI6MjA1ODM3ODMzMH0.4IJtb9DSehuYm9OfxaR1ODHREnGLqu_jQmR3y3EMnAg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);