// Fonction qui simule une requête API
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Voici les données de l\'API' });
      }, 2000); // Simuler un délai de 2 secondes pour la réponse de l'API
    });
  }
  
  // Fonction async qui attend les données de l'API et les affiche
  async function awaitCall() {
    try {
      console.log('Obtention des données...');
      const response = await fetchData(); // Attendre la réponse de l'API
      console.log('Données reçues:', response.data); // Enregistrer les données
    } catch (error) {
      console.error('Erreur lors de l\'appel API:', error); // Gérer les erreurs
    }
  }
  
  // Appeler la fonction awaitCall
  awaitCall();
  