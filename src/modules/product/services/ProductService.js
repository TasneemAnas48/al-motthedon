import Client from "@/clients/AxiosClient";

export default {
  getAll() {
    return Client.get("/products");
  },
  getById(id) {
    return Client.get(`/products/${id}`);
  },
  getLatest(){
    return Client.get("/products?limit=6");
  },
  getByCat(category){
    return Client.get(`/products/category/${category}`)
  }
};