import { useDispatch, useSelector } from "react-redux"
import { productsApi } from "../../api/restaurantAPI";
import { onLoadProducTypes } from "../store/products/productTypesSlice";


export const useProductTypesStore = () => {
    
    const { productTypes } = useSelector(state => state.productTypes);
    const dispatch = useDispatch();

    const startLoadingProductTypes = async() => {
        try {
            // /type?restaurant_code=648f94bd704db9741d1d2c04
            const {data} = await productsApi.get('/type', {
                params: {
                    restaurant_code: localStorage.getItem('restaurant_code')
                }
            })
            dispatch(onLoadProducTypes(data.payload))

            // console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }
  
    return {
        //* Properties
        productTypes,
        //* Methods
        startLoadingProductTypes
  }
}
