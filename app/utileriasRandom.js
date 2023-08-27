const utileriasRandom = () => {
    function getRandomNumero() {
        const randomDecimal = Math.random();
        const randomNumero = Math.floor(randomDecimal * 3) + 1;
        console.log(randomNumero);
        return randomNumero;
    }
    return { getRandomNumero }
}

export default utileriasRandom;