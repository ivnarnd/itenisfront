export const getDate = (dateParam) => {
    if (dateParam) {
        return new Date(dateParam).toISOString().slice(0, 10);
    }
    return new Date().toISOString().slice(0, 10);
};
export const getSoon = (dateParam) => {
    let dateAux = new Date(dateParam);
    dateAux = new Date(dateAux.setDate(dateAux.getDate() + 1));
    dateAux = dateAux.toISOString().slice(0, 10);
    return dateAux;
};
export const transformDate = (date) => {
    let dateAux = [...date];
    let anio = dateAux.slice(0, 4).join("");
    let mes = dateAux.slice(5, 7).join("");
    let dia = dateAux.slice(8, 10).join("");
    return dia + "/" + mes + "/" + anio;
};
