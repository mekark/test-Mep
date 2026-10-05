import { useSyncExternalStore } from "react";

// Matches Tailwind's `max-md` (below 768px). The mobile designs drop the
// visible labels, so the placeholders carry the hints instead.
const MOBILE_QUERY = "(max-width: 767px)";

function subscribeMobile(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function useIsMobile() {
  return useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );
}
