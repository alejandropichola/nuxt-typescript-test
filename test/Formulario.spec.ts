import { mount, shallowMount } from '@vue/test-utils';
import Formulario from '@/components/Formulario.vue';

describe('Formulario', () => {
  it('formulario component', () => {
    const component = mount(Formulario);
    expect(component.contains('input')).toBeTruthy();
  });

  it('Input set value', () => {
    const parent = mount({
      data: () => ({ value: 0 }),
      template: `
        <div>
          <Formulario v-model="value"/>
        </div>
      `,
      components: { Formulario },
    });
    const input = parent.find('input');
    const text = parent.find('p');
    input.setValue(2);
    expect(parent.vm.$data.value).toBe(2);
    expect(text.text()).toBe('4');
  });

  it('click', () => {
    const parent = mount({
      data: () => ({ value: 0 }),
      template: `
        <div>
          <Formulario v-model="value"/>
        </div>
      `,
      components: { Formulario },
    });

    const button = parent.findAll('button');
    button.at(0).trigger('click');
    const p = parent.findAll('.number');
    expect(p.at(0).text()).toBe('0');
  });

  it('click radio', () => {
    const parent = mount({
      data: () => ({
        value: false,
        t2: false,
      }),
      template: `
        <div>
          <input class="foo" type="checkbox" v-model="value"/>
          <input class="foo" type="radio" value="foo" v-model="t2"/>
        </div>
      `,
    });
    const radio = parent.findAll('input');
    radio.setChecked();
    expect(parent.vm.$data.t2).toBe('foo');
    expect(parent.vm.$data.value).toBe(true);
  });

  it('prop data', () => {
    const parent = mount({
      props: ['msg'],
      template: `
        <div>{{msg}}</div>`,
    }, {
      propsData: {
        msg: 'Prueba',
      },
    });

    expect(parent.text()).toBe('Prueba');
  });

  it('is empty and is vue instance component', () => {
    const wrapper = mount({
      template: `
      <section>
         <div></div>
      </section>
    `,
    });
    const pArray = wrapper.findAll('div');
    expect(pArray.isEmpty()).toBe(true);
    expect(pArray.isVueInstance()).toBe(false);
  });

  it('setMethod', () => {
    const wrapperR = mount(Formulario);
    const submitForm = jest.fn();

    wrapperR.setMethods({ submitForm });
    wrapperR.find('button').trigger('click');
    expect(submitForm).toBeCalled();
  });
});
