import { mount } from '@vue/test-utils';

describe('events', () => {
  it('is visible', () => {
    const template = mount({
      data: () => ({ isShow: false }),
      template: `
        <div>
          <button @click="isShow=!isShow">boton</button>
          <p v-show="isShow">texto</p>
        </div>
      `,
    });
    const p = template.find('p');
    expect(p.isVisible()).toBe(false);
    const button = template.find('button');
    button.trigger('click');
    expect(p.isVisible()).toBe(true);
  });
});
