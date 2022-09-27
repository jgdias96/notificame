import { https } from './config'

export default {
  lista: () => {
    return https.get('informacao')
  },
  listaAvisos: () => {
    return https.get('informacao/categoria/1')
  },
  listaOutros: () => {
    return https.get('informacao/categoria/4')
  }
}
