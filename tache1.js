    // Fonction pour créer une pause de 1 seconde
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Fonction async qui itère sur un tableau avec un délai d'une seconde
    async function iterateWithAsyncAwait(values) {
        for (let value of values) {
        console.log(value);
        // Attendre 1 seconde (1000 ms) avant de passer à la prochaine itération
        await delay(1000);
        }
    }
    
    // Exemple d'utilisation
    const array = [1, 2, 3, 4, 5];
    iterateWithAsyncAwait(array);
    