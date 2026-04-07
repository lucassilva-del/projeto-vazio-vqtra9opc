import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FileQuestion, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(`Erro 404: Usuário tentou acessar rota inexistente: ${location.pathname}`)
  }, [location.pathname])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-8">
        <FileQuestion className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="text-6xl font-extrabold tracking-tight mb-4">404</h1>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
        Página não encontrada
      </h2>
      <p className="text-muted-foreground max-w-[500px] mb-8">
        Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido
        removida, renomeada ou estar temporariamente indisponível.
      </p>

      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Link>
        </Button>
        <Button variant="outline" size="lg" onClick={() => window.history.back()}>
          Página Anterior
        </Button>
      </div>
    </div>
  )
}

export default NotFound
