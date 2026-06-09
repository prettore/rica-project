# Configuração no GitHub Pages

## Passo a Passo para Publicar a Página do RICA no GitHub

### 1. Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "+" no canto superior direito
3. Selecione "New repository"
4. Preencha os dados:
   - **Repository name**: `rica-project` (ou outro nome de sua preferência)
   - **Description**: "Página web do projeto RICA - Redes Inteligentes Confiáveis e Adaptáveis"
   - **Visibility**: Public (para que a página seja acessível)
   - **Initialize this repository with**: Deixe em branco por enquanto
5. Clique em "Create repository"

### 2. Clonar o Repositório Localmente

```bash
git clone https://github.com/seu-usuario/rica-project.git
cd rica-project
```

### 3. Adicionar os Arquivos

Copie todos os arquivos da pasta `rica-project` para o diretório clonado:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `LICENSE`
- `.gitignore`

### 4. Fazer Commit e Push

```bash
# Adicionar todos os arquivos
git add .

# Criar um commit
git commit -m "Inicial: Página web do projeto RICA"

# Fazer push para o GitHub
git push -u origin main
```

### 5. Configurar GitHub Pages

1. Vá para as configurações do repositório (Settings)
2. Na seção lateral esquerda, clique em "Pages"
3. Em "Source", selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em "Save"
5. Aguarde alguns minutos para o GitHub processar

### 6. Acessar a Página

A página estará disponível em:
- `https://seu-usuario.github.io/rica-project/`

Ou, se você renomear o repositório para `seu-usuario.github.io`:
- `https://seu-usuario.github.io/`

## Atualizar a Página

Para fazer alterações na página:

```bash
# Fazer as alterações nos arquivos locais

# Adicionar as mudanças
git add .

# Criar um commit com uma mensagem descritiva
git commit -m "Descrição das mudanças"

# Fazer push
git push
```

As mudanças serão publicadas automaticamente em alguns segundos.

## Domínio Personalizado (Opcional)

Se você tiver um domínio personalizado:

1. Vá para Settings > Pages
2. Em "Custom domain", digite seu domínio (ex: `rica.seu-site.com`)
3. Clique em "Save"
4. Configure os registros DNS do seu domínio:
   - **CNAME**: Aponte para `seu-usuario.github.io`

## Troubleshooting

### A página não aparece
- Verifique se o repositório é público
- Aguarde 5-10 minutos para o GitHub processar
- Verifique se o arquivo `index.html` está na raiz do repositório

### Estilo não está carregando
- Verifique se os caminhos dos arquivos CSS e JS estão corretos
- Limpe o cache do navegador (Ctrl+Shift+Delete ou Cmd+Shift+Delete)

### Página em branco
- Abra o console do navegador (F12) para verificar erros
- Verifique se o arquivo `index.html` está bem formado

## Estrutura Recomendada do Repositório

```
seu-usuario/rica-project/
├── index.html
├── styles.css
├── script.js
├── README.md
├── LICENSE
├── .gitignore
├── GITHUB_SETUP.md
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

## Adicionar Imagens e Recursos

Se você quiser adicionar imagens ou outros recursos:

1. Crie uma pasta `assets` na raiz do repositório
2. Organize em subpastas (images, icons, etc.)
3. Referencie nos arquivos HTML/CSS:

```html
<img src="assets/images/logo.png" alt="Logo">
```

```css
background-image: url('assets/images/background.jpg');
```

## Próximos Passos

- Adicionar imagens do projeto
- Criar páginas adicionais (membros detalhados, publicações, etc.)
- Implementar formulário de contato
- Adicionar integração com redes sociais
- Configurar analytics (Google Analytics, etc.)

## Recursos Úteis

- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [Guia de Git](https://git-scm.com/doc)
- [GitHub CLI](https://cli.github.com/)

---

**Dúvidas?** Consulte a documentação oficial do GitHub Pages ou entre em contato com o coordenador do projeto.
