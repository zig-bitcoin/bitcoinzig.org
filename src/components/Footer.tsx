import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Zig Bitcoin. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/zig-bitcoin"
              className="hover:text-yellow-400"
            >
              GitHub
            </Link>
            <Link href="https://ziglang.org/" className="hover:text-yellow-400">
              Zig Language
            </Link>
            <Link href="https://bitcoin.org/" className="hover:text-yellow-400">
              Bitcoin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
