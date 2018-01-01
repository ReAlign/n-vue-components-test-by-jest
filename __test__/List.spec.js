import { shallow, mount } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import List from '@/components/List.vue'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', '', '']
    const wrapper = shallow(List, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('matches snapshot', () => {
    const items = ['item 1', 'item 2', 'item 3']
    const renderer = createRenderer()
    const wrapper = shallow(List, {
      propsData: { items }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('button should increment the count', () => {
    const wrapper = mount(List)
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
