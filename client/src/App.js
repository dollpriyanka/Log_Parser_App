import React from 'react';
import FileUpload from './components/FileUploads.js';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h4 className="display-4 text-center mb-4">
      <i className="fad fa-react"></i> React File Upload
    </h4>

    <FileUpload />
  </div>
);


export default App;
