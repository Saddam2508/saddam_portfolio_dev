import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import { profile } from "@/data/portfolio";
import { contact } from "@/data/contact";
import { socialLinks } from "@/data/socialLinks";
import ContactForm from "./ContactForm";
import { SocialIcon } from "./SocialIcon";
import { ContactIconType } from "./contactTypes";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl" delay={180}>
        <div className="contact-shell relative overflow-hidden rounded-[2.75rem] border border-slate-200 shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
          <div className="contact-orb contact-orb-one pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full" />
          <div className="contact-orb contact-orb-two pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full" />

          <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-14">
            <div className="contact-story space-y-6">
              <div className="space-y-2">
                <p className="contact-eyebrow font-mono text-sm uppercase tracking-[0.3em]">
                  Contact
                </p>
              </div>

              <div className="space-y-5 pt-1">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    {profile.name}
                  </h3>
                  <p className="text-lg text-[var(--color-accent)] sm:text-xl">
                    {profile.designation}
                  </p>
                </div>

                <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  I build modern, responsive, and user-friendly web applications
                  using React.js, Next.js, JavaScript, and Tailwind CSS with a
                  strong focus on clean UI and smooth user experience.
                </p>

                <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                  {/* Location */}
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 20C16.14 20 19.5 16.64 19.5 12.5C19.5 8.36 16.14 5 12 5C7.86 5 4.5 8.36 4.5 12.5C4.5 16.64 7.86 20 12 20Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <path
                          d="M12 12.5C13.66 12.5 15 11.16 15 9.5C15 7.84 13.66 6.5 12 6.5C10.34 6.5 9 7.84 9 9.5C9 11.16 10.34 12.5 12 12.5Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <path
                          d="M7.6 18.45C8.27 16.27 10 14.75 12 14.75C14 14.75 15.73 16.27 16.4 18.45"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span>{contact.location}</span>
                  </p>

                  {/* Phone */}
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M8.5 5.5H6.8C5.86 5.5 5.1 6.26 5.1 7.2C5.1 13.5 10.2 18.6 16.5 18.6C17.44 18.6 18.2 17.84 18.2 16.9V15.2L14.7 14.1L12.9 15.9C10.89 14.88 8.82 12.81 7.8 10.8L9.6 9L8.5 5.5Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <Link
                      href={`tel:${contact.phoneLink}`}
                      className="hover:text-[var(--color-accent)]"
                    >
                      {contact.phone}
                    </Link>
                  </p>

                  {/* WhatsApp */}
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 4.75C8 4.75 4.75 7.88 4.75 11.75C4.75 13.22 5.22 14.58 6.03 15.7L5.25 19.25L8.92 18.43C9.92 19 10.94 19.25 12 19.25C16 19.25 19.25 16.12 19.25 12.25C19.25 8.38 16 5.25 12 5.25V4.75Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.35 8.95C9.49 8.63 9.62 8.58 9.85 8.58H10.43C10.6 8.58 10.8 8.53 10.97 8.74C11.14 8.94 11.69 9.58 11.69 9.8C11.69 10.02 11.55 10.15 11.41 10.32C11.28 10.49 11.13 10.66 11.28 10.92C11.44 11.19 11.96 12.05 12.77 12.78C13.82 13.72 14.68 14.01 15 14.15C15.25 14.25 15.44 14.23 15.59 14.06C15.79 13.84 16.05 13.49 16.27 13.16C16.42 12.92 16.61 12.89 16.84 12.98L18.18 13.56C18.41 13.66 18.57 13.72 18.62 13.81C18.68 13.91 18.68 14.35 18.52 14.67C18.35 15 17.65 15.55 17.16 15.61C16.67 15.67 16.05 15.69 14.23 14.9C12.27 14.03 10.89 11.86 10.78 11.71C10.68 11.56 9.99 10.69 9.67 9.85C9.36 9 9.12 9.49 9.35 8.95Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <Link
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-accent)]"
                    >
                      {contact.whatsapp}
                    </Link>
                  </p>

                  {/* Email */}
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M4 7.5L12 13.25L20 7.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3.5"
                          y="5.5"
                          width="17"
                          height="13"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    <Link
                      href={`mailto:${contact.email}`}
                      className="break-all hover:text-[var(--color-accent)] sm:break-normal"
                    >
                      {contact.email}
                    </Link>
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pt-4">
                  <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-500">
                    Find Me In
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="button-hover-panel find-me-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/60"
                        aria-label={link.label}
                      >
                        <SocialIcon label={link.label as ContactIconType} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-shell flex h-full flex-col rounded-[2.2rem] border p-4 sm:p-6">
              <div className="mb-5">
                <p className="contact-label font-mono text-xs uppercase tracking-[0.3em]">
                  Send A Message
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
