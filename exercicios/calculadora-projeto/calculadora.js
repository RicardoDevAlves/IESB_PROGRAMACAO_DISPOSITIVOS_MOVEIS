export const somar = (numA, numB) => {
    return numA + numB;
};

export const subtrair = (numA, numB) => {
    return numA - numB;
};

export const multiplicar = (numA, numB) => {
    return numA * numB;
};

export const dividir = (numA, numB) => {
    if (numB === 0) {
        throw new Error("Erro: Divisão por zero não é permitida.");
    }
    return numA / numB;
};
