import Button from "@/app/components/Button";
import { Hero } from "@/app/components/Hero";
import { Testimonials } from "@/app/components/Testimonials";
import { MyCarousel } from "@/app/components/MyCarousel";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { FaPrint } from "react-icons/fa6";
import { GiLaserBlast } from "react-icons/gi";

const Acasa = () => {
  return (
    <section className="text-foreground flex flex-col justify-center items-center w-full pb-10">
      <Hero />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full px-15 my-5">
        <h2>Avantaje rapide:</h2>
        <div className="flex flex-col gap-5">
          <CiDeliveryTruck size={25} />
          <p>livrare rapidă</p>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <MdDashboardCustomize size={25} />
          <p>personalizare</p>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <GrUserExpert size={25} />
          <p>experiență tehnică</p>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
      </div>

      <Testimonials />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full p-10 my-15">
        <h2>Tipuri de servicii:</h2>
        <div className="flex flex-col gap-5">
          <FaPrint size={25} />
          <p>print</p>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <GiLaserBlast size={25} />
          <p>gravura</p>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <MdDashboardCustomize size={25} />
          <p>personalizari</p>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
      </div>
      <MyCarousel />
      <Button text={"Solicită oferta"} />
    </section>
  );
};

export default Acasa;
