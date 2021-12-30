import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AssociationTable from './components/AssociationTable.js';

ReactDOM.render(
  <Provider store={store}>
  <div>Input subjects to get associated words
      <div className = 'a-table-container'>
        <AssociationTable id={1} className = 'a-table'/>
        <AssociationTable id={2} className = 'a-table' />
      </div>
  </div>
  </Provider>,
  document.getElementById('app')
);