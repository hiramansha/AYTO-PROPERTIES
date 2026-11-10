import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">
          AYTO Properties
        </h1>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/properties">Properties</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="bg-slate-900 text-white text-center py-32 px-6">
        <p className="text-amber-400 mb-4">
          WELCOME TO AYTO PROPERTIES
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Find Your Dream Property
        </h2>

        <p className="text-gray-300 mb-8">
          Discover premium properties and exceptional living.
        </p>

        <a
          href="/properties"
          className="bg-amber-500 px-8 py-4 rounded-lg"
        >
          Explore Properties
        </a>
      </section>
    </main>
  )
}

function Page({ title }: { title: string }) {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page title="About AYTO Properties" />} />
        <Route path="/properties" element={<Page title="Our Properties" />} />
        <Route path="/contact" element={<Page title="Contact Us" />} />
      </Routes>
    </BrowserRouter>
  )
}
