import { MacbookScroll } from "./ui/macbook-scroll";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export function UnderConstruction() {
  return (
    <section
      id="under-construction"
      className="relative overflow-hidden bg-background text-foreground w-full"
    >
      <MacbookScroll
        title={
          <section className="flex flex-col items-center justify-center text-center gap-10">
            <span className="text-3xl lg:text-7xl">
              Acest website este în lucru <br />
              <br /> Vizitați-ne pe paginile noastre:
            </span>
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full items-center my-10">
              <a
                className="cursor-pointer"
                href="https://www.facebook.com/profile.php?id=61577033497907"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="inline-block ml-2 text-blue-500"
                  size={100}
                />
              </a>

              <a
                href="https://www.instagram.com/imprimax_solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="inline-block ml-2 text-pink-500"
                  size={100}
                />
              </a>
              <a
                href="https://www.tiktok.com/@cosmin.ivana"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaTiktok className="inline-block ml-2" size={100} />
              </a>
            </div>
          </section>
        }
        src={`/sigla.svg`}
        showGradient={false}
      />
    </section>
  );
}
