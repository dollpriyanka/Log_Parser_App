# Log_Parser_App

## Frontend
```sh
Develop a small UI in react, which will upload the file using the above API and let the user download the JSON file received from the API response.It can be a simple UI with a button to upload a file and the button can have a loader while the API is being called. After successful response, download the JSON file without user intervention. If there is an error, show an alert.
```

## Backend
```sh
Develop an API in node.js, which takes a file and returns a parsed output as JSON.
```


# Input File_Format
```sh
<ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optional, error description>", ...<additional log information>}
```

# Output File_Format
```sh
[{"timestamp": <Epoch Unix Timestamp>, "loglevel": "<loglevel>", "transactionId: "<UUID>", "err": "<Error message>" }]
```

# API Endpoint
```sh
 * /upload -  upload the log file

```
