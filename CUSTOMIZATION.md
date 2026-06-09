# Guia de Customização - RICA Project

## 🎨 Paleta de Cores

A página RICA utiliza uma paleta de cores moderna e profissional:

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Profundo | `#1e3a8a` | Cor primária, títulos, links |
| Roxo | `#7c3aed` | Cor secundária, destaques |
| Laranja | `#f97316` | Cor de destaque, acentos |
| Fundo Claro | `#f8fafc` | Seções alternadas |
| Fundo Escuro | `#0f172a` | Footer |
| Texto Escuro | `#1e293b` | Corpo de texto |
| Texto Claro | `#64748b` | Texto secundário |
| Borda | `#e2e8f0` | Bordas de elementos |

## 🎯 Mudando a Paleta de Cores

Para alterar as cores da página, edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #1e3a8a;        /* Mude para sua cor primária */
    --secondary-color: #7c3aed;      /* Mude para sua cor secundária */
    --accent-color: #f97316;         /* Mude para sua cor de destaque */
    --light-bg: #f8fafc;             /* Fundo claro */
    --dark-bg: #0f172a;              /* Fundo escuro */
    --text-dark: #1e293b;            /* Texto escuro */
    --text-light: #64748b;           /* Texto claro */
    --border-color: #e2e8f0;         /* Cor de borda */
}
```

### Exemplos de Paletas Alternativas

#### Paleta Verde (Tipo SirAI)
```css
--primary-color: #059669;        /* Verde */
--secondary-color: #10b981;      /* Verde claro */
--accent-color: #34d399;         /* Verde mais claro */
```

#### Paleta Vermelha
```css
--primary-color: #dc2626;        /* Vermelho */
--secondary-color: #ef4444;      /* Vermelho claro */
--accent-color: #f87171;         /* Vermelho mais claro */
```

#### Paleta Azul Claro
```css
--primary-color: #0284c7;        /* Azul claro */
--secondary-color: #0ea5e9;      /* Azul mais claro */
--accent-color: #38bdf8;         /* Azul bem claro */
```

#### Paleta Roxo
```css
--primary-color: #7c3aed;        /* Roxo */
--secondary-color: #a855f7;      /* Roxo claro */
--accent-color: #d8b4fe;         /* Roxo bem claro */
```

## 📝 Editando Conteúdo

### Alterar Título do Projeto

No arquivo `index.html`, procure por:
```html
<h1 class="hero-title">RICA</h1>
```

### Alterar Descrição

```html
<h2 class="hero-subtitle">Redes Inteligentes Confiáveis e Adaptáveis</h2>
<p class="hero-description">Investigando a operação e gerenciamento de redes emergentes para aplicações críticas</p>
```

### Adicionar Novos Objetivos

Localize a seção `objectives-grid` e adicione novos cards:

```html
<div class="objective-card">
    <div class="objective-number">07</div>
    <p>Seu novo objetivo aqui</p>
</div>
```

### Adicionar Novos Membros da Equipe

Localize a seção `team-grid` e adicione:

```html
<div class="team-member-card">
    <h4>Dr. Nome Completo</h4>
    <p class="institution">Universidade / Instituição</p>
    <p class="role">Descrição do papel no projeto</p>
</div>
```

## 🖼️ Adicionando Imagens

1. Crie uma pasta `assets/images/` no repositório
2. Adicione suas imagens lá
3. Referencie no HTML:

```html
<img src="assets/images/seu-arquivo.png" alt="Descrição">
```

### Adicionar Logo

Para adicionar um logo ao navbar:

```html
<div class="logo">
    <img src="assets/images/logo.png" alt="RICA Logo" style="height: 40px;">
</div>
```

## 🔤 Alterando Tipografia

Para mudar as fontes, edite em `styles.css`:

```css
body {
    font-family: 'Sua Fonte Aqui', sans-serif;
}

.hero-title {
    font-family: 'Sua Fonte de Destaque', sans-serif;
}
```

### Importar Fontes do Google Fonts

Adicione no `<head>` do `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
```

Depois use em `styles.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

## 📐 Alterando Layout

### Largura Máxima do Container

Em `styles.css`:

```css
.container {
    max-width: 1200px;  /* Mude este valor */
}
```

### Espaçamento das Seções

```css
section {
    padding: 80px 20px;  /* Mude para seu valor preferido */
}
```

### Colunas do Grid

```css
.objectives-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  /* Mude minmax */
}
```

## 🎬 Animações

### Desabilitar Animações

Se quiser remover as animações, comente ou remova em `styles.css`:

```css
/* @keyframes fadeInUp { ... } */
```

### Adicionar Novas Animações

```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.seu-elemento {
    animation: slideInLeft 0.6s ease forwards;
}
```

## 📱 Responsividade

Os breakpoints atuais são:

```css
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

Para adicionar um novo breakpoint:

```css
@media (max-width: 1400px) {
    /* Estilos para telas menores que 1400px */
}
```

## 🌐 Suporte a Idiomas

Para adicionar traduções completas, edite a função `updatePageContent()` em `script.js`:

```javascript
function updatePageContent(lang) {
    if (lang === 'en') {
        // Atualize todos os textos para inglês
        document.querySelector('.section-title').textContent = 'About';
    } else {
        // Textos em português
        document.querySelector('.section-title').textContent = 'Sobre';
    }
}
```

## 🔗 Adicionando Links Externos

### Links para Redes Sociais

Adicione no footer ou em qualquer lugar:

```html
<div class="social-links">
    <a href="https://twitter.com/seu-usuario" target="_blank">Twitter</a>
    <a href="https://github.com/seu-usuario" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a>
</div>
```

### Links para Publicações

Adicione na seção de publicações:

```html
<a href="https://seu-link-para-publicacao.com" target="_blank" class="publication-link">
    Título da Publicação
</a>
```

## 🚀 Performance

### Otimizar Imagens

- Use formatos modernos (WebP, AVIF)
- Comprima imagens antes de adicionar
- Use lazy loading para imagens

```html
<img src="assets/images/imagem.png" alt="Descrição" loading="lazy">
```

### Minificar CSS e JS

Use ferramentas online ou locais:
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

## ✅ Checklist de Customização

- [ ] Alterar cores da paleta
- [ ] Atualizar informações do projeto
- [ ] Adicionar logo
- [ ] Atualizar equipe
- [ ] Adicionar publicações
- [ ] Testar em mobile
- [ ] Testar links
- [ ] Verificar ortografia
- [ ] Otimizar imagens
- [ ] Testar em diferentes navegadores

## 🆘 Problemas Comuns

### Cores não mudam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se editou o arquivo correto
- Certifique-se de fazer push das mudanças

### Layout quebrado
- Verifique a sintaxe CSS
- Use o DevTools (F12) para debugar
- Teste em diferentes resoluções

### Animações não funcionam
- Verifique se o JavaScript está carregando
- Abra o console (F12) para ver erros
- Certifique-se de que os seletores CSS estão corretos

---

**Precisa de ajuda?** Consulte a documentação do CSS, HTML ou JavaScript, ou entre em contato com o coordenador do projeto.
