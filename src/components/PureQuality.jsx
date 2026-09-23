export default function PureQuality() {
  return (
    <section className="w-full bg-[#F5E3CD] py-24 text-center relative">
      <p
        className="inline-block -rotate-2 text-[2.8vw] mb-4"
        style={{
          fontFamily: "'Modak', system-ui",
          color: "#F91814",
          WebkitTextStroke: "2px white",
          paintOrder: "stroke fill",
        }}
      >
        PURE QUALITY
      </p>

      <div className="relative max-w-[60vw] mx-auto">
        <img
          src="/Images/imgi_1_lettuce.webp"
          alt=""
          className="hidden md:block absolute w-[6vw] -top-[2vw] left-[4vw] -rotate-12"
        />
        <img
          src="/Images/imgi_2_tomato.webp"
          alt=""
          className="hidden md:block absolute w-[6vw] top-[5vw] right-[2vw] rotate-12"
        />
        <img
          src="/Images/imgi_3_cheese-logo.webp"
          alt=""
          className="hidden md:block absolute w-[6vw] bottom-[4vw] left-[2vw] rotate-6"
        />
        <img
          src="/Images/imgi_4_meat.webp"
          alt=""
          className="hidden md:block absolute w-[7vw] -bottom-[2vw] right-[6vw] -rotate-6"
        />

        <h2
          className="uppercase leading-[0.85] text-[6.5vw] text-[#F91814]"
          style={{
            fontFamily: "'Mouse Memoirs', sans-serif",
            WebkitTextStroke: "4px white",
            paintOrder: "stroke fill",
          }}
        >
          Every Layer
          <br />
          Packed With
          <br />
          Signature Flavor
        </h2>
      </div>
    </section>
  );
}