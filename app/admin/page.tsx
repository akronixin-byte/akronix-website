import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { 
  Users, 
  Layers, 
  MessageSquare, 
  ShieldCheck,
  CreditCard,
  Briefcase
} from "lucide-react";

export default async function AdminDashboard() {
  const session = await auth();
  const user = session?.user as { role: string; name?: string | null; email?: string | null } | undefined;

  if (!user || user.role !== "SUPER_ADMIN" && user.role !== "ADMIN") {
    redirect("/login");
  }

  const stats = [
    { label: "Active Clients", value: "124", icon: Users, change: "+12%", color: "text-purple-600" },
    { label: "Total Projects", value: "32", icon: Briefcase, change: "+5%", color: "text-fuchsia-900" },
    { label: "Revenue (MTD)", value: "$45,200", icon: CreditCard, change: "+18%", color: "text-fuchsia-500" },
    { label: "Open Leads", value: "12", icon: MessageSquare, change: "-2%", color: "text-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-[1600px] mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-cyan-700 text-xs font-mono uppercase tracking-widest mb-2">
              <ShieldCheck size={14} />
              <span>System Administrator</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Enterprise Overview</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex flex-col items-end mr-2">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-white/40">{user.email}</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-fuchsia-950 flex items-center justify-center font-bold">
                {user.name?.[0]}
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden group hover:border-white/10 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon size={48} />
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-medium mb-4">
                <stat.icon size={14} className={stat.color} />
                <span>{stat.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className={cn("text-xs font-medium px-2 py-1 rounded-full bg-white/5", 
                  stat.change.startsWith("+") ? "text-fuchsia-500" : "text-amber-400")}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card rounded-2xl border-white/5 p-8">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold">Active Development Pipeline</h3>
                <button className="text-xs text-cyan-700 font-medium hover:underline">View All Projects</button>
             </div>
             <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-fuchsia-900/20 flex items-center justify-center text-cyan-700">
                            <Layers size={20} />
                         </div>
                         <div>
                            <p className="font-medium text-sm">Project X Neo-Portal</p>
                            <p className="text-xs text-white/40">SaaS Development • Due in 12 days</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="hidden sm:flex flex-col items-end">
                            <span className="text-xs text-white/40 mb-1">Progress</span>
                            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-fuchsia-900" style={{ width: i === 0 ? "75%" : i === 1 ? "45%" : "90%" }} />
                            </div>
                         </div>
                         <div className="px-3 py-1 rounded-full bg-fuchsia-900/10 border border-fuchsia-900/20 text-[10px] font-bold uppercase tracking-wider text-cyan-700 text-center min-w-[80px]">
                            In Progress
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="glass-card rounded-2xl border-white/5 p-8">
             <h3 className="text-lg font-semibold mb-8">Recent Activity</h3>
             <div className="space-y-6">
                {[
                  { user: "Alice M.", action: "subscribed to", target: "Pro Plan", time: "2m ago" },
                  { user: "System", action: "deployed", target: "Build v1.4.2", time: "45m ago" },
                  { user: "Mark K.", action: "sent a", target: "New Lead", time: "2h ago" },
                  { user: "Internal", action: "processed", target: "Invoice #942", time: "5h ago" },
                ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 shrink-0 flex items-center justify-center text-[10px] font-bold">
                         {item.user[0]}
                      </div>
                      <div className="flex-1 border-b border-white/5 pb-4">
                         <p className="text-xs">
                            <span className="font-semibold text-white/90">{item.user}</span>
                            <span className="text-white/50"> {item.action} </span>
                            <span className="font-medium text-cyan-700">{item.target}</span>
                         </p>
                         <p className="text-[10px] text-white/30 mt-1">{item.time}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
