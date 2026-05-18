import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { Security } from "@/components/sections/security";
import { Pricing } from "@/components/sections/pricing";
import { Waitlist } from "@/components/sections/waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Security />
        <Pricing />
        <Waitlist />
        {/* Footer will be added here */}
      </main>
    </>
  );
}
