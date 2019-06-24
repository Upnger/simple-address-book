<template>
  <contact-form :edit="edit" :contact="contact" />
</template>

<script>
import axios from 'axios'
import ContactForm from '~/components/ContactForm.vue'

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  components: { ContactForm },
  data: function() {
    return {
      contact: null
    }
  },
  computed: {
    edit: function() {
      return !!this.$route.query.edit
    }
  },
  beforeCreate: function(params) {
    axios
      .get('http://localhost:3000/contact/' + this.$route.params.id)
      .then(res => {
        this.contact = res.data
      })
  }
}
</script>
