import { render } from '@testing-library/react';

import AuthLogin from './auth-login';

describe('AuthLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthLogin />);
    expect(baseElement).toBeTruthy();
  });
});
