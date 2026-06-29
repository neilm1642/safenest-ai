const incidents = [
  {
    room: "Kitchen",
    type: "Gas Alert",
    severity: "High",
    notes: "Gas smell reported near the stove.",
    time: "Today at 8:42 AM",
  },
  {
    room: "Basement",
    type: "Water Leak",
    severity: "Medium",
    notes: "Water detected near the laundry machine.",
    time: "Yesterday at 6:10 PM",
  },
  {
    room: "Bedroom",
    type: "Temperature Spike",
    severity: "Low",
    notes: "Room temperature rose above normal range.",
    time: "Monday at 3:25 PM",
  },
   {
    room: "Study",
    type: "Intruder",
    severity: "High",
    notes: "Unknown individual was spotted.",
    time: "Today at 9:03 PM",
  },
];

export default function Home() {
  const totalIncidents = incidents.length;

  const highSeverityIncidents = incidents.filter(
    (incident) => incident.severity === "High"
  ).length;

  const latestIncident = incidents[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <section className="max-w-5xl mx-auto">
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
            <h2 className="font-bold text-xl">Total Incidents</h2>
            <p className="text-3xl font-bold mt-3">{totalIncidents}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="font-bold text-xl">High Severity</h2>
            <p className="text-3xl font-bold mt-3">{highSeverityIncidents}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="font-bold text-xl">Latest Alert</h2>
            <p className="text-slate-300 mt-3">{latestIncident.type}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold">Recent Safety Incidents</h2>

          <div className="grid grid-cols-1 gap-4 mt-6">
            {incidents.map((incident) => (
              <div
                key={`${incident.room}-${incident.time}`}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{incident.type}</h3>
                    <p className="text-slate-400 mt-1">{incident.room}</p>
                  </div>

                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-full text-sm">
                    {incident.severity}
                  </span>
                </div>

                <p className="text-slate-300 mt-4">{incident.notes}</p>
                <p className="text-slate-500 text-sm mt-3">{incident.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}