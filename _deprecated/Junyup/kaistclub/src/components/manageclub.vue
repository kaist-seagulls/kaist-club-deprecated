<template>
  <div id="All">
    <!--
    <div id="headSection">
      <strong id="title"> Manage <{{ clubName }}></strong>
      <button id="editProfile">Edit Profile</button>
    </div>
    -->
    <!--
    <script>
      var headVue = new Vue({
        el: "#headSection",
        data: {
          clubName: "Number"
        }
      });
    </script>
    -->
    <div id="Applicants">
      <div id="appliText">
        Applicants
      </div>
      <div id="appliRect">
        <div id="appliButtons">
          <applibuttonset
            v-for="(appli, index) in applis"
            v-bind:key="appli.id"
            v-bind:userName="appli.userName"
            v-on:remove="applis.splice(index, 1)"
          >
          </applibuttonset>
          <!--
                            <div id="appli1" class="appliButton">
                                <div id="container1" class="appliContainer"> {{userName}} </div>
                                <script>
                                    var appliVue1=new Vue({
                                        el:'#container1',
                                        data:{
                                            userName:'Dongseop'
                                        }
                                    });
                                </script>
                                <button class="checkButton" v-on:click="Disappear"><img src="checkmark.png" alt="" width="30" height="30"></button>
                                <button class="xButton"><img src="x.png" alt="" width="30" height="30"></button>
                            </div>
                            
                            <div id="appli2" class="appliButton">
                                <div id="container2" class="appliContainer"> {{userName}} </div>
                                <script>
                                    var appliVue2=new Vue({
                                        el:'#container2',
                                        data:{
                                            userName:'Seunghyeon'
                                        }
                                    });
                                </script>
                                <button class="checkButton"><img src="checkmark.png" alt="" width="30" height="30"></button>
                                <button class="xButton"><img src="x.png" alt="" width="30" height="30"></button>
                            </div>
                            <div id="appli3" class="appliButton">
                                <div id="container3" class="appliContainer"> {{userName}} </div>
                                <script>
                                    var appliVue3=new Vue({
                                        el:'#container3',
                                        data:{
                                            userName:'Seyeon'
                                        }
                                    });
                                </script>
                                <button class="checkButton"><img src="checkmark.png" alt="" width="30" height="30"></button>
                                <button class="xButton"><img src="x.png" alt="" width="30" height="30"></button>
                            </div>
                            <button id="cantFind">Can't find someone?</button>
                            -->
        </div>
      </div>
    </div>
    <!--
    <div id="Members">
      <div id="memberText">
        Members
      </div>
      <div id="memberRect">
        <div id="memberButtons">
          <div id="member1" class="memberButton">
            <div id="containerM1" class="memberContainer">
              {{ userName }}
            </div>
            
            <script>
              var memberVue1 = new Vue({
                el: "#containerM1",
                data: {
                  userName: "Taehan"
                }
              });
            </script>
            
            <button class="banishButton">Banish</button>
            <button class="handButton">Hand<br />over</button>
          </div>

          <div id="member2" class="memberButton">
            <div id="containerM2" class="memberContainer">
              {{ userName }}
            </div>
            <script>
              var memberVue2 = new Vue({
                el: "#containerM2",
                data: {
                  userName: "Hyein"
                }
              });
            </script>
            <button class="banishButton">Banish</button>
            <button class="handButton">Hand<br />over</button>
          </div>

          <div id="member3" class="memberButton">
            <div id="containerM3" class="memberContainer">
              {{ userName }}
            </div>
            <script>
              var memberVue3 = new Vue({
                el: "#containerM3",
                data: {
                  userName: "Yeonsoo"
                }
              });
            </script>
            <button class="banishButton">Banish</button>
            <button class="handButton">Hand<br />over</button>
          </div>
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import applibuttonset from "@components/applibuttonset.vue";
export default {
  name: "manageclubpage"
  components: {
      applibuttonset
  }
};
</script>

<style>
@charset "utf-8";
#All {
  height: 100%;
  width: 100%;
}
#headSection {
  height: 30%;
  width: 100%;
  text-align: center;
}
#title {
  margin: auto;
  font-size: 25pt;
}
#editProfile {
  position: absolute;
  background-color: white;
  text-align: center;
  color: deepskyblue;
  width: 200px;
  height: 50px;
  right: 0px;
}
#appliText {
  background-color: none;
  margin-right: 5px;
  float: left;
  font-size: 15pt;
  width: 15%;
  text-align: right;
}
.appliButton {
  position: relative;
  background-color: white;
  padding-top: 17.5px;
  padding-bottom: 17.5px;
  color: black;
  width: 200px;
  height: 75px;
  float: left;
  left: 10%;
  margin-left: 20px;
}
.appliContainer {
  text-align: center;
  font-size: 12pt;
  padding-top: 8px;
  float: left;
  width: 110px;
  text-align: center;
}
.memberContainer {
  text-align: center;
  font-size: 12pt;
  padding-top: 8px;
  float: left;
  width: 110px;
  text-align: center;
}
.memberButton {
  position: relative;
  background-color: white;
  padding-top: 17.5px;
  padding-bottom: 17.5px;
  color: black;
  width: 200px;
  height: 75px;
  float: left;
  left: 10%;
  margin-left: 20px;
}

.checkButton {
  position: absolute;
  right: 50px;
  width: 40px;
  height: 40px;
  text-align: center;
}
.xButton {
  position: absolute;
  right: 5px;
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 5px 0px;
}
.banishButton {
  position: absolute;
  right: 50px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 1pt;
}
.handButton {
  position: absolute;
  right: 5px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 5pt;
}
#cantFind {
  background-color: black;
  text-align: center;
  color: white;
  width: 125px;
  height: 50px;
  position: absolute;
  right: 0px;
  bottom: 0px;
}

#appliRect {
  margin: auto;
  width: 70%;
  height: 100%;
  background: cyan;
  text-align: center;
}

#appliButtons {
  position: relative;
  width: 100%;
  height: 90%;
  top: 10%;
  text-align: center;
  background: greenyellow;
}
#memberText {
  background-color: none;
  float: left;
  font-size: 15pt;
  width: 15%;
  text-align: right;
  margin-right: 5%;
}
#memberRect {
  position: relative;
  width: 70%;
  height: 100%;
  background: yellow;
  margin: auto;
}
#memberButtons {
  position: relative;
  width: 100%;
  height: 80%;
  background: none;
  text-align: center;
  top: 5%;
  float: left;
}
#headSection {
  width: 100%;
  height: 15%;
}
#Applicants {
  width: 80%;
  height: 30%;
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
  background: magenta;
}
#Members {
  margin-right: 10%;
  margin-left: 10%;
  width: 80%;
  height: 40%;
  text-align: center;
}
</style>
