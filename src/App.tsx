import React, { useState, useEffect } from 'react';

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
      icon: '🤖',
      title: 'Agentes de IA Personalizados',
      description: 'Crie e configure agentes inteligentes com prompts customizados'
    },
    {
      icon: '🔗',
      title: 'Múltiplos Provedores',
      description: 'Integre com OpenAI, Google AI, Claude e outros provedores LLM'
    },
    {
      icon: '💬',
      title: 'Interface Conversacional',
      description: 'Chat em tempo real com histórico e suporte multimodal'
    },
    {
      icon: '📱',
      title: 'Integração WhatsApp',
      description: 'Conecte seus agentes diretamente ao WhatsApp Business'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Agentes Criados' },
    { number: '50M+', label: 'Mensagens Processadas' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Suporte' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full glass border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="text-foreground font-semibold text-xl">Platform</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>
          <button className="btn-brand hover:glow-green transition-all transform hover:scale-105">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Construa Agentes de IA
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                Sem Código
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              A plataforma mais avançada para criar, gerenciar e implementar agentes de inteligência artificial. 
              Integre com múltiplos provedores LLM e lance em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-brand px-8 py-4 text-lg font-semibold glow-green transform hover:scale-105 shadow-2xl">
                Começar Gratuitamente
              </button>
              <button className="glass border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-all">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
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
              <div 
                key={index} 
                className={`glass rounded-xl p-6 transition-all duration-300 hover:bg-muted/50 hover:border-brand-500/20 transform hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-brand-500/50 glow-green' : ''
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dashboard Intuitivo
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Gerencie todos os seus agentes de IA em um painel centralizado. 
                Monitore performance, analise métricas e configure integrações com facilidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Analytics em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Gerenciamento de custos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Configuração visual</span>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border-brand-500/20 glow-green">
              <div className="bg-card rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                </div>
                <div className="text-foreground font-mono text-sm">
                  Dashboard Overview
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-brand-500/20 rounded-lg p-3">
                  <div className="text-foreground text-sm">🤖 Total Agents: 12</div>
                </div>
                <div className="bg-brand-500/20 rounded-lg p-3">
                  <div className="text-foreground text-sm">✅ Active: 8</div>
                </div>
                <div className="bg-brand-500/20 rounded-lg p-3">
                  <div className="text-foreground text-sm">📊 Requests: 2,595</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
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
            {/* Free Plan */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Starter</h3>
              <div className="text-4xl font-bold text-foreground mb-6">
                Grátis
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Até 3 agentes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">1.000 mensagens/mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Suporte básico</span>
                </li>
              </ul>
              <button className="w-full glass border-border text-foreground py-3 rounded-lg hover:bg-muted transition-all">
                Começar Grátis
              </button>
            </div>

            {/* Pro Plan */}
            <div className="glass rounded-2xl p-8 relative border-2 border-brand-500/50 glow-green">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional</h3>
              <div className="text-4xl font-bold text-foreground mb-6">
                $49<span className="text-lg text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Agentes ilimitados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">50.000 mensagens/mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Integração WhatsApp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Analytics avançados</span>
                </li>
              </ul>
              <button className="w-full btn-brand py-3 rounded-lg glow-green transition-all">
                Começar Agora
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-foreground mb-6">
                Custom
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Recursos personalizados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Volume ilimitado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">Suporte dedicado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-brand-500">✓</span>
                  <span className="text-muted-foreground">SLA personalizado</span>
                </li>
              </ul>
              <button className="w-full glass border-border text-foreground py-3 rounded-lg hover:bg-muted transition-all">
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-brand-500/10 to-brand-600/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para Revolucionar seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a milhares de empresas que já transformaram seu atendimento com nossos agentes de IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-brand px-8 py-4 text-lg font-semibold glow-green transform hover:scale-105 shadow-2xl">
              Começar Gratuitamente
            </button>
            <button className="glass border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-all">
              Agendar Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AI</span>
                </div>
                <span className="text-foreground font-semibold text-xl">Platform</span>
              </div>
              <p className="text-muted-foreground">
                A plataforma mais avançada para criar agentes de IA sem código.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
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
              © 2024 AI Platform. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;