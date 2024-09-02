export default function WhyZig() {
  const reasons = [
    "Idiomatic by default, perfect for open-source collaboration",
    "Enhances ecosystem diversity and accessibility",
    "Excellent educational resource for Bitcoin development",
    "Precise communication of intent",
    "Focus on code readability and maintainability",
    "Compile-time safety with runtime performance",
  ];

  return (
    <section id="why-zig" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Zig for Bitcoin?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <p className="text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
