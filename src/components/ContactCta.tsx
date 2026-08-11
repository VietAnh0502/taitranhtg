import { ArrowIcon, MessageIcon, PhoneIcon } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export function ContactCta() {
  return (
    <section className="contact-section" id="lien-he">
      <div className="contact-section__orb" aria-hidden="true" />
      <div className="container contact-section__inner">
        <p className="eyebrow">Kết nối cùng Tài Trần</p>
        <h2>Các bạn không cần đi một mình trên hành trình đầu tư.</h2>
        <p>
          Mỗi nhà đầu tư đều có một câu chuyện, một mục tiêu và một hành trình riêng.
          Nếu các bạn cần một người đồng hành có trách nhiệm, tôi sẵn sàng lắng nghe câu chuyện của các bạn.
        </p>
        <div className="contact-actions">
          {siteConfig.assistants.map((a) => (
            <a key={a.zalo} className="button button--gold" href={a.zalo} target="_blank" rel="noreferrer">
              <MessageIcon /> {a.name} <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
