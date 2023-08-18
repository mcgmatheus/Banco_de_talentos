<template>
  <div class="topPageMenu">
    <p>• • •</p>
  </div>
  <div class="navContainer">
    <nav>
      <ul class="menu">
        <router-link to="/">
          <li>
            <h2>Home</h2>
            <img width="50" height="50" src="https://img.icons8.com/nolan/64/home.png" alt="home" />
          </li>
        </router-link>
        <router-link to="/talentos/novo">
          <li>
            <h2>Talentos</h2>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/nolan/64/folder-invoices.png"
              alt="talentos"
            />
          </li>
        </router-link>
        <router-link to="/sobre">
          <li>
            <h2>Sobre</h2>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/nolan/64/about.png"
              alt="sobre"
            />
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style>
.topPageMenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: hsl(272, 73%, 76%);
  border: 1px solid hsl(261, 47%, 58%);
  height: 25px;
  color: dimgray;
}
.topPageMenu p {
  margin-left: 15px;
  margin-right: 15px;
}
.navContainer {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav {
  display: flex;
  align-items: center;
  padding: 20px;
  width: 80%;
  height: 100px;
  border-top: 50px;
}
ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px;
  justify-content: center;
  list-style: none;
}
li {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  /* background: hsl(224, 32%, 74%); */
  border: 1px solid hsl(261, 47%, 58%);
  border-radius: 10px;
  gap: 25px;
  text-decoration: none;
}
</style>
