import type { MetaFunction } from "@remix-run/cloudflare";
import { Hero } from "@/components/Sections/Hero";
import { Biography } from "@/components/Sections/Biography";
import { Archive } from "@/components/Sections/Archive";

export const meta: MetaFunction = () => {
  return [
    { title: "Koki Ito - Home Page" },
    { name: "description", content: "show my portfolio" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <Biography />
      <Archive />
    </div>
  );
}
