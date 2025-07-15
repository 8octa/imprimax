import Button from "@/app/components/Button";
import { Hero } from "@/app/components/Hero";
import Link from "next/link";
import { MyCarousel } from "@/app/components/MyCarousel";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { FaPrint } from "react-icons/fa6";

import { FaVectorSquare } from "react-icons/fa";

const Acasa = () => {
  return (
    <section className="text-foreground flex flex-col justify-center items-center w-full pb-10">
      <Hero />

      <h2>Avantaje rapide:</h2>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start  gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full p-15 my-5">
        <div className="flex flex-col gap-5">
          <CiDeliveryTruck size={25} />
          <h3>livrare rapidă</h3>
          <p className="max-w-sm text-sm">
            Primești rapid, te bucuri mai repede! Ne mișcăm repede pentru tine!
            Livrăm comanda direct la ușa ta.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <MdDashboardCustomize size={25} />
          <h3>personalizare</h3>
          <p className="max-w-sm text-sm">
            Personalizare la cel mai înalt nivel Fie că e vorba de tricouri,
            căni, tablouri sau autocolante, le personalizăm exact așa cum îți
            dorești. Tu vii cu ideea, noi o transformăm în realitate!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <GrUserExpert size={25} />
          <h3>experiență tehnică</h3>
          <p className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            quisquam necessitatibus iusto facere reiciendis non!
          </p>
        </div>
      </div>

      {/* <Testimonials /> */}
      <MyCarousel />
      <h2>Tipuri de servicii:</h2>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full p-15 my-15">
        <div className="flex flex-col gap-5">
          <FaPrint size={25} />
          <h3>print</h3>
          <p className="max-w-sm text-sm">
            Servicii de print de înaltă calitate Oferim print digital și offset
            pe o gamă variată de materiale – de la pliante, cărți de vizită,
            afișe și bannere, până la autocolante și materiale promoționale.
            Culori vibrante, detalii precise și rezultate care impresionează.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <FaVectorSquare size={25} />
          <h3>tablouri</h3>
          <p className="max-w-sm text-sm">
            Transformăm fotografiile tale preferate în tablouri canvas, printuri
            pe lemn sau plexiglas, perfecte pentru decorul casei sau pentru un
            cadou special. Realizăm la comandă, în orice dimensiune, cu montaj
            opțional inclus.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <MdDashboardCustomize size={25} />
          <h3>montaj</h3>
          <p className="max-w-sm text-sm">
            Montaj profesionist, fără bătăi de cap Asigurăm montajul pentru
            toate produsele printate sau personalizate: panouri, bannere,
            tablouri, firme luminoase sau alte materiale publicitare. Echipa
            noastră lucrează rapid, curat și sigur, indiferent de locație.
          </p>
        </div>
      </div>

      <Link href={"/oferta"}>
        <Button text={"Solicită oferta"} />
      </Link>
    </section>
  );
};

export default Acasa;
