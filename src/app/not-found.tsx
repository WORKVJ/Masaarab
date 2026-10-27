import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 px-4 text-center">
      <div className="w-12 h-12 rounded-xl bg-[#0284c7] text-white flex items-center justify-center font-extrabold text-xl mb-4">
        M
      </div>
      <h1 className="text-4xl font-extrabold text-[#0a2540] mb-2">404 - Page Not Found</h1>
      <p className="text-slate-500 text-sm max-w-md mb-6">
        The industrial component or page you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#0284c7] text-white font-semibold text-sm hover:bg-[#0369a1] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
