export default function TrainerCard({ name, role, dan, email, img }) {
  return (
    <a href={`mailto:${email}`} className="max-w-full md:max-w-xs">
      <div className="flex flex-col items-center p-6 rounded-2xl shadow-sm bg-white hover:bg-slate-50 cursor-pointer">
  {img ? (
    <img
      src={img}
      alt={name}
      className="w-24 h-24 object-cover rounded-lg shadow-md mb-4"
    />
  ) : (
    <div className="w-24 h-24 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
      Kein Bild
    </div>
  )}

  <div className="text-center">
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-700">{role}</p>
    <p className="text-gray-700 mb-2">{dan}</p>
    <a href={`mailto:${email}`} className="text-blue-600 underline">
      {email}
    </a>
  </div>
</div>

    </a>
  );
}
