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
    <section className="text-foreground flex flex-col justify-center items-center w-full">
      <Hero />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b-1 border-x-1 border-foreground/[0.04] text-xl w-full p-15">
        <div className="flex flex-col gap-5">
          <FaPrint size={25} />
          <h3>Print și personalizare textile</h3>
          <p className="max-w-sm text-sm">
            Tricouri personalizate DTF și transfer termic, hanorace, sepci,
            echipamente de lucru, ecusoane, uniforme și print pentru evenimente,
            echipe și promoții.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <MdDashboardCustomize size={25} />
          <h3>Personalizare obiecte promotionale</h3>
          <p className="max-w-sm text-sm">
            Căni, sticle și termosuri, pixuri și agende, brelocuri, cadouri
            corporate - toate personalizate după dorința ta.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <FaPrint size={25} />
          <h3>Print publicitar și materiale promotionale</h3>
          <p className="max-w-sm text-sm">
            Flyere, pliante, afișe, postere, broșuri, cataloage, cărți de
            vizită, stickere și etichete autoadezive.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <FaVectorSquare size={25} />
          <h3>Publicitate vizuală outdoor și indoor</h3>
          <p className="max-w-sm text-sm">
            Bannere, roll up-uri, casete luminoase, panouri PVC, colantări cu
            grafica, decupare contur și gravare CNC.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <MdDashboardCustomize size={25} />
          <h3>Colantări și branding auto</h3>
          <p className="max-w-sm text-sm">
            Colantări auto complete sau parțiale, inscripționări autoutilitare,
            branding flota auto și stickere personalizate.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <GrUserExpert size={25} />
          <h3>Servicii de design grafic</h3>
          <p className="max-w-sm text-sm">
            Design logo, machetare materiale publicitare, identitate vizuală
            completă, adaptare fișiere pentru print și design social media.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <FaVectorSquare size={25} />
          <h3>Branding firme și evenimente</h3>
          <p className="max-w-sm text-sm">
            Branding complet pentru firme noi, standuri expoziționale, decoruri
            personalizate și materiale promotionale pentru lansări.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <CiDeliveryTruck size={25} />
          <h3>Servicii rapide Express</h3>
          <p className="max-w-sm text-sm">
            Print urgent 24-48h în funcție de comandă. Execuție rapidă pentru
            proiecte corporate și cereri urgente.
          </p>
        </div>
      </div>

      <MyCarousel />

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

      <Link href={"/oferta"}>
        <Button text={"Solicită oferta"} />
      </Link>
    </section>
  );
};

export default Acasa;
