"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { loginAdmin, loginUser, registerUser } from "@/app/actions"
import { Loader2, Lock, Mail, Eye, EyeOff, User, ArrowRight, Sparkles, TrendingUp, DollarSign, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  //
  const { user, loading } = useAuth()
  const router = useRouter()
    //rediriger si l'utilisateur est déjà connecté
  useEffect(() => {
    if (!loading && user) {
      router.push('/')
    }
  }, [user, loading, router])
  // Auto-clear message après 3 secondes
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("")
        setMessageType(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [message])

  // Afficher un loader pendant la vérification
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

    // Ne pas afficher la page de login si l'utilisateur est connecté
  if (user) {
    return null
  }
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  
  setIsSubmitting(true)
  setMessage("")
  setMessageType(null)
  
  try {
    if (isLogin) {
      await loginUser(formData)
      setMessage("Connexion réussie ! Redirection...")
      setMessageType("success")
      setTimeout(() => window.location.href = '/admin', 1000)
    } else {
      const password = formData.get("password") as string
      const confirmPassword = formData.get("confirmPassword") as string
      
      if (password !== confirmPassword) {
        setMessage("Les mots de passe ne correspondent pas")
        setMessageType("error")
        return
      }
      
      const resp = await registerUser(formData)
      
      if (resp.success) {
        setMessage("Inscription réussie ! Redirection...")
        setMessageType("success")
        setTimeout(() => window.location.href = '/auth/login', 1000)
      } else {
        setMessage(resp.message)
        setMessageType("error")
      }
    }
  } catch (error: any) {
    setMessage(error.message)
    setMessageType("error")
  } finally {
    setIsSubmitting(false)
  }
}



  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          
          {/* Section Illustration - Côté gauche */}
          <div className="hidden lg:flex flex-col justify-center space-y-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Investissez dans votre avenir
              </h1>
              <p className="text-xl text-muted-foreground">
                Rejoignez des milliers d'investisseurs qui font confiance à NEXUS
              </p>
            </div>

            {/* Illustration 3D avec CSS */}
            <div className="relative flex justify-center">
              <div className="relative w-80 h-80">
                {/* Cercles animés en arrière-plan */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-violet-400/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/30 to-violet-500/30 animate-pulse delay-1000"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-600/40 to-violet-600/40 animate-pulse delay-500"></div>
                
                {/* Éléments flottants */}
                <div className="absolute top-8 left-8 p-4 bg-white rounded-xl shadow-lg animate-bounce">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="absolute top-16 right-8 p-4 bg-white rounded-xl shadow-lg animate-bounce delay-300">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <div className="absolute bottom-16 left-16 p-4 bg-white rounded-xl shadow-lg animate-bounce delay-700">
                  <BarChart3 className="h-8 w-8 text-violet-600" />
                </div>
                
                {/* Centre avec logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                        NEXUS
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Votre plateforme d'investissement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-muted-foreground">Investisseurs</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-violet-600">€2M+</div>
                <div className="text-sm text-muted-foreground">Investis</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">15%</div>
                <div className="text-sm text-muted-foreground">ROI Moyen</div>
              </div>
            </div>
          </div>

          {/* Section Formulaire - Côté droit */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-2xl">
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                    <div className="relative p-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full backdrop-blur-sm border border-purple-200">
                      {isLogin ? (
                        <Lock className="h-8 w-8 text-purple-600" />
                      ) : (
                        <User className="h-8 w-8 text-purple-600" />
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-3xl font-bold">
                    {isLogin ? "Connexion" : "Inscription"}
                  </CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <span className="text-xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-semibold">
                      NEXUS
                    </span>
                    <Sparkles className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {isLogin ? "Accédez à votre espace" : "Créez votre compte"}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top duration-300">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          
                          placeholder="John"
                          className="focus:border-purple-400 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          
                          placeholder="Doe"
                          className="focus:border-purple-400 transition-all duration-300"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-purple-600 transition-colors duration-300" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                       
                        placeholder={isLogin ? "admin@nexus.com" : "votre@email.com"}
                        className="pl-10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-purple-600 transition-colors duration-300" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        
                        placeholder="••••••••"
                        className="pl-10 pr-10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2 animate-in slide-in-from-top duration-300">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-purple-600 transition-colors duration-300" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          
                          placeholder="••••••••"
                          className="pl-10 pr-10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                {message && (
  <div className={`
    text-sm text-center rounded-lg p-3 animate-in slide-in-from-top duration-300 transition-all
    ${messageType === "success" 
      ? "text-green-700 bg-green-50 border border-green-200" 
      : "text-red-600 bg-red-50 border border-red-200"
    }
  `}>
    <div className="flex items-center justify-center space-x-2">
      {messageType === "success" ? (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )}
      <span>{message}</span>
    </div>
  </div>
)}


                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isLogin ? "Connexion..." : "Inscription..."}
                      </>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>{isLogin ? "Se connecter" : "S'inscrire"}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-muted-foreground">ou</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm group"
                  >
                    {isLogin ? (
                      <>
                        Pas encore de compte ?{" "}
                        <span className="text-purple-600 group-hover:text-purple-700 font-semibold">
                          S'inscrire
                        </span>
                      </>
                    ) : (
                      <>
                        Déjà un compte ?{" "}
                        <span className="text-purple-600 group-hover:text-purple-700 font-semibold">
                          Se connecter
                        </span>
                      </>
                    )}
                  </button>

                  <Link 
                    href="/"
                    className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm group"
                  >
                    <span>Retour à l'accueil</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
