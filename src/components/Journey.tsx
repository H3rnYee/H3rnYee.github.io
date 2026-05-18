import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

interface JourneyStep {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    year: '2016',
    title: 'The Foundation',
    description: 'Began as a junior developer focusing on clean code and pixel-perfect UI execution.',
    side: 'right'
  },
  {
    year: '2018',
    title: 'Artistic Shift',
    description: 'Transitioned into Art Direction, blending technical skills with high-end aesthetic design.',
    side: 'left'
  },
  {
    year: '2021',
    title: 'Global Recognition',
    description: 'Led projects for international brands, earning multiple Awwwards and CSSDA honors.',
    side: 'right'
  },
  {
    year: '2024',
    title: 'Elysian Studio',
    description: 'Founded an independent studio dedicated to digital excellence and sensory design.',
    side: 'left'
  }
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="journey" ref={containerRef} className="py-32 bg-brand-offwhite relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-black/40 mb-4"
          >
            Chronicle
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif italic"
          >
            The Journey
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Trunk */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-black/10 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-accent -translate-x-1/2 z-10"
          />

          <div className="space-y-32 relative">
            {JOURNEY_STEPS.map((step, index) => (
              <JourneyItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyItem({ step, index }: { step: JourneyStep, index: number, key?: any }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.8", "start 0.5"]
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const isLeft = step.side === 'left';

  return (
    <div ref={itemRef} className={`flex items-center gap-0 md:gap-12 w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Content */}
      <div className={`w-1/2 ${isLeft ? 'text-right pr-8 md:pr-16' : 'text-left pl-8 md:pl-16'}`}>
        <motion.div
           initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-mono text-sm text-brand-accent font-bold mb-2 block">{step.year}</span>
          <h3 className="text-2xl md:text-3xl font-serif mb-4">{step.title}</h3>
          <p className="text-sm md:text-base text-brand-black/60 leading-relaxed max-w-md ml-auto mr-0 md:mr-auto md:ml-0">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Branch & Connector */}
      <div className="relative w-0 flex items-center justify-center shrink-0">
         {/* Trunk Node */}
         <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`absolute w-3 h-3 rounded-full bg-brand-accent z-20 -translate-x-1/2`} 
         />
         
         {/* Branch Line */}
         <svg className={`absolute top-1/2 ${isLeft ? '-right-2 md:-right-16 translate-x-full' : '-left-2 md:-left-16 -translate-x-full'} w-12 md:w-32 h-20 -translate-y-1/2 pointer-events-none`} viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
                d={isLeft ? "M 100 50 C 70 50, 40 20, 0 50" : "M 0 50 C 30 50, 60 80, 100 50"}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-accent opacity-40"
                style={{ pathLength: pathProgress }}
            />
            {/* Small leaf/bud at the end */}
            <motion.circle
                cx={isLeft ? "0" : "100"}
                cy="50"
                r="3"
                className="fill-brand-accent"
                initial={{ scale: 0 }}
                style={{ scale: pathProgress }}
            />
         </svg>
      </div>

      <div className="w-1/2" />
    </div>
  );
}
