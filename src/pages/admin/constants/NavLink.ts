import { icons } from "../../../components/common/icon";

type TNavLink = {
  label: string
  path: string
  icon: keyof typeof icons
}
export const NavLinks: TNavLink[] = [
  { label: 'posts', path: "/admin", icon: 'post' }
];
