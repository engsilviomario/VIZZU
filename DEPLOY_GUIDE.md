
# 📘 VIZZU SaaS - Manual de Implantação Profissional

Este documento é o guia definitivo para implantar a VIZZU em ambiente de produção.

## 📋 Pré-requisitos
- **Servidor**: VPS Ubuntu 22.04 LTS ou superior.
- **Hardware Mínimo**: 2 vCPU, 4GB RAM, 40GB SSD.
- **Domínio**: Um domínio (ex: monitor.suaempresa.com.br) com apontamento tipo A para o IP da VPS.

## 🚀 Passo a Passo de Instalação

### 1. Preparação
Conecte-se via SSH ao seu servidor e clone o repositório:
```bash
git clone https://github.com/seu-usuario/vizzu-saas.git
cd vizzu-saas
```

### 2. Executar o Instalador
Dê permissão e execute o script automatizado. Ele fará todo o "trabalho sujo" de configurar Docker, Firewall e Nginx:
```bash
chmod +x install.sh
./install.sh
```

### 3. Configurar o Nginx
Copie o arquivo de configuração e ative o site:
```bash
sudo cp vizzu.nginx.conf /etc/nginx/sites-available/vizzu
# Edite o arquivo e mude 'seu_dominio.com.br' para seu domínio real
sudo nano /etc/nginx/sites-available/vizzu
sudo ln -s /etc/nginx/sites-available/vizzu /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Ativar SSL (HTTPS)
```bash
sudo certbot --nginx -d seu_dominio.com.br
```

### 5. Inicializar o Banco de Dados
Com os containers rodando, crie as tabelas e popule os planos:
```bash
docker exec -it vizzu_app npx prisma migrate deploy
docker exec -it vizzu_app npx prisma db seed
```

---

## 🛠️ Manutenção e Comandos Úteis

### Ver logs em tempo real
```bash
docker compose logs -f
```

### Backup do Banco de Dados
O script abaixo gera um dump completo e datado:
```bash
docker exec vizzu_db pg_dump -U vizzu_admin vizzu_db > backup_$(date +%Y%m%d).sql
```

## 🔐 Política de Segurança Aplicada
- **Isolamento**: Cada cliente (Company) é um Tenant isolado.
- **Senhas**: Nunca armazenadas em texto puro (Bcrypt via `lib/auth.ts`).
- **Comunicação**: Todo tráfego externo é forçado para HTTPS via TLS 1.3.
- **Firewall**: Apenas portas 80, 443 e 10051 (Zabbix Trapper) estão expostas. O banco de dados está protegido dentro da rede interna do Docker.

---
**Suporte Técnico**: suporte@vizzu.com.br
