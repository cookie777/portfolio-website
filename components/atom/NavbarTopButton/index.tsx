import Link from "next/link";

interface Menu {
  path: string;
  menuName: string;
}

export function NavBarTopButton({ path, menuName }: Menu) {
  return (
    <Link href={`/${path}`}>
      <a className={menuName}>{menuName}</a>
    </Link>
  );
}
