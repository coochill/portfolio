import { useEffect, useRef, useState, type FC } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  background?: string; // optional, e.g. "#f7f3e9"
}

interface ImageGalleryProps {
  title: string;
  items: GalleryItem[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ title, items }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scroll = (direction: "next" | "prev") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const isOpen = activeIndex !== null;
  const close = () => setActiveIndex(null);
  const step = (delta: number) =>
    setActiveIndex((i) => (i === null ? i : (i + delta + items.length) % items.length));

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, items.length]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="gallery">
      <div className="gallery__header">
        <h3 className="gallery__title">{title}</h3>
        <div className="gallery__controls">
          <button
            type="button"
            onClick={() => scroll("prev")}
            className="gallery__nav"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            className="gallery__nav"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="gallery__track">
        {items.map((item, index) => (
          <figure className="gallery__item" key={item.src}>
            <button
              type="button"
              className="gallery__open"
              style={{ background: item.background }}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.alt} full size`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </button>
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox__close"
              onClick={close}
              aria-label="Close image viewer"
            >
              <X size={20} aria-hidden="true" />
            </button>

              <div className="lightbox__stage" style={{ background: active.background }}>
                <img src={active.src} alt={active.alt} />
              </div>

            {items.length > 1 && (
              <div className="lightbox__nav">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image">
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <span>
                  {activeIndex! + 1} / {items.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Next image">
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
