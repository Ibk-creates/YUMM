export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full relative flex flex-col justify-between items-center pt-32 pb-8"
    >
      <div className="w-fit h-fit relative mx-auto">
        <h1
          className="text-[30vw] leading-[0.8] text-center text-[#F91814]"
          style={{
            fontFamily: "'Mouse Memoirs', sans-serif",
            WebkitTextStroke: "6px white",
            paintOrder: "stroke fill",
          }}
        >
          THE BURGER
        </h1>

        <p
          className="absolute top-[10%] left-[10%] z-10 rotate-[15deg] text-center text-[2.8vw] leading-[0.9]"
          style={{
            fontFamily: "'Modak', system-ui",
            color: "#F4A804",
            WebkitTextStroke: "3px white",
            paintOrder: "stroke fill",
          }}
        >
          SMASHED
          <br />
          FRESH
        </p>

        <p
          className="absolute bottom-[10%] right-[10%] z-10 -rotate-[15deg] text-center text-[2.8vw] leading-[0.9]"
          style={{
            fontFamily: "'Modak', system-ui",
            color: "#F4A804",
            WebkitTextStroke: "3px white",
            paintOrder: "stroke fill",
          }}
        >
          BOLD
          <br />
          FLAVOR
        </p>
      </div>

      <div className="w-[40vw] z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <img
          src="/Images/imgi_31_image.webp"
          alt="YUMM Artisan Smashed Burger"
          className="w-full h-full object-contain"
        />
      </div>

      <p
        className="text-center text-[15vw] uppercase relative z-20 mt-4"
        style={{
          fontFamily: "'Modak', system-ui",
          color: "#F4A804",
          WebkitTextStroke: "6px white",
          paintOrder: "stroke fill",
        }}
      >
        YUMM
      </p>

      <div className="w-full absolute bottom-0 left-0 flex justify-between px-8 py-8">
        <div className="w-[23vw]">
          <p
            className="text-lg leading-none"
            style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
          >
            Smashed hot on the flat top, our prime patties lock in ultimate
            juiciness under a caramelized crust.
          </p>
        </div>
        <div className="w-[23vw]">
          <p
            className="text-lg leading-none text-right"
            style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
          >
            Topped with melted cheddar and our signature chili honey glaze
            crafted to satisfy your cravings since 1997.
          </p>
        </div>
      </div>
    </section>
  );
}