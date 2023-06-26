"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  to: string;
  className?: string;
};

const AdaptiveLink = ({
  to,
  className,
  children,
}: PropsWithChildren<Props>) => {
  const pathname = usePathname();
  
  if (pathname === to) {
    return <span className={className}>{children}</span>;
  }

  return (
    <Link className={className} href={to}>
      {children}
    </Link>
  );
};

export default AdaptiveLink;
