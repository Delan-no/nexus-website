"use server"

import { redirect } from "next/navigation"
import { AuthService } from "@/lib/auth";

// Simulation d'une base de données en mémoire
const accessRequests: any[] = []
const contactMessages: any[] = []

export async function submitAccessRequest(formData: FormData) {
  const data = {
    id: Date.now().toString(),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    activity: formData.get("activity"),
    experience: formData.get("experience"),
    capital: formData.get("capital"),
    motivation: formData.get("motivation"),
    referral: formData.get("referral"),
    terms: formData.get("terms"),
    newsletter: formData.get("newsletter"),
    createdAt: new Date().toISOString(),
  }

  accessRequests.push(data)

  // Simulation d'un délai de traitement
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

export async function submitContactMessage(formData: FormData) {
  const data = {
    id: Date.now().toString(),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    createdAt: new Date().toISOString(),
  }

  contactMessages.push(data)

  // Simulation d'un délai de traitement
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

export async function getAccessRequests() {
  return accessRequests.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function getContactMessages() {
  return contactMessages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password")

  if (password === "nexus2024") {
    // Simulation d'une authentification simple avec cookie
    const response = new Response()
    response.headers.set("Set-Cookie", "admin-auth=true; Path=/; HttpOnly; Max-Age=86400")
    redirect("/admin")
  } else {
    throw new Error("Mot de passe incorrect")
  }
}

export async function logoutAdmin() {
  (await cookies()).delete('auth_token')
  redirect("/auth/login")
}





//action pour le register
//cette action est appelée lors de l'inscription d'un utilisateur
//elle envoie les données du formulaire à l'API pour créer un nouvel utilisateur
// export async function registerUser(formData: FormData) {

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const firstName = formData.get("firstName") as string;
//   const lastName = formData.get("lastName") as string;

//   try {
//     const response = await AuthService.register({
//       email,
//       password,
//       firstName,
//       lastName
//     });
//     //condition pour vérifier si la réponse est un succès
//    if (typeof window !== 'undefined' && response.data?.token) {
//       localStorage.setItem('auth_token', response.data.token);
//     }
// console.log(response);
//     return response;
//   } catch (error: any) {
//     return {
//       success: false,
//       message: error.message || 'Erreur lors de l\'inscription, veillez revoir vos informations',
      
//   }
// }
// }

//action pour le login
// export async function loginUser(formData: FormData) {
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   try {
//     const response = await AuthService.login({ email, password });
    
//     // Stocker le token
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('auth_token', response.data.token);
//     }

//     return response;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// }

// export async function logoutUser() {
//   await fetch(`${process.env.API_BASE_URL || 'http://localhost:3001/api'}/auth/logout`, {
//     method: 'POST',
//     credentials: 'include'
//   })
//   redirect("/auth/login")
// }

// export async function getCurrentUser() {
//   try {
//     const response = await fetch(`${process.env.API_BASE_URL || 'http://localhost:3001/api'}/auth/me`, {
//       credentials: 'include'
//     })

//     if (!response.ok) return null

//     const data = await response.json()
//     return data.data.user
//   } catch (error) {
//     return null
//   }
// }



import { cookies } from "next/headers"

// Actions existantes inchangées...



 export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string

  try {
    const response = await fetch(`http://localhost:3001/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName })
    })

    const result = await response.json()
    
    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Erreur d\'inscription')
    }

    // Redirection vers la page de connexion après inscription réussie
    return result
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Erreur lors de l\'inscription'
    }
  }
}



export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const response = await fetch(`http://localhost:3001/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const result = await response.json()
    
    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Erreur de connexion')
    }

    // Récupérer le cookie depuis la réponse du backend
    const setCookieHeader = response.headers.get('set-cookie')
    if (setCookieHeader) {
      const tokenMatch = setCookieHeader.match(/auth_token=([^;]+)/)
      if (tokenMatch) {
        (await cookies()).set('auth_token', tokenMatch[1], {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 7 * 24 * 60 * 60
        })
      }
    }

    return result
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function logoutUser() {
  (await cookies()).delete('auth_token')
  redirect("/auth/login")
}

export async function getCurrentUser() {
  try {
    const token = (await cookies()).get('auth_token')?.value
    
    if (!token) return null

    const response = await fetch(`http://localhost:3001/api/auth/me`, {
      credentials: 'include',
      headers: {
        'Cookie': `auth_token=${token}`
      }
    })

    if (!response.ok) {
      (await cookies()).delete('auth_token')
      return null
    }

    const data = await response.json()
    return data.data.user
  } catch (error) {
    (await cookies()).delete('auth_token')
    return null
  }
}
