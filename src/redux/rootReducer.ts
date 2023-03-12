import product from '../redux/productStore'
import cart from '../redux/cartStore'
import search from '../redux/searchStore'

const rootReducer = {
    search,
    cart,
    product,
}
export default rootReducer
