<script>
import {
  BIconCalendarWeek, /* eslint-disable */
  BIconCalendarWeekFill,
  BIconPersonCircle,
} from "bootstrap-icons-vue";
export default {
  components: {
    BIconCalendarWeek,
    BIconCalendarWeekFill,
    BIconPersonCircle,
  }
}
</script>

<template>
  <div class="kc-background bg-primary-subtle" />
  <nav class="kc-navbar navbar navbar-expand-lg bg-primary-subtle">
    <div class="kc-relative container-fluid p-2 pb-0 m-0 d-flex">
      <div class="kc-navbar-brand-container container-fluid d-flex flex-column align-items-center m-0 p-0">
        <a class="kc-navbar-brand navbar-brand fw-bold" href="#">
          KAIST-CLUB
        </a>
      </div>
      <button class="kc-navbar-toggler navbar-toggler ms-auto mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#kc-navbar-collapse-target">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="kc-navbar-collapse-target">
        <div class="navbar-nav container-fluid align-items-end m-0 p-0">
          <div class="kc-navbar-collapse-item mb-2">
            <form>
              <div class="d-flex p-0">
                <input class="form-control me-2" type="search" placeholder="Search">
                <button class="btn btn-outline-primary" type="submit">Search</button>
              </div>
            </form>
          </div>
          <div class="d-flex m-0 mb-2 ms-auto p-0">
            <div class="kc-navbar-collapse-item me-2">
              <button class="btn btn-primary">New Post</button>
            </div>
            <div class="kc-navbar-collapse-item me-2">
              <button class="btn btn-outline-primary">Create New Club</button>
            </div>
            <div class="kc-navbar-collapse-item p-0 m-0 me-2">
              <div class="kc-icon-button-div p-0 m-0">
                <div class="fs-2 kc-hidden p-0 m-0 ms-1">
                  <BIconCalendarWeek />  
                </div>
                <BIconCalendarWeek class="text-primary kc-absolute kc-icon-button-pos-calendar kc-icon-button" />
                <BIconCalendarWeekFill class="text-primary kc-absolute kc-icon-button-pos-calendar-hover kc-icon-button-hover" />
              </div>
            </div>
            <div class="kc-navbar-collapse-item p-0 m-0">
              <div class="kc-icon-button-div p-0 m-0">
                <div class="fs-2 kc-hidden p-0 m-0 ms-1">
                  <BIconCalendarWeek />
                </div>
                <BIconPersonCircle class="text-primary kc-absolute kc-icon-button-pos-profile kc-icon-button" />
                <svg class="kc-absolute kc-icon-button-pos-profile-hover kc-icon-button-hover" fill="rgba(var(--bs-primary-rgb), 1)" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-j</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM205.78,164.82C218.45,151.39,236.28,144,256,144s37.39,7.44,50.11,20.94C319,178.62,325.27,197,323.79,216.76,320.83,256,290.43,288,256,288s-64.89-32-67.79-71.25C186.74,196.83,193,178.39,205.78,164.82ZM256,432a175.49,175.49,0,0,1-126-53.22,122.91,122.91,0,0,1,35.14-33.44C190.63,329,222.89,320,256,320s65.37,9,90.83,25.34A122.87,122.87,0,0,1,382,378.78,175.45,175.45,0,0,1,256,432Z"></path></g></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="kc-router-view bg-info-subtle">
    <router-view />
  </div>
  <div class="kc-footer container-fluid bg-primary-subtle">
    <p>FOOTER</p>
  </div>
</template>
<style scoped>
.kc-navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 100;
  user-select: none;
}

.kc-background {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -100;
}

.kc-router-view {
  position: relative;
}

.kc-footer {
  height: 500px;
}

.kc-navbar-brand {
  position: relative;
  font-size: 28px;
  z-index: 110;
}
.kc-icon-button-div {
  height: 1px;
  position: relative;
  padding: 0;
}
.kc-hidden {
  visibility: hidden;
}
.kc-relativ {
  position: relative
}
.kc-absolute {
  position: absolute
}
.kc-icon-button-pos-calendar {
  top: 2px;
  right: 0px;
  font-size: 32px;
}
.kc-icon-button-pos-calendar-hover {
  top: 2px;
  right: 0px;
  font-size: 32px;
}
.kc-icon-button-pos-profile {
  top: 3px;
  right: 0px;
  font-size: 32px;
}
.kc-icon-button-pos-profile-hover {
  top: -1px;
  right: -4px;
  font-size: 40px;
}
.kc-icon-button {
  cursor: pointer;
  transition-property: opacity;
  transition-duration: 0.5s;
  opacity: 1;
  z-index: 300;
}
.kc-icon-button-hover {
  transition-property: opacity;
  transition-duration: 0.5s;
  opacity: 0;
  z-index: 200;
}
.kc-icon-button:hover {
  opacity: 0;
}
.kc-icon-button:hover ~ .kc-icon-button-hover {
  opacity: 1;
}
.kc-navbar-toggler {
  z-index: 120;
}
.kc-navbar-collapse-item {
  z-index: 120;
}
.kc-navbar-brand-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>