import { mount } from '@vue/test-utils'
import RemoveButton from '@/components/DeleteButton.vue'

describe('RemoveButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(RemoveButton, {
      propsData: {
        contactId: 1
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
