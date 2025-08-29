import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Logo from '../components/icons/logo';
import { Shield, Eye, Database, Lock, Users, Globe, ArrowLeft, AlertTriangle } from 'lucide-react';
import { DotPattern } from '../components/magicui/dot-pattern';
import { cn } from '../lib/utils';

export default function PrivacyPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "opacity-20"
        )}
      />

      {/* Header */}
      <header className="fixed top-0 w-full glass border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
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
      <div className="pt-20 pb-12 px-6 relative z-10">
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

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Section 1: Data Collection */}
            <Card variant="glass" className="p-8" id="collection">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl text-brand-500">
                  <Database className="h-6 w-6" />
                  <span>1. Coleta de Informações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <h4 className="text-foreground font-semibold">1.1 Informações que Você Fornece</h4>
                <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de registro (nome, e-mail, empresa)</li>
                  <li>Informações de pagamento e faturamento</li>
                  <li>Configurações de agentes de IA e prompts personalizados</li>
                  <li>Comunicações conosco (suporte, feedback)</li>
                  <li>Dados de integração com serviços terceiros</li>
                </ul>
                
                <h4 className="text-foreground font-semibold mt-6">1.2 Informações Coletadas Automaticamente</h4>
                <p>Quando você usa nossos serviços, coletamos automaticamente:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de uso (páginas visitadas, recursos utilizados)</li>
                  <li>Informações do dispositivo (tipo, sistema operacional, navegador)</li>
                  <li>Dados de localização aproximada (baseados em IP)</li>
                  <li>Logs de sistema e métricas de performance</li>
                  <li>Dados de conversação com agentes (para melhoria do serviço)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 2: Data Usage */}
            <Card variant="glass" className="p-8" id="usage">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl text-brand-500">
                  <Eye className="h-6 w-6" />
                  <span>2. Uso das Informações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>Utilizamos suas informações para:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Operação do Serviço</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Fornecer e manter nossos serviços</li>
                      <li>Processar transações e pagamentos</li>
                      <li>Personalizar sua experiência</li>
                      <li>Fornecer suporte técnico</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Melhoria e Segurança</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Melhorar nossos produtos e serviços</li>
                      <li>Detectar e prevenir fraudes</li>
                      <li>Monitorar o uso para conformidade</li>
                      <li>Realizar análises e pesquisas</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-brand-500/10 border border-brand-500/20 rounded-lg p-4 mt-6">
                  <h4 className="text-brand-500 font-semibold mb-2">Inteligência Artificial</h4>
                  <p className="text-sm">
                    Utilizamos dados de conversação de forma agregada e anônima para treinar e melhorar 
                    nossos modelos de IA, sempre respeitando sua privacidade e sem identificar usuários individuais.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Data Sharing */}
            <Card variant="glass" className="p-8" id="sharing">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl text-brand-500">
                  <Users className="h-6 w-6" />
                  <span>3. Compartilhamento de Dados</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>Não vendemos seus dados pessoais. Compartilhamos informações apenas nas seguintes situações:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-500 pl-4">
                    <h4 className="text-foreground font-semibold">Provedores de Serviços</h4>
                    <p className="text-sm">
                      Com parceiros confiáveis que nos ajudam a operar nossos serviços 
                      (processamento de pagamentos, hospedagem, análises).
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-500 pl-4">
                    <h4 className="text-foreground font-semibold">Provedores de IA</h4>
                    <p className="text-sm">
                      Com provedores de LLM (OpenAI, Google, Anthropic) quando necessário 
                      para processar suas solicitações aos agentes de IA.
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-500 pl-4">
                    <h4 className="text-foreground font-semibold">Obrigações Legais</h4>
                    <p className="text-sm">
                      Quando exigido por lei, regulamento ou processo legal válido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Security */}
            <Card variant="glass" className="p-8" id="security">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl text-brand-500">
                  <Lock className="h-6 w-6" />
                  <span>4. Segurança dos Dados</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>Implementamos medidas técnicas e organizacionais rigorosas para proteger seus dados:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Medidas Técnicas</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Criptografia AES-256 em repouso</li>
                      <li>TLS 1.3 para dados em trânsito</li>
                      <li>Autenticação multifator</li>
                      <li>Monitoramento 24/7 de segurança</li>
                      <li>Backups criptografados regulares</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Medidas Organizacionais</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Treinamento de segurança da equipe</li>
                      <li>Controle de acesso baseado em funções</li>
                      <li>Auditorias regulares de segurança</li>
                      <li>Planos de resposta a incidentes</li>
                      <li>Avaliações de fornecedores</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                    <div>
                      <h4 className="text-destructive font-semibold">Importante</h4>
                      <p className="text-sm">
                        Apesar de todas as precauções, nenhum método de transmissão pela internet é 100% seguro. 
                        Notificaremos você sobre qualquer violação de dados conforme exigido por lei.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Your Rights */}
            <Card variant="glass" className="p-8" id="rights">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl text-brand-500">
                  <Shield className="h-6 w-6" />
                  <span>5. Seus Direitos</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>De acordo com a LGPD e outras leis de proteção de dados, você tem os seguintes direitos:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">Acesso</h4>
                        <p className="text-xs">Solicitar uma cópia dos seus dados pessoais</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">Retificação</h4>
                        <p className="text-xs">Corrigir dados imprecisos ou incompletos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">Exclusão</h4>
                        <p className="text-xs">Solicitar a exclusão dos seus dados</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">Portabilidade</h4>
                        <p className="text-xs">Receber seus dados em formato estruturado</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">Oposição</h4>
                        <p className="text-xs">Opor-se ao processamento para marketing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">Limitação</h4>
                        <p className="text-xs">Restringir o processamento em certas situações</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-brand-500/10 border border-brand-500/20 rounded-lg p-4 mt-6">
                  <h4 className="text-brand-500 font-semibold mb-2">Como Exercer Seus Direitos</h4>
                  <p className="text-sm mb-2">
                    Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: 
                    <strong className="text-foreground"> privacy@definna.ai</strong>
                  </p>
                  <p className="text-xs">
                    Responderemos a sua solicitação dentro de 15 dias úteis, conforme exigido pela LGPD.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6: Cookies */}
            <Card variant="glass" className="p-8" id="cookies">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl text-brand-500">
                  <Globe className="h-6 w-6" />
                  <span>6. Cookies e Tecnologias Similares</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-muted-foreground">
                <p>Utilizamos cookies e tecnologias similares para melhorar sua experiência:</p>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="text-foreground font-semibold mb-2">Cookies Essenciais</h4>
                    <p className="text-sm">
                      Necessários para o funcionamento básico da plataforma (autenticação, sessões, segurança).
                      Estes cookies não podem ser desabilitados.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="text-foreground font-semibold mb-2">Cookies de Performance</h4>
                    <p className="text-sm">
                      Coletam informações sobre como você usa nossos serviços para nos ajudar a melhorar 
                      a performance e corrigir erros.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="text-foreground font-semibold mb-2">Cookies de Funcionalidade</h4>
                    <p className="text-sm">
                      Permitem que lembremos de suas preferências e configurações para personalizar 
                      sua experiência na plataforma.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm">
                  Você pode gerenciar suas preferências de cookies através das configurações do seu navegador 
                  ou através do nosso painel de preferências disponível na plataforma.
                </p>
              </CardContent>
            </Card>
          </div>

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
                <Button variant="ghost" onClick={() => window.location.href = '/terms'}>
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