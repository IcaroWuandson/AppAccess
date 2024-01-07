import axios from "axios";

const baseURL = "https://mkaccess.com.br:8088/api/v1/application";

const headers = {
  "Content-Type": "application/json",
  token: "fd7c91d13c57be8d7d8f5f2a2e4cfb28",
};

const createAPIInstance = () => {
  return axios.create({
    baseURL: baseURL,
    headers: headers,
  });
};

const api = createAPIInstance();
const apiTemporaryRelease = createAPIInstance();

export const consultaAPI = async (cpfCnpj) => {
  try {
    const response = await api.post("/autentication", { cpfCnpj });

    if (response.data && response.data.success) {
      const contracts = response.data.contracts;

      if (contracts && contracts.length > 0) {
        const contract = contracts[0];

        const userData = {
          nome: contract.nome,
          plano: contract.plano,
          vencimento: contract.vencimento,
          endereco: contract.endereco,
          numero: contract.numero,
          referencia: contract.referencia,
          bairro: contract.bairro,
          cidade: contract.cidade,
          estado: contract.estado,
          status: contract.status,
          data_cadastroF: contract.data_cadastroF,
        };

        const cpfCnpj = response.data.cpfCnpj;
        const records = response.data.records;

        return {
          userData: userData,
          ...response.data,
          cpfCnpj: cpfCnpj,
          records: records,
        };
      } else {
        throw new Error("Nenhum contrato encontrado");
      }
    } else {
      throw new Error("Falha na autenticação ou dados inválidos");
    }
  } catch (error) {
    throw error;
  }
};

export const liberaTemporariamenteAPI = async (boleto, refreshCallback) => {
  try {
    const segundaResposta = await apiTemporaryRelease.post(
      "/temporaryRelease",
      {
        idClient: boleto.idClient,
        code: boleto.code,
      }
    );
    return segundaResposta.data;
  } catch (error) {}
};

export default api;
