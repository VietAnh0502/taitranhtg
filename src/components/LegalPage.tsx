import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="legal-page__content">{children}</div>
          <a className="text-link" href="/">← Trở về trang chủ</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
