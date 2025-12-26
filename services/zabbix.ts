
/**
 * VIZZU - Zabbix Integration Service
 * Documentação Técnica: https://www.zabbix.com/documentation/current/en/manual/api
 */

const ZABBIX_URL = process.env.ZABBIX_URL || '';
const ZABBIX_USER = process.env.ZABBIX_USER || '';
const ZABBIX_PASS = process.env.ZABBIX_PASS || '';

export async function requisicaoZabbix(metodo: string, parametros: any, token: string | null = null) {
  try {
    const resposta = await fetch(ZABBIX_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json-rpc' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: metodo,
        params: parametros,
        id: Date.now(),
        auth: token
      })
    });
    return await resposta.json();
  } catch (error) {
    console.error(`Erro na chamada Zabbix API [${metodo}]:`, error);
    return { error: true, message: error };
  }
}

/**
 * Coleta histórico de um item para gerar os gráficos (ex: latência dos últimos 7 dias)
 */
export async function obterHistorico(token: string, itemid: string, limit: number = 100) {
  const result = await requisicaoZabbix('history.get', {
    output: 'extend',
    history: 0, // 0 = float, 3 = uint
    itemids: itemid,
    sortfield: 'clock',
    sortorder: 'DESC',
    limit: limit
  }, token);

  return result.result;
}

/**
 * Mapeia hosts para o cliente baseado no HostGroup do Zabbix (Tenancy Lógico)
 */
export async function listarHostsPorGrupo(token: string, groupName: string) {
  const result = await requisicaoZabbix('host.get', {
    output: ['hostid', 'name', 'status'],
    selectInterfaces: ['ip'],
    groupids: await obterGroupId(token, groupName)
  }, token);
  return result.result;
}

async function obterGroupId(token: string, name: string) {
  const result = await requisicaoZabbix('hostgroup.get', {
    filter: { name: [name] }
  }, token);
  return result.result?.[0]?.groupid;
}
