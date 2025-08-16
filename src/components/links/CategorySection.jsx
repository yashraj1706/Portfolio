import React from "react";
import LinkItem from "./LinkItem";
import { LINK_CATEGORIES } from "../../constants/links";
import { Link } from "react-router-dom";

export default function CategorySection({ categoryKey, items = [] }) {
  const cat = LINK_CATEGORIES.find((c) => c.key === categoryKey);
  const top5 = items.slice(0, 5);
  return (
    <section className="rounded-2xl border border-brand-deep/40 bg-black/40 px-6 py-5">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {cat?.title ?? categoryKey}
        </h3>
        <Link
          to={`/links/${categoryKey}`}
          className="text-brand-strong hover:text-brand transition-colors duration-[1000ms] text-sm"
        >
          View All
        </Link>
      </div>
      <ul className="space-y-3">
        {top5.map((it, i) => (
          <LinkItem key={`${categoryKey}-${i}-${it.title}`} {...it} />
        ))}
      </ul>
    </section>
  );
}
