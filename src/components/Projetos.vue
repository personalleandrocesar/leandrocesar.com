<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class='main-one'>
        <h5>
            <i class="fa-solid fa-diagram-project"></i> Projetos
        </h5>
    </div>

    <div class='main-four'>
        <h5><RouterLink to="/projetos/ativos"><i class="fa-solid fa-bars-progress"></i> Projetos Ativos</RouterLink></h5>
        <h5><RouterLink to="/projetos/em-desenvolvimento"><i class="fa-solid fa-layer-group"></i> Projetos Em desenvolvimento</RouterLink></h5>
    </div>
    
    <RouterView/>


  </div>
</template>
<style scoped>
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a{
  text-decoration: none;
  color: #aaa;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color:#888;
}

.divider {
  height:15px;
  background-color: #dddddd54;
}

.nav-one{
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:10px 0 5px 0;
  color:black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
  margin: -10px 0 -20px 0;
  color: #555;
  overflow-x:auto;
}

.main-one i {
  font-size: 1.2em;
  color: #555;
}

.main-one h5{
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5{
  margin: 10px;
}

.main-four a {
  border: solid 1px #dddddd;
  width: 100px;
  padding: 9px 5px 5px 5px;
border-radius: 0% 10% 10% 10%;
transition: all .4s linear;
}
.main-four i {
  color: #aaa;
  transition: all .4s linear;
}

.main-four a:hover {
  color: #777;
}
.main-four a:hover i {
  color: #777;
}
.main-four a.router-link-exact-active {
  color: #000;
  background-color: #eeeeee90;
}
.main-four a.router-link-exact-active i {
  color: #000;
  background-color: #eeeeee90;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5{
  margin: 10px;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-six i {
  font-size: 1.2em;
  color: #555;
}

.main-six-card h4{
  margin-left: 30px;
}
.main-six h5{
  margin-left: 10px;
}

.main-six h5{
  margin: 10px;
}

.main-six-card {
  height: 440px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid 1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-seven i {
  font-size: 1.2em;
  color: #555;
}

.main-seven h5{
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;   
  margin:auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;   
  margin:10px auto 20px auto  ;
  width:60%;
}
.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
border-radius: 50%;
margin: 10px 0 0 10px;
padding: 0 15px 0 0;
}

.dateYear {
    color: #ccc;
}

.dateYearHover {
    color: #000;
}




@media only screen and (max-width: 369px) {

  }
</style>