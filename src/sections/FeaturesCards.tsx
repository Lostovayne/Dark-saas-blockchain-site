
const FeaturesCardsSection = () => {
  return (
    <section className="py-24" >
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center" >Discover the future blockhain with Blockforge</h2>
        <div>
          <div className="relative z-0" >
            <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" ></div>
            <img src="/assets/images/pill.png" alt="Pill Image" />
            <h3>Revolutionary Blockchain API</h3>
            <p>
              Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for
              seamless connectivity{" "}
            </p>
            <div className="flex">
              <button>Learn More</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {...new Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"></div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCardsSection;
