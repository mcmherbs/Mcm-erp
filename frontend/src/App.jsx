import { useState } from "react";

const translations = {
  ar: {
    direction: "rtl",
    dashboard: "لوحة التحكم",
    sales: "المبيعات",
    inventory: "المخزون",
    accounting: "المحاسبة",
    crm: "إدارة العملاء",
    hr: "الموارد البشرية",
    purchasing: "المشتريات",
    reports: "التقارير",
    team: "إدارة الفريق",
    settings: "الإعدادات",
    welcome: "مرحباً بك في",
    subtitle: "إليك ملخص أعمال شركتك اليوم",
    revenue: "إجمالي الإيرادات",
    orders: "الطلبات",
    customers: "العملاء",
    profit: "صافي الأرباح",
    overview: "نظرة عامة على الأداء",
    week: "هذا الأسبوع",
    transactions: "أحدث المعاملات",
    viewAll: "عرض الكل",
    activity: "النشاط الأخير",
    status: "الحالة",
    amount: "المبلغ",
    customer: "العميل",
    date: "التاريخ",
    paid: "مدفوع",
    pending: "معلق",
    search: "ابحث عن أي شيء...",
    quickActions: "الوصول السريع",
    newSale: "فاتورة مبيعات",
    addProduct: "إضافة منتج",
    addCustomer: "إضافة عميل",
    newReport: "إنشاء تقرير",
    system: "نظام إدارة الأعمال المتكامل",
    company: "شركتي",
    online: "النظام يعمل",
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"]
  },
  en: {
    direction: "ltr",
    dashboard: "Dashboard",
    sales: "Sales",
    inventory: "Inventory",
    accounting: "Accounting",
    crm: "Customers",
    hr: "Human Resources",
    purchasing: "Purchasing",
    reports: "Reports",
    team: "Team Management",
    settings: "Settings",
    welcome: "Welcome to",
    subtitle: "Here is your business overview for today",
    revenue: "Total Revenue",
    orders: "Orders",
    customers: "Customers",
    profit: "Net Profit",
    overview: "Performance Overview",
    week: "This week",
    transactions: "Recent Transactions",
    viewAll: "View all",
    activity: "Recent Activity",
    status: "Status",
    amount: "Amount",
    customer: "Customer",
    date: "Date",
    paid: "Paid",
    pending: "Pending",
    search: "Search anything...",
    quickActions: "Quick Access",
    newSale: "New Sale",
    addProduct: "Add Product",
    addCustomer: "Add Customer",
    newReport: "Create Report",
    system: "Complete Business Management System",
    company: "My Company",
    online: "System Online",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  },
  so: {
    direction: "ltr",
    dashboard: "Bogga Hore",
    sales: "Iibka",
    inventory: "Kaydka",
    accounting: "Xisaabaadka",
    crm: "Macaamiisha",
    hr: "Shaqaalaha",
    purchasing: "Iibsiga",
    reports: "Warbixinnada",
    team: "Maamulka Kooxda",
    settings: "Dejinta",
    welcome: "Ku soo dhowow",
    subtitle: "Halkan ka eeg hawlaha shirkaddaada",
    revenue: "Dakhliga Guud",
    orders: "Dalabyada",
    customers: "Macaamiisha",
    profit: "Faa'iidada",
    overview: "Guudmarka Waxqabadka",
    week: "Toddobaadkan",
    transactions: "Macaamiladii u dambeeyay",
    viewAll: "Dhammaan eeg",
    activity: "Hawlaha u dambeeyay",
    status: "Xaaladda",
    amount: "Lacagta",
    customer: "Macmiilka",
    date: "Taariikhda",
    paid: "La bixiyay",
    pending: "Sugaya",
    search: "Raadi...",
    quickActions: "Adeegyada Degdegga ah",
    newSale: "Iib Cusub",
    addProduct: "Alaab Ku Dar",
    addCustomer: "Macmiil Ku Dar",
    newReport: "Warbixin Samee",
    system: "Nidaamka Maamulka Ganacsiga",
    company: "Shirkaddayda",
    online: "Nidaamku Wuu Shaqaynayaa",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  },
  sw: {
    direction: "ltr",
    dashboard: "Dashibodi",
    sales: "Mauzo",
    inventory: "Ghala",
    accounting: "Uhasibu",
    crm: "Wateja",
    hr: "Rasilimali Watu",
    purchasing: "Ununuzi",
    reports: "Ripoti",
    team: "Usimamizi wa Timu",
    settings: "Mipangilio",
    welcome: "Karibu kwenye",
    subtitle: "Huu hapa muhtasari wa biashara yako",
    revenue: "Mapato Jumla",
    orders: "Oda",
    customers: "Wateja",
    profit: "Faida Halisi",
    overview: "Muhtasari wa Utendaji",
    week: "Wiki hii",
    transactions: "Miamala ya Hivi Karibuni",
    viewAll: "Ona zote",
    activity: "Shughuli za Hivi Karibuni",
    status: "Hali",
    amount: "Kiasi",
    customer: "Mteja",
    date: "Tarehe",
    paid: "Imelipwa",
    pending: "Inasubiri",
    search: "Tafuta...",
    quickActions: "Huduma za Haraka",
    newSale: "Uuzaji Mpya",
    addProduct: "Ongeza Bidhaa",
    addCustomer: "Ongeza Mteja",
    newReport: "Tengeneza Ripoti",
    system: "Mfumo Kamili wa Usimamizi wa Biashara",
    company: "Kampuni Yangu",
    online: "Mfumo Unafanya Kazi",
    months: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun"]
  }
};

