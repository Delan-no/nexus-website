export async function sendContactForm(data: {
      nom: string;
      email: string;
      phone: string;
      subject: string;
      message:string;

}): Promise<string| {success: boolean; message: string; errors?: string[]}> {
    try{
        const resp = await fetch("http://localhost:3001/api/contact", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
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
