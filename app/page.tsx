export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <section className="max-w-4xl mx-auto">
        <p className="text-sm text-cyan-300 font-semibold">SafeNest AI</p>

        <h1 className="text-5xl font-bold mt-4">
          Smart safety dashboard for homes and dorms.
        </h1>

        <p className="text-slate-300 mt-6 text-lg">
          Track safety incidents, monitor risk patterns, and use AI to summarize
          what happened before small issues become serious problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="font-bold text-xl">Gas Alerts</h2>
            <p className="text-slate-400 mt-2">0 active incidents</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="font-bold text-xl">Water Leaks</h2>
            <p className="text-slate-400 mt-2">0 active incidents</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="font-bold text-xl">Smoke Alerts</h2>
            <p className="text-slate-400 mt-2">0 active incidents</p>
          </div>
        </div>
      </section>
    </main>
  );
}