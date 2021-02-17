import { mount } from '@vue/test-utils'
import Counter from '@/counter'

describe('Counter', () => {
    const wrapper = mount(Counter)

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })

    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })

    it('button should increment the count', () => {
        expect(wrapper.vm.count).toBe(0)
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })
})

import YesNoComponent from '@/src/YesNoComponent.vue'
import sinon from 'sinon'

describe('YesNoComponent', () => {
    it('Click on yes button calls our method with argument "yes"', async () => {
      const spy = sinon.spy()

      const wrapper = mount(YesNoComponent, {
        propsData: {
          callMe: spy
        }
      })
      await wrapper.find('button.yes').trigger('click')

      expect(spy.calledWith('yes')).toBe(true)
    })
})
