"use server"

import { redirect } from "next/navigation"

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
  const response = new Response()
  response.headers.set("Set-Cookie", "admin-auth=; Path=/; HttpOnly; Max-Age=0")
  redirect("/admin/login")
}
