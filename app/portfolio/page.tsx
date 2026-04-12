import { Portfolio } from "@/app/modules/Portfolio/Portfolio";
import { supabase } from "../lib/supabase";

export default async function PortfolioPage() {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id", { ascending: true });
  return <Portfolio projects={projects || []} skills={skills || []} />;
}
