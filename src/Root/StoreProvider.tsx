import React from 'react';
import RootStore from './RootStore';
import { Provider } from 'mobx-react';


interface StoreProviderProp {}

const rootStore = new RootStore()
console.log('{...rootStore}', {...rootStore})
const StoreProvider: React.FunctionComponent<StoreProviderProp> =({
  children
}) =>  <Provider {...rootStore}>{children}</Provider>;

export default StoreProvider;