import React from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';

import dataProvider from './dataProvider';
import comments from './comments';
import posts from './posts';
import tags from './tags';
import authProvider from './login/authProvider'
function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="posts" {...posts} />
        <Resource name="comments" {...comments} />
        <Resource name="tags" {...tags} />
    </Admin>
    </div>
  );
}

export default App;
