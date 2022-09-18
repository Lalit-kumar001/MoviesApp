import React from 'react';
import {applyMiddleware, createStore} from 'redux'
import ReactDOM from 'react-dom/client';
import App from './component/App';
import movies from './reducers';
import rootReducer from './reducers';

// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('action',action.type);
//     }
//   }
// }
const thunk=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action==='function'){
    action(dispatch)
    return
  }
  next(action);
}


const store=createStore(rootReducer,applyMiddleware(thunk));
//  console.log('state1',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

