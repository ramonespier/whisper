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
      credentials: 'include'
    })

    
    const data = await response.json()
    console.log(data.message)

    console.log("Resposta do servidor:", data)
  }

