import Image from "next/image";
import HeaderBanner from "./components/HeaderBanner";

export default function Home() {
  return (
    <>
      <HeaderBanner />

      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        {/* Next.js style logo text */}
        <div className="bg-black p-8 rounded-lg shadow-lg">
          <div className="text-white font-bold text-6xl tracking-wider font-geist">
            IMPRIMAX SOLUTIONS
          </div>
        </div>
      </div>
    </>
  );
}
