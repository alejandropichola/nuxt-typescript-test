import { mount } from '@vue/test-utils';
import Formulario from '@/components/Formulario.vue';
describe('Formulario', () => {
  test('formulario component', () => {
    const component = mount(Formulario);
    expect(component.contains('input')).toBeTruthy();
  });

  test('Input set value', () => {
    const parent = mount({
      data: () => ({ value: 0 }),
      template: `
            <div>
                <Formulario v-model="value" />
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
});
