import Table from "@/app/components/Table";

const page = () => {
  return (
    <section className="my-50 text-foreground flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
        Produse și Servicii
      </h1>

      <p className="max-w-screen-md text-center mt-10 border border-foreground/[0.04] p-5 md:p-15">
        Descoperă gama noastră variată de produse și servicii de imprimare
        personalizată, concepute pentru a aduce la viață viziunea ta creativă.
      </p>

      <Table />
    </section>
  );
};

export default page;
