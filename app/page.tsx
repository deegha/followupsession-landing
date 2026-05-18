import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        {/* More sections will be added here */}
      </main>
    </>
  );
}
