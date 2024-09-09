import Client from "@/clients/AxiosClient";

export default {
    getAll() {
        return Client.get("/products/categories");
    },
};