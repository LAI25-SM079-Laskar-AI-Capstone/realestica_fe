import { useState, useRef, useEffect } from "react";

function DescriptionSection({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(contentRef.current.scrollHeight > 160); // ~8 lines
    }
  }, [description]);

  return (
    <section id="desc" className="mb-8 relative">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
        Deskripsi
      </h2>

      <div className="relative">
        <div
          ref={contentRef}
          className={`text-slate-500 leading-relaxed whitespace-pre-line transition-all duration-300 ${
            expanded ? "max-h-full" : "max-h-40 overflow-hidden"
          }`}
        >
          {description}
        </div>

        {/* Gradient blur */}
        {!expanded && isOverflowing && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Toggle Button */}
      {isOverflowing && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-slate-600 hover:underline font-medium"
        >
          {expanded ? "Lihat lebih sedikit" : "Lihat selengkapnya"}
        </button>
      )}
    </section>
  );
}

export default DescriptionSection;
