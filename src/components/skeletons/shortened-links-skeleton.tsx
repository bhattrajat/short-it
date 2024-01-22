export function ShortenedLinksSkeleton() {
  return (
    <section className="p-4 lg:max-w-xl lg:min-w-36 mx-auto">
      <h2 className="text-2xl mb-4">Your shortened links</h2>
      {Array(5)
        .fill(0)
        .map((_, ind) => {
          return (
            <p
              key={ind}
              className="h-10 p-4 w-full mt-2 bg-gray-600 animate-pulse"
            ></p>
          );
        })}
    </section>
  );
}
