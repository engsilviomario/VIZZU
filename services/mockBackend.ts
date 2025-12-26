
/**
 * Este arquivo descreve as rotas de backend solicitadas.
 * Em um ambiente Next.js real, estas seriam colocadas em /pages/api ou /app/api.
 */

import { StatusAssinatura } from '../types';

/**
 * 1. Rota de Webhook (POST /api/webhook/pagamento)
 * Lógica de negócio: Confirmar pagamento e estender assinatura.
 */
export async function handleWebhookPagamento(payload: { transaction_id: string, user_email: string, status: string }) {
  if (payload.status === 'confirmed') {
    // No backend real com Prisma:
    // const user = await prisma.usuario.findUnique({ where: { email: payload.user_email } });
    // const today = new Date();
    // const expirationDate = new Date(today.setDate(today.getDate() + 30));
    
    // await prisma.assinatura.update({
    //   where: { usuario_id: user.id },
    //   data: {
    //     status: Cargo.ATIVO,
    //     data_vencimento: expirationDate,
    //     id_transacao_pagamento: payload.transaction_id
    //   }
    // });
    
    console.log(`Assinatura de ${payload.user_email} atualizada para ATIVO. Expira em 30 dias.`);
    return { success: true };
  }
  return { success: false };
}

/**
 * 2. Rota de API Protegida (GET /api/v1/alertas-vencimento)
 * Consumida pelo N8N para alertas de 5 dias ou expiração hoje.
 */
export async function listAlertaVencimento(apiKey: string) {
  // Autenticação simples para o N8N
  if (apiKey !== process.env.API_KEY_N8N) {
    throw new Error('Acesso Não Autorizado');
  }

  // Lógica Prisma:
  // const hoje = new Date();
  // const daquiA5Dias = new Date(new Date().setDate(hoje.getDate() + 5));
  
  // const usuariosParaAlertar = await prisma.usuario.findMany({
  //   where: {
  //     assinatura: {
  //       data_vencimento: {
  //         in: [hoje, daquiA5Dias]
  //       }
  //     }
  //   },
  //   include: { assinatura: true }
  // });

  // Simulação de retorno:
  return [
    { nome: 'João Silva', email: 'joao@exemplo.com', dias_restantes: 5 },
    { nome: 'Maria Costa', email: 'maria@exemplo.com', dias_restantes: 0 }
  ];
}
