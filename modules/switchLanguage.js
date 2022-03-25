import en from '../languages/en'
import fa from '../languages/fa'

export default switchLanguage = (lan) => {
    switch (lan) {
        case 'en': return en
        case 'fa': return fa
        default: return en
    }
}
