import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Zig Logo" width={32} height={32} />
          <span className="text-xl font-bold text-gray-800">Zig Bitcoin</span>
        </Link>
        <div className="space-x-4">
          <Link
            href="https://github.com/zig-bitcoin"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </Link>
          <Link href="#why-zig" className="text-gray-600 hover:text-gray-900">
            Why Zig?
          </Link>
        </div>
      </nav>
    </header>
  );
}
