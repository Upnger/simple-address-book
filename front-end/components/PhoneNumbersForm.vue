<template>
  <div v-if="true">
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Telefonnummer</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="number in phoneNumbers" :key="number.id">
          <td>
            <input
              v-model="number.phoneNumber"
              class="input column"
              type="text"
              placeholder="+46738021936"
              :disabled="!editMode"
            />
          </td>
          <td>
            <input
              v-model="number.label"
              class="input column"
              type="text"
              placeholder="Mobil"
              :disabled="!editMode"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button
      v-if="editMode"
      class="button is-primary"
      @click="addEmptyPhoneNumber"
    >
      Lägg till Telefonnummer
    </button>
  </div>
</template>

<script>
const newPhoneNumbersDefaultValues = {
  phoneNumber: '',
  label: ''
}
export default {
  props: {
    phoneNumbers: {
      type: Array,
      required: true
    },
    editMode: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    addEmptyPhoneNumber: function() {
      this.phoneNumbers.push(Object.assign({}, newPhoneNumbersDefaultValues))
    }
  }
}
</script>
