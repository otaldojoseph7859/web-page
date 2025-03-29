const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // 🚨 Certifique-se de que esta linha está ativada!

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,  // ⚠️ Verifique se está configurado corretamente
        pass: process.env.EMAIL_PASS,  // ⚠️ Verifique se está correto
    },
});

app.post("/send-email", async (req, res) => {
    console.log("📩 Requisição recebida:", req.body);

    const { nome, email, telefone, mensagem } = req.body;

    if (!nome || !email || !telefone || !mensagem) {
        console.log("❌ Erro: Campos ausentes");
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "webbratechnology@gmail.com",
            subject: "Nova mensagem do formulário de contato",
            text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
        });

        console.log("✅ E-mail enviado:", info.messageId);
        res.json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("❌ Erro ao enviar e-mail:", error);
        res.status(500).json({ error: "Erro ao enviar e-mail" });
    }
});

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));