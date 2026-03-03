import { ErrorBoundary } from "react-error-boundary"

function Fallback({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-red-50 text-red-700">
      <h1 className="text-3xl font-bold">오류가 발생했습니다 😵</h1>
      <p>{error?.message}</p>
    </div>
  )
}

export default function PokemonErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={(error, info) => {
        console.error("Error caught by ErrorBoundary:", error, info)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
