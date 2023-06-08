<script>
import {
  BIconCheckCircleFill,
  BIconDashCircle,
} from "bootstrap-icons-vue";
export default {
  data() {
    return {
      isChecked: true
    }
  },
  components: {
    BIconCheckCircleFill,
    BIconDashCircle,
  },
  props: {
    clubName: String,
  },
  methods: {
    toggleChecked() {
      this.isChecked = !this.isChecked
    }
  }
}
</script>

<template>
  <div class="d-flex align-items-center">
    <div class="d-flex align-items-center btn bg-white p-0 container-fluid rounded-start-pill rounded-end-0"
      @click="toggleChecked()">
      <div class="kc-filter-option-icon ms-2">
        <h3>
          <BIconCheckCircleFill v-if="isChecked" class="text-success" />
          <BIconDashCircle v-else class="text-danger" />
        </h3>
      </div>
      <div class="flex-grow-1 mx-2 text-center">
        <div>{{ clubName }}</div>
      </div>
    </div>
    <button class="kc-profile-button align-self-stretch btn btn-success rounded-end-pill rounded-start-0">
      Profile
    </button>
  </div>
</template>

<style scoped>
.kc-filter-option-icon {
  position: relative;
  top: 1px;
}
.kc-profile-button {
  padding-top: auto
}
</style>