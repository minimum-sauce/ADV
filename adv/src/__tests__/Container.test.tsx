import { cleanup, render } from '@testing-library/react';
import Container from '../components/Container';


describe(Container, () => {

  afterEach(cleanup)

  it('Container displays correct value', () => {
    const { getByTestId } = render(<Container value={5} />);
    const container_value = Number(getByTestId('container').textContent);
    expect(container_value).toBe(5);
  });

})