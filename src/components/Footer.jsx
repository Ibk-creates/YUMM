export default function Footer() {
  return (
    <footer className="w-full bg-[#F5E3CD] pt-16 pb-8 px-10 text-center">
      <div
        className="flex justify-center gap-8 uppercase text-[1.4vw] mb-6"
        style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
      >
        <a href="/menu" className="hover:text-[#F91814] transition-colors duration-300">
          Burgers
        </a>
        <a href="/spices" className="hover:text-[#F91814] transition-colors duration-300">
          Spices
        </a>
        <a href="/contact" className="hover:text-[#F91814] transition-colors duration-300">
          Contact
        </a>
      </div>

      <p
        className="uppercase text-[1.2vw] tracking-wide text-[#F91814] mb-2"
        style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
      >
        Smashed Patties · Toasted Buns · Est. 1997
      </p>

      <p
        className="text-[1vw] text-black/70"
        style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
      >
        © 2026 YUMM — All rights reserved
      </p>
    </footer>
  );
}