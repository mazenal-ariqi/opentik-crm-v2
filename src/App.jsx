import { useState } from 'react'
import { Bell, ChevronLeft, ClipboardList, FileText, LayoutDashboard, Menu, Network, Search, Settings, ShieldCheck, Users, Wrench } from 'lucide-react'
import { dashboardStats, recentActivity } from './data/dashboard'
import { loadSettings } from './services/storage'

const navigation = [
  ['لوحة التحكم', LayoutDashboard], ['العملاء', Users], ['المشاريع والمواقع', ClipboardList],
  ['CCTV', ShieldCheck], ['الشبكات', Network], ['الصيانة', Wrench], ['عروض الأسعار والفواتير', FileText], ['الإعدادات', Settings]
]

export default function App() {
  const [active, setActive] = useState('لوحة التحكم')
  const [open, setOpen] = useState(false)
  const company = loadSettings().companyName
  return <div className="app-shell">
    <aside className={open ? 'sidebar open' : 'sidebar'}>
      <div className="brand"><span className="brand-mark">O</span><div><strong>OpenTik</strong><small>SMART SYSTEMS</small></div></div>
      <nav>{navigation.map(([label, Icon]) => <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => { setActive(label); setOpen(false) }}><Icon size={19}/><span>{label}</span></button>)}</nav>
      <div className="sidebar-footer">CRM v2.0 · يعمل محليًا</div>
    </aside>
    {open && <button className="backdrop" aria-label="إغلاق القائمة" onClick={() => setOpen(false)} />}
    <main>
      <header><button className="icon-button mobile-menu" onClick={() => setOpen(true)} aria-label="فتح القائمة"><Menu /></button><div className="search"><Search size={19}/><input placeholder="ابحث عن عميل أو مشروع أو جهاز أو فاتورة…" /></div><div className="header-actions"><button className="icon-button" aria-label="الإشعارات"><Bell size={20}/></button><div className="avatar">م</div></div></header>
      <section className="content">
        <div className="page-title"><div><p className="eyebrow">{company}</p><h1>{active}</h1><p className="subtitle">نظرة سريعة على عمليات اليوم</p></div><button className="primary-button">إضافة عملية <ChevronLeft size={18}/></button></div>
        {active === 'لوحة التحكم' ? <Dashboard /> : <EmptyModule title={active} />}
      </section>
    </main>
  </div>
}

function Dashboard() { return <>
  <div className="stat-grid">{dashboardStats.map(s => <article className={`stat-card ${s.tone}`} key={s.label}><p>{s.label}</p><strong>{s.value}</strong><small>{s.trend}</small></article>)}</div>
  <div className="dashboard-grid"><section className="panel chart-panel"><div className="panel-title"><h2>ملخص العمليات</h2><button>هذا الشهر</button></div><div className="chart"><i style={{height:'42%'}}/><i style={{height:'68%'}}/><i style={{height:'51%'}}/><i style={{height:'82%'}}/><i style={{height:'63%'}}/><i style={{height:'94%'}}/><i style={{height:'74%'}}/></div><div className="chart-labels"><span>سبت</span><span>أحد</span><span>إثنين</span><span>ثلاثاء</span><span>أربعاء</span><span>خميس</span><span>جمعة</span></div></section><section className="panel"><div className="panel-title"><h2>آخر العمليات</h2><button>عرض الكل</button></div><div className="activity-list">{recentActivity.map(([type, title, status]) => <div className="activity" key={title}><span className="type">{type}</span><div><strong>{title}</strong><small>{status}</small></div></div>)}</div></section></div>
</> }

function EmptyModule({ title }) { return <section className="empty-state"><div className="empty-icon"><ClipboardList size={34}/></div><h2>{title}</h2><p>هذه الوحدة جاهزة لربط البيانات والنماذج. ستُحفظ بياناتها محليًا مع قابلية نقلها لاحقًا إلى API.</p><button className="primary-button">إضافة أول سجل <ChevronLeft size={18}/></button></section> }
