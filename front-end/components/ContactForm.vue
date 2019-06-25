<template>
  <div v-if="contact">
    <button class="button is-primary" @click="navigateToallContacts">
      Till alla kontakter
    </button>
    <button
      v-if="!editMode && exsisting"
      class="button is-primary"
      @click="enableEditMode"
    >
      Redigera
    </button>
    <div class="field">
      <label class="label">Förnamn:</label>
      <div class="control">
        <input
          v-model="contact.firstName"
          class="input"
          type="text"
          placeholder="Robin"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Efternamn:</label>
      <div class="control">
        <input
          v-model="contact.lastName"
          class="input"
          type="text"
          placeholder="Persson"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Adress:</label>
      <div class="control">
        <input
          v-model="contact.address"
          class="input"
          type="text"
          placeholder="tingbergsgatan 15"
          :disabled="!editMode"
        />
      </div>
    </div>
    <phone-numbers-form
      :phone-numbers="contact.phoneNumbers"
      :edit-mode="editMode"
    />
    <button
      v-if="exsisting && editMode"
      class="button is-primary"
      @click="update"
    >
      Uppdatera
    </button>
    <button v-else-if="editMode" class="button is-primary" @click="create">
      Skapa
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import PhoneNumbersForm from './PhoneNumbersForm.vue'
const newContactDefaultValues = {
  firstName: '',
  lastName: '',
  phoneNumbers: []
}
export default {
  components: { PhoneNumbersForm },
  props: {
    contact: {
      type: Object,
      required: false,
      default: () => {
        return newContactDefaultValues
      }
    },
    edit: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function(params) {
    return {
      editMode: this.edit
    }
  },
  computed: {
    exsisting: function() {
      return !!this.contact.id
    }
  },
  methods: {
    create: function() {
      return axios
        .post('http://localhost:3000/contact', this.contact)
        .then(res => {
          this.contacts = newContactDefaultValues
          alert('Kontakt sparad')
        })
        .catch(function() {
          alert('failed to create new contact')
        })
    },
    update: function() {
      return axios
        .put('http://localhost:3000/contact', this.contact)
        .then(res => {
          this.contacts = newContactDefaultValues
          alert('Kontakt uppdaterad')
        })
        .catch(function() {
          alert('failed to update contact')
        })
    },
    enableEditMode: function() {
      this.editMode = true
    },
    navigateToallContacts: function(contact, edit = false) {
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>
