# Guia de Deployment - RICA Project GitHub Pages

Este guia fornece instruções passo a passo para publicar a página do projeto RICA no GitHub Pages.

## Pré-requisitos

- Conta no GitHub (https://github.com)
- Git instalado no seu computador
- Conhecimento básico de linha de comando

## Opção 1: Deployment Rápido (Recomendado)

### Passo 1: Criar um Repositório no GitHub

1. Acesse https://github.com/new
2. Preencha os campos:
   - **Repository name:** `rica-project` (ou outro nome de sua escolha)
   - **Description:** "RICA - Redes Inteligentes, Confiáveis e Adaptáveis"
   - **Public:** Selecione para tornar público
   - **Initialize this repository with:** Deixe em branco
3. Clique em "Create repository"

### Passo 2: Clonar e Adicionar Arquivos

```bash
# Clone o repositório (substitua seu-usuario pelo seu usuário do GitHub)
git clone https://github.com/seu-usuario/rica-project.git
cd rica-project

# Copie os arquivos da gitpage para o repositório
# (Se estiver em outro diretório, copie os arquivos manualmente)
```

### Passo 3: Fazer Commit e Push

```bash
# Adicione todos os arquivos
git add .

# Crie um commit
git commit -m "Initial commit: Add RICA project website"

# Faça push para o GitHub
git push -u origin main
```

### Passo 4: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em "Settings" (Configurações)
3. No menu lateral, clique em "Pages"
4. Em "Source" (Fonte):
   - Selecione "Deploy from a branch"
   - Branch: `main`
   - Pasta: `/ (root)`
5. Clique em "Save"

### Passo 5: Aguardar Deployment

- GitHub Pages levará alguns minutos para processar
- Você receberá um email quando estiver pronto
- Sua página estará em: `https://seu-usuario.github.io/rica-project/`

## Opção 2: Deployment com GitHub CLI

Se você tem o GitHub CLI instalado:

```bash
# Autentique-se
gh auth login

# Crie um repositório
gh repo create rica-project --public --source=. --remote=origin --push

# Ative GitHub Pages
gh repo edit --enable-issues=false --enable-projects=false --enable-wiki=false
```

## Opção 3: Deployment com GitHub Desktop

Se preferir usar a interface gráfica:

1. Abra GitHub Desktop
2. Clique em "File" → "New Repository"
3. Preencha os dados:
   - **Name:** rica-project
   - **Local Path:** Escolha um diretório
4. Clique em "Create Repository"
5. Copie os arquivos para o diretório criado
6. Faça commit e push
7. Siga os passos 4 e 5 da Opção 1

## Atualizar a Página

Após fazer alterações nos arquivos:

```bash
# Adicione as mudanças
git add .

# Crie um commit
git commit -m "Update: Descrição das mudanças"

# Faça push
git push
```

A página será atualizada automaticamente em alguns minutos.

## Configurações Avançadas

### Usar um Domínio Customizado

1. Vá para "Settings" → "Pages"
2. Em "Custom domain", digite seu domínio (ex: rica.seu-dominio.com)
3. Clique em "Save"
4. Configure os DNS records do seu domínio:
   - Crie um CNAME apontando para `seu-usuario.github.io`

### Usar HTTPS

GitHub Pages fornece HTTPS automaticamente. Para ativar:

1. Vá para "Settings" → "Pages"
2. Marque "Enforce HTTPS"

### Adicionar um Certificado SSL Customizado

Se usar domínio customizado, o GitHub Pages fornece certificado SSL gratuito automaticamente.

## Troubleshooting

### Página não aparece

- Verifique se o repositório é público
- Aguarde 5-10 minutos após o push
- Verifique se o arquivo `index.html` está na raiz do repositório
- Verifique os logs em "Settings" → "Pages" → "GitHub Pages"

### Estilos não carregam

- Verifique se os caminhos dos arquivos CSS e JS estão corretos
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique o console do navegador (F12) para erros

### Menu mobile não funciona

- Verifique se o arquivo `script.js` está sendo carregado
- Abra o console do navegador (F12) para ver erros
- Verifique a permissão de acesso aos arquivos

## Monitorar a Página

### Verificar Status de Deployment

1. Vá para o repositório
2. Clique em "Deployments" (ou "Actions")
3. Veja o status do último deployment

### Ver Logs de Erro

1. Vá para "Settings" → "Pages"
2. Role para baixo até "GitHub Pages"
3. Verifique se há mensagens de erro

## Otimizações Recomendadas

### Adicionar Analytics (Opcional)

Para rastrear visitantes, adicione Google Analytics:

1. Crie uma conta em https://analytics.google.com
2. Adicione este código antes de `</head>` em `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Substitua `GA_MEASUREMENT_ID` pelo seu ID.

### Adicionar Sitemap (Opcional)

Crie um arquivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-usuario.github.io/rica-project/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Adicionar robots.txt (Opcional)

Crie um arquivo `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://seu-usuario.github.io/rica-project/sitemap.xml
```

## Manutenção

### Backup da Página

```bash
# Clone o repositório em outro local
git clone https://github.com/seu-usuario/rica-project.git rica-project-backup
```

### Atualizar Conteúdo Regularmente

- Atualize publicações na seção de Publicações
- Adicione novos tópicos de pesquisa
- Mantenha informações de contato atualizadas

## Suporte

Para problemas com GitHub Pages:
- Documentação oficial: https://docs.github.com/en/pages
- Status do GitHub: https://www.githubstatus.com

---

**Última atualização:** Junho de 2026
