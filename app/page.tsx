'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/components/Logo';
import DashboardPreview from '@/components/DashboardPreview';
import { ArrowRight, ShieldCheck, Cloud, Lock, Brain, FileText, BarChart3, DollarSign, Stethoscope, Users, ClipboardCheck, Activity, CheckCircle2 } from 'lucide-react';

const fade = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .65 } };

function SectionTitle({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return <motion.div {...fade} className="mx-auto mb-10 max-w-3xl text-center">{eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[.28em] text-cyan">{eyebrow}</p>}<h2 className="text-3xl font-bold md:text-5xl">{title}</h2>{body && <p className="mt-4 text-lg text-slate-300">{body}</p>}</motion.div>;
}

export default function Home() {
  const features = [
    ['Medical Documentation', 'SOAP notes, clinical workflows, orders, and documentation intelligence.', Stethoscope],
    ['No-Fault Automation', 'NF2, NF3, AOB, verification forms, and carrier tracking.', FileText],
    ['Smart Billing', 'Claims, payment posting, collections, and revenue cycle management.', DollarSign],
    ['AI Automation', 'AI-assisted notes, CPT guidance, ICD-10 support, and workflow acceleration.', Brain],
    ['Analytics', 'Real-time dashboards, practice visibility, and operational insights.', BarChart3],
    ['Compliance', 'Compliance-focused workflows, secure access, and cloud-ready architecture.', ShieldCheck]
  ];
  const specialties = ['Medical Doctors','Chiropractors','Physical Therapy','No-Fault Clinics','Personal Injury Practices'];
  const benefits = ['AI-Assisted Documentation','NF2 Automation','NF3 Automation','Digital Signatures','Integrated Billing','Revenue Analytics','CPT Assistance','ICD-10 Assistance','Patient Intake','Practice Management'];

  return (
    <main className="space-bg min-h-screen overflow-hidden">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex"><a>Solutions</a><a>Products</a><a>Company</a><a>Resources</a></nav>
        <div className="hidden gap-3 md:flex"><button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold shadow-glow">Request Demo</button><button className="rounded-xl border border-white/20 px-5 py-3 text-sm font-bold">Contact Sales</button></div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[.95fr_1.05fr]">
        <div className="earth" />
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.35em] text-cyan">Healthcare + Space Technology</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">Navigate Healthcare <br />With <span className="blue-text">Intelligence</span></h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-200">One Platform. Complete Control. AI-powered medical documentation, no-fault workflow, revenue cycle management, and practice automation.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row"><button className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold shadow-glow">Request Demo <ArrowRight size={20}/></button><button className="rounded-xl border border-cyan/40 bg-white/5 px-7 py-4 font-bold">Explore Platform</button></div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 text-xs font-bold uppercase tracking-wider text-slate-200">
            {[[ShieldCheck,'HIPAA-Ready'],[Lock,'Enterprise Security'],[Cloud,'Cloud Secure']].map(([Icon,label]: any)=><div key={label} className="flex items-center gap-2 border-r border-white/15 last:border-r-0"><Icon className="text-cyan" />{label}</div>)}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.1}} className="relative min-h-[500px]">
          <div className="absolute inset-0 rounded-full bg-cyan/20 blur-3xl" />
          <Image src="/images/cosmos-logo.png" alt="Cosmos C logo" width={680} height={360} className="relative mx-auto mt-14 drop-shadow-[0_0_45px_rgba(0,184,255,.75)]" />
          <div className="grid-lines absolute inset-8 -z-10 rounded-full opacity-30" />
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-14"><SectionTitle title="One Platform. Complete Control." body="Integrated solutions that work together to streamline your entire practice." />
        <div className="grid gap-5 md:grid-cols-3">{features.map(([title,body,Icon]: any)=><motion.div {...fade} key={title} className="glass rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-glow"><Icon className="mb-6 h-10 w-10 text-cyan"/><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-slate-300">{body}</p></motion.div>)}</div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Realistic workflow visibility" title="Built Around The Practice Dashboard" body="Give front desk, providers, and billing teams one intelligent command center." /><DashboardPreview /></section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16"><SectionTitle title="Built For Your Specialty" />
        <div className="grid gap-4 md:grid-cols-5">{specialties.map((s)=><motion.div {...fade} key={s} className="glass rounded-3xl p-6 text-center"><Users className="mx-auto mb-4 h-9 w-9 text-cyan"/><h3 className="font-bold">{s}</h3><p className="mt-3 text-sm text-slate-300">Designed for high-volume healthcare and injury-care workflows.</p></motion.div>)}</div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Why Cosmos" title="Intelligence Across Every Step" />
        <div className="glass rounded-3xl p-8"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{benefits.map(b=><div key={b} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-4"><CheckCircle2 className="h-5 w-5 flex-none text-cyan"/><span className="text-sm font-semibold">{b}</span></div>)}</div></div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16"><div className="glass overflow-hidden rounded-3xl p-8 text-center md:p-14"><Image src="/images/cosmos-logo.png" alt="Cosmos ecosystem" width={300} height={120} className="mx-auto mb-6"/><h2 className="text-4xl font-black md:text-6xl">Ready To Transform <span className="blue-text">Your Practice?</span></h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">Build a smarter, faster, more organized practice with Cosmos Medical Technologies.</p><div className="mt-8 flex justify-center gap-4"><button className="rounded-xl bg-blue-600 px-7 py-4 font-bold shadow-glow">Request A Demo</button><button className="rounded-xl border border-cyan/40 px-7 py-4 font-bold">Contact Sales</button></div></div></section>

      <footer className="relative z-10 border-t border-cyan/20 px-5 py-12"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]"><div><Logo compact/><p className="mt-4 max-w-sm text-slate-300">Navigate Healthcare With Intelligence. Smart Billing. Better Care.</p></div>{['Company','Solutions','Products','Resources'].map((h,i)=><div key={h}><h4 className="mb-4 font-bold text-white">{h}</h4><ul className="space-y-2 text-sm text-slate-300">{['About Us','Clinical','No-Fault','Billing','Support'].slice(0,4).map(x=><li key={x}>{x}</li>)}</ul></div>)}<div><h4 className="mb-4 font-bold">Contact</h4><p className="text-sm text-slate-300">Request Demo<br/>Contact Sales<br/>info@cosmosmedtech.com</p></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">© 2026 Cosmos Medical Technologies. All rights reserved. Privacy Policy · Terms of Service · Security</div></footer>
    </main>
  );
}
