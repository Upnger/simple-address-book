import { mount } from '@vue/test-utils'
import indexPage from '@/pages/index.vue'

describe('indexPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(indexPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
