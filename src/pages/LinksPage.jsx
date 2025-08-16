import React from "react";
import { LINK_CATEGORIES, linksData } from "../constants/links";
import CategorySection from "../components/links/CategorySection";
import Navbar from "../components/Navbar";

export default function LinksPage() {
  const byCat = LINK_CATEGORIES.reduce((acc, { key }) => {
    acc[key] = linksData.filter((l) => l.category === key);
    return acc;
  }, {});
  return (
    <div className="min-h-screen bg-black mt-14">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 md:px-8 py-10 md:py-14">
        <header className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Links</h1>
          <p className="text-secondary mt-1">
            Quick access to coding profiles, socials, projects, and
            certifications.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {LINK_CATEGORIES.map(({ key }) => (
            ((key!=="all")&&
            <CategorySection
              key={key}
              categoryKey={key}
              items={byCat[key] ?? []}
            />)
          ))}
        </div>
      </main>
    </div>
  );
}
