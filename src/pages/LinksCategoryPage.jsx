import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LINK_CATEGORIES, linksData } from "../constants/links";
import LinkItem from "../components/links/LinkItem";

export default function LinksCategoryPage() {
  const { category } = useParams();
  const catMeta = LINK_CATEGORIES.find((c) => c.key === category);
  const items = linksData.filter((l) => l.category === category);
  const [expanded, setExpanded] = useState({}); // for nested certification sublists

  return (
    <div className="min-h-screen bg-black mt-14">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl px-6 md:px-8 py-10 md:py-14">
        <header className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {catMeta?.title ?? "Links"}
          </h1>
          {/* space for future sort/filter */}
        </header>

        {category === "certifications" ? (
          <ul className="space-y-5">
            {items.map((it, idx) => {
              const hasSubs =
                Array.isArray(it.subItems) && it.subItems.length > 0;
              const isOpen = !!expanded[idx];
              const visibleSubs = hasSubs
                ? isOpen
                  ? it.subItems
                  : it.subItems.slice(0, 6)
                : [];
              return (
                <li key={`cert-${idx}`} className="space-y-3">
                  <LinkItem
                    {...it}
                    showToggle={hasSubs}
                    expanded={isOpen}
                    onToggle={() =>
                      setExpanded((prev) => ({ ...prev, [idx]: !isOpen }))
                    }
                  />
                  {hasSubs && (
                    <>
                      {isOpen && (
                        <div className="relative ml-6 md:ml-8">
                          {/* Vertical guideline (neutral solid) */}
                          <span
                            aria-hidden
                            className="pointer-events-none absolute -left-3 top-0 bottom-0 w-[2px] rounded-full bg-slate-500/40"
                          />
                          <ul className="space-y-2">
                            {visibleSubs.map((sub, sIdx) => (
                              <li
                                key={`cert-${idx}-sub-${sIdx}`}
                                className="relative"
                              >
                                {/* Horizontal connector to the vertical line (neutral solid) */}
                                <span
                                  aria-hidden
                                  className="pointer-events-none absolute -left-3 top-1/2 h-[2px] w-3 rounded-full bg-slate-500/40"
                                />
                                <LinkItem {...sub} isSub />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="space-y-3">
            {items.map((it, i) => (
              <LinkItem key={`${category}-${i}-${it.title}`} {...it} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
