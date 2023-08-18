

export const replaceIbge = (endPoint: string, codigoIBGE: string) => {
    return endPoint.replace("{CODIGO_IBGE}", codigoIBGE);
}