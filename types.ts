
export enum Cargo {
  ADMIN = 'ADMIN',
  CLIENTE = 'CLIENTE'
}

export enum StatusAssinatura {
  ATIVO = 'ATIVO',
  PENDENTE = 'PENDENTE',
  VENCIDO = 'VENCIDO'
}

export enum Plano {
  STARTER = 'STARTER',
  PRO = 'PRO',
  BUSINESS = 'BUSINESS'
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  cargo: Cargo;
}

export interface Assinatura {
  id: string;
  usuario_id: string;
  status: StatusAssinatura;
  plano: Plano;
  data_inicio: string;
  data_vencimento: string;
  id_transacao_pagamento?: string;
}

export interface MetricasUso {
  usuario_id: string;
  dispositivos_atuais: number;
  limite_dispositivos: number;
}
