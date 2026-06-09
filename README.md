# RICA - Redes Inteligentes, Confiáveis e Adaptáveis

## Descrição

RICA (Redes Inteligentes, Confiáveis e Adaptáveis para Aplicações Críticas) é um projeto de pesquisa que aborda os desafios emergentes no gerenciamento de redes complexas e heterogêneas. O projeto integra tecnologias de **Time-Sensitive Networking (TSN)**, **Computação em Nuvem**, **Redes Sem Fio** e **Inteligência Artificial** para garantir confiabilidade, adaptabilidade e segurança em ambientes críticos.

### Foco Principal

Investigar o uso de **Modelos de Linguagem Grandes (LLMs)** para auxiliar no gerenciamento, compreensão semântica e identificação de vulnerabilidades em redes, explorando o treinamento de modelos especialistas como caminho promissor para a criação de **sistemas multiagentes resilientes**.

## Características da Página

- **Design Responsivo:** Totalmente adaptável para dispositivos móveis, tablets e desktops
- **Suporte Multilíngue:** Português e Inglês com alternância dinâmica
- **Navegação Intuitiva:** Menu sticky com suavização de scroll
- **Animações Suaves:** Transições e efeitos visuais elegantes
- **Performance Otimizada:** HTML, CSS e JavaScript puro sem dependências externas
- **Acessibilidade:** Estrutura semântica e navegação por teclado

## Estrutura de Arquivos

```
rica-project/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
└── .gitignore          # Arquivo para ignorar arquivos desnecessários
```

## Como Usar

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/rica-project.git
cd rica-project
```

2. Abra o arquivo `index.html` em um navegador web:
```bash
# No Linux/Mac
open index.html

# No Windows
start index.html

# Ou simplesmente arraste o arquivo para o navegador
```

### Deployment no GitHub Pages

1. Crie um repositório no GitHub com o nome `rica-project` (ou qualquer outro nome)

2. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/rica-project.git
cd rica-project
```

3. Copie os arquivos da gitpage para o repositório:
```bash
cp index.html styles.css script.js README.md .
```

4. Configure o GitHub Pages:
   - Vá para as configurações do repositório
   - Navegue até "Pages" (Páginas)
   - Em "Source" (Fonte), selecione "Deploy from a branch"
   - Selecione a branch `main` e a pasta `/ (root)`
   - Clique em "Save"

5. Sua página estará disponível em: `https://seu-usuario.github.io/rica-project/`

## Seções da Página

### 1. **Home (Hero)**
Apresentação visual do projeto com título, subtítulo e chamada para ação.

### 2. **Sobre**
Descrição detalhada do projeto, seus objetivos e importância.

### 3. **Questão Central**
Apresenta a questão de pesquisa central que norteia o projeto.

### 4. **Objetivos**
- Objetivo geral
- Três objetivos específicos com cards interativos

### 5. **Pesquisa**
Tópicos de pesquisa organizados em seis categorias:
- Redes Definidas por Software (SDN)
- Internet das Coisas (IoT)
- Redes Veiculares
- Redes Táticas
- LLMs para Redes
- Segurança e Resiliência

### 6. **Equipe**
Informações sobre a equipe e contato com o laboratório WINET.

### 7. **Publicações**
Seção para listar publicações científicas do projeto.

## Funcionalidades JavaScript

### Alternância de Idioma
- Botões PT/EN no topo da página
- Alternância dinâmica entre português e inglês
- Preferência salva no localStorage

### Menu Mobile
- Hamburger menu responsivo
- Fechamento automático ao clicar em um link
- Suporte para navegação por teclado (ESC para fechar)

### Animações de Scroll
- Observador de interseção para animar cards ao entrar na viewport
- Efeito fade-in suave
- Atualização de link ativo na navegação durante scroll

### Navegação Suave
- Scroll suave ao clicar em links internos
- Destaque visual do link ativo na navegação

## Personalização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --primary-dark: #004499;
    --secondary-color: #00aa88;
    --accent-color: #ff6600;
    /* ... outras cores ... */
}
```

### Conteúdo
Edite o arquivo `index.html` para:
- Adicionar/remover seções
- Atualizar textos em português e inglês
- Modificar links de contato
- Adicionar novas publicações

### Fontes
A página usa a fonte padrão do sistema. Para usar fontes customizadas, adicione um link no `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Sua-Fonte&display=swap" rel="stylesheet">
```

## Compatibilidade

- ✅ Chrome/Chromium (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Edge (versão 90+)
- ✅ Navegadores móveis modernos

## Performance

- **Tamanho Total:** ~50KB (HTML + CSS + JS)
- **Sem dependências externas:** Apenas HTML, CSS e JavaScript puro
- **Otimizado para SEO:** Estrutura semântica e meta tags
- **Carregamento rápido:** Sem bibliotecas pesadas

## Acessibilidade

- ✅ Navegação por teclado
- ✅ Estrutura semântica HTML
- ✅ Contraste de cores adequado
- ✅ Suporte para leitores de tela
- ✅ Links com texto descritivo

## Contribuindo

Para contribuir com melhorias:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

- **Email:** paulo.rettore@ufmg.br
- **Laboratório:** [WINET - UFMG](http://www.winet.dcc.ufmg.br)
- **Departamento:** Ciência da Computação, UFMG

## Referências

Página inspirada em: [SiR.AI Project](https://www.rettore.com.br/sirai-project/)

---

**Última atualização:** Junho de 2026

**Desenvolvido com ❤️ para a comunidade de pesquisa em redes e IA**
