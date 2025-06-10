import { Hero } from "../components/Hero";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import Button from "../components/Button";
import { Testimonials } from "../components/Testimonials";
import { DraggableCard } from "../components/DraggableCard";

const Acasa = () => {
  return (
    <section className="text-foreground text-center flex flex-col justify-center items-center w-full pb-10 ">
      <Hero />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full p-10">
        <h2>Avantaje rapide:</h2>
        <div className="flex gap-5 justify-center items-center">
          <CiDeliveryTruck size={25} />
          <p>livrare rapidă</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <MdDashboardCustomize size={25} />
          <p>personalizare</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <GrUserExpert size={25} />
          <p>experiență tehnică</p>
        </div>
      </div>

      <Testimonials />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full p-10 my-10">
        <h2>Tipuri de servicii:</h2>
        <div className="flex gap-5 justify-center items-center">
          <CiDeliveryTruck size={25} />
          <p>print</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <MdDashboardCustomize size={25} />
          <p>gravura</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <GrUserExpert size={25} />
          <p>personalizari</p>
        </div>
      </div>
      <DraggableCard />
      <Button text={"Solicită oferta"} />
    </section>
  );
};

export default Acasa;
