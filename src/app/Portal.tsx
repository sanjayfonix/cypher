"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  const portalRoot = document.getElementById("portal-root");
  return portalRoot ? createPortal(children, portalRoot) : null;
}
