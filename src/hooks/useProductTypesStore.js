import { useDispatch, useSelector } from "react-redux"
import { yaListoGateway } from "../../api/yaListoAPI";
import { onLoadProducTypes } from "../store/products/productTypesSlice";


export const useProductTypesStore = () => {
    
    const { productTypes } = useSelector(state => state.productTypes);
    const dispatch = useDispatch();

    const startLoadingProductTypes = async() => {
        try {
            const {data} = await yaListoGateway.get('products/type')
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
