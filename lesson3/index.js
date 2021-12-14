const fs = require('fs');
const ACCESS_LOG = './access.log';
const request = ['89.123.1.41', '34.48.240.111'];


function elHandler(elem, request) {
    for (let i = 0; i < request.length; i++) {
        const s = request[i];
        if (elem.includes(s)) {
            fs.writeFile(`${s}_requests.log`, elem, { flag: 'a' }, (err) => { }); 
            break;
        }
    }
}


const readStream = fs.createReadStream(
    ACCESS_LOG,
    {
        encoding: 'utf-8',
        flags: 'r',
    }
);

readStream.on('data', (chunk) => {
    const arr = (''+ chunk).split('\n');

    arr.forEach(elem => {
        elHandler(elem, request);
    });
});