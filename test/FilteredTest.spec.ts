import { shallowMount } from '@vue/test-utils';

describe('component', () => {
  it('exist', () => {
    const template = shallowMount({
      template: `
        <div class="pr">
        </div>
      `,
    });

    const filter = template.find('ul').exists();
    console.log(filter);
  });
});
