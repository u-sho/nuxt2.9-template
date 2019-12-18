import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'

describe('IndexPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
