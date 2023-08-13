<!-- eslint-disable vue/require-v-for-key -->
<template>
  <form @submit.prevent="handleSubmit">
    <h1>Cadastro de Talentos</h1>

    <label for="name">Nome Completo</label>
    <input id="name" v-model="name" />

    <label for="email">Email</label>
    <input id="email" v-model="email" />

    <label for="birth_date">Data de nascimento</label>
    <input id="birth_date" v-model="birth_date" />

    <label for="phone">WhatsApp</label>
    <input id="phone" v-model="phone" />

    <label for="interestArea">Area de interesse</label>
    <select id="interestArea" v-model="area">
      // eslint-disable-next-line vue/require-v-for-key
      <option v-for="stack in stacks">{{ stack }}</option>
    </select>

    <label for="experience">Nivel</label>
    <select id="experience" v-model="area">
      <option v-for="nivel in nivels">{{ nivel }}</option>
    </select>

    <p>Selecione suas habilidades</p>
    <div v-if="area === 'FrontEnd' || area === 'FullStack'">
      <label><input type="checkbox" value="HTML" v-model="skills" />HTML</label>
      <label><input type="checkbox" value="CSS" v-model="skills" />CSS</label>
      <label><input type="checkbox" value="JavaScript" v-model="skills" />JavaScript</label>
      <label><input type="checkbox" value="Vue" v-model="skills" />Vue</label>
    </div>
    <div v-if="area === 'BackEnd' || area === 'FullStack'">
      <label><input type="checkbox" value="Node" v-model="skills" />Node</label>
      <label><input type="checkbox" value="PHP" v-model="skills" />PHP</label>
      <label><input type="checkbox" value="Laravel" v-model="skills" />Laravel</label>
      <label><input type="checkbox" value="Java" v-model="skills" />Java</label>
    </div>
    <label for="apresentation">Carta de apresentação</label>
    <textarea id="apresentation" cols="30" rows="10"></textarea>

    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
import * as yup from 'yup'
export default {
  data() {
    return {
      name: '',
      email: '',
      birth_date: '',
      phone: '',
      area: '',
      stacks: ['Selecione', 'FrontEnd', 'BackEnd', 'FullStack'],
      nivels: ['Selecione', 'Júnior', 'Pleno', 'Senior'],
      skills: [],
      apresentation: ''
    }
  },
  watch: {
    area(areaNewValue, areaOldValue) {
      if (areaNewValue !== areaOldValue) {
        this.skills = []
      }
    }
  },
  methods: {
    handleSubmit() {
      try {
        const schema = yup.object().shape({
          name: yup.string().require('O nome é orbigatório'),
          email: yup.string().email('Email inválido').required('Email é obrigatório'),
          area: yup.string().required('A area é obrigatória')
        })
        schema.validateSync({
          name: this.name,
          email: this.email,
          area: this.area
        })
      } catch (error) {
        alert('Erro no formulário')
      }
    }
  }
}
</script>

<style></style>
