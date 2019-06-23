<template>
  <table class="table is-striped">
    <thead>
      <td>Kontakt ID</td>
      <td>Förnamn</td>
      <td>Efternamn</td>
    </thead>
    <tbody>
      <tr v-for="contact in contacts" :key="contact.id">
        <th>{{ contact.id }}</th>
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  asyncData() {
    return axios.get('http://localhost:3000/contact').then(res => {
      return { contacts: res.data }
    })
  }
}
</script>

<style></style>
