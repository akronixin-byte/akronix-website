import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { 
  Plus, 
  LayoutDashboard, 
  MessageSquare, 
  CreditCard, 
  Download,
  Terminal,
  ExternalLink,
  ChevronRight,
  Clock
} from "lucide-react";

export default async function ClientPortal() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Sidebar Overlay (Glass) */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-white/5 bg-black z-20 hidden lg:block">
        <div className="p-8">
           <div className="text-xl font-bold tracking-tighter mb-12">
              Akron<span className="gradient-text-primary">ix</span>
           </div>
           
           <nav className="space-y-1">
              {[
                { label: "Dashboard", icon: LayoutDashboard, active: true },
                { label: "My Projects", icon: Terminal },
                { label: "Messages", icon: MessageSquare },
                { label: "Billing", icon: CreditCard },
              ].map((item, i) => (
                <button 
                  key={i} 
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    item.active ? "bg-fuchsia-950 text-white shadow-lg shadow-fuchsia-950/20" : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
           </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
           <div className="p-4 rounded-2xl bg-gradient-to-br from-fuchsia-950/20 to-fuchsia-950/10 border border-fuchsia-900/20">
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 mb-2">Support Plan</p>
              <p className="text-sm font-semibold mb-3">Enterprise Gold</p>
              <button className="w-full py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-white/90 transition-all">Get Help</button>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-8 md:p-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, {session.user?.name?.split(" ")[0]}</h1>
            <p className="text-white/40 text-sm">You have 2 active projects and 1 pending invoice.</p>
          </div>
          <button className="btn-primary py-3 px-6 text-sm font-bold flex items-center gap-2 w-fit">
            <Plus size={18} />
            New Project
          </button>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
           {/* Current Project Card */}
           <div className="glass-card rounded-3xl p-8 border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                 <Terminal size={120} />
              </div>
              <div className="flex items-center gap-2 mb-6">
                 <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-500">Live Project</span>
              </div>
              <h3 className="text-xl font-bold mb-2">InsightHub Analytics Dashboard</h3>
              <p className="text-white/40 text-sm mb-8 max-w-sm">Migration to Next.js 14 and integration of Supabase real-time metrics.</p>
              <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-medium text-white/60">Milestone 4 of 6</span>
                 <span className="text-xs font-bold text-cyan-700">72% Completed</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-8">
                 <div className="h-full bg-gradient-to-r from-fuchsia-950 to-fuchsia-950" style={{ width: "72%" }} />
              </div>
              <div className="flex items-center gap-4">
                <button className="flex-1 btn-secondary text-xs font-bold py-3">View Progress</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                   <ExternalLink size={18} className="text-white/60" />
                </button>
              </div>
           </div>

           {/* Quick Actions / Info */}
           <div className="grid gap-6">
              <div className="glass-card rounded-3xl p-6 border-white/5 flex items-center justify-between hover:bg-white/[0.03] transition-all cursor-pointer group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                       <Clock size={24} />
                    </div>
                    <div>
                       <p className="font-bold text-sm">Meeting Tomorrow</p>
                       <p className="text-xs text-white/40">Sprint Review @ 10:00 AM PST</p>
                    </div>
                 </div>
                 <ChevronRight size={18} className="text-white/20 group-hover:translate-x-1 transition-all" />
              </div>

              <div className="glass-card rounded-3xl p-6 border-white/5 flex items-center justify-between hover:bg-white/[0.03] transition-all cursor-pointer group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/10 flex items-center justify-center text-cyan-700">
                       <CreditCard size={24} />
                    </div>
                    <div>
                       <p className="font-bold text-sm">Pending Invoice</p>
                       <p className="text-xs text-white/40">Invoice #AKX-2024-082 • $1,250.00</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-bold uppercase tracking-wider bg-white text-black px-4 py-2 rounded-lg hover:bg-white/80 transition-all">Pay Now</button>
              </div>

              <div className="glass-card rounded-3xl p-6 border-white/5 flex items-center justify-between hover:bg-white/[0.03] transition-all cursor-pointer group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/10 flex items-center justify-center text-cyan-700">
                       <Download size={24} />
                    </div>
                    <div>
                       <p className="font-bold text-sm">Asset Pack Ready</p>
                       <p className="text-xs text-white/40">Brand Identity System v2.0</p>
                    </div>
                 </div>
                 <ChevronRight size={18} className="text-white/20 group-hover:translate-x-1 transition-all" />
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
