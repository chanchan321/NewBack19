const db = require('../middleware/myDB');
const mysqldump = require('mysqldump')
const crypto = require("crypto");

const fs = require('fs');

const getbackup = async (req, res) => {

    fs.unlink('./controllers/backUP.sql', (err => {
        if (err) return console.log(err);
        
        }))
 
        try{
         
            await mysqldump({
             connection: {
                 host: 'db4free.net',
                 user: 'capstone357',
                 password: 'CAPSTONEguidance123',
                 database: 'dbtesting357',
             },
             dumpToFile: `${__dirname}/backUP.sql`,
         })
         res.download(`./controllers/backUP.sql`)
      
        

         }catch(err){
             res.sendStatus(404)
         }
    
}


module.exports = {
    getbackup,
    
}
