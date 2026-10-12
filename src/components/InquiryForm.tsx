"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { services } from "@/lib/data";
import { company } from "@/lib/site";
import {
  contactMethods,
  inquiryText,
  validateInquiry,
  type InquiryKind,
} from "@/lib/inquiry";
import Arrow from "@/components/ui/Arrow";
export default function InquiryForm({
  kind = "contact",
  emailEnabled = false,
}: {
  kind?: InquiryKind;
  emailEnabled?: boolean;
}) {
  const [state, setState] = useState<
    "idle" | "sending" | "sent" | "draft" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const keyRef = useRef("");
  const title =
    kind === "consultation"
      ? "Tell us about your project."
      : kind === "vr"
        ? "Stay in the picture."
        : "Start a conversation.";
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const raw = Object.fromEntries(new FormData(e.currentTarget));
    const result = validateInquiry({
      kind,
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      message: "",
      budget: "",
      method: "",
      date: "",
      time: "",
      website: "",
      ...raw,
      consent: raw.consent === "on",
    });
    if (!result.data) {
      setState("error");
      setMessage(result.error!);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    const text = inquiryText(result.data);
    setDraft(text);
    if (!emailEnabled) {
      setState("draft");
      setMessage(
        "Your email draft is ready. Open it below, review the details and send it from your email app. Nothing has been sent yet.",
      );
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setState("sending");
    setMessage("");
    keyRef.current ||= crypto.randomUUID();
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": keyRef.current,
        },
        body: JSON.stringify(result.data),
        signal: AbortSignal.timeout(15000),
      });
      const body: { error?: string } = await res.json();
      if (!res.ok)
        throw new Error(
          body.error ||
          "We could not send your inquiry. Please try again or contact us directly.",
        );
      setState("sent");
      setMessage(
        "Your inquiry has been accepted for sending to N&M. Our team will contact you to discuss the next step. Any meeting date is a preference until confirmed.",
      );
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Please try again, or contact us directly.",
      );
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }
  return (
    <div className="form-panel">
      <h2>{title}</h2>
      <p className="form-note">
        {emailEnabled
          ? "Share a few details and our team will be in touch."
          : "Prepare a draft to review and send using your email app. An email app must be set up on your device; nothing is sent from this page."}{" "}
        Required fields are marked *.
      </p>
      <form
        onSubmit={submit}
        onChange={() => {
          keyRef.current = "";
          if (state === "draft" || state === "error") {
            setState("idle");
            setMessage("");
          }
        }}
        aria-busy={state === "sending"}
      >
        <fieldset disabled={state === "sending" || state === "sent"}>
          <legend className="sr-only">Your {kind} inquiry</legend>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Full name *</label>
              <input
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">
                Phone number{kind === "consultation" ? " *" : ""}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required={kind === "consultation"}
                maxLength={30}
                autoComplete="tel"
                placeholder="+94"
              />
            </div>
            <div className="field">
              <label htmlFor="service">
                Service{kind === "consultation" ? " *" : ""}
              </label>
              <select
                id="service"
                name="service"
                required={kind === "consultation"}
                defaultValue=""
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option>Not sure yet</option>
              </select>
            </div>
            {kind !== "vr" && (
              <div className="field wide">
                <label htmlFor="location">Project location</label>
                <input
                  id="location"
                  name="location"
                  maxLength={150}
                  placeholder="Town or area"
                />
              </div>
            )}
            {kind === "consultation" && (
              <>
                <div className="field">
                  <label htmlFor="budget">Indicative budget (LKR)</label>
                  <input
                    id="budget"
                    name="budget"
                    maxLength={100}
                    placeholder="Optional / to discuss"
                  />
                </div>
                <div className="field">
                  <label htmlFor="method">Preferred contact method *</label>
                  <select id="method" name="method" required defaultValue="">
                    <option value="">Choose a method</option>
                    {contactMethods.map((method) => (
                      <option key={method}>{method}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input id="date" name="date" type="date" />
                </div>
                <div className="field">
                  <label htmlFor="time">Preferred time (Sri Lanka)</label>
                  <input id="time" name="time" type="time" />
                </div>
              </>
            )}
            <div className="field wide">
              <label htmlFor="message">
                {kind === "vr"
                  ? "What would you like to explore?"
                  : "Tell us about your project *"}
              </label>
              <textarea
                id="message"
                name="message"
                required={kind !== "vr"}
                minLength={kind !== "vr" ? 15 : undefined}
                maxLength={4000}
                placeholder="Your ideas, requirements and any questions…"
              />
            </div>
          </div>
          <label className="consent">
            <input name="consent" type="checkbox" required />
            <span>
              I agree to N&M contacting me about this inquiry. See our{" "}
              <Link href="/privacy">privacy notice</Link>.
            </span>
          </label>
          <button className="button primary" type="submit">
            {state === "sending"
              ? "Sending your inquiry…"
              : emailEnabled
                ? "Send inquiry"
                : "Prepare email inquiry"}
          </button>
        </fieldset>
        {message && (
          <div
            ref={statusRef}
            tabIndex={-1}
            role={state === "error" ? "alert" : "status"}
            className={"form-message " + (state === "error" ? "error" : "")}
          >
            {message}
            {(state === "draft" || state === "error") && draft && (
              <div className="draft-actions">
                <a
                  className="button outline"
                  href={
                    "mailto:" +
                    company.email +
                    "?subject=" +
                    encodeURIComponent("N&M — " + kind + " inquiry") +
                    "&body=" +
                    encodeURIComponent(draft)
                  }
                >
                  Open email draft <Arrow size={14} />
                </a>
                <a className="text-link" href={company.phoneHref}>
                  Call N&M <Arrow size={14} />
                </a>
              </div>
            )}
          </div>
        )}
        <noscript>
          <p>
            Use <a href={"mailto:" + company.email}>{company.email}</a> or call{" "}
            {company.phone} to make your inquiry.
          </p>
        </noscript>
        <p className="form-note mt-5 mb-0">
          Prefer to talk?{" "}
          <a className="underline" href={company.phoneHref}>
            {company.phone}
          </a>
        </p>
      </form>
    </div>
  );
}
