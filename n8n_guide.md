
# Guia de Automação VIZZU com N8N

Para automatizar os alertas de vencimento da plataforma VIZZU, siga a configuração lógica abaixo no seu servidor N8N:

## Fluxo de Automação: Alerta de Renovação

### 1. Nó Cron (Schedule)
- **Configuração:** `Trigger Interval: Days`.
- **Hora:** `09:00 AM`.
- **Objetivo:** Iniciar o processo de verificação diariamente pela manhã.

### 2. Nó HTTP Request
- **Método:** `GET`.
- **URL:** `https://app.vizzu.com.br/api/v1/alertas-vencimento`.
- **Headers:** 
  - `x-api-key`: Sua `API_KEY_N8N` definida no `.env`.
- **JSON Response:** Irá retornar um array de objetos com usuários que vencem hoje ou em 5 dias.

### 3. Nó Split In Batches (Opcional)
- Processar cada usuário da lista individualmente.

### 4. Nó Conditional (IF)
- **Condição 1:** `dias_restantes == 5`.
  - **Ação:** Enviar e-mail de "Lembrete de Vencimento".
- **Condição 2:** `dias_restantes == 0`.
  - **Ação:** Enviar e-mail de "Sua Assinatura Venceu Hoje".

### 5. Nó Send Email (SMTP)
- **Template HTML Profissional (Exemplo Simplificado):**
```html
<div style="font-family: sans-serif; background: #0f172a; color: white; padding: 40px; border-radius: 20px;">
  <h1 style="color: #10b981;">Olá, {{ $node["HTTP Request"].json["nome"] }}!</h1>
  <p>Temos um recado importante sobre sua assinatura <strong>VIZZU PRO</strong>.</p>
  <p>Faltam apenas <strong>{{ $node["HTTP Request"].json["dias_restantes"] }} dias</strong> para o vencimento.</p>
  <a href="https://app.vizzu.com.br/#/checkout" style="background: #10b981; color: #0f172a; padding: 15px 25px; text-decoration: none; border-radius: 10px; font-weight: bold;">RENOVAR AGORA</a>
  <p style="margin-top: 30px; font-size: 12px; color: #64748b;">Se você já realizou o pagamento, desconsidere esta mensagem.</p>
</div>
```

---
**Nota de Segurança:** Certifique-se de que a rota `/api/v1/alertas-vencimento` esteja devidamente protegida pela chave de API para evitar vazamento de dados de clientes.
