// app/font.ts

import {  } from 'next/font/google';

export const opensans = import('next/font/google')({ 

    fontFamily: 'Open_Sans', 

    subsets: ['latin'],

    // variable: '--font-roboto',

    weight: ['400', '500', '600', '700', '800'],

});

export const dmsans = import('next/font/google')({ 

    fontFamily: 'DM_Sans', 

    subsets: ['latin'],

    // variable: '--font-roboto',

    weight: ['400', '500', '600', '700', '800'],

});
