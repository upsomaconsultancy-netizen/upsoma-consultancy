import { ReactNode } from "react";
import Header from "./Header";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Header />
      </header>
      <main className="flex-1 pt-24">
        {children}
      </main>
    </div>
  );
}