const menuItems = [
  ["dashboard", "▦"],
  ["sales", "↗"],
  ["inventory", "▤"],
  ["accounting", "＄"],
  ["crm", "♙"],
  ["hr", "♧"],
  ["purchasing", "🛒"],
  ["reports", "▥"],
  ["team", "♧"],
  ["settings", "⚙"]
];

const stats = [
  { key: "revenue", value: "$48,250", change: "+12.8%", icon: "↗" },
  { key: "orders", value: "1,284", change: "+8.2%", icon: "▣" },
  { key: "customers", value: "856", change: "+5.4%", icon: "♙" },
  { key: "profit", value: "$16,840", change: "+14.6%", icon: "◆" }
];

const transactions = [
  { name: "Ahmed Hassan", id: "#INV-1024", date: "09 Nov 2026", amount: "$1,250", status: "paid" },
  { name: "Mohamed Ali", id: "#INV-1023", date: "09 Nov 2026", amount: "$840", status: "pending" },
  { name: "Fatima Omar", id: "#INV-1022", date: "08 Nov 2026", amount: "$2,100", status: "paid" },
  { name: "Abdi Noor", id: "#INV-1021", date: "08 Nov 2026", amount: "$560", status: "paid" }
];

function App() {
  const [language, setLanguage] = useState("ar");
  const [active, setActive] = useState("dashboard");
  const [notice, setNotice] = useState("");

  const t = translations[language];

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2500);
  };

  return (
    <div className="erp" dir={t.direction}>
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: Arial, Tahoma, sans-serif;
          background: #f3f6f4;
          color: #1d3027;
        }
        button { font-family: inherit; cursor: pointer; }
        .erp { min-height: 100vh; display: flex; background: #f3f6f4; }
        .sidebar {
          width: 255px;
          background: #103b2c;
          color: white;
          min-height: 100vh;
          padding: 25px 17px;
          flex-shrink: 0;
        }
        .brand { display:flex; align-items:center; gap:12px; padding: 5px 8px 30px; }
        .brand-logo {
          width: 45px; height:45px; border-radius:13px;
          display:flex; align-items:center; justify-content:center;
          background:#fff; color:#14533a; font-size:23px; font-weight:bold;
        }
        .brand h2 { margin:0; font-size:21px; letter-spacing:.5px; }
        .brand small { color:#b9d1c4; display:block; margin-top:5px; font-size:10px; }
        .menu-title { color:#9fbdad; font-size:11px; padding:10px 12px; }
        .menu { display:flex; flex-direction:column; gap:6px; }
        .menu button {
          border:0; color:#dce9e1; background:transparent;
          padding:13px 14px; border-radius:9px; text-align:start;
          display:flex; align-items:center; gap:13px; font-size:14px;
          transition:.2s;
        }
        .menu button:hover, .menu button.selected { background:#236044; color:white; }
        .menu button.selected { box-shadow:inset 3px 0 #a7d6a9; }
        .menu-icon { width:22px; text-align:center; font-size:18px; }
        .sidebar-bottom { margin-top:35px; padding:16px 12px; border-top:1px solid #426454; color:#b9d1c4; font-size:11px; line-height:1.8; }
        .main { flex:1; min-width:0; padding:25px 30px; }
        .topbar { display:flex; justify-content:space-between; align-items:center; gap:15px; margin-bottom:28px; }
        .search {
          background:white; border:1px solid #e5ebe7; padding:12px 16px;
          border-radius:10px; width:min(340px, 45%); color:#607268;
        }
        .top-actions { display:flex; align-items:center; gap:12px; }
        .lang-select { border:1px solid #dce5df; background:white; border-radius:9px; padding:10px; color:#254c39; }
        .icon-btn { border:1px solid #e4eae6; background:white; border-radius:10px; padding:10px 13px; color:#244c38; font-size:17px; }
        .profile { display:flex; align-items:center; gap:9px; }
        .avatar { background:#dceadf; color:#174c32; width:38px; height:38px; border-radius:50%; display:grid; place-items:center; font-weight:bold; }
        .profile small { display:block; color:#819087; font-size:10px; margin-top:4px; }
        .welcome { display:flex; justify-content:space-between; align-items:center; gap:15px; margin-bottom:25px; }
        .welcome h1 { font-size:25px; margin:0 0 8px; color:#173c2c; }
        .welcome p { margin:0; color:#819087; font-size:13px; }
        .online { background:#e2f3e8; color:#287344; padding:9px 13px; border-radius:20px; font-size:11px; white-space:nowrap; }
        .stats { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:17px; margin-bottom:22px; }
        .card { background:white; border:1px solid #e8eeea; border-radius:13px; padding:20px; box-shadow:0 3px 12px #183b2910; }
        .stat-top { display:flex; justify-content:space-between; align-items:center; color:#718078; font-size:12px; }
        .stat-icon { width:38px; height:38px; border-radius:11px; display:grid; place-items:center; background:#e9f4ec; color:#277346; font-size:20px; }
        .stat-value { font-size:25px; font-weight:700; color:#173c2c; margin:16px 0 8px; }
        .stat-change { color:#279452; font-size:11px; }
        .content-grid { display:grid; grid-template-columns:1.6fr 1fr; gap:18px; margin-bottom:20px; }
        .card-heading { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom:22px; }
        .card-heading h3 { margin:0; font-size:15px; color:#1b3d2e; }
        .card-heading select { border:1px solid #e3eae5; padding:8px; border-radius:7px; background:#fff; color:#68796f; font-size:11px; }
        .chart { height:190px; display:flex; align-items:end; justify-content:space-around; gap:12px; padding:12px 5px 0; border-bottom:1px solid #e8eeea; }
        .bar-group { height:100%; flex:1; display:flex; flex-direction:column; justify-content:end; align-items:center; gap:8px; }
        .bar { width:min(35px,70%); background:#b9d9c2; border-radius:7px 7px 2px 2px; min-height:12px; }
        .bar.active { background:#246341; }
        .bar-label { font-size:10px; color:#89968f; }
        .quick-actions { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .quick-actions button { border:1px solid #e7eee9; background:#fbfdfb; border-radius:10px; padding:16px 10px; color:#27523b; font-size:12px; text-align:start; }
        .quick-actions button:hover { background:#eaf4ed; }
        .quick-actions span { display:block; font-size:21px; margin-bottom:9px; }
        .table-wrap { overflow-x:auto; }
        table { width:100%; border-collapse:collapse; min-width:510px; }
        th { color:#89958e; font-size:11px; font-weight:normal; text-align:start; padding:12px 10px; border-bottom:1px solid #edf1ee; }
        td { padding:15px 10px; border-bottom:1px solid #f0f3f1; color:#40554a; font-size:12px; }
        .customer-name { font-weight:bold; color:#214331; }
        .customer-id { display:block; color:#9aa69f; font-size:10px; margin-top:5px; }
        .badge { padding:6px 10px; border-radius:20px; font-size:10px; }
        .badge.paid { background:#e5f5e9; color:#267344; }
        .badge.pending { background:#fff4df; color:#a16b15; }
        .activity-list { display:flex; flex-direction:column; gap:18px; }
        .activity-item { display:flex; align-items:center; gap:12px; font-size:12px; color:#51655a; }
        .activity-dot { width:9px; height:9px; background:#348b58; border-radius:50%; flex-shrink:0; }
        .activity-item small { display:block; color:#99a49d; margin-top:5px; font-size:10px; }
        .notice { position:fixed; bottom:22px; inset-inline-end:22px; background:#174b34; color:white; padding:14px 20px; border-radius:10px; box-shadow:0 8px 30px #0002; z-index:10; }
        @media(max-width:1050px) {
          .sidebar { width:210px; }
          .main { padding:22px 18px; }
          .stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
        }
        @media(max-width:720px) {
          .erp { display:block; }
          .sidebar { width:100%; min-height:auto; padding:13px; }
          .brand { padding:5px 8px 13px; }
          .menu { display:grid; grid-template-columns:repeat(2,1fr); }
          .menu-title, .sidebar-bottom { display:none; }
          .menu button { padding:10px; font-size:12px; }
          .main { padding:18px 13px; }
          .topbar { align-items:stretch; flex-direction:column; }
          .search { width:100%; }
          .top-actions { justify-content:space-between; }
          .profile { display:none; }
          .welcome h1 { font-size:20px; }
          .stats { gap:10px; }
          .card { padding:14px; }
          .stat-value { font-size:20px; }
          .content-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">M</div>
          <div>
            <h2>MCM ERP</h2>
            <small>{t.system}</small>
          </div>
        </div>

        <div className="menu-title">{t.company}</div>
        <nav className="menu">
          {menuItems.map(([key, icon]) => (
            <button
              key={key}
              className={active === key ? "selected" : ""}
              onClick={() => {
                setActive(key);
                if (key !== "dashboard") showNotice(t[key] + " — قريباً");
              }}
            >
              <span className="menu-icon">{icon}</span>
              {t[key]}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div>● {t.online}</div>
          <div>MCM ERP © 2026</div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <input className="search" placeholder={t.search} />
          <div className="top-actions">
            <select
              className="lang-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Language"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
              <option value="so">Soomaali</option>
              <option value="sw">Kiswahili</option>
            </select>
            <button className="icon-btn" onClick={() => showNotice("Notifications")}>♧</button>
            <div className="profile">
              <div className="avatar">M</div>
              <div>
                <strong style={{fontSize:12}}>MCM Admin</strong>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <h1>{t.welcome} MCM ERP 👋</h1>
            <p>{t.subtitle}</p>
          </div>
          <span className="online">● {t.online}</span>
        </section>

        <section className="stats">
          {stats.map((item) => (
            <div className="card" key={item.key}>
              <div className="stat-top">
                <span>{t[item.key]}</span>
                <span className="stat-icon">{item.icon}</span>
              </div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-change">↑ {item.change} <span style={{color:"#96a49a"}}> {t.week}</span></div>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="card">
            <div className="card-heading">
              <h3>{t.overview}</h3>
              <select aria-label="Period">
                <option>{t.week}</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="chart">
              {[42,65,52,83,61,94].map((height, index) => (
                <div className="bar-group" key={index}>
                  <div
                    className={"bar " + (index === 5 ? "active" : "")}
                    style={{height: height + "%"}}
                  />
                  <span className="bar-label">{t.months[index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h3>{t.quickActions}</h3>
            </div>
            <div className="quick-actions">
              <button onClick={() => showNotice(t.newSale + " — قريباً")}>
                <span>＋</span>{t.newSale}
              </button>
              <button onClick={() => showNotice(t.addProduct + " — قريباً")}>
                <span>▣</span>{t.addProduct}
              </button>
              <button onClick={() => showNotice(t.addCustomer + " — قريباً")}>
                <span>♙</span>{t.addCustomer}
              </button>
              <button onClick={() => showNotice(t.newReport + " — قريباً")}>
                <span>▥</span>{t.newReport}
              </button>
            </div>
          </div>
        </section>

        <section className="card" style={{marginBottom:20}}>
          <div className="card-heading">
            <h3>{t.transactions}</h3>
            <button
              onClick={() => showNotice(t.viewAll + " — قريباً")}
              style={{border:0,background:"transparent",color:"#267344",fontSize:12}}
            >
              {t.viewAll} ←
            </button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{t.customer}</th>
                  <th>{t.date}</th>
                  <th>{t.amount}</th>
                  <th>{t.status}</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <span className="customer-name">{row.name}</span>
                      <span className="customer-id">{row.id}</span>
                    </td>
                    <td>{row.date}</td>
                    <td><strong>{row.amount}</strong></td>
                    <td>
                      <span className={"badge " + row.status}>
                        {t[row.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card">
          <div className="card-heading">
            <h3>{t.activity}</h3>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-dot" />
              <div>تم تسجيل طلب مبيعات جديد <small>منذ 15 دقيقة</small></div>
            </div>
            <div className="activity-item">
              <span className="activity-dot" />
              <div>تم تحديث بيانات أحد العملاء <small>منذ ساعة</small></div>
            </div>
            <div className="activity-item">
              <span className="activity-dot" />
              <div>تم إصدار تقرير مالي <small>اليوم</small></div>
            </div>
          </div>
        </section>
      </main>

      {notice && <div className="notice">{notice}</div>}
    </div>
  );
}

export default App;