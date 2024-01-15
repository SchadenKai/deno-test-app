import { createClient } from "supabase";
import { load } from "dotenv";

let supabase;

try {
  const env = await load();
  const supabaseUrl = "https://gprikcjrymrzjbrcuobs.supabase.co";
  const supabaseKey: string = env["SUPABASE_KEY"];
  supabase = createClient(supabaseUrl, supabaseKey);
} catch (e) {
  e instanceof Error && console.log(e.message);
}

export default supabase;
