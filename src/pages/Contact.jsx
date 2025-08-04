export default function Contact() {
  return (
    <main className="px-4 flex-1 max-w-2xl mx-auto py-14">
      <h1 className="text-4xl font-bold text-text mb-4">Contact Me</h1>
      <p className="text-text mb-6">
        Interested in working together, have a question, or just want to connect?
        Fill out the form below or reach out directly at
        <a href="mailto:jaylenbradley81@gmail.com" className="text-accent font-bold ml-1">
          jaylenbradley81@gmail.com
        </a>
      </p>
      <form
        action="https://formspree.io/f/mvgqbnyg"
        method="POST"
        className="flex flex-col gap-4 mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 rounded border border-primary bg-background text-text"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded border border-primary bg-background text-text"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 rounded border border-primary bg-background text-text"
          rows={5}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg cursor-pointer border border-primary text-text hover:bg-primary font-bold transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}