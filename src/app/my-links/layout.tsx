export default function MyLinksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="lg:flex justify-between mt-4 lg:mt-10">
      {children}
    </section>
  );
}
