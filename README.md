# Product Landing Page

🚀 Landing page moderna para apresentação de produto, desenvolvida com React, TypeScript e Tailwind CSS.

## ✨ Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool rápido e moderno
- **ESLint** - Linter para identificação de problemas no código

## 💻 Instalação e Uso

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Como executar

1. Clone o repositório:
```bash
git clone https://github.com/fsemanuel/product-landing-page.git
cd product-landing-page
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🛠️ Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o ESLint para análise de código

## 📝 Estrutura do Projeto

```
src/
├── App.tsx          # Componente principal
├── main.tsx         # Ponto de entrada da aplicação
├── index.css        # Estilos globais com Tailwind
└── vite-env.d.ts    # Definições de tipos do Vite
```

## 🚀 Deploy

Para fazer deploy da landing page:

1. Execute o build:
```bash
npm run build
```

2. A pasta `dist/` conterá todos os arquivos estáticos prontos para deploy.

### Opções de Deploy:
- **Vercel**: Conecte seu repositório GitHub à Vercel para deploy automático
- **Netlify**: Arraste a pasta `dist` ou conecte via Git
- **GitHub Pages**: Configure GitHub Actions para deploy automático

## 🎨 Personalização

A landing page está pronta para ser personalizada:

- **Cores**: Modifique as classes do Tailwind em `src/App.tsx`
- **Conteúdo**: Atualize textos e estrutura no componente `App`
- **Fontes**: A fonte Inter já está configurada, mas pode ser alterada no `index.html`
- **Estilos**: Use as classes do Tailwind ou adicione CSS customizado em `src/index.css`

## 💬 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma [issue](https://github.com/fsemanuel/product-landing-page/issues).

---

❤️ Desenvolvido por [Felipe Emanuel](https://github.com/fsemanuel)
