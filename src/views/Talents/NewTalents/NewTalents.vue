<!-- eslint-disable vue/require-v-for-key -->
<template>
  <NavigationBar></NavigationBar>
  <div class="pageContainer">
    <form class="newTalentForm" @submit.prevent="handleSubmit">
      <h1>Cadastro de Talentos</h1>
      <div class="formContainer">
        <div class="formGroup">
          <div class="formItem">
            <label for="name">Nome Completo</label>
            <input id="name" v-model="name" />
          </div>
          <div class="formItem">
            <label for="email">Email</label>
            <input id="email" v-model="email" />
          </div>
        </div>

        <div class="formGroup">
          <div class="formItem">
            <label for="birth_date">Data de nascimento</label>
            <input id="birth_date" v-model="birth_date" />
          </div>
          <div class="formItem">
            <label for="phone">WhatsApp</label>
            <input id="phone" v-model="phone" />
          </div>
        </div>
        <div class="formGroup">
          <div class="formItem">
            <label for="interestArea">Area de interesse</label>
            <select id="interestArea" v-model="area">
              // eslint-disable-next-line vue/require-v-for-key
              <option v-for="stack in stacks">{{ stack }}</option>
            </select>
          </div>

          <div class="formItem">
            <label for="experience">Nivel</label>
            <select id="experience" v-model="profissionalLevel">
              <option v-for="nivel in nivels">{{ nivel }}</option>
            </select>
          </div>
        </div>
        <p>Selecione suas habilidades</p>
        <div class="formPick">
          <div class="pickHabilities" v-if="area === 'FrontEnd' || area === 'FullStack'">
            <label><input type="checkbox" value="HTML" v-model="skills" />HTML</label>
            <label><input type="checkbox" value="CSS" v-model="skills" />CSS</label>
            <label><input type="checkbox" value="JavaScript" v-model="skills" />JavaScript</label>
            <label><input type="checkbox" value="Vue" v-model="skills" />Vue</label>
          </div>
          <div class="pickHabilities" v-if="area === 'BackEnd' || area === 'FullStack'">
            <label><input type="checkbox" value="Node" v-model="skills" />Node</label>
            <label><input type="checkbox" value="PHP" v-model="skills" />PHP</label>
            <label><input type="checkbox" value="Laravel" v-model="skills" />Laravel</label>
            <label><input type="checkbox" value="Java" v-model="skills" />Java</label>
          </div>
        </div>
        <div class="formItem">
          <label for="apresentation">Carta de apresentação</label>
          <textarea id="apresentation" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import NavigationBar from '../../../components/NavigationBar.vue'
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
      profissionalLevel: '',
      nivels: ['Selecione', 'Júnior', 'Pleno', 'Senior'],
      skills: [],
      apresentation: ''
    }
  },
  components: {
    NavigationBar
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

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.newTalentForm {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
}
.formContainer {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
}
.formGroup {
  display: flex;
  gap: 50px;
  padding: 5px;
}
input,
select {
  width: 250px;
  height: 20px;
}
.formItem {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.formPick {
  display: flex;
  flex-direction: column;
}
.pickHabilities {
  display: flex;
  flex-direction: column;
}
form p {
  align-self: start;
  margin-left: 45px;
}
</style>
