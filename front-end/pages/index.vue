<template>
  <table class="table is-striped">
    <thead>
      <tr>
        <th>Kontakt ID</th>
        <th>Förnamn</th>
        <th>Efternamn</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="contact in contacts" :key="contact.id">
        <th>{{ contact.id }}</th>
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
        <td>
          <button
            class="button is-primary is-small"
            @click="navigateToContactPage(contact)"
          >
            Visa
          </button>
        </td>
        <td>
          <button
            class="button is-primary is-small"
            @click="navigateToContactPage(contact, true)"
          >
            Redigera
          </button>
        </td>
        <td>
          <remove-button :contact-id="contact.id" @contact-removed="update" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

import removeButton from '~/components/DeleteButton.vue'

export default {
  components: {
    removeButton
  },
  asyncData() {
    return axios.get('http://localhost:3000/contact').then(res => {
      return { contacts: res.data }
    })
  },
  methods: {
    update: function() {
      return axios.get('http://localhost:3000/contact').then(res => {
        this.contacts = res.data
      })
    },
    navigateToContactPage: function(contact, edit = false) {
      this.$router.push({
        name: 'contact-id',
        params: { id: contact.id },
        query: {
          edit
        }
      })
    }
  }
}
</script>

<style></style>
