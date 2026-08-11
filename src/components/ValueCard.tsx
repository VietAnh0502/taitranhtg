import type { ReactNode } from "react";

type Props = {
  index?: string;
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  dark?: boolean;
};

export function ValueCard({ index, icon, title, children, dark = false }: Props) {
  return (
    <article className={`value-card ${dark ? "value-card--dark" : ""}`}>
      <div className="value-card__top">
        {icon ? <span className="value-card__icon">{icon}</span> : null}
        {index ? <span className="value-card__index">{index}</span> : null}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
