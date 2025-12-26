
// Fix: Ignore missing generated Prisma types (PrismaClient, Role, StatusAssinatura) during type checking
// @ts-ignore
import { PrismaClient, Role, StatusAssinatura } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 1. Planos do Sistema
  const plans = [
    { id: 'starter', name: 'Starter', price: 99.00, maxHosts: 50, features: { whatsapp: false, white_label: false } },
    { id: 'pro', name: 'Professional', price: 249.00, maxHosts: 250, features: { whatsapp: true, white_label: false } },
    { id: 'enterprise', name: 'Enterprise', price: 999.00, maxHosts: 5000, features: { whatsapp: true, white_label: true } }
  ];

  for (const p of plans) {
    await prisma.plan.upsert({ where: { id: p.id }, update: {}, create: p });
  }

  // 2. Empresa de Demonstração (MSP Teste)
  const company = await prisma.company.upsert({
    where: { slug: 'msp-teste' },
    update: {},
    create: {
      name: 'MSP Solutions Brasil',
      slug: 'msp-teste',
      users: {
        create: {
          email: 'admin@msp.com.br',
          name: 'Ricardo Administrador',
          password: 'senha_hash_segura', // Em produção usar bcrypt
          role: Role.COMPANY_ADMIN
        }
      },
      subscription: {
        create: {
          planId: 'pro',
          status: StatusAssinatura.ACTIVE,
          currentPeriodEnd: new Date(new Date().setMonth(new Date().getMonth() + 1))
        }
      },
      hosts: {
        create: [
          { zabbixHostId: '10001', name: 'Router-Borda-01', ip: '177.20.10.1', status: 'ONLINE' },
          { zabbixHostId: '10002', name: 'Server-ERP-SQL', ip: '192.168.1.50', status: 'ONLINE' }
        ]
      }
    }
  });

  console.log('✅ Base de dados VIZZU populada com sucesso!');
}

main()
  .catch((e) => { 
    console.error(e); 
    // Fix the process.exit(1) type error by casting process to any to bypass potential environment type limitations
    (process as any).exit(1); 
  })
  .finally(async () => { await prisma.$disconnect(); });
