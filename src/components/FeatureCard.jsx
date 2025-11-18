export default function FeatureCard({ icon, color, title, description }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-10 border border-gray-100 hover:shadow-xl transition-all">
      <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>

      <h3 className="font-semibold text-xl mt-6 text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
    </div>
  );
}
