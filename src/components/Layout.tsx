import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, Rocket, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Documentação', path: '/docs' },
]

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="font-bold tracking-tight">Starter UI</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground',
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-4 w-px bg-border" />
            <Button variant="outline" size="sm" className="gap-2 group" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                GitHub
              </a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:max-w-[350px]">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <SheetDescription className="sr-only">Links para navegar no site</SheetDescription>

                <div className="flex flex-col gap-6 py-6 mt-4">
                  <Link to="/" className="flex items-center space-x-2 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <span className="font-bold tracking-tight text-lg">Starter UI</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            isActive ? 'text-primary' : 'text-muted-foreground',
                          )
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </nav>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <a href="https://github.com" target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        Repositório no GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 animate-in fade-in duration-500">
        <Outlet />
      </main>

      <footer className="border-t py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Construído com{' '}
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vite
            </a>
            ,{' '}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              React
            </a>{' '}
            e{' '}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/sobre"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sobre
            </Link>
            <Link
              to="/privacidade"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Privacidade
            </Link>
            <Link
              to="/termos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Termos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
