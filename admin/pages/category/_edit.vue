<template>
  <div class="main-content">
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <loader></loader>
        <status-messages></status-messages>
        <form method="post" action="#" @submit.prevent="update()">
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <strong>Update Category #{{ this.id }}</strong>
                </div>
                <div class="card-body card-block">
                  <div class="form-group">
                    <label for="title" class="form-control-label">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter category title"
                      class="form-control"
                      v-model="title"
                    />
                  </div>
                  <div class="form-group">
                    <label for="parent_id" class="form-control-label"
                      >Parent</label
                    >
                    <select
                      id="parent_id"
                      name="parent_id"
                      class="form-control"
                      v-model="parent_id"
                      v-html="categoryTree"
                    ></select>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="row">
            <button type="submit" class="btn btn-lg btn-info btn-block">
              <i class="fa fa-save fa-lg"></i> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import statusMessages from "../../components/helpers/statusMessages";
import Loader from "../../components/helpers/loader";


export default {
  name: "edit",
  middleware: "auth",
  head() {
    return {
      title: "Category Edit",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Category Edit description",
        },
      ],
    };
  },
  components: {
    Loader,
    statusMessages,
  },
  data() {
    return {
      id: "",
    };
  },
  fetch() {
    this.$store.dispatch(
      "category/getCategoryHtmlTree",
      this.$route.params.edit
    );
  },
  computed: {
    title: {
      set(title) {
        this.$store.commit("category/setTitle", title);
      },
      get() {
        return this.$store.state.category.category.title;
      },
    },
    parent_id: {
      set(parent_id) {
        this.$store.commit("category/setParentId", parent_id);
      },
      get() {
        return this.$store.state.category.category.parent_id;
      },
    },

    categoryTree() {
      return this.$store.state.category.categoryHtmlTree;
    },
  },
  methods: {
    update() {
      this.$store.dispatch("category/updateCategory", {
        data: this.$store.state.category.category,
        id: this.id,
        router: this.$router,
      });
    },
  },
  mounted() {
    if (this.$route.params.edit) {
      this.id = this.$route.params.edit;
      this.$store.dispatch("category/showCategory", this.$route.params.edit);
    }
  },
};
</script>

<style scoped>
</style>
