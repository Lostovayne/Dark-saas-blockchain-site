import { CutCornerButton } from "@/components/CutCornerButton";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl text-center mt-4">
          The Future of Blockchaine is Here
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto ">
          Blockforge is pioneering smart contract integrity with cutting-edge data
          solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex  relative z-0">
            <img
              src="/assets/images/icosahedron.png"
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate[10%] brightness-[4%] hue-rotate-[240deg]"
              alt=""
            />

            <img
              src="/assets/images/icosahedron.png"
              alt="Icosanhedron 3D Image"
              className="w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
