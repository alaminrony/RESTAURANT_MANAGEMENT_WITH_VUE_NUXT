<template>
  <div class="main-content">
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="overview-wrap">
              <h2 class="title-1">overview</h2>
            </div>
          </div>
        </div>
        <div class="row m-t-25">
          <div class="col-sm-6 col-lg-3">
            <div class="overview-item overview-item--c1">
              <div class="overview__inner">
                <div class="overview-box clearfix">
                  <div class="icon">
                    <i class="zmdi zmdi-account-o"></i>
                  </div>
                  <div class="text">
                    <h2>10368</h2>
                    <span>Total Categories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="overview-item overview-item--c2">
              <div class="overview__inner">
                <div class="overview-box clearfix">
                  <div class="icon">
                    <i class="zmdi zmdi-shopping-cart"></i>
                  </div>
                  <div class="text">
                    <h2>388,688</h2>
                    <span>Total Menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="overview-item overview-item--c3">
              <div class="overview__inner">
                <div class="overview-box clearfix">
                  <div class="icon">
                    <i class="zmdi zmdi-calendar-note"></i>
                  </div>
                  <div class="text">
                    <h2>1,086</h2>
                    <span>Total Items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="overview-item overview-item--c4">
              <div class="overview__inner">
                <div class="overview-box clearfix">
                  <div class="icon">
                    <i class="zmdi zmdi-money"></i>
                  </div>
                  <div class="text">
                    <h2>$1,060,386</h2>
                    <span>Total Discount</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  middleware: "auth",
  head: {
    title: 'Dashboard',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Dashboard description",
      },
    ],
  },
};
</script>

<style scoped>
</style>
