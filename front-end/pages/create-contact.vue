<template>
  <div>
    <div class="field">
      <label class="label">Förnamn:</label>
      <div class="control">
        <input
          v-model="newContact.firstName"
          class="input"
          type="text"
          placeholder="Robin"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Efternamn:</label>
      <div class="control">
        <input
          v-model="newContact.lastName"
          class="input"
          type="text"
          placeholder="Persson"
        />
      </div>
    </div>
    <button class="button is-primary" @click="create">Skapa</button>
  </div>
</template>

<script>
import axios from 'axios'
const newContactDefaultValues = {
  firstName: '',
  lastName: ''
}
export default {
  data: function() {
    return {
      newContact: newContactDefaultValues
    }
  },
  methods: {
    create: function() {
      return axios
        .post('http://localhost:3000/contact', this.newContact)
        .then(res => {
          this.contacts = newContactDefaultValues
          alert('Kontakt sparad')
        })
        .catch(function() {
          alert('failed to create new contact')
        })
    }
  }
}
</script>
