import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Logo from '../icons/logo';
import { Button } from '../ui/button';
import { ArrowLeft, Shield, Eye, Database, Lock, Users, Globe, AlertTriangle } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full glass border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            )}
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Políticas de Privacidade</span>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Políticas de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua privacidade é fundamental para nós. Esta política explica como coletamos, 
              usamos e protegemos seus dados pessoais. Última atualização em 28 de agosto de 2025.
            </p>
          </div>

          {/* Privacy Overview */}
          <Card variant="glass-brand" className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-brand-500" />
                <span>Nosso Compromisso com a Privacidade</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Lock className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Dados Seguros</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos criptografia de ponta para proteger todas as informações
                  </p>
                </div>
                <div className="text-center">
                  <Eye className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Transparência Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Você sempre sabe que dados coletamos e como os usamos
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Controle do Usuário</h3>
                  <p className="text-sm text-muted-foreground">
                    Você tem controle total sobre seus dados pessoais
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card variant="glass" className="mb-8">
            <CardHeader>
              <CardTitle>Navegação Rápida</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#collection" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>1. Coleta de Informações</span>
                </a>
                <a href="#usage" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>2. Uso das Informações</span>
                </a>
                <a href="#sharing" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>3. Compartilhamento de Dados</span>
                </a>
                <a href="#security" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>4. Segurança dos Dados</span>
                </a>
                <a href="#rights" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>5. Seus Direitos</span>
                </a>
                <a href="#cookies" className="flex items-center space-x-2 text-muted-foreground hover:text-brand-500 transition-colors p-2 rounded hover:bg-brand-500/10">
                  <span>6. Cookies e Tecnologias</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card variant="glass-brand" className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Dúvidas sobre Privacidade?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe de privacidade está disponível para esclarecer qualquer dúvida 
                sobre como tratamos seus dados pessoais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient-brand">
                  Contatar Privacidade
                </Button>
                <Button variant="ghost">
                  Ver Termos de Serviços
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-border/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Encarregado de Dados (DPO):</strong> privacy@definna.ai<br />
                  <strong>Endereço:</strong> São Paulo, SP - Brasil
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}