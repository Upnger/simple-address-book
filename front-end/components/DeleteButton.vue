<template>
  <button class="button is-danger is-small" @click="remove">Ta bort</button>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    contactId: {
      type: Number,
      required: true
    }
  },
  methods: {
    remove: function() {
      return axios
        .delete('http://localhost:3000/contact/' + this.contactId)
        .then(res => {
          this.$emit('contact-removed')
        })
        .catch(function(params) {
          alert('failed to remove contact')
          // eslint-disable-next-line no-console
          console.error('failed to remove contact')
        })
    }
  }
}
</script>
