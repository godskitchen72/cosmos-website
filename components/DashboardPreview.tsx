import { Activity, Calendar, FileText, Stethoscope, DollarSign, BarChart3 } from 'lucide-react';

const rows = [
  ['John Smith', 'Dr. Rivera', '9:30 AM', 'Needs MD Visit', 'Pending'],
  ['Maria Chen', 'Dr. Patel', '10:15 AM', 'Incomplete NF3', 'Review'],
  ['Robert King', 'Dr. Stone', '11:00 AM', 'Completed Today', 'Billing Ready'],
  ['Ava Johnson', 'Dr. Rivera', '1:45 PM', 'Needs MD Visit', 'Verified'],
];

export default function DashboardPreview() {
  return (
    <div className="glass rounded-3xl p-4 md:p-6 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[.32em] text-cyan">Cosmos Command Center</p>
          <h3 className="mt-2 text-2xl font-bold">Front Desk Dashboard</h3>
        </div>
        <div className="rounded-2xl border border-cyan/30 bg-cyan/10 p-3"><Activity className="text-cyan" /></div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[['28','Appointments',Calendar],['14','Checked In',Stethoscope],['12','NF3 Pending',FileText],['$24.7k','Billing Ready',DollarSign]].map(([n,l,Icon]: any) => (
          <div key={l} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
            <Icon className="mb-3 h-5 w-5 text-cyan" />
            <div className="text-2xl font-bold">{n}</div><div className="text-xs text-slate-300">{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-cyan/20">
        <table className="w-full text-left text-sm">
          <thead className="bg-cyan/10 text-xs uppercase tracking-wider text-cyan"><tr>{['Patient','Provider','Appointment','Status','Billing'].map(h => <th key={h} className="p-3">{h}</th>)}</tr></thead>
          <tbody>{rows.map((r,i)=><tr key={r[0]} className="border-t border-white/10 bg-white/[.025]"><td className="p-3 font-semibold">{r[0]}</td>{r.slice(1).map((c,j)=><td key={c} className="p-3 text-slate-300"><span className={j===2?'rounded-full border border-cyan/30 bg-cyan/10 px-2 py-1 text-xs text-cyan':''}>{c}</span></td>)}</tr>)}</tbody>
        </table>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {['SOAP Notes','CPT / ICD-10','Analytics'].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-center text-sm"><BarChart3 className="mx-auto mb-2 h-5 w-5 text-cyan" />{x}</div>)}
      </div>
    </div>
  );
}
