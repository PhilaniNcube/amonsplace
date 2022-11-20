import {motion} from 'framer-motion'
import { pt_serif } from './Hero';

const BookingModal = ({ setOpen }: { setOpen: (arg0: boolean) => void }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: {duration: 0.2, ease: "backOut"} }}
      transition={{duration: 0.3, ease: 'circInOut'}}
      className="absolute inset-0 h-screen z-50 w-full bg-slate-600/30 flex items-center justify-center px-4"
    >
      <div
        className={`bg-white rounded-3xl min-w-[55vw] min-h-[50%] max-w-6xl p-4 flex text-center relative justify-center items-center flex-col ${pt_serif.className}`}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute top-0 right-2 text-6xl text-red-600 cursor-pointer font-medium"
        >
          &times;
        </div>

        <h3 className="text-slate-700 text-xl mb-4">Contact Us To Make A Booking</h3>

        <p className="text-slate-800 text-2xl md:text-3xl">
          Benedict Chikwanha: <br />+263 77 232 7184
        </p>
      </div>
    </motion.div>
  );
};
export default BookingModal;
