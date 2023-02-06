import React, { Fragment, useState } from 'react';
import Message from './message';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('No file chosen');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(file);

        try {
            const res = await axios.post('https://dollpriyanka-obscure-couscous-rvvvv9wqvr72p44p-5000.preview.app.github.dev/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });
            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage("There was a problem with the server");
            } else {
                setMessage(err.response.data.msg);
            }
        }
    }

    return (
        <Fragment>
            {message ? <Message msg={message} /> :null }
            <form onSubmit={onSubmit}>
                <div className='custom-file mb-4'>
                    <label class="form-label" htmlFor="customFile">{filename}</label>
                    <input type="file" class="form-control" id="customFile" onChange={onChange} />
                </div>


                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
            {uploadedFile ? <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">{ uploadedFile.fileName }</h3>
                    <img src={uploadedFile.filePath} alt="" style={{width: '100%'}} />
                </div>
            </div> : null }
        </Fragment>
    );
};

export default FileUpload