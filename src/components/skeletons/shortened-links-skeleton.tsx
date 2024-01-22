export function ShortenedLinksSkeleton() {
  return (
    <section className="p-4 lg:w-1/2 lg:min-w-36 mx-auto">
      <h2 className="text-2xl mb-4">Your shortened links</h2>
      {Array(5)
        .fill(0)
        .map((_, ind) => {
          return (
            <p
              key={ind}
              className="h-32 p-4 mb-4 bg-gray-600 animate-pulse"
            ></p>
          );
        })}
    </section>
  );
}
