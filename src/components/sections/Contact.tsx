
"use client";

import { useState, type FormEvent } from "react";

type ContactProps = {
  locale: string;
};

export default function Contact({ locale }: ContactProps) {
  const isFr = locale === "fr";

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const content = {
    title: isFr ? "Contact" : "Contact",
    subtitle: isFr
      ? "Vous avez un projet, une question ou une opportunité professionnelle ? Contactez-moi."
      : "Have a project, a question or a professional opportunity? Feel free to contact me.",
    name: isFr ? "Nom complet" : "Full name",
    email: isFr ? "Adresse e-mail" : "Email address",
    subject: isFr ? "Sujet" : "Subject",
    message: isFr ? "Votre message" : "Your message",
    send: isFr ? "Envoyer le message" : "Send message",
    sending: isFr ? "Envoi en cours..." : "Sending...",
    success: isFr
      ? "Votre message a bien été envoyé. Merci pour votre contact."
      : "Your message has been sent successfully. Thank you for contacting me.",
    error: isFr
      ? "Une erreur est survenue. Vous pouvez me contacter directement par e-mail."
      : "An error occurred. You can contact me directly by email.",
    required: isFr ? "Champ obligatoire" : "Required field",
    linkedin: isFr ? "Mon profil LinkedIn" : "My LinkedIn profile",
    direct: isFr ? "Me contacter directement" : "Contact me directly",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      `Portfolio - ${formData.get("subject")}`
    );
    //formData.append("from_name", "Portfolio - Rachid Abbou");
    formData.set("subject", `Portfolio - ${formData.get("subject")}`);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {isFr ? "Échangeons" : "Let's connect"}
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {content.title}
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-slate-900">
              {isFr ? "Mes coordonnées" : "My contact details"}
            </h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-500">
                  E-mail
                </p>
                <a
                  href="mailto:rachid.abbou@gmail.com"
                  className="text-lg font-medium text-slate-900 transition hover:text-blue-600"
                >
                  rachid.abbou@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-slate-500">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/rachid-abbou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 transition hover:text-blue-800"
                >
                  {content.linkedin}
                </a>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="mb-3 text-sm text-slate-600">
                  {content.direct}
                </p>
                <a
                  href="mailto:rachid.abbou@gmail.com"
                  className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  rachid.abbou@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {content.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder={content.name}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {content.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  autoComplete="email"
                  placeholder={content.email}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {content.subject}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  placeholder={content.subject}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {content.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder={content.message}
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? content.sending : content.send}
              </button>

              <div aria-live="polite" role="status">
                {status === "success" && (
                  <p className="rounded-lg bg-green-50 p-4 text-sm text-green-700">
                    {content.success}
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
                    {content.error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
