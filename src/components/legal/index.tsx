import { useState } from 'react';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

type LegalPage = 'terms' | 'privacy' | null;

interface LegalPagesProps {
  initialPage?: LegalPage;
}

export default function LegalPages({ initialPage = null }: LegalPagesProps) {
  const [currentPage, setCurrentPage] = useState<LegalPage>(initialPage);

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage(null)} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage(null)} />;
  }

  // Landing page for legal documents
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Documentos Legais
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Acesse nossos termos de serviços e políticas de privacidade
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <button 
              onClick={() => setCurrentPage('terms')}
              className="p-8 bg-card border border-border rounded-lg hover:border-brand-500 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Termos de Serviços
              </h2>
              <p className="text-muted-foreground">
                Conheça as regras e condições para uso da plataforma
              </p>
            </button>
            
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="p-8 bg-card border border-border rounded-lg hover:border-brand-500 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Políticas de Privacidade
              </h2>
              <p className="text-muted-foreground">
                Saiba como protegemos e utilizamos seus dados pessoais
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TermsOfService, PrivacyPolicy };