/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import TodoContainer from './TodosContainer';


const App = () => (
  <div css={css`
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
      `}
  >
    <Global styles={css`
  ${emotionNormalize}
  html,
    body {
      padding: 0;
      margin: 0;
      background: white;
      min-height: 100%;
      font-family: Helvetica, Arial, sans-serif;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `}
    />
    <TodoContainer />
  </div>
);

export default App;
