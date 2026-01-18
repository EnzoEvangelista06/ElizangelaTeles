import "./navItem.module.css";

interface navItemProps {
  children: React.ReactNode;
  url: string;
}

export function NavItem({ children, url }: navItemProps) {
  return (
    <li>
      <a href={`#${url}`}>{children}</a>
    </li>
  );
}
