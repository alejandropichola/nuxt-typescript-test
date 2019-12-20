import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';

describe('form', () => {
  const template = mount({
    data: () => ({
      select: null,
      options: [
        { id: 1, label: 'opcion a' },
        { id: 2, label: 'opcion b' },
        { id: 3, label: 'opcion c' },
      ],
    }),
    template: `
        <select v-model="select" @keydown="onkeydown">
          <option v-for="(item, key) of options" :key="key" :value="item.id">
            {{item.label}}
          </option>
        </select>
      `,
    methods: {
      onkeydown (e) {
        console.log(e.key);
      },
    },
  });
  it('options select', () => {
    const option = template.findAll('option');
    expect(option.at(0).html()).toContain('opcion a');
    expect(option.at(1).html()).toContain('opcion b');
    expect(option.at(2).html()).toContain('opcion c');
  });

  it('selected option', async () => {
    const option = template.findAll('option');
    option.at(1).setSelected();
    await flushPromises();
    expect(template.vm.$data.select).toBe(2);
  });
});
