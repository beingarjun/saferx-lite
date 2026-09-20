export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
              S
            </div>
            <p className="text-xl font-bold">SafeRx Lite</p>
          </div>

          <div className="hidden gap-6 md:flex">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="rounded-full bg-slate-900 px-4 py-2 text-white">
            Login
          </button>
        </nav>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Safer pharmacy operations
          </p>

          <h1 className="text-5xl font-black leading-tight">
            Pharmacy operations made simpler, safer, and smarter.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            SafeRx Lite helps pharmacies track prescriptions, monitor incidents,
            and organize teams through one clear operating view.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white">
              Get Started
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700">
              View Demo
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-500">Daily overview</p>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
                Live
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-sm text-slate-500">Prescriptions pending</p>
                <p className="mt-2 text-3xl font-bold text-blue-700">128</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Employees</p>
                  <p className="mt-2 text-2xl font-bold">42</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Incidents</p>
                  <p className="mt-2 text-2xl font-bold">03</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Built for pharmacy teams</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-2xl">💊</div>
            <h3 className="text-xl font-bold">Prescription tracking</h3>
            <p className="mt-2 text-slate-600">
              Manage requests with clear status updates.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-2xl">✅</div>
            <h3 className="text-xl font-bold">Incident review</h3>
            <p className="mt-2 text-slate-600">
              Track safety concerns and resolution workflow.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-2xl">👥</div>
            <h3 className="text-xl font-bold">Team coordination</h3>
            <p className="mt-2 text-slate-600">
              Keep employees and pharmacies aligned.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">A safer operating system for pharmacy workflows</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            SafeRx Lite gives teams a clearer path to manage prescriptions,
            incidents, and daily operations in one platform.
          </p>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-6xl px-6 py-10 text-slate-600">
        <div className="border-t border-slate-200 pt-6">
          SafeRx Lite
        </div>
      </footer>
    </main>
  );
}