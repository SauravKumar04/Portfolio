import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles } from 'lucide-react';

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, range = 30 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 12, mass: 0.1 });
  const y = useSpring(0, { stiffness: 180, damping: 12, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range * 1.8) {
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 4000);
    }, 1200);
  };

  return (
    <section className="portfolio-section px-6 md:px-12 overflow-hidden" id="contact">
      <div className="absolute right-[-10%] bottom-[-10%] w-[35%] h-[35%] rounded-full bg-[#00ff66]/1 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 gap-16 relative z-10 select-none">

        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-6 select-none"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="h-[1px] bg-[#00ff66]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <span className="text-3xs uppercase tracking-widest text-[#00ff66] font-bold font-mono">Launch Connection</span>
            </motion.div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] flex flex-col mb-8 select-none">
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00ff66' }}>
                LET'S BUILD
              </span>
              <span className="text-white">
                SOMETHING
              </span>
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #ffffff' }}>
                EXCEPTIONAL.
              </span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md mb-12">
              Whether you are looking to hire a software engineer, launch a product, or chat about competitive coding, reach out!
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded border border-white/10 text-neutral-400 group-hover:text-[#00ff66] group-hover:border-[#00ff66]/20 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-2xs font-mono uppercase tracking-widest text-neutral-500 font-bold">Write me an Email</div>
                <a href="mailto:saurav.kr6289@gmail.com" className="text-white hover:text-[#00ff66] transition-colors text-xs font-semibold hover-reveal cursor-none">
                  saurav.kr6289@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded border border-white/10 text-neutral-400 group-hover:text-[#00ff66] group-hover:border-[#00ff66]/20 transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-2xs font-mono uppercase tracking-widest text-neutral-500 font-bold">Call directly</div>
                <a href="tel:+919798616289" className="text-white hover:text-[#00ff66] transition-colors text-xs font-semibold hover-reveal cursor-none">
                  +91-9798616289
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded border border-white/10 text-neutral-400 group-hover:text-[#00ff66] group-hover:border-[#00ff66]/20 transition-all duration-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-2xs font-mono uppercase tracking-widest text-neutral-500 font-bold">Base Location</div>
                <span className="text-white text-xs font-semibold">
                  Jamshedpur, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="lg:col-span-6 flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="bento-card w-full flex flex-col gap-6"
          >
            <div className="text-2xs font-mono uppercase tracking-widest text-neutral-500">Secure Direct Pipeline</div>

            {/* Name */}
            <div className="flex flex-col gap-2 relative group">
              <label className="text-3xs uppercase tracking-widest text-neutral-400 font-bold">Your Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-white/[0.01] border border-white/5 rounded px-4 py-3 text-xs text-white placeholder-neutral-700 outline-none focus:border-[#00ff66]/30 focus:bg-white/[0.02] transition-all cursor-none"
                placeholder="e.g. Saurav Kumar"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 relative group">
              <label className="text-3xs uppercase tracking-widest text-neutral-400 font-bold">Your Email Address</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-white/[0.01] border border-white/5 rounded px-4 py-3 text-xs text-white placeholder-neutral-700 outline-none focus:border-[#00ff66]/30 focus:bg-white/[0.02] transition-all cursor-none"
                placeholder="e.g. saurav@example.com"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 relative group">
              <label className="text-3xs uppercase tracking-widest text-neutral-400 font-bold">Your Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={4}
                className="w-full bg-white/[0.01] border border-white/5 rounded px-4 py-3 text-xs text-white placeholder-neutral-700 outline-none focus:border-[#00ff66]/30 focus:bg-white/[0.02] resize-none transition-all cursor-none"
                placeholder="Write your creative brief or inquiry here..."
              />
            </div>

            {/* Submit */}
            <div className="w-full flex justify-end mt-2">
              <Magnetic>
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="px-8 py-3.5 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 active:scale-95 flex items-center gap-2 cursor-none shadow-lg shadow-white/5"
                  data-cursor="send"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : isSent ? (
                    <span className="text-[#00ff66] flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#00ff66]" />
                      Transmission Received
                    </span>
                  ) : (
                    <>
                      Transmit Message
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </Magnetic>
            </div>
          </form>
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full mt-24 border-t border-white/5 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6 select-none relative z-10 text-neutral-600 text-3xs font-mono">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <span>© 2026 SAURAV KUMAR. ALL RIGHTS RESERVED.</span>
          <span className="hidden md:inline text-neutral-800">|</span>
          <span className="text-neutral-500">NIT JAMSHEDPUR (2023 - 2027)</span>
        </div>
        <div className="flex gap-6 items-center">
          <Magnetic range={15}>
            <a href="https://github.com/SauravKumar04" target="_blank" rel="noreferrer" className="hover:text-[#00ff66] transition-colors cursor-none flex items-center gap-1.5 font-bold hover-reveal">
              <Github className="w-3 h-3" /> GITHUB
            </a>
          </Magnetic>
          <Magnetic range={15}>
            <a href="https://www.linkedin.com/in/saurav-kumar-32b61128a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-[#00ff66] transition-colors cursor-none flex items-center gap-1.5 font-bold hover-reveal">
              <Linkedin className="w-3 h-3" /> LINKEDIN
            </a>
          </Magnetic>
        </div>
      </footer>
    </section>
  );
};
