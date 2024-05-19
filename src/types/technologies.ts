import { StaticImageData } from "next/image";

export interface Technology {
  name: string;
  href?: string;
  logo?: StaticImageData;
}
