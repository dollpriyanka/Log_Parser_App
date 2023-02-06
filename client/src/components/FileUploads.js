import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('No file chosen');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);

        try {
           const res = await axios.post('/Upload',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
           });

           const {fileName, filePath } = res.data;

           setUploadedFile({fileName,filePath});
        }catch(err) {
                   if(err.response.status === 500) {
                    console.log("There was a problem with the server");
                   } else {
                    console.log(err.response.data.msg);
                   }
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className='custom-file mb-4'>
                    <label class="form-label" htmlFor="customFile">{filename}</label>
                    <input type="file" class="form-control" id="customFile"onChange={onChange} />
                </div>


                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
        </Fragment>
    );
};

export default FileUpload