import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  asideClass: 'shadow-soft-xl',
  usernameLogin: 'Fandi',
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState }