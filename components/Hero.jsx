import styles from "@/styles/style";
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";
import { css } from "@emotion/react";

const hideOnMdStyles = css`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row md:items-center ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white"> Lets </span> Get {' '}
          <span className="text-white"> Started </span>  with Us.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Dashboard To <br className="sm:block hidden" />{' '}
          <span className="text-gradient">Interchain</span>{' '}
        </h1>
        {/* <div className="md:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div> */}
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Integrations.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Swap ,Bridge, Earn and Build on leading decentralize crypto trading protocol with interchain integration
      </p>
    </div>
    {/* <div className="flex" style={{ height: '100%' }}>
      <Image src={robot} alt="billing" className="w-full h-full py-16 px-16" />
    </div> */}

      <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing" className="w-[100%] object-cover h-[100%] relative z-[5] " />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`md:hidden flex ${styles.flexCenter}`}>
        <div className="sm:hidden">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;