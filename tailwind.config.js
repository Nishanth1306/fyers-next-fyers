import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  safelist: [
    'md:bg-[position:0px_100px]',
    'md:bg-[position:0px_70px]'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
}
