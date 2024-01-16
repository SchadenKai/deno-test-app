import { SupabaseClient, createClient } from "supabase";
import { load } from "dotenv";
import { Database } from "../database.types.ts";

let supabase: SupabaseClient | null = null;

try {
  const env = await load();
  const supabaseUrl = env["SUPABASE_URL"];
  const supabaseKey: string = env["SUPABASE_KEY"];
  supabase = createClient<Database>(supabaseUrl, supabaseKey);
} catch (e) {
  e instanceof Error && console.log(e.message);
}

export default supabase;
