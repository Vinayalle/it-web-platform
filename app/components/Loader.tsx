// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
    </div>
  );
}
