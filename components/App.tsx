import React from 'react';
import { css, injectGlobal } from 'emotion';
import TodoContainer from './TodosContainer';
import 'normalize.css';

const App = () => (
  <div className={css`
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
  `}
  >
    <TodoContainer />
  </div>
);

export default App;
