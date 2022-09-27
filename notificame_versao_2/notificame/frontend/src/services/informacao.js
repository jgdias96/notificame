import { https } from './config'

export default {
  lista: () => {
    return https.get('informacao')
  }
}
