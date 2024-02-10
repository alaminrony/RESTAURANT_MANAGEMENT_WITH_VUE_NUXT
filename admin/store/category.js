import { CategoryApi } from "../api/category";
export const state = () => ({
  category: {
    title: "",
    parent_id: "",
  },
  categoryHtmlTree: "",
  features: [],
  filterData: {
    id: "",
    title: "",
    parent_id: "",
  },
  page: 1,
  categoryList: {},
  pagination: {},
});

export const mutations = {
  setTitle(state, title) {
    state.category.title = title;
  },
  setParentId(state, parent_id) {
    state.category.parent_id = parent_id;
  },

  setCategoryHtmlTree(state, tree) {
    state.categoryHtmlTree = tree;
  },
  resetCategory(state) {
    state.category = {
      title: "",
      parent_id: "",
    };
  },

  setCategoryList(state, category_list) {
    state.categoryList = category_list;
  },
  setCategoryPagination(state, pagination) {
    state.pagination = pagination;
  },
  setPage(state, page) {
    state.page = page;
  },
  setFilterData(state, value) {
    state.filterData[value.key] = value.val;
  },
};

export const actions = {
  getCategoryHtmlTree({ commit }, exceptId = null) {
    CategoryApi.getCategoriesHtmlTree(this.$axios, exceptId).then(
      (response) => {
        console.log(response);
        let html = '<option value="">--Select Category--</option>';
        html += response;
        commit("setCategoryHtmlTree", html);
      }
    );
  },
  create({ commit }, payload) {
    commit("shared/resetStatusMessagesParameters", null, { root: true });
    commit(
      "shared/setStatusMessageParameter",
      { key: "showLoading", val: true },
      { root: true }
    );

    const dataToSend = payload.data;


    CategoryApi.create(this.$axios, dataToSend)
      .then((response) => {
        commit(
          "shared/setStatusMessageParameter",
          { key: "showLoading", val: false },
          { root: true }
        );
        if (response.success) {
          commit(
            "shared/setStatusMessageParameter",
            { key: "success_message", val: response.message },
            { root: true }
          );
        }

        setTimeout(() => {
          payload.router.push("/category");
        }, 2000);
      })
      .catch((err) => {
        commit(
          "shared/setStatusMessageParameter",
          { key: "showLoading", val: false },
          { root: true }
        );
        if (err.response.data) {
          commit(
            "shared/setStatusMessageParameter",
            { key: "error_message", val: err.response.data.message },
            { root: true }
          );
          if (err.response.data.errors) {
            let errors = [];
            for (let key in err.response.data.errors) {
              errors.push(err.response.data.errors[key][0]);
            }

            commit(
              "shared/setStatusMessageParameter",
              { key: "validation_errors", val: errors },
              { root: true }
            );
          }
        }
      })
      .finally(() => {
        setTimeout(() => {
          commit("shared/resetStatusMessagesParameters", null, { root: true });
          commit("resetCategory");
        }, 3000);
      });
  },
  listCategories({ commit }, payload = null) {
    // console.log(payload);return false;
    CategoryApi.list(this.$axios, payload).then((response) => {
      commit("setCategoryList", response.data.categories);
      commit("setCategoryPagination", response.meta);
    });
  },
  deleteCategory({ commit, state }, id) {
    commit("shared/resetStatusMessagesParameters", null, { root: true });
    commit(
      "shared/setStatusMessageParameter",
      { key: "showLoading", val: true },
      { root: true }
    );

    CategoryApi.delete(this.$axios, id)
      .then((response) => {
        commit(
          "shared/setStatusMessageParameter",
          { key: "showLoading", val: false },
          { root: true }
        );
        if (response.success) {
          let categoryList = { ...state.categoryList };
          // console.log(categoryList);return false;
          categoryList.data = categoryList.data.filter(
            (item) => item.id !== id
          );

          commit("setCategoryList", categoryList);
          commit(
            "shared/setStatusMessageParameter",
            { key: "success_message", val: response.message },
            { root: true }
          );
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          commit("shared/resetStatusMessagesParameters", null, { root: true });
        }, 3000);
      });
  },
  showCategory({ commit }, id) {
    // alert(id);return false;
    commit("shared/resetStatusMessagesParameters", null, { root: true });
    commit(
      "shared/setStatusMessageParameter",
      { key: "showLoading", val: true },
      { root: true }
    );

    CategoryApi.show(this.$axios, id)
      .then((response) => {
        console.log(response);
        commit(
          "shared/setStatusMessageParameter",
          { key: "showLoading", val: false },
          { root: true }
        );

        if (response.category) {
          commit("setTitle", response.category.title);
          commit("setParentId", response.category.parent_id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateCategory({ commit }, payload) {
    // console.log(payload);return false;
    commit("shared/resetStatusMessagesParameters", null, { root: true });
    commit(
      "shared/setStatusMessageParameter",
      { key: "showLoading", val: true },
      { root: true }
    );

    const dataToSend = payload.data;
    dataToSend.features = payload.features;

    CategoryApi.update(this.$axios, dataToSend, payload.id)
      .then((response) => {
        commit(
          "shared/setStatusMessageParameter",
          { key: "showLoading", val: false },
          { root: true }
        );
        if (response.success) {
          commit(
            "shared/setStatusMessageParameter",
            { key: "success_message", val: response.message },
            { root: true }
          );
        }

        setTimeout(() => {
          payload.router.push("/category");
        }, 2000);
      })
      .catch((err) => {
        commit(
          "shared/setStatusMessageParameter",
          { key: "showLoading", val: false },
          { root: true }
        );
        if (err.response.data) {
          commit(
            "shared/setStatusMessageParameter",
            { key: "error_message", val: err.response.data.message },
            { root: true }
          );
          if (err.response.data.errors) {
            let errors = [];
            for (let key in err.response.data.errors) {
              errors.push(err.response.data.errors[key][0]);
            }

            commit(
              "shared/setStatusMessageParameter",
              { key: "validation_errors", val: errors },
              { root: true }
            );
          }
        }
      })
      .finally(() => {
        setTimeout(() => {
          commit("shared/resetStatusMessagesParameters", null, { root: true });
          commit("resetCategory");
        }, 3000);
      });
  },
};
