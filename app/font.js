// app/font.ts
import { Open_Sans, DM_Sans } from 'next/font/google';

export const opensans = Open_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

export const dmsans = DM_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

