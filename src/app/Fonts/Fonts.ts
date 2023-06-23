import { Roboto } from "next/font/google";

import localFont from 'next/font/local'

export const roboto = Roboto({ subsets: ['cyrillic', 'latin'],  weight: ['700', '500', '400']});

export const SFProText = localFont({
    src: './SFProText-Regular.ttf',
    weight: '400'
});