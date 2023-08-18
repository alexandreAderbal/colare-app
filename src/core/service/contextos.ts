const Contextos = {
  BASE_URL: "http://ws.tcm.go.gov.br/api/rest",
  MUNICIPIOS: "passaporteService/municipios",
  UNIDADES_GESTORAS: "passaporteService/{CODIGO_IBGE}/unidadesGestoras",
  REPRESENTACOES: "passaporteService/{CODIGO_IBGE}/representacoes",
  LEGISLACAOES: "colareService/{CODIGO_IBGE}/legislacoes",
  ENTREGAS: "colareService/5200050/status",
  RREO: "passaporteService/municipios/00050/{ano}/rreo",
  RGF_PODER_EXECUTIVO: "passaporteService/municipios/00050/{ano}/executivo/rgf",
  FOLHA_PAGAMENTO_RESUMIDA: "colareService/5200050/{ano}/{mes}/obterEnviosFolhaDePagamento",
  CONCESSAO_VANTAGEM_DESCONTO: "/colareService/5200050/{ano}/{mes}/obterEnviosConcessaoDesconto",
  // "LISTAGEM DOS CARGOS": "colareService/5200050/cargos",
  // "LISTAGEM DOS ID's DAS ENTREGAS POR ANO": "colareService/5200050/{ano}/{codigoUnidadeGestora}/{siglaPrestacaoDeContas}/obterEnvios",
  // "CONSULTA RGF PODER LEGISLATIVO": "https://ws.tcm.go.tc.br/api/rest/passaporteService/municipios/00050/{ano}/legislativo/rgf",
  // "LISTAGEM DOS ENVIOS NÃO HOMOLOGADOS": "colareService/5200050/enviosNaoHomologados",
  // "CONSULTA RECEITAS E DESPESAS COVID-19": "colareService/5200050/receitaDespesaCovid",
  // "CONSULTA FOLHA DE PAGAMENTO DETALHADA": "colareService/5200050/{ano}/{mes}/obterEnviosFolhaDePagamentoDetalhada",
  // "LISTAGEM DOS ID's DAS ENTREGAS POR ANO E MES": "colareService/5200050/{ano}/{mes}/{codigoUnidadeGestora}/{siglaPrestacaoDeContas}/obterEnvios",
  // "CONSULTA CONCESSÃO VANTAGEM GERAL": "colareService/5200050/{ano}/{mes}/obterEnviosConcessaoGeral",
  // "LISTAGEM DOS VERBAS": "colareService/5200050/verbas",
};

export default Contextos;


