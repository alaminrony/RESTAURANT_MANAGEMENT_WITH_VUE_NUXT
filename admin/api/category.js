const CategoryApi = {
  getCategoriesHtmlTree(axios, exceptId = null){
    // alert(exceptId);return false;
    const except = exceptId ? "?except_id=" + exceptId : "";
    return axios.$get("/api/category/htmltree" + except);
  },
  create: (axios, payload) => {
    return axios.$post("/api/category/store", payload);
  },
  list: (axios, payload = null) => {
    let payload_arr = [];

    if (payload) {
      for (let key in payload) {
        payload_arr.push(key + "=" + payload[key]);
      }
    }

    return axios.$get("/api/category/list?" + payload_arr.join("&"));
  },
  delete: (axios, id) => {
    return axios.$delete("/api/category/" + id);
  },
  show: (axios, id) => {
    console.log(id);
    return axios.$get(`/api/category/${id}/show`);
  },
  async update(axios, payload, id) {
    return await axios.$put(`/api/category/${id}/update`, payload);
  },
};

export { CategoryApi };
