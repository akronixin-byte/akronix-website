import Link from "next/link";

export default function LegalBlock() {

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">LEGAL</p>

      <ul className="space-y-2">
        <li>
          <Link href="/legal-service" className="text-sm text-white/50 hover:text-white transition-colors duration-150">
            Legal Service
          </Link>
        </li>
      </ul>

    </div>
  );
}
