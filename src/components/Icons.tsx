import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function ShieldIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></svg>;
}

export function CompassIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></svg>;
}

export function BalanceIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 3v18M5 7h14M7 7l-4 7h8L7 7Zm10 0-4 7h8l-4-7ZM8 21h8" /></svg>;
}

export function EyeIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>;
}

export function PathIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 19c4-1 2-6 6-7s2-5 8-7" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="5" r="2" /></svg>;
}

export function DisciplineIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2M8 3.8 5 2M16 3.8 19 2" /></svg>;
}

export function CalmIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2M4 14c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2M6 18h12" /></svg>;
}

export function PhoneIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.2 2a15 15 0 0 1-9.8-9.8L8 7 7 3Z" /></svg>;
}

export function MessageIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.6-4.3A8.7 8.7 0 1 1 21 11.5Z" /></svg>;
}

export function PlayIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" /></svg>;
}
