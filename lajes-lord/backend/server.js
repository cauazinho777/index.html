// =============================================
// LAJES LORD – backend/server.js
// Servidor Node.js + Express simples
// Para uso futuro: formulário, leads, etc.
// =============================================

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir frontend estático
app.use(express.static(path.join(__dirname, "../frontend")));

// ---- ROTA PRINCIPAL ----
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ---- API: Log de orçamento (para futuros registros) ----
app.post("/api/orcamento", (req, res) => {
  const { produto, mensagem, timestamp } = req.body;

  if (!produto || !mensagem) {
    return res.status(400).json({ error: "Dados incompletos." });
  }

  // Aqui você pode integrar com banco de dados, e-mail, etc.
  console.log(`[${new Date().toISOString()}] Novo orçamento: ${produto}`);
  console.log(`Mensagem: ${mensagem}`);

  res.json({
    success: true,
    message: "Orçamento registrado com sucesso!",
    redirect: `https://wa.me/5517981300658?text=${encodeURIComponent(mensagem)}`
  });
});

// ---- API: Lista de produtos ----
app.get("/api/produtos", (req, res) => {
  const produtos = [
    { id: "ferragens-vigas", nome: "Ferragens – Vigas e Estribos", categoria: "Ferragens" },
    { id: "isopores", nome: "Isopores (H07, H10, H16)", categoria: "Isopor" },
    { id: "lajotas", nome: "Lajotas (H07, H10)", categoria: "Lajotas" },
    { id: "lajes", nome: "Lajes – Trilhos de Beta", categoria: "Lajes" },
    { id: "arames", nome: "Arames Recozidos", categoria: "Arame" },
    { id: "viaplus", nome: "Viaplus 1000 e 7000", categoria: "Impermeabilizante" },
    { id: "pregos", nome: "Pregos", categoria: "Pregos" },
    { id: "escoramentos", nome: "Escoramentos", categoria: "Escoramento" }
  ];
  res.json(produtos);
});

// ---- HEALTH CHECK ----
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", empresa: "Lajes Lord", whatsapp: "17981300658" });
});

// ---- START ----
app.listen(PORT, () => {
  console.log(`✅ Lajes Lord rodando em http://localhost:${PORT}`);
});

module.exports = app;
   



     

    

 