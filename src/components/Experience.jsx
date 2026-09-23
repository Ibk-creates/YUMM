export default function Experience() {
  return (
    <section className="w-full bg-[#F91814] relative overflow-hidden">
      <div className="w-full overflow-hidden leading-none -mb-1 rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-[8vw] text-[#F5E3CD]" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="text-center pt-8 pb-4">
        <p
          className="inline-block -rotate-3 text-[3vw]"
          style={{
            fontFamily: "'Modak', system-ui",
            color: "#F5E3CD",
            WebkitTextStroke: "2px #F91814",
            paintOrder: "stroke fill",
          }}
        >
          EXPERIENCE
        </p>
        <h2
          className="uppercase leading-[0.85] text-[9vw]"
          style={{
            fontFamily: "'Mouse Memoirs', sans-serif",
            color: "#F5E3CD",
          }}
        >
          Food That
          <br />
          Feels Good
        </h2>
      </div>

      <div className="relative w-[45vw] mx-auto py-10">
        <div className="absolute -top-[2vw] left-[28%] w-[10vw] flex justify-between z-20">
          <span className="block w-[4vw] h-[4vw] bg-white rounded-full border-4 border-[#F91814] relative">
            <span className="absolute top-1/3 left-1/3 w-[1.2vw] h-[1.2vw] bg-black rounded-full" />
          </span>
          <span className="block w-[4vw] h-[4vw] bg-white rounded-full border-4 border-[#F91814] relative">
            <span className="absolute top-1/3 left-1/3 w-[1.2vw] h-[1.2vw] bg-black rounded-full" />
          </span>
        </div>

        <img
          src="/Images/imgi_64_burgerwithhands.webp"
          alt="YUMM smashed burger held up with two hands"
          className="w-full h-full object-contain relative z-10"
        />

        <p
          className="absolute bottom-[6%] right-[2%] rotate-[10deg] text-[2.2vw] z-20"
          style={{
            fontFamily: "'Modak', system-ui",
            color: "#F4A804",
            WebkitTextStroke: "2px white",
            paintOrder: "stroke fill",
          }}
        >
          BOLD
          <br />
          FLAVOUR
        </p>
      </div>

      <div
        className="w-full flex justify-between px-10 pb-16 text-[1.6vw] uppercase leading-tight"
        style={{ fontFamily: "'Mouse Memoirs', sans-serif", color: "#F5E3CD" }}
      >
        <div>
          450 kcal
          <br />
          High protein
          <br />
          Fresh ingredients
        </div>
        <div className="text-right">
          100% organic
          <br />
          Zero guilt
          <br />
          True taste
        </div>
      </div>

      <img
        src="/Images/imgi_36_image.webp"
        alt="Hands holding a loaded YUMM burger"
        className="w-full h-[70vh] object-cover"
      />
    </section>
  );
}