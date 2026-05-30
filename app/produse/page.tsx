import Table from "@/app/components/Table";

const page = () => {
  return (
    <section className="my-50 text-foreground flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
        Produse și Servicii
      </h1>

      <Table />
    </section>
  );
};

export default page;
