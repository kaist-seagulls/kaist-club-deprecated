<template>
  <div>
    <div id="container1" class="appliContainer">{{ userName }}</div>
    <button class="checkButton" v-on:click="$emit('remove')">
      <img src="checkmark.png" alt="" width="30" height="30" />
    </button>
    <button class="xButton" v-on:click="$emit('remove')">
      <img src="x.png" alt="" width="30" height="30" />
    </button>
  </div>
</template>
<script>
export default {
  name: "applibuttonset",
  data() {
    return {
      el: "#appliButtons",
      data: {
        newUserName: "",
        applis: [
          {
            id: 1,
            userName: "Dongseop"
          },
          {
            id: 2,
            userName: "Seunghyeon"
          },
          {
            id: 3,
            userName: "Seyeon"
          }
        ],
        nextId: 4
      }
    };
  }
};
</script>
