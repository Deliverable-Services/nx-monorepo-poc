import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './auth-login.module.scss';

/* eslint-disable-next-line */
export interface AuthForm {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  message: string;
  type: string;
}

export interface AuthLoginProps {
  onLogin(arg0: AuthForm): AuthLoginResponse;
  token: string | null;
}

export const AuthLogin = (props: AuthLoginProps) => {
  const history = useHistory();

  const { onLogin, token } = props;

  const [response, setResponse] = useState<AuthLoginResponse | null>(null);
  const [form, setForm] = useState<AuthForm>({
    email: 'dishant@cea.com',
    password: '123456',
  });

  useEffect(() => {
    if (token) {
      history.push({
        pathname: '/',
      });
    }
  }, [history, token]);

  const onChange = (name: string, event: any) => {
    const { value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onLoginClick = async () => {
    console.log('sending form data', { form });
    const response = await onLogin(form);
    console.log('response', { response });
    setResponse(response);
  };

  if (token) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <h1>Welcome to AuthLogin!</h1>
      {response ? (
        <div
          className={
            response.type === 'success' ? styles.success : styles.error
          }
        >
          {response.message}
        </div>
      ) : null}

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={(e) => onChange('email', e)}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={(e) => onChange('password', e)}
      />
      <button type="button" onClick={onLoginClick}>
        Submit
      </button>
    </div>
  );
};

export default AuthLogin;
