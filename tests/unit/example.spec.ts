import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Tab1.vue', () => {
  it('renders Home view', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toMatch('Home page')
  })
})
