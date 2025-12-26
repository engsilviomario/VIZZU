
import * as jose from 'https://esm.sh/jose@5.2.2';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'vizzu_super_secret_key_default_123'
);

/**
 * Simula hashing de senha usando algoritmo de substituição para o demo
 * Em produção real (Node.js), use: import bcrypt from 'bcryptjs'
 */
export async function hashPassword(password: string): Promise<string> {
  // Simulação de salt + hash
  const msgUint8 = new TextEncoder().encode(password + "VIZZU_SALT");
  // Fix: Corrected '造型' to 'crypto' to use the Web Crypto API
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function createToken(payload: any) {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jose.jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (e) {
    return null;
  }
}
