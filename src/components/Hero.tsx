import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bitcoin Development, Powered by Zig
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Building robust, efficient, and educational Bitcoin libraries and
          tools
        </p>
        <Link
          href="https://github.com/zig-bitcoin"
          className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
        >
          Explore on GitHub
        </Link>
      </div>
    </div>
  );
}
