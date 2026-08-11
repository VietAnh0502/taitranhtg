import { siteConfig, type SocialKey } from "@/config/site";

const labels: Record<SocialKey, string> = {
  zalo: "Zalo",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
};

type Props = {
  includeZalo?: boolean;
  compact?: boolean;
};

export function SocialLinks({ includeZalo = true, compact = false }: Props) {
  const entries = Object.entries(siteConfig.social) as [SocialKey, string][];
  return (
    <nav className={`social-links ${compact ? "social-links--compact" : ""}`} aria-label="Mạng xã hội Tài Trần">
      {entries.filter(([key]) => includeZalo || key !== "zalo").map(([key, href]) => (
        <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={`Theo dõi Tài Trần trên ${labels[key]}`}>
          <span>{labels[key]}</span>
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}
