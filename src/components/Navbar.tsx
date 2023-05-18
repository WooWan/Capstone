import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';
import Link from 'next/link';

const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`x-paddings relative py-8`}>
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`inner-width mx-auto flex justify-between gap-8`}>
      <Link href={'/'}>
        <h2 className="text-[24px] font-extrabold leading-[30.24px] text-white">VizBeats</h2>
      </Link>
    </div>
  </motion.nav>
);

export default Navbar;
