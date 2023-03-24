
import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1500)
    })
}