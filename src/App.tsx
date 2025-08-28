import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Bot, Zap, MessageSquare, Smartphone, Activity, BarChart3 } from 'lucide-react';
import Logo from './components/icons/logo';
import NumberTicker from './components/magicui/number-ticker';
import TypingAnimation from './components/magicui/typing-animation';
import PulsatingButton from './components/magicui/pulsating-button';
import { DotPattern } from './components/magicui/dot-pattern';
import { cn } from './lib/utils';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Agentes de IA Personalizados',
      description: 'Crie e configure agentes inteligentes com prompts customizados'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Múltiplos Provedores',
      description: 'Integre com OpenAI, Google AI, Claude e outros provedores LLM'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Interface Conversacional',
      description: 'Chat em tempo real com histórico e suporte multimodal'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Integração WhatsApp',
      description: 'Conecte seus agentes diretamente ao WhatsApp Business'
    }
  ];

  const stats = [
    { number: 10000, suffix: '+', label: 'Agentes Criados', icon: <Bot className="h-5 w-5" /> },
    { number: 50000000, suffix: '+', label: 'Mensagens Processadas', icon: <MessageSquare className="h-5 w-5" /> },
    { number: 99.9, suffix: '%', label: 'Uptime', icon: <Activity className="h-5 w-5" /> },
    { number: 24, suffix: '/7', label: 'Suporte', icon: <Zap className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "opacity-30"
        )}
      />
      
      {/* Header */}
      <header className="fixed top-0 w-full glass border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Preços</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          </div>
          <PulsatingButton className="transform hover:scale-105">
            Começar Agora
          </PulsatingButton>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TypingAnimation 
              text="Construa Agentes de IA Sem Código"
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent"
              duration={150}
            />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              A plataforma mais avançada para criar, gerenciar e implementar agentes de inteligência artificial.
              Integre com múltiplos provedores LLM e lance em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PulsatingButton className="px-8 py-4 text-lg font-semibold">
                Começar Gratuitamente
              </PulsatingButton>
              <Button variant="glass-brand" size="lg">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} variant="glass" className="text-center p-6 hover:glow-green">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-3 text-brand-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex justify-center items-center">
                    <NumberTicker 
                      value={stat.number}
                      className="text-3xl md:text-4xl font-bold text-foreground"
                      decimalPlaces={stat.number === 99.9 ? 1 : 0}
                    />
                    <span className="ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recursos Poderosos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para criar e gerenciar agentes de IA profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant={activeFeature === index ? "brand" : "glass"}
                className={`p-6 transition-all duration-300 hover:scale-105 transform ${activeFeature === index ? 'ring-2 ring-brand-500/50' : ''
                  }`}
              >
                <CardContent className="p-0">
                  <div className="text-brand-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Painel Intuitivo
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Gerencie todos os seus agentes de IA em um painel centralizado.
                Monitore performance, analise métricas e configure integrações com facilidade.
              </p>
              <div className="space-y-4">
                {['Análises em tempo real', 'Gerenciamento de custos', 'Configuração visual'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card variant="glass-brand" className="p-8">
              <CardContent className="p-0">
                <div className="bg-card rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                  </div>
                  <div className="text-foreground font-mono text-sm">
                    Visão Geral do Painel
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-brand-500/20 rounded-lg p-3 flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-brand-500" />
                    <div className="text-foreground text-sm flex items-center">
                      Total de Agentes: <NumberTicker value={12} className="ml-1 text-foreground" />
                    </div>
                  </div>
                  <div className="bg-brand-500/20 rounded-lg p-3 flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-brand-500" />
                    <div className="text-foreground text-sm flex items-center">
                      Ativos: <NumberTicker value={8} className="ml-1 text-foreground" />
                    </div>
                  </div>
                  <div className="bg-brand-500/20 rounded-lg p-3 flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-brand-500" />
                    <div className="text-foreground text-sm flex items-center">
                      Solicitações: <NumberTicker value={2595} className="ml-1 text-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Planos Flexíveis
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card variant="glass" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Iniciante</CardTitle>
                <div className="text-4xl font-bold text-foreground">Grátis</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Até 3 agentes', '1.000 mensagens/mês', 'Suporte básico'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-brand-500">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                <Button variant="glass-brand" className="w-full mt-6">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card variant="glass-brand" className="p-8 relative border-2 border-brand-500/50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <div className="text-4xl font-bold text-foreground">
                  R$249<span className="text-lg text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Agentes ilimitados', '50.000 mensagens/mês', 'Integração WhatsApp', 'Análises avançadas'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-brand-500">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                <PulsatingButton className="w-full mt-6 py-3">
                  Começar Agora
                </PulsatingButton>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card variant="glass" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Empresarial</CardTitle>
                <div className="text-4xl font-bold text-foreground">Personalizado</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Recursos personalizados', 'Volume ilimitado', 'Suporte dedicado', 'SLA personalizado'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-brand-500">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                <Button variant="glass-brand" className="w-full mt-6">
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-brand-500/10 to-brand-600/10 border-t border-border relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para Revolucionar seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a milhares de empresas que já transformaram seu atendimento com nossos agentes de IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PulsatingButton className="px-8 py-4 text-lg font-semibold shadow-2xl">
              Começar Gratuitamente
            </PulsatingButton>
            <Button variant="glass-brand" size="lg">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo />
              </div>
              <p className="text-muted-foreground">
                A plataforma mais avançada para criar agentes de IA sem código.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Recursos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrações</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Carreiras</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentação</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutoriais</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Ajuda</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Plataforma de IA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;