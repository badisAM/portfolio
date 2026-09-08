"use client";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${email}`);
    window.location.href = `mailto:ammarbedis@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <input
        name="name"
        type="text"
        placeholder="Nom"
        required
        className="rounded-lg border border-line bg-card px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-lg border border-line bg-card px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={4}
        className="resize-y rounded-lg border border-line bg-card px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <button
        type="submit"
        className="rounded-lg bg-accent py-3 text-sm font-semibold text-[#062012] hover:opacity-90 transition-opacity"
      >
        Envoyer
      </button>
    </form>
  );
}
