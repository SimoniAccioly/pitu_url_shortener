import baseAPI from "./api";

//class com as funções que eu preciso para a aplicação
//é um modelo que faz a chamada para a API
//toda class tem o constructor
class ShortenerService {
  constructor() {
    this.api = baseAPI("http://localhost:3001");
  }

  //obter o link a partir do códig que o usuario passar
  async getLink(code) {
    const result = await this.api.get(`links/${code}`);

    return result.data;
  }

  async getStats(code) {
    const result = await this.api.get(`links/${code}/stats`);

    return result.data;
  }

  async generate(model) {
    const result = await this.api.post('links', model);

    return result.data
  }
}

export default ShortenerService;
