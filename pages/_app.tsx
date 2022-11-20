import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, useState } from 'react';
import {AnimatePresence} from 'framer-motion'
import Navbar from '../components/Navbar';
import BookingModal from '../components/BookingModal';


function MyApp({ Component, pageProps }: AppProps) {

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Navbar setOpen={setOpen} open={open} />
        {open && <BookingModal setOpen={setOpen} />}
        <Component {...pageProps} />
      </AnimatePresence>
    </Fragment>
  );
}

export default MyApp
