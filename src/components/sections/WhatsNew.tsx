import { motion } from 'framer-motion';
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';
import { TitleText, TypingText } from '@/components/ui/CustomTexts';
import NewFeatures from '@/components/NewFeatures';
import { newFeatures } from '@/constants';
import Image from 'next/image';

const WhatsNew = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`inner-width mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex flex-[0.95] flex-col justify-center">
        <TypingText title="| Whats new?" />
        <TitleText title={<>{"What's new about VizBeats?"}</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right')} className={`flex-center flex-1`}>
        <Image src={'/images/musical_note.png'} alt={'musical_note'} width={500} height={500} />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
