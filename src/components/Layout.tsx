import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BarChart3 } from "lucide-react";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <span className="hidden sm:inline-block">NPS System</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Survey
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
              )}
            </Link>
            <Link
              to="/dashboard"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                location.pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Dashboard
              {location.pathname === "/dashboard" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
              )}
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
