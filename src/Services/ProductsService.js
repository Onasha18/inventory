import axios from "axios";

const PRODUCTS_API_BASE_URL = "http://localhost:8086/api/v1/products";
const PRODUCTS_API_BASE_URL_ADDNEW = "http://localhost:8086/api/v1/products/add-new";
const PRODUCTS_API_BASE_URL_UPDATE = "http://localhost:8086/api/v1/products/update-product";
const PRODUCTS_API_BASE_URL_DELETE = "http://localhost:8086/api/v1/products/delete-product";


class ProductsService{

    getAllProducts(){
        return axios.get(PRODUCTS_BASE_URL);
    }

    addNewProduct(product){
        return axios.post(PRODUCTS_API_BASE_URL_ADDNEW,product);

    }

   

    updateProduct(product,id){
        return axios.put(PRODUCTS_API_BASE_URL_UPDATE + '/' + id,product);
    }
    deleteProducr(id){
        return axios.delete(PRODUCTS_API_BASE_URL_DELETE + '/' + id);
    }
}

export default new ProductsService()
