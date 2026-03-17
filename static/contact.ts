import { StaticImageData } from 'next/image';
import linkedin from '../public/linkedin.png';
import github from '../public/github.webp';
import gmail from '../public/gmail.png';

export interface ContactLink {
  name: string;
  image: StaticImageData;
  url: string;
}

export const contactLinks: ContactLink[] = [
  {
    name: "LinkedIn",
    image: linkedin,
    url: "https://www.linkedin.com/in/antonio-g-a0885b19a/"
  },
  {
    name: "GitHub",
    image: github,
    url: "https://github.com/gario300"
  },
  {
    name: "Gmail",
    image: gmail,
    url: "mailto:antoniocelayag@gmail.com"
  }
];
