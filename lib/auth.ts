const API_BASE_URL = 'http://localhost:3001/api';
export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      role: any;
    };
    token: string;
  };
}

//methode pour l'inscription 
export class AuthService {
 
static async register(data: RegisterData): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });
    
   
    const result = await response.json();
    
    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Erreur d\'inscription');
    }

    return result; 
  } catch (error: any) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Impossible de contacter le serveur');
    }
    throw error;
  }
}

  
// methode pour la connexion
  static async login(credentials: { email: string; password: string }): Promise<AuthResponse> {
      try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
       credentials: 'include'
    });
    
   
    const data = await response.json();
    if (!response.ok || !data.success) {

      throw new Error(data.message || 'Erreur de connexion');
    }
    console.log("data",data);
    return data;
  } 
catch (error: any) {
    throw new Error(error.message)
  }
}
}
