
import './App.css';
//importamos un componente que nos proporciona React Redux
import { Provider } from 'react-redux';
import store  from './redux'

import ItemList from './componentes/ItemList/ItemList';

function App() {
  return (
    <Provider store={store}>
    
      <ItemList/>
    
    </Provider>
  );
}

export default App;
