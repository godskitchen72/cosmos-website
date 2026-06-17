import Image from 'next/image';

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image src="/images/cosmos-logo.png" alt="Cosmos Medical Technologies logo" width={compact ? 162 : 210} height={70} className="h-auto w-auto" priority />
    </div>
  );
}
