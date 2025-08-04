export default function Error() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
      <p className="text-xl font-semibold mb-4 text-text/50">Page Not Found</p>
      <blockquote className="text-2xl text-text mb-6 italic text-center max-w-xl">
        "The only real mistake is the one from which we learn nothing." <br/>
        <span className="text-text/30 text-base">– Henry Ford</span>
      </blockquote>
      <a
        href="/"
        className="px-6 py-2 rounded-lg border border-primary text-text hover:bg-primary font-bold transition"
      >
        Go Home
      </a>
    </main>
  );
}