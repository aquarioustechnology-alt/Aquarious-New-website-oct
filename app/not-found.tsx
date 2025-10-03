export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--brand-blue)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
        <a
          href="/"
          className="inline-block bg-[var(--brand-blue)] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </main>
  )
}
