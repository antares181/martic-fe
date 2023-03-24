import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useResetScroll() {
  const pathname = usePathname();

  useEffect(() => window.scroll(0, 0), [pathname]);

  return null;
}
