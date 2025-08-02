import Navbar from '@/app/components/Navbar';
import Crousal from '@/app/components/Crousal';
import GetStarted from '@/app/components/GetStarted';
// import CarCrousal from '@/app/components/CarCrousal';
import Nav_Bar from '@/app/components/Nav_Bar';
import Add_Locations from '@/app/components/Add_Locations';
import Get_Started from '@/app/components/Get_Started';
import FamousRideBadges from '@/app/components/FamousRideBadges';

export default function Home() {
  return (
    <>
      <div className='relative bg-[url("/images/Car1.jpg")] bg-cover bg-center bg-scroll backdrop-blur-lg'>
        <div className='absolute inset-0 -z-10'>
          {/* <Image
            src={bgSrc}
            alt='City night road with car lights'
            fill
            quality={100}
            priority
            sizes='100vw'
            className='object-cover object-center'
          /> */}
          {/* Darkening & color overlay to ensure text dominance */}
          <div className='absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(2,6,23,.5),rgba(2,6,23,.85))]' />
          <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30' />
        </div>
        <Nav_Bar />
        <Get_Started />
      </div>

      <FamousRideBadges />
    </>
  );
}
