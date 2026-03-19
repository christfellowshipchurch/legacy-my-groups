import { createContext, useContext } from 'react';

const AuthFlowContext = createContext({ isPage: false });

export function useAuthFlow() {
  return useContext(AuthFlowContext);
}

export default AuthFlowContext;
