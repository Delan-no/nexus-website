const API_BASE_URL = 'http://localhost:3001/api';

// Correct : retourne directement le tableau
export async function getBlogs() {
  try {
    const res = await fetch(`${API_BASE_URL}/blog`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const json = await res.json();
    //pour avoir les données envoyées par le back
    
    return json.data || [];
  } catch (error: any) {
    console.error("Erreur fetch:", error);
    // Si c'est une erreur de réseau (serveur non disponible)
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      console.error("Le serveur backend n'est pas accessible. Assurez-vous qu'il est démarré sur le port 3001.");
    }
    return [];
  }
}
