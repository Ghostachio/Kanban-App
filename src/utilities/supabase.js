// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// export default getData;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bhakzkkyvzboptaqziug.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoYWt6a2t5dnpib3B0YXF6aXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4OTM1MzAsImV4cCI6MjA0MzQ2OTUzMH0.TFfZiqYsbEtiJok0APIvJgjoW-kVHBLl2aJEYYUZSjI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
