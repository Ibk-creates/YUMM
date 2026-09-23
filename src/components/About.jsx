export default function About() {
  return (
    <section id="about" className="w-full text-center py-24 relative">
      <p
        className="text-[#F91814] -rotate-2 mx-auto text-[3.5vw]"
        style={{
          fontFamily: "'Modak', system-ui",
          WebkitTextStroke: "3px white",
          paintOrder: "stroke fill",
        }}
      >
        TOP CLASSIC
      </p>

      <h2
        className="text-[#F91814] w-[70%] mx-auto leading-[0.75] uppercase text-[6vw] mt-2"
        style={{
          fontFamily: "'Mouse Memoirs', sans-serif",
          WebkitTextStroke: "5px white",
          paintOrder: "stroke fill",
        }}
      >
        Juicy Cheesy Fully Loaded
      </h2>

      <p
        className="text-black w-[45%] mx-auto mt-6 text-[1.6vw] leading-snug"
        style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
      >
        CRAV is back and bolder than ever. Honoring our rich roots, we bring
        you the ultimate smashed experience fully loaded, hot, and crafted
        fresh.
      </p>

      <div className="mt-8 mb-16">
        <a
          href="/menu"
          className="inline-block px-12 py-4 rounded-full bg-[#F91814] border-4 border-white text-white text-xl font-bold uppercase hover:scale-105 transition-transform duration-300"
          style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
        >
          Order Now
        </a>
      </div>

      <div className="relative grid place-items-center px-[10vw] pb-16">
        <img
          src="/Images/imgi_6_burgerselfie.png"
          alt=""
          className="hidden md:block absolute w-[15vw] top-[-8vw] left-[5vw] z-50 drop-shadow-xl"
        />

        <div className="grid grid-cols-3 gap-4 justify-center mx-auto max-w-[70vw]">
          <div className="h-[25vw] w-[20vw] rounded-[4%] overflow-hidden rotate-[5deg]">
            <img
              src="/Images/imgi_7_image.webp"
              alt="Chef preparing a fresh smashed burger"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[25vw] w-[20vw] rounded-[4%] overflow-hidden -rotate-[5deg]">
            <img
              src="/Images/imgi_8_image.webp"
              alt="Close-up of melted cheese on a burger patty"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[25vw] w-[20vw] rounded-[4%] overflow-hidden rotate-[8deg]">
            <img
              src="/Images/imgi_9_image.webp"
              alt="YUMM restaurant atmosphere"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
