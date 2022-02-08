import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitLogin } from './service/login.service';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      SubmitLogin({
        account: 'value.account',
        password: 'value.password',
      }),
    );
  };
  return <div onClick={handleLogin}>登录</div>;
};

export default Login;
