export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-4">{title}</h1>
        <p className="text-gray-600">This page is under construction.</p>
      </div>
    </div>
  );
}
