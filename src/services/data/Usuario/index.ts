import { IHome } from "../../../interfaces/Home.interface";
import api from "../../api";

class UsuarioData {
  index() {
    return api.get<IHome>('/usuario')
  }
  update(id: number, data: string) {
    console.log(id, data)
    return api.put<IHome>(`/usuario/${id}`, { hobbie: data })
  }
}

export default new UsuarioData();