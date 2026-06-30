import React from 'react';
import { AlertOctagon, AlertTriangle, TrendingDown, ShieldCheck, Info } from 'lucide-react';
import type { Severity } from '@/lib/vulnerabilityData';

export default function SeverityBadge({ severity }: { severity: Severity }) {
  const config = {
    Critical: { icon: AlertOctagon, color: 'text-[#ff4757]', bg: 'bg-[#ff4757]/10', border: 'border-[#ff4757]/20' },
    High: { icon: AlertTriangle, color: 'text-[#ff6b35]', bg: 'bg-[#ff6b35]/10', border: 'border-[#ff6b35]/20' },
    Medium: { icon: TrendingDown, color: 'text-[#ffd32a]', bg: 'bg-[#ffd32a]/10', border: 'border-[#ffd32a]/20' },
    Low: { icon: ShieldCheck, color: 'text-[#00d4aa]', bg: 'bg-[#00d4aa]/10', border: 'border-[#00d4aa]/20' },
    Informational: { icon: Info, color: 'text-[#58a6ff]', bg: 'bg-[#58a6ff]/10', border: 'border-[#58a6ff]/20' },
  }[severity];

  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border ${config.bg} ${config.color} ${config.border}`}>
      <Icon size={12} />
      {severity}
    </span>
  );
}