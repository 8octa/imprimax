import ThemeToggleButton from "./ThemeToggleButton";
import { Phone, Mail, MapPin } from "lucide-react";

export default function HeaderBanner() {
  return (
    <header className="relative bg-radial from-[#226CE0] to-[#42CAFD] text-white px-10 py-2 text-xs lg:text-sm font-bold flex justify-between items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10">
        <ThemeToggleButton />
        <a href="tel:+">
          <div className="flex items-center gap-1">
            <Phone strokeWidth={2.5} width={15} fill="white" />
            <p className="hidden xl:block">0730 768 123</p>
          </div>
        </a>

        <a href="mailto:">
          <div className="flex items-center gap-1">
            <Mail strokeWidth={2.5} width={15} />
            <p className="hidden xl:block">print@gmail.com</p>
          </div>{" "}
        </a>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-center font-geist">
        <p className="shine-text-pulse tracking-wider rounded-lg">
          Transport gratuit la comenzile de peste 1000 RON
        </p>
      </div>

      <a
        href="https://www.google.com/maps/place/Mobila+Moreni+Elit+Parc/@44.9849227,25.6401875,20.5z/data=!4m16!1m9!3m8!1s0x40b257b84fcea415:0xf366654a82a49664!2sMobila+Moreni+Elit+Parc!8m2!3d44.9849337!4d25.640312!9m1!1b1!16s%2Fg%2F11b6sydf1w!3m5!1s0x40b257b84fcea415:0xf366654a82a49664!8m2!3d44.9849337!4d25.640312!16s%2Fg%2F11b6sydf1w?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <div className="flex items-center gap-1">
          <MapPin strokeWidth={2.5} width={15} />
          <p className="hidden xl:block">Vino în locație</p>
        </div>
      </a>
    </header>
  );
}
