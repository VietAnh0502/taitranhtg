type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, intro, light = false, align = "left" }: Props) {
  return (
    <header className={`section-heading ${light ? "section-heading--light" : ""} ${align === "center" ? "section-heading--center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}
