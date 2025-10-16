// src/app/500.tsx
export default function ServerError() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-5xl font-bold">500</h1>
      <p className="mt-4 text-lg">Something went wrong on our end.</p>
    </div>
  )
}