import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import feedbackWide from "../../../img/feedback/1784084908718_2644651837187836186_g3842729033795190781_1e22cd7b7696ea4ba8d0ed6d778e2801.jpg";
import feedbackPortfolio from "../../../img/feedback/feedback-11-6.jpg";
import feedback1 from "../../../img/feedback/feedback1.jpg";
import feedback2 from "../../../img/feedback/feedback2.jpg";
import feedback3 from "../../../img/feedback/feedback3.jpg";
import feedback4 from "../../../img/feedback/feedback4.jpg";
import feedback5 from "../../../img/feedback/feedback5.jpg";
import feedback6 from "../../../img/feedback/feedback6.jpg";
import warrenBuffettImage from "../../../img/warrenBuffett.jpg";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InvestmentSystem } from "@/components/InvestmentSystem";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Phương pháp đầu tư | Tài Trần HTG",
  description: "Tìm hiểu phương pháp đầu tư và những chia sẻ thực tế từ cộng đồng nhà đầu tư đồng hành cùng Tài Trần và HTG.",
};

const feedbackImages: Array<{ src: StaticImageData; alt: string }> = [
  { src: feedback1, alt: "Chia sẻ của nhà đầu tư về phương pháp phân tích của Tài Trần" },
  { src: feedback2, alt: "Phản hồi của nhà đầu tư gửi Tài Trần và đội ngũ HTG" },
  { src: feedback3, alt: "Lời cảm ơn của nhà đầu tư dành cho Tài Trần" },
  { src: feedback4, alt: "Nhận xét về năng lực phân tích cổ phiếu của Tài Trần" },
  { src: feedback5, alt: "Cuộc trò chuyện của nhà đầu tư đồng hành cùng Tài Trần" },
  { src: feedback6, alt: "Phản hồi về hoạt động tư vấn của đội ngũ Tài Trần" },
  { src: feedbackPortfolio, alt: "Phản hồi của nhà đầu tư về danh mục do đội ngũ HTG tư vấn" },
  { src: feedbackWide, alt: "Nhận xét về sự trách nhiệm của đội ngũ HTG" },
];

export default function InvestmentMethodPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero hero--method" id="trang-chu">
          <div className="hero__grain" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="hero__kicker">Di sản đầu tư hơn sáu thập kỷ</p>
              <h1><span>WARREN</span> BUFFETT</h1>
              <p className="hero__tagline">Một trong những nhà đầu tư thành công nhất lịch sử.</p>
              <p className="hero__intro">
                Trong hơn 60 năm, Berkshire Hathaway duy trì mức sinh lời kép khoảng 19,7% mỗi năm — minh chứng
                nổi bật cho sức mạnh của giá trị, kỷ luật và tầm nhìn dài hạn.
              </p>
              <div className="buffett-hero__stats" aria-label="Những con số nổi bật về Warren Buffett và Berkshire Hathaway">
                <div><strong>19,7%</strong><span>Sinh lời kép mỗi năm</span></div>
                <div><strong>1.000 USD</strong><span>Thành gần 61 triệu USD</span></div>
                <div><strong>1.200+ tỷ USD</strong><span>Tài sản Berkshire</span></div>
              </div>
              <p className="buffett-hero__legacy">
                <span>≈ 150 tỷ USD tài sản cá nhân</span>
                <span>Hơn 68 tỷ USD đã quyên góp</span>
              </p>
            </div>
            <div className="hero__portrait">
              <div className="hero__halo" aria-hidden="true" />
              <Image
                src={warrenBuffettImage}
                alt="Bìa sách Warren Buffett — Nhà đầu tư và doanh nhân khởi nghiệp"
                fill
                priority
                sizes="(max-width: 800px) 92vw, 48vw"
              />
            </div>
          </div>
          <a className="hero__scroll" href="#phuong-phap-dau-tu">
            <span>Khám phá phương pháp đầu tư</span><i aria-hidden="true" />
          </a>
        </section>

        <InvestmentSystem />

        <section className="feedback-section section" id="feedback">
          <div className="container">
            <SectionHeading
              eyebrow="Phản hồi từ cộng đồng"
              title="Những chia sẻ thật trên hành trình đồng hành"
              intro="Sự tin tưởng của nhà đầu tư là lời nhắc nhở để Tài Trần và đội ngũ HTG luôn giữ vững trách nhiệm trong từng góc nhìn và quyết định tư vấn."
            />
            <div className="feedback-gallery">
              {feedbackImages.map((feedback, index) => (
                <figure className="feedback-card" key={feedback.src.src}>
                  <Image
                    src={feedback.src}
                    alt={feedback.alt}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <figcaption>Chia sẻ {String(index + 1).padStart(2, "0")}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
