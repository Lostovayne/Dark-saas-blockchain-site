import { Circle } from '@/components/Circle';
import { CutCornerButton } from '@/components/CutCornerButton';
import { Hexagon } from '@/components/Hexagon';

export const HeroSection = () => {
  return (
    <section className='py-24 md:py-52 overflow-x-clip'>
      <div className='container'>
        <p className='uppercase font-extrabold text-center text-zinc-500 tracking-wider'>
          Introducing Blockforge
        </p>
        <h1 className='font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto'>
          The Future of Blockchain is Here.
        </h1>
        <p className='text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto '>
          Blockforge is pioneering smart contract integrity with cutting-edge data solutions.
        </p>
        <div className='flex justify-center mt-10'>
          <CutCornerButton className=''>Get Started</CutCornerButton>
        </div>
        <div className='flex justify-center mt-24'>
          <div className='inline-flex  relative z-0'>
            {/* Agregando el marco en el centro */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Hexagon className='size-[1100px]' />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Hexagon className='size-[1800px]' />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Circle className='absolute left-[200px] -top-[900px] '>
                <img src='/assets/images/cube.png' alt='Cube 3d' className='size-[140px]' />
              </Circle>
            </div>

            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Circle className='absolute  left-[200px] top-[270px]'>
                <img src='/assets/images/cuboid.png' alt='Cuboid 3d' className='size-[140px]' />
              </Circle>
            </div>

            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Circle className='absolute -left-[600px] -top-[80px] '>
                <img src='/assets/images/torus.png' alt='Torus 3d' className='size-[140px]' />
              </Circle>
            </div>

            <img
              src='/assets/images/icosahedron.png'
              className='absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate[10%] brightness-[4%] hue-rotate-[240deg]'
              alt=''
            />

            <img src='/assets/images/icosahedron.png' alt='Icosanhedron 3D' className='w-[500px]' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-40 md:mt-80  gap-4'>
          <div className=' h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full'>
            <div className='h-3 w-1 bg-fuchsia-500 rounded-full'></div>
          </div>
          <p className='uppercase text-zinc-500 font-extrabold tracking-wider'>
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
