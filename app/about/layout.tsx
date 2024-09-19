export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex scroll-smooth	 scroll flex-col items-center justify-center gap-4 font-sans">
      <div className="inline-block text-center w-full">
        {children}
      </div>
    </section>
  );
}
