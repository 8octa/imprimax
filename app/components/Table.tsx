import table from "@/jsons/table.json";
import Link from "next/link";

type TableTypes = {
  id: number;
  service: string;
  url: string;
};

const Table = () => {
  return (
    <table className="border-collapse border border-foreground md:w-xl lg:w-3xl my-20">
      <thead className="text-left">
        <tr>
          <th className="border border-foreground bg-foreground/10 text-2xl p-5">
            Servicii
          </th>
          <th className="border border-foreground bg-foreground/10 text-2xl p-5">
            Preț
          </th>
        </tr>
      </thead>
      <tbody className="md:text-xl">
        {table.map(({ id, service, url }: TableTypes) => (
          <tr key={id}>
            <td className="border border-foreground p-5">{service}</td>
            <td className="border border-foreground p-5">
              <Link href={url}>Vezi tot</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
