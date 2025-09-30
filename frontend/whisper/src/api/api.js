'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_BASE_URL = "http://localhost:3001";

export const handleLogin = async (formData) => {
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

    switch (data.func) {
      case 'admin':
        redirect('/admin')

      case 'user':
        redirect('/user')
    }

  } else {
    console.error("Falha no login:", data.message)
  }

  console.log("Resposta do servidor:", data)
}

export const handleRegister = async (formData) => {
  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirm = formData.get("confirm")

  if (password !== confirm) {
    console.log('Senhas não coincidem');
    return;
  }

  if (password === confirm) {
    console.log("Senha recebida no servidor: ", password)

    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log('Usuário criado:', data.name)
    redirect('/login')
  }
}

export const handleLogOut = async () => {
  const cookieStore = cookies();
  cookieStore.delete('Token')
  redirect('/login')
}

export const handleCreate = async (formData) => {
  const title = formData.get("title");
  const author = formData.get("author");
  const description = formData.get("description");
  const image = formData.get("image");
  const genre = formData.get("genre");
  const publishedYear = formData.get("publishedYear");

  const response = await fetch(`${API_BASE_URL}/admin/books`, {
    method: 'POST',
    body: JSON.stringify({ title, author, description, image, genre, publishedYear }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await response.json()

  if(response.ok) {
    return {
      status: "success",
      success: data.message || "Livro criado com sucesso"
    }

  } else {
    return {
      status: "error",
      error: data.error || "Erro interno no servidor"
    }
  }
}




