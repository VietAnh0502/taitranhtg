import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueCard } from "@/components/ValueCard";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { SocialLinks } from "@/components/SocialLinks";
import { InvestmentMethod } from "@/components/InvestmentMethod";
import {
  ArrowIcon,
  BalanceIcon,
  CalmIcon,
  CompassIcon,
  DisciplineIcon,
  EyeIcon,
  PathIcon,
  PlayIcon,
  ShieldIcon,
} from "@/components/Icons";
import { siteConfig } from "@/config/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.tagline,
  image: siteConfig.images.hero,
  telephone: "+84348634111",
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.youtube,
    siteConfig.social.tiktok,
    siteConfig.social.zalo,
  ],
  worksFor: {
    "@type": "Organization",
    name: "HTG Investments",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="trang-chu">
          <div className="hero__grain" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="hero__kicker">Nhà sáng lập HTG Investments</p>
              <h1><span>TÀI</span> TRẦN</h1>
              <p className="hero__tagline">{siteConfig.tagline}</p>
              <p className="hero__intro">
                Tôi không chỉ mang đến những góc nhìn về thị trường. Tôi đồng hành để các bạn xây dựng tư duy,
                sự chủ động và bản lĩnh đưa ra những quyết định đầu tư có trách nhiệm.
              </p>
              <div className="hero__actions">
                <a className="button button--gold" href="#cau-chuyen">Câu chuyện của tôi <ArrowIcon /></a>
                <a className="button button--line" href="#lien-he">Kết nối với Tài Trần</a>
              </div>
            </div>
            <div className="hero__portrait">
              <div className="hero__halo" aria-hidden="true" />
              <Image
                src={siteConfig.images.hero}
                alt="Chân dung Tài Trần trong bộ vest xám"
                fill
                priority
                sizes="(max-width: 800px) 92vw, 48vw"
              />
              
            </div>
          </div>
          <a className="hero__scroll" href="#tuyen-ngon"><span>Cuộn để khám phá</span><i aria-hidden="true" /></a>
        </section>

        <section className="manifesto" id="tuyen-ngon">
          <div className="container manifesto__inner">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Luôn săn tìm những “lỗ hổng chết người” trong định giá của đám đông, sai lầm đó là sự bất đối xứng
              giữa giá cả và giá trị cùng tư duy ngược dòng.
            </blockquote>
            <div className="signature"><span /> Tài Trần</div>
          </div>
        </section>

        <InvestmentMethod />

        <section className="story section" id="cau-chuyen">
          <div className="container story__grid">
            <div className="story__visual reveal">
              <Image src={siteConfig.images.story} alt="Tài Trần trong không gian làm việc" fill sizes="(max-width: 800px) 100vw, 50vw" />
              <div className="story__badge"><strong>08</strong><span>năm thực chiến thị trường</span></div>
            </div>
            <div className="story__content">
              <SectionHeading eyebrow="Câu chuyện của tôi" title="Vì sao tôi lựa chọn con đường này?" />
              <p>
                Tôi đã chứng kiến nhiều người rất giỏi làm ra tiền nhưng đánh mất thành quả trên thị trường vì thiếu
                kiến thức, kế hoạch và khả năng quản trị cảm xúc.
              </p>
              <p>
                Điều khiến tôi trăn trở không chỉ là những khoản thua lỗ, mà là cảm giác bất lực của nhà đầu tư khi
                không biết mình đã sai ở đâu và phải làm gì tiếp theo. Vì vậy, tôi lựa chọn trở thành một người đồng
                hành có trách nhiệm, giúp các bạn hiểu rõ hơn mỗi quyết định thay vì phụ thuộc vào những lời khuyến nghị ngắn hạn.
              </p>
              <blockquote>
                “Điều đau đớn nhất không phải là một khoản thua lỗ. Đó là cảm giác không biết mình đã sai ở đâu và phải làm gì tiếp theo.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mission section section--dark" id="su-menh">
          <div className="container">
            <SectionHeading
              eyebrow="Sứ mệnh tôi theo đuổi"
              title="Làm chủ kiến thức. Làm chủ cảm xúc. Làm chủ tài sản."
              intro="Giúp nhà đầu tư Việt từng bước làm chủ kiến thức, cảm xúc và tài sản; từ đó xây dựng một tương lai tài chính chủ động, an tâm và bền vững hơn."
              light
            />
            <div className="mission__grid">
              <ValueCard index="01" icon={<ShieldIcon />} dark title="Bảo vệ thành quả">
                Đặt quản trị rủi ro trước sự hào hứng nhất thời, để mỗi quyết định tôn trọng công sức lao động đã tạo nên nguồn vốn.
              </ValueCard>
              <ValueCard index="02" icon={<CompassIcon />} dark title="Quyết định có căn cứ">
                Biến dữ liệu và bối cảnh thị trường thành một quy trình rõ ràng, thay vì hành động theo tin đồn hay cảm xúc.
              </ValueCard>
              <ValueCard index="03" icon={<BalanceIcon />} dark title="Đầu tư có trách nhiệm">
                Lan tỏa một văn hóa đầu tư dài hạn, nơi mỗi người hiểu mục tiêu, giới hạn và trách nhiệm với tài sản của mình.
              </ValueCard>
            </div>
          </div>
        </section>

        <section className="character section" id="con-nguoi">
          <div className="container">
            

            <div className="profile-panel">
              <div className="profile-panel__image">
                <Image src={siteConfig.images.profile} alt="Chân dung Tài Trần" fill sizes="(max-width: 900px) 100vw, 38vw" />
                <div className="profile-panel__monogram">TT</div>
              </div>
              <div className="profile-panel__content">
                <p className="eyebrow">Hồ sơ cá nhân</p>
                <h3>Một hành trình được xây trên nền tảng phân tích và trải nghiệm thực tế.</h3>
                <dl>
                  {siteConfig.profile.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="achievements section" id="thanh-tuu">
          <div className="container">
            <SectionHeading
              eyebrow="Dấu ấn nghề nghiệp"
              title="Những thành tựu được ghi nhận qua từng chặng đường"
              intro="Mỗi cột mốc là kết quả của quá trình làm việc nghiêm túc, bền bỉ và tinh thần trách nhiệm với khách hàng, đội ngũ và nghề nghiệp."
            />
            <div className="achievements__grid">
              {siteConfig.achievements.map((achievement) => (
                <article
                  className={`achievement-card${"featured" in achievement && achievement.featured ? " achievement-card--featured" : ""}`}
                  key={achievement.title}
                >
                  <div className="achievement-card__image">
                    <Image
                      src={achievement.image}
                      alt={achievement.alt}
                      fill
                      sizes={"featured" in achievement && achievement.featured ? "(max-width: 820px) 100vw, 1240px" : "(max-width: 820px) 100vw, 33vw"}
                    />
                  </div>
                  <div className="achievement-card__content">
                    <span>{achievement.year}</span>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        

        <section className="htg section section--dark" id="htg">
          <div className="container htg__grid">
            <div className="htg__content">
              <SectionHeading eyebrow="HTG Investments" title="Từ một sứ mệnh cá nhân đến một cộng đồng đầu tư" light />
              <p>
                HTG Investments được xây dựng với mong muốn hình thành một cộng đồng nhà đầu tư có kiến thức,
                có nguyên tắc và có khả năng tự chịu trách nhiệm với tài sản của chính mình.
              </p>
            </div>
            <div className="htg__orbit" aria-label="Bốn nhánh hoạt động của HTG Investments">
              <div className="htg__center"><strong>HTG</strong><span>Investments</span></div>
              <div className="htg__branch branch--1"><span>01</span>Cộng đồng nhà đầu tư</div>
              <div className="htg__branch branch--2"><span>02</span>Bản tin & góc nhìn thị trường</div>
              <div className="htg__branch branch--3"><span>03</span>Nội dung đào tạo</div>
              <div className="htg__branch branch--4"><span>04</span>Hoạt động đồng hành</div>
            </div>
          </div>
        </section>

        <section className="perspectives section" id="goc-nhin">
          <div className="container">
            <SectionHeading
              eyebrow="Góc nhìn & dấu ấn"
              title="Một hành trình được kể bằng những khoảnh khắc thật"
              intro="Từ những giờ nghiên cứu thầm lặng đến không gian kết nối cộng đồng — mỗi dấu ấn là một phần của cam kết đồng hành dài hạn."
            />
            <div className="perspectives__grid">
              <a className="media-card media-card--feature" href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                <Image src={siteConfig.images.profile} alt="Tài Trần nhìn thẳng vào camera" fill sizes="(max-width: 800px) 100vw, 58vw" />
                <div className="media-card__overlay" />
                <div className="media-card__content"><PlayIcon /><span>Video giới thiệu</span><h3>Gặp Tài Trần — người đồng hành cùng nhà đầu tư</h3></div>
              </a>
              <article className="media-card media-card--quote">
                <span>Góc nhìn</span>
                <h3>Đầu tư bền vững bắt đầu từ khả năng tự đưa ra quyết định.</h3>
                <p>Tri thức không loại bỏ mọi biến động, nhưng giúp chúng ta biết mình đang chấp nhận rủi ro nào và vì điều gì.</p>
              </article>
              <article className="media-card media-card--image">
                <Image src={siteConfig.images.reading} alt="Tài Trần đọc sách và nghiên cứu" fill sizes="(max-width: 800px) 100vw, 35vw" />
                <div className="media-card__overlay" />
                <div className="media-card__content"><span>Phía sau thị trường</span><h3>Học hỏi là một phần của kỷ luật</h3></div>
              </article>
              <div className="media-card media-card--social">
                <span>Kênh chính thức</span>
                <h3>Theo dõi những góc nhìn mới từ Tài Trần</h3>
                <SocialLinks includeZalo={false} />
              </div>
            </div>
            <div className="perspectives__actions">
              <a className="button button--dark" href={siteConfig.social.youtube} target="_blank" rel="noreferrer">Xem góc nhìn mới nhất <ArrowIcon /></a>
              <a className="button button--line-dark" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">Theo dõi Tài Trần</a>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
      <div className="zalo-float-group">
        {siteConfig.assistants.map((a) => (
          <a key={a.zalo} className="zalo-float" href={a.zalo} target="_blank" rel="noreferrer" aria-label={`Nhắn tin cho ${a.name} qua Zalo`}>Zalo<span>{a.name}</span></a>
        ))}
      </div>
      <MobileContactBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
