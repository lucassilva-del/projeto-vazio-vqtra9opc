import { Link } from 'react-router-dom'
import { Check, ArrowLeft, Layers, Shield, Zap, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    icon: Smartphone,
    title: 'Design Responsivo',
    description:
      'Layouts que se adaptam perfeitamente a qualquer tamanho de tela, do celular ao desktop widescreen.',
  },
  {
    icon: Shield,
    title: 'Tipagem Forte com TypeScript',
    description:
      'Evite erros em tempo de execução e melhore a experiência de desenvolvimento com auto-completar.',
  },
  {
    icon: Layers,
    title: 'Componentes Acessíveis',
    description:
      'UI construída seguindo as diretrizes de acessibilidade (WAI-ARIA), garantindo uso por todos.',
  },
  {
    icon: Zap,
    title: 'Performance Otimizada',
    description:
      'Carregamento rápido e transições suaves graças à arquitetura eficiente do Vite e React.',
  },
]

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <div className="mb-8">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-4 -ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Início
          </Link>
        </Button>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Sobre este Projeto
        </h1>
        <p className="text-xl text-muted-foreground">
          Entenda os princípios e objetivos por trás deste template inicial.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed mb-16">
        <p>
          Este projeto nasceu da necessidade de ter um ponto de partida consistente e de alta
          qualidade para o desenvolvimento de aplicações web modernas. Ao invés de configurar
          repetidamente as mesmas ferramentas, este boilerplate unifica as melhores práticas do
          mercado em um único pacote.
        </p>
        <p>
          Utilizamos o <strong>React</strong> para a construção de interfaces interativas,{' '}
          <strong>Vite</strong> como ferramenta de build ultra-rápida, e{' '}
          <strong>Tailwind CSS</strong> aliado ao <strong>Shadcn UI</strong> para garantir um design
          system robusto, bonito e altamente customizável.
        </p>
        <p>
          O objetivo é reduzir o "time-to-market" (tempo até o lançamento) de novos produtos
          digitais, fornecendo uma base sólida que já cuida de preocupações transversais como
          roteamento básico, layout global, temas consistentes e design responsivo.
        </p>
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 border">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">
          Principais Benefícios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
