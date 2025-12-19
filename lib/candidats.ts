export async function sendCandidatForm(data: {
  prenom: string;
  nom: string;
  email: string;
  phone: string;
  activity: string;
  experience: string;
  capital: string;
  motivation: string;
  referral?: string;
  conditionAccepte: boolean;
  activateNotifs?: boolean;
}): Promise<string | {success: boolean; message: string}>{
  try {
    const resp = await fetch("http://localhost:3001/api/candidats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const json = await resp.json();
    console.log("Réponse du serveur :", json);
    
    return json.message;
    
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire :", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi du formulaire."
     
    };
  }
}
