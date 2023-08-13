<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <ul class="menu">
      <router-link to="/">
        <li>
          <h2>Home</h2>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/home.png"
            alt="home"
          />
        </li>
      </router-link>
      <router-link to="/talentos/novo">
        <li>
          <h2>Cadastro</h2>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/signing-a-document.png"
            alt="register_logo"
          />
        </li>
      </router-link>
      <router-link to="/sobre">
        <li>
          <h2>Sobre</h2>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/info-squared.png"
            alt="info-squared"
          />
        </li>
      </router-link>
    </ul>
  </nav>
  <h1>Banco de Talentos</h1>
</template>

<script></script>

<style scoped></style>
