import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_BASE_URL = "http://localhost:3001";

export const handleLogin = async (formData) => {
  'use server'

  const email = formData.get('email')
  const password = formData.get('password')

  console.log("Dados recebidos no servidor:", { email, password })

  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  console.log(data.message)

  if (response.ok) {
    const token = data.token;

    cookies().set('Token', token, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 3600000
    });

    console.log('Login bem sucedido e token armazenado em cookie.');

    redirect('/user')

  } else {
    console.error("Falha no login:", data.message)
  }

  console.log("Resposta do servidor:", data)
}

