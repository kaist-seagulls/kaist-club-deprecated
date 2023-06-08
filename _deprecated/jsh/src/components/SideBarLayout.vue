<script>
import FilterOption from './FilterOption.vue';
export default {
  components: {
    FilterOption
  }
}
</script>

<template>
  <div class="d-flex p-0 container-fluid">
    <div class="kc-sidebar p-2 d-flex flex-column ms-0">
      <aside class="kc-sticky">
        <div class="d-flex flex-column p-2 bg-warning rounded-4">
          <div class="d-flex w-100 m-0 mt-1 mb-2 p-0 justify-content-center">
            <div>Subscribed Clubs</div>
          </div>
          <div class="d-flex w-100 m-0 p-0">
            <button class="kc-button flex-fill btn btn-info me-2 rounded-pill">Select Joined</button>
            <button class="kc-button flex-fill btn btn-success me-2 rounded-pill">Select All</button>
            <button class="kc-button flex-fill btn btn-danger rounded-pill">View All</button>
          </div>
          <div class="d-flex flex-column w-100 m-0 p-0">
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'K-Let'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Lunatic'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number2'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number3'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number4'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number5'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number6'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number7'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number8'" />
            <FilterOption class="kc-filter-option-margin-top" :clubName="'Number9'" />
          </div>
        </div>
      </aside>
    </div>
    <div class="kc-content container-fluid m-0 p-0">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.kc-sidebar {
  user-select: none;
}

.kc-sticky {
  position: sticky;
  top: 65px;
}

.kc-content {}

.kc-button {
  white-space: nowrap;
}
.kc-filter-option-margin-top {
  margin-top: 8px;
}
</style>