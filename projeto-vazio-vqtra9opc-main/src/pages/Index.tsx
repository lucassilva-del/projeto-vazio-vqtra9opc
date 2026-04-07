import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Code2, Palette, LayoutTemplate, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: 'Vite',
    description: 'Ambiente de desenvolvimento extremamente rápido e build otimizado para produção.',
  },
  {
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
    title: 'React & TypeScript',
    description:
      'A biblioteca mais popular do mercado com a segurança e produtividade do TypeScript.',
  },
  {
    icon: <Palette className="h-6 w-6 text-cyan-500" />,
    title: 'Tailwind CSS',
    description:
      'Estilização utilitária moderna para construir interfaces consistentes rapidamente.',
  },
  {
    icon: <LayoutTemplate className="h-6 w-6 text-indigo-500" />,
    title: 'Shadcn UI',
    description: 'Componentes belíssimos, acessíveis e totalmente customizáveis prontos para uso.',
  },
]

const steps = [
  'Explore a estrutura de pastas e componentes.',
  'Edite o arquivo src/pages/Index.tsx para ver as mudanças.',
  'Adicione novas rotas em src/App.tsx.',
  'Comece a construir sua aplicação incrível!',
]

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Pronto para começar
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground">
          Bem-vindo ao seu <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            novo projeto
          </span>
        </h1>

        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Um template inicial limpo, profissional e moderno. Equipado com as melhores ferramentas do
          ecossistema front-end para você focar no que importa: o seu produto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/sobre">
              Começar Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              Ver Documentação
            </a>
          </Button>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Stack Tecnológica</h2>
          <p className="text-muted-foreground mt-2">
            Construído sobre as bases mais sólidas do mercado moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="border bg-card/50 shadow-sm transition-all hover:shadow-md hover:bg-card"
            >
              <CardHeader>
                <div className="mb-2 w-max rounded-lg bg-background p-2 ring-1 ring-border shadow-sm">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="mx-auto max-w-3xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <Card className="overflow-hidden border-primary/20 bg-primary/5">
          <CardHeader className="border-b border-primary/10 bg-primary/10 pb-6">
            <CardTitle className="text-2xl text-primary">Primeiros Passos</CardTitle>
            <CardDescription className="text-primary/80">
              Siga estas instruções rápidas para começar seu desenvolvimento.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Index
