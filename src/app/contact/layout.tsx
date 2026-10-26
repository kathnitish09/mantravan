import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sanctuary | Mantra Van",
  description: "Send inquiries, feedback, or collaborations to the Mantra Van team.",
  alternates: {
    canonical: "https://www.mantravan.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
