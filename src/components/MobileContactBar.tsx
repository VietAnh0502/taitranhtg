import { MessageIcon, PhoneIcon } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export function MobileContactBar() {
  return (
    <div className="mobile-contact" aria-label="Liên hệ nhanh">
      {siteConfig.assistants.map((a) => (
        <a key={a.zalo} href={a.zalo} target="_blank" rel="noreferrer"><MessageIcon /> {a.name}</a>
      ))}
    </div>
  );
}
