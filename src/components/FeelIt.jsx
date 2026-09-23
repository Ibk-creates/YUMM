export default function FeelIt() {
  return (
    <section className="w-full bg-[#F91814] py-24 relative overflow-hidden">
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[8vw] text-[#FFD750]" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C240,0 480,120 720,64 C960,0 1200,64 1440,32 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <p
        className="text-center inline-block -rotate-2 text-[2.8vw] mt-8 mb-8 w-full"
        style={{
          fontFamily: "'Modak', system-ui",
          color: "#F5E3CD",
          WebkitTextStroke: "2px #F91814",
          paintOrder: "stroke fill",
        }}
      >
        FEEL IT
      </p>

      <div className="flex items-center justify-between max-w-[70vw] mx-auto gap-10">
        <div className="w-[35%]">
          <p
            className="text-[1.8vw] leading-snug"
            style={{ fontFamily: "'Mouse Memoirs', sans-serif", color: "#F5E3CD" }}
          >
            Smashed for the bold, built for the hungry. Dive into a legendary
            craft experience where every edge is crispy and every layer
            rules.
          </p>
          
          <a
            href="/menu"
            className="inline-block mt-6 px-10 py-3 rounded-full bg-[#F5E3CD] border-4 border-white text-[#F91814] text-lg font-bold uppercase hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
          >
            Order Now
          </a>
        </div>

        <div className="w-[45%] relative">
          <img
            src="/Images/imgi_30_image.webp"
            alt="Guest taking a big bite of a YUMM burger"
            className="w-full rounded-2xl border-4 border-white shadow-xl"
          />
          <img
            src="/Images/imgi_29_burger-boy.png"
            alt=""
            className="hidden md:block absolute w-[8vw] -bottom-[3vw] -left-[3vw] rotate-[-8deg] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}