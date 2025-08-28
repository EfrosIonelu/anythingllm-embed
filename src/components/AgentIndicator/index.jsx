import React from "react";
import { useIsAgentSessionActive } from "@/utils/agent";

export default function AgentIndicator() {
  const isAgentActive = useIsAgentSessionActive();

  if (!isAgentActive) return null;

  return (
    <div className="allm-flex allm-items-center allm-justify-center allm-bg-orange-100 allm-border allm-border-orange-300 allm-rounded-lg allm-px-3 allm-py-2 allm-mb-2 allm-mx-4">
      <div className="allm-flex allm-items-center allm-space-x-2">
        <div className="allm-w-2 allm-h-2 allm-bg-orange-500 allm-rounded-full allm-animate-pulse"></div>
        <span className="allm-text-sm allm-text-orange-700 allm-font-medium">
          Agent session active
        </span>
      </div>
    </div>
  );
}