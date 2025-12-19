// Correct : retourne directement le tableau
export async function getBlogs() {
  try {
    const res = await fetch("http://localhost:3001/api/blog");
    const json = await res.json();
    //pour avoir les données envoyées par le back
    
    return json.data;
  } catch (error) {
    console.error("Erreur fetch:", error);
    return [];
  }
}
