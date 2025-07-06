import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <Head>
        <title>average.ai | Humanos + AI</title>
        <meta name="description" content="No somos una IA. Somos humanos que la implementan para ayudarte a enfocarte en lo que sí importa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center max-w-xl">
        <h1 className="text-3xl md:text-5xl font-light mb-6">
          No somos una IA.<br />
          <span className="text-[#71F14F]">Somos humanos + AI</span><br />
          que la implementan para ayudarte a enfocarte en lo que sí importa.
        </h1>

        <p className="text-gray-400 text-base md:text-lg mb-10">
          Estamos construyendo un ecosistema para automatizar tareas reales,
          con sistemas que trabajan en segundo plano.
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Tu correo"
            className="px-4 py-2 rounded bg-[#181818] text-white border border-gray-600 focus:outline-none w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-[#71F14F] text-black px-6 py-2 rounded font-semibold hover:bg-green-400 transition"
          >
            Avísenme cuando esté listo
          </button>
        </form>
      </main>

      <footer className="mt-20 text-sm text-gray-600">
        average.ai © {new Date().getFullYear()} – Humanos + AI para negocios reales
      </footer>
    </div>
  )
}