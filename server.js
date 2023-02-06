const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const app = express();
app.use(cors())

app.use(fileUpload());

app.post('/upload', (req,res) => {
    if(req.files === null) {
         return res.status(400).json({msg: 'No file uploaded' });
    }

    const file = req.files.file;
    const data = Buffer.from(file.data).toString();
    console.log(data);
    const parsed = [];
    const lines = data.split("\n");
    for(let i = 0 ; i< lines.length; i++) {
        const line = lines[i];

        if(line == "") {
            continue;
        }

        const content = line.split(" - ");
        console.log("content", content);
        const datetime = content[0];
        const loglevel = content[1];
        const transaction = JSON.parse(content[2]);

        console.log(transaction.transactionId);
        parsed.push({
            timestamp: new Date(datetime).getTime(),
            loglevel,
            transactionId: transaction.transactionId,
            err: transaction.err,
        });
    }
    
    return res.json(parsed);

    

    // console.log(file);
    // return res.json("ok");
    // file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    //     if(err){
    //         console.error(err);
    //         return res.status(500).send(err);
    //     }
    //     res.json({ fileName: file.name, filePath:`/uploads/${file.name}`})
    // });
});

app.listen(5000,() => console.log('Server Started...'));