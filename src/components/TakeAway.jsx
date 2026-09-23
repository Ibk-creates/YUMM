export default function TakeAway() {
  return (
    <section className="w-full bg-[#FFD750] py-24 relative overflow-hidden">
      <div className="text-center mb-16">
        <p
          className="inline-block -rotate-2 text-[2.8vw] mb-2"
          style={{
            fontFamily: "'Modak', system-ui",
            color: "#F91814",
            WebkitTextStroke: "2px white",
            paintOrder: "stroke fill",
          }}
        >
          TAKE AWAY
        </p>
        <h2
          className="uppercase leading-[0.85] text-[7vw] text-[#F5E3CD]"
          style={{
            fontFamily: "'Mouse Memoirs', sans-serif",
            WebkitTextStroke: "4px #F91814",
            paintOrder: "stroke fill",
          }}
        >
          Quality That
          <br />
          Travels With You
        </h2>
        <p
          className="max-w-[40vw] mx-auto mt-4 text-[1.6vw] text-black"
          style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
        >
          Freshly packed smash burgers, ready to go wherever you crave. From
          our flat-top to any corner of the globe, we ensure every layer stays
          hot and juicy.
        </p>
      </div>

      <div className="relative w-full h-[45vw] max-w-[80vw] mx-auto">
        <img
          src="/Images/imgi_18_image.webp"
          alt=""
          className="absolute w-[6vw] top-[2%] left-[38%] rotate-[20deg] z-20"
        />

        <div className="absolute top-[5%] left-[8%] w-[16vw] rotate-[-6deg] z-10">
          <img
            src="/Images/imgi_19_image.webp"
            alt="Guest enjoying a YUMM burger in Berlin"
            className="w-full rounded-xl border-4 border-white shadow-lg"
          />
          <p
            className="mt-1 text-[1.4vw] text-[#F91814] rotate-2"
            style={{ fontFamily: "'Modak', system-ui" }}
          >
            Berlin
          </p>
        </div>

        <div className="absolute top-[30%] left-[35%] w-[16vw] rotate-[4deg] z-10">
          <img
            src="/Images/imgi_20_image.webp"
            alt="Guest enjoying a YUMM burger in London"
            className="w-full rounded-xl border-4 border-white shadow-lg"
          />
          <p
            className="mt-1 text-[1.4vw] text-[#F91814] -rotate-2"
            style={{ fontFamily: "'Modak', system-ui" }}
          >
            London
          </p>
        </div>

        <div className="absolute top-[10%] right-[8%] w-[16vw] rotate-[6deg] z-10">
          <img
            src="/Images/imgi_21_image.webp"
            alt="Guest enjoying a YUMM burger in Sydney"
            className="w-full rounded-xl border-4 border-white shadow-lg"
          />
          <p
            className="mt-1 text-[1.4vw] text-[#F91814] rotate-3"
            style={{ fontFamily: "'Modak', system-ui" }}
          >
            Sydney
          </p>
        </div>
      </div>
    </section>
  );
}