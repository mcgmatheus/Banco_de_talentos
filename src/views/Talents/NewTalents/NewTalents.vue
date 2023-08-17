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
            <input id="name" type="text" v-model="name" />
            {{ this.errors.name }}
          </div>
          <div class="formItem">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="email" />
            {{ this.errors.email }}
          </div>
        </div>
        <div class="formGroup">
          <div class="formItem">
            <label for="birth_date">Data de nascimento</label>
            <input id="birth_date" type="date" v-model="birth_date" />
          </div>
          <div class="formItem">
            <label for="phone">WhatsApp</label>
            <input id="phone" type="text" v-model="phone" />
          </div>
        </div>
        <div class="formGroup">
          <div class="formItem">
            <label for="interestArea">Area de interesse</label>
            <select id="interestArea" v-model="area">
              // eslint-disable-next-line vue/require-v-for-key
              <option v-for="stack in stacks">{{ stack }}</option>
            </select>
            {{ this.errors.area }}
          </div>

          <div class="formItem">
            <label for="experience">Nivel</label>
            <select id="experience" v-model="profissionalLevel">
              <option v-for="nivel in nivels">{{ nivel }}</option>
            </select>
          </div>
        </div>

        <div class="formPick">
          <div v-if="area === 'FrontEnd' || area === 'FullStack'">
            <div class="pickGroup">
              <p>Selecione suas habilidades FrontEnd:</p>
              <label><input type="checkbox" value="HTML" v-model="skills" />HTML</label>
              <label><input type="checkbox" value="CSS" v-model="skills" />CSS</label>
              <label><input type="checkbox" value="JavaScript" v-model="skills" />JavaScript</label>
              <label><input type="checkbox" value="Vue" v-model="skills" />Vue</label>
            </div>
          </div>
          <div v-if="area === 'BackEnd' || area === 'FullStack'">
            <div class="pickGroup">
              <p>Selecione suas habilidades BackEnd:</p>
              <label><input type="checkbox" value="Node" v-model="skills" />Node</label>
              <label><input type="checkbox" value="PHP" v-model="skills" />PHP</label>
              <label><input type="checkbox" value="Laravel" v-model="skills" />Laravel</label>
              <label><input type="checkbox" value="Java" v-model="skills" />Java</label>
            </div>
          </div>
        </div>
        <div class="formItem">
          <label for="apresentation">Carta de apresentação</label>
          <textarea id="apresentation" cols="70" rows="3"></textarea>
        </div>
      </div>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import NavigationBar from '../../../components/NavigationBar.vue'
import * as yup from 'yup'
import { captureYupError } from '../../../utils/captureYupError'

export default {
  data() {
    return {
      name: '',
      email: '',
      birth_date: '',
      phone: '',
      area: '',
      stacks: ['FrontEnd', 'BackEnd', 'FullStack'],
      profissionalLevel: '',
      nivels: ['Júnior', 'Pleno', 'Senior'],
      skills: [],
      apresentation: '',
      errors: {}
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
          name: yup.string().required('O nome é obrigatório'),
          email: yup.string().email('Email inválido').required('Email é obrigatório'),
          area: yup.string().required('A area é obrigatória')
        })
        schema.validateSync(
          {
            name: this.name,
            email: this.email,
            area: this.area
          },
          { abortEarly: false }
        )
        console.log('deu certo')
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          this.errors = captureYupError(error)
        }
        console.log(captureYupError(error))
        console.log('deu errado')
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
  width: 65%;
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
  width: 100%;
  justify-content: space-evenly;
  /* gap: 50px; */
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
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.pickGroup input {
  width: 50px;
}
button {
  display: flex;
  padding: 5px 15px;
  background: hsl(224, 32%, 74%);
  color: navy;
  border: 1px solid hsl(261, 47%, 58%);
  border-radius: 10px;
}
</style>
