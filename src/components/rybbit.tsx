import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { env } from "~/env/client";
import { authQueryOptions } from "~/lib/auth/queries";
import "~/types/rybbit";

const RybbitAnalyticsClient = () => {
  const { data: userData } = useSuspenseQuery(authQueryOptions());

  // Handle user identification after script loads
  useEffect(() => {
    if (!userData || !env.VITE_RYBBIT_SRC) return;

    const identifyUser = () => {
      if (typeof window !== "undefined" && window.rybbit) {
        if (userData) {
          window.rybbit.identify(userData?.id ?? "");
        }
      }
    };

    // Small delay to ensure Rybbit is fully initialized
    setTimeout(identifyUser, 100);
  }, [userData]);

  if (!env.VITE_RYBBIT_SRC) return null;

  return (
    <>
      <script
        id="rybbit-analyticsensureQueryData"
        src={env.VITE_RYBBIT_SRC}
        data-site-id="3"
        data-track-errors="true"
        data-web-vitals="false"
        data-track-outbound="true"
        data-session-replay="false"
        // strategy="afterInteractive"
        onLoad={() => {
          // console.log('Rybbit script loaded');
        }}
      />
    </>
  );
};

export default RybbitAnalyticsClient;
