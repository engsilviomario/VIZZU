
/**
 * Rota: GET /api/v1/alertas-vencimento
 * Filtra usuários com vencimento em 0 ou 5 dias.
 */
export async function GET(req: Request) {
  const apiKey = req.headers.get('x-api-key');

  if (apiKey !== process.env.API_KEY_N8N) {
    return new Response(JSON.stringify({ erro: 'Não autorizado' }), { status: 401 });
  }

  // Lógica de busca no Prisma simulada:
  const hoje = new Date().toISOString().split('T')[0];
  const daquiA5Dias = new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0];

  /** 
   * No Prisma real seria:
   * const usuarios = await prisma.usuario.findMany({
   *   where: {
   *     assinatura: {
   *       data_vencimento: { in: [new Date(hoje), new Date(daquiA5Dias)] }
   *     }
   *   },
   *   select: { nome: true, email: true, assinatura: { select: { data_vencimento: true } } }
   * });
   */

  const mockUsuarios = [
    { nome: 'Empresa Alpha', email: 'contato@alpha.com', vencimento: daquiA5Dias, tipo: 'LEMBRETE_5_DIAS' },
    { nome: 'Tecnologia Beta', email: 'admin@beta.com', vencimento: hoje, tipo: 'VENCIMENTO_HOJE' }
  ];

  return new Response(JSON.stringify(mockUsuarios), { status: 200 });
}
