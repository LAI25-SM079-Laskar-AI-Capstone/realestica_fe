import { motion } from 'framer-motion';

const ComingSoonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl w-full text-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="mb-8"
        >
          <img src="/logo.png" alt="Logo" className="h-24 w-24 mx-auto object-contain" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Segera Hadir!
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-xl text-gray-600 mb-8">
          Kami sedang menyiapkan platform pencarian properti terbaik di Jakarta untuk Anda.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ComingSoonPage;
