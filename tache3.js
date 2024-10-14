// Fonction qui simule une requête API
function fetchData(shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Erreur de connexion à l\'API'));
        } else {
          resolve({ data: 'Voici les données de l\'API' });
        }
      }, 2000); // Simuler un délai de 2 secondes
    });
  }
  
  // Fonction async qui attend les données de l'API et gère les erreurs
  async function awaitCall() {
    try {
      console.log('Obtention des données...');
      const response = await fetchData(); // Attendre la réponse de l'API
      console.log('Données reçues:', response.data); // Enregistrer les données
    } catch (error) {
      console.error('Désolé, une erreur est survenue lors de la récupération des données:', error.message);
    }
  }
  
  // Appeler la fonction awaitCall avec succès
  awaitCall();
  
  // Simuler un appel échoué
  async function awaitCallWithError() {
    try {
      console.log('Tentative d\'obtention des données...');
      const response = await fetchData(true); // Passer true pour simuler une erreur
      console.log('Données reçues:', response.data);
    } catch (error) {
      console.error('Erreur:', 'Impossible de récupérer les données. Veuillez vérifier votre connexion ou réessayer plus tard.');
    }
  }
  
  // Appeler la fonction awaitCall avec une erreur simulée
  awaitCallWithError();
  