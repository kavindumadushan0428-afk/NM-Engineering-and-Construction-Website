import { services } from "./data";

export const contactMethods = [
  "Phone call",
  "WhatsApp",
  "Online meeting",
  "In-person meeting",
] as const;
export const inquiryKinds = ["contact", "consultation", "vr"] as const;
export type InquiryKind = (typeof inquiryKinds)[number];
export interface Inquiry {
  kind: InquiryKind;
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  budget: string;
  method: string;
  date: string;
  time: string;
  consent: boolean;
  website: string;
}
export function validateInquiry(value: unknown): {
  data?: Inquiry;
  error?: string;
} {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { error: "Please complete the inquiry form." };
  const v = value as Record<string, unknown>;
  const limits: Record<string, number> = {
    name: 100,
    email: 254,
    phone: 30,
    service: 100,
    location: 150,
    message: 4000,
    budget: 100,
    method: 50,
    date: 10,
    time: 5,
    website: 200,
  };
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof v[key] !== "string" || (v[key] as string).length > limit)
      return { error: "Please check the length and format of your details." };
  }
  const d = Object.fromEntries(
    Object.keys(limits).map((key) => [key, (v[key] as string).trim()]),
  );
  if (!inquiryKinds.includes(v.kind as InquiryKind))
    return { error: "Please choose a valid inquiry type." };
  if (d.website)
    return {
      error: "We could not process this inquiry. Please contact us by phone.",
    };
  if (d.name.length < 2)
    return { error: "Please enter your name (at least two characters)." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) || /[\r\n]/.test(d.email))
    return { error: "Please enter a valid email address." };
  const phoneDigits = d.phone.replace(/\D/g, "");
  if (
    d.phone &&
    (!/^\+?[\d\s().-]+$/.test(d.phone) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15)
  )
    return { error: "Please enter a valid phone number." };
  if (
    d.service &&
    d.service !== "Not sure yet" &&
    !services.some((s) => s.title === d.service)
  )
    return { error: "Please choose a service from the list." };
  if (d.method && !contactMethods.some((method) => method === d.method))
    return { error: "Please choose a contact method from the list." };
  if (v.consent !== true)
    return { error: "Please agree to be contacted about your inquiry." };
  if (v.kind !== "vr" && d.message.length < 15)
    return {
      error: "Please add a little more detail (at least 15 characters).",
    };
  if (v.kind === "consultation" && (!d.service || !d.method || !d.phone))
    return {
      error:
        "Please select a service, a contact method and enter your phone number.",
    };
  if (d.date) {
    const today = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
    const parsed = Date.parse(d.date);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(d.date) ||
      !Number.isFinite(parsed) ||
      new Date(parsed).toISOString().slice(0, 10) !== d.date ||
      d.date < today
    )
      return { error: "Please choose today or a valid future date." };
  }
  if (d.time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(d.time))
    return { error: "Please choose a valid time." };
  return { data: { ...d, kind: v.kind, consent: true } as Inquiry };
}
export function inquiryText(d: Inquiry) {
  return [
    "N&M website — " + d.kind,
    "",
    "Name: " + d.name,
    "Email: " + d.email,
    "Phone: " + (d.phone || "Not provided"),
    "Service: " + (d.service || "To discuss"),
    "Location: " + (d.location || "To discuss"),
    "Budget: " + (d.budget || "To discuss"),
    "Preferred contact: " + (d.method || "Email"),
    "Preferred meeting: " +
      (d.date || "To agree") +
      " " +
      d.time +
      " (Sri Lanka time)",
    "",
    d.message || "Please contact me about the planned VR experience.",
    "",
    "Permission to contact: yes. Meeting times require confirmation.",
  ].join("\n");
}
