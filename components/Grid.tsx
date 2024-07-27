import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Grid = () => {
  return (
    <section id="about">

      {/* <div className="flex justify-center my-10 z-10" id="main">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            JustAGuy
          </p>
          <TextGenerateEffect words="Walk into the Future, Travel with the Present" className="text-center text-[40px] md:text-5xl lg:text-6xl" />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl">
            Holla! I&apos;m Always, a passionate Designer and Frontend Developer based in Tanzania. With a keen eye for detail and a love for creative problem-solving, I specialize in crafting beautiful and functional digital experiences. Whether it&apos;s designing pixel-perfect interfaces or coding responsive websites and applications, I thrive on turning ideas into reality. My goal is to create visually appealing designs that seamlessly integrate with robust and user-friendly frontend solutions. Let&apos;s create something amazing together!.
          </p>
        </div>
      </div> */}
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
