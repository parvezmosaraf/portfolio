// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bnkpchyrproczhkmhlla.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJua3BjaHlycHJvY3poa21obGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDQ2NzYsImV4cCI6MjA1OTcyMDY3Nn0.PmS0A2JzLc9GZ_R9DePAIA_j29rgUXedVIBAhq7SGcQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);