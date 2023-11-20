import { useDispatch, useSelector } from "react-redux"
import { productsApi,productGateway } from '../../api/restaurantAPI'
import { onCreateProduct, onLoadProducts, onSetActiveProduct } from "../store/products/productsSlice";

export const useProductStore = () => {
    const { products, activeProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const setActiveProduct = (product) => {
        dispatch(onSetActiveProduct(product))
    }

    const startLoadingProducts = async() => {
        try {
            //search?restaurant_code=648f94bd704db9741d1d2c04
            const {data} = await productsApi.get('/search', {
                params: {
                    restaurant_code: localStorage.getItem('restaurant_code')
                }
            })
            dispatch(onLoadProducts(data.payload))

        } catch (error) {
            console.log(error);
        }
    }

    const startCreateProduct = async(product) => {
        try {     
            console.log("LOG_VALE -----------------")  
                const newProduct = {
                    name: product.name,
                    description: product.description,
                    imageUrl: product.imageUrl,
                    stock: product.stock,
                    price: product.price,
                    productType: product.productType,
                    showInApp: true
                }
             const resp = await productGateway.post('', newProduct)    
             console.log(resp)
             dispatch(onCreateProduct(product))
             console.log(resp);
        } catch (error) {
            console.log(error);
        }        
    }

    const startUpdateProduct = async(product) => { 
       console.log(product)
    }

    return {
        //* Properties
        products,
        activeProduct,
        //* Methods 
        startLoadingProducts,
        startCreateProduct,
        startUpdateProduct,
        setActiveProduct
    }

}