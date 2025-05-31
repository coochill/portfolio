// src/components/ImageGallery.jsx
import React, { useRef } from "react";

const ImageGallery = ({ title, items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "next" ? clientWidth : -clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="my-12 px-6 relative">
      <h2 className="text-white text-[40px] font-semibold mb-6">{title}</h2>

      {/* Navigation Buttons */}
        <button
          onClick={() => scroll("prev")}
          className="absolute left-2 top-[50%] transform -translate-y-1/2 bg-white text-black text-2xl px-3 py-2 rounded-full shadow-md z-10 hover:bg-neutral-200 transition"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => scroll("next")}
          className="absolute right-2 top-[50%] transform -translate-y-1/2 bg-white text-black text-2xl px-3 py-2 rounded-full shadow-md z-10 hover:bg-neutral-200 transition"
          aria-label="Next"
        >
          ›
        </button>


      {/* Scrollable Gallery */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth px-8"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-w-[500px] max-h-[300px] object-contain rounded-2xl shadow-md"
            />
            {item.caption && (
              <p className="text-white text-[18px] mt-2 text-center">{item.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
