# 🏗️ Lajes Lord – Site Oficial

Site profissional para apresentação de produtos e geração de orçamentos via WhatsApp.

---

## 📁 Estrutura de Pastas

```
lajes-lord/
├── frontend/
│   ├── index.html          ← Página principal
│   ├── css/
│   │   └── style.css       ← Todos os estilos
│   └── js/
│       ├── products.js     ← Dados dos produtos
│       └── main.js         ← Lógica e interações
├── backend/
│   └── server.js           ← Servidor Node.js (Express)
├── package.json
└── README.md
```

---

## 🚀 Como Rodar

### Opção 1 – Somente o Frontend (mais simples)
Basta abrir o arquivo `frontend/index.html` direto no navegador. Não precisa de servidor!

### Opção 2 – Com o Backend (Node.js)

1. Instale o Node.js em: https://nodejs.org

2. No terminal, dentro da pasta `lajes-lord/`:
```bash
npm install
npm start
```

3. Acesse: http://localhost:3000

---

## 📱 WhatsApp

Número configurado: **(17) 98130-0658**

Para alterar, edite a variável `WHATSAPP_NUMBER` no arquivo `frontend/js/products.js`.

---

## 🎨 Personalização

- **Produtos**: edite `frontend/js/products.js`
- **Cores/Fontes**: edite as variáveis CSS em `frontend/css/style.css` (no topo do arquivo, seção `:root`)
- **Textos**: edite diretamente `frontend/index.html`

---

## ✅ Funcionalidades

- ✅ Site responsivo (mobile, tablet e desktop)
- ✅ Modal com detalhes de cada produto
- ✅ Botão de orçamento via WhatsApp por produto
- ✅ Botão flutuante do WhatsApp
- ✅ Menu hamburguer no mobile
- ✅ Seção de lajes com tipos (Beta 11, 16, 20, 25)
- ✅ Backend Express pronto para expansão

---

Desenvolvido para **Lajes Lord** – Bebedouro, SP 🏗️
