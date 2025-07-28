import table from "@/jsons/table.json";
import Link from "next/link";

const Table = () => {
  // Get the first item with a price list
  const firstItemWithPrices = table.find(item => item.id === 1 );

  return (
    <section className="my-50 text-foreground flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
        Produse și Servicii
      </h1>

      <Link className="mt-15 text-blue-500 hover:text-blue-600 underline" href="/produse">Înapoi</Link>

      <table className="border-collapse border border-foreground md:w-xl lg:w-3xl my-20">
        <thead className="text-left">
          <tr>
            <th className="border border-foreground bg-foreground/10 text-2xl p-5">
              Dimensiune
            </th>
            <th className="border border-foreground bg-foreground/10 text-2xl p-5">
              Preț (lei)
            </th>
          </tr>
        </thead>
        <tbody className="md:text-xl">
          {firstItemWithPrices && Object.entries(firstItemWithPrices.price ?? {}).map(
            ([dimension, price]) => (
              <tr key={dimension}>
                <td className="border border-foreground p-5">{dimension}</td>
                <td className="border border-foreground p-5">{price} lei</td>
              </tr>
            )
          )}
        </tbody>
      </table>

   
    </section>
  );
};

export default Table;
