import { Gloock, Playfair_Display } from "@next/font/google";

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
});
