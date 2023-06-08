<script>
export default {
  data() {
    return {
      clubId: null,
      imageUrl: "https://static.vecteezy.com/system/resources/previews/000/633/346/original/white-round-winner-podium-on-red-curtain-theater-scene-stage-background-stage-with-studio-lights-for-awards-ceremony-spotlights-illuminate-vector-illustration-background.jpg",
    }
  },
  created() {
    const clubId = this.$route.params.clubId
    if (clubId) {
      this.clubId = clubId
    }
  }
}
</script>

<template>
  <div class="kc-club-profile-div d-flex flex-column m-2 ms-0 p-0 rounded-4 bg-danger-subtle border border-success border-5">
    <div class="kc-club-profile-header m-0 p-0 container-fluid bg-white">
      <img class="kc-club-profile-header-image img-fluid" :src="imageUrl" />
      <div class="kc-club-profile-club-name d-flex justify-content-center">
        <div>Number</div>
      </div>
      <button class="kc-club-profile-edit-button btn btn-warning">
        Edit Club Profile
      </button>
    </div>
    <div class="d-flex flex-column container-fluid m-0 p-3 pt-0">
      <div class="d-flex flex-column m-0 p-0 mt-3">
        <div class="m-0 p-0">
          <h3>Information</h3>
        </div>
        <div class="container-fluid rounded bg-warning-subtle m-0 p-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
        </div>
      </div>
      <div class="row gap-3 m-0 p-0">
        <div class="col d-flex flex-column m-0 p-0 mt-3">
          <div class="m-0 p-0">
            <h3>Leaders</h3>
          </div>
          <div class="container-fluid rounded bg-warning-subtle m-0 p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          </div>
        </div>
        <div class="col d-flex flex-column m-0 p-0 mt-3">
          <div class="m-0 p-0">
            <h3>Contacts</h3>
          </div>
          <div class="container-fluid rounded bg-warning-subtle m-0 p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi delectus necessitatibus dolorum corrupti. Numquam tenetur ut labore harum illum delectus perferendis itaque, magni cupiditate laborum, dolores sequi earum dignissimos ea.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kc-club-profile-div {
  overflow: hidden;
}
.kc-club-profile-header {
  position: relative;
  height: 240px;
  overflow: hidden;
}
.kc-club-profile-header-image {
  opacity: 0.4;
}
.kc-club-profile-club-name {
  position: absolute;
  width: 100%;
  bottom: 0;
  font-size: 72px;
}
.kc-club-profile-edit-button {
  position: absolute;
  right: 8px;
  bottom: 8px;
}
</style>