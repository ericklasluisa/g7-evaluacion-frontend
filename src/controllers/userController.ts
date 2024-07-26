import axios from "axios";

interface respuestaLogin {
  token: string;
  user: {
    id: number;
    username: string;
  };
}

export default class UsuarioController {
  usuarioAPI = axios.create({
    baseURL: "http://localhost:8000/auth",
  });

  public async login(
    username: string,
    password: string
  ): Promise<respuestaLogin> {
    try {
      const response = await this.usuarioAPI.post("/signin", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error((error as any).response.data.message);
    }
  }
}
