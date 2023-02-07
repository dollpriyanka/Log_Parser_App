import React from 'react';
import FileUpload from './components/FileUploads.js';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h4 className="display-4 text-center mb-4">
      <i>React File Upload</i>
    </h4>

    <FileUpload />
  </div>
);


export default App;
