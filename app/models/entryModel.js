'use strict';
 

const { logger } = require('../helpers/logger');
const { generateToken } = require('../helpers/authentication');

var entry = function(en){
    this.patID=en.patID;
    this.diagID=en.diagID;
    this.sysID=en.sysID;
    this.ctcsysimID=en.ctcsysimID;
    this.ctc_art_code=en.ctc_art_code;
    this.ctc_grad=en.ctc_grad;
    this.ctc_art=en.ctc_art;
this.	ctc_version=en.	ctc_version;
 
};

entry.get = function (patID, , result) {
   
    // sql.query("Select * from ctc_nebenwirkungen_sys_im WHERE 	patID ?", [patID], function (err, res) {
       
    //         if(err) {
              
    //             result(err, null);
    //         }
    //         else{
             

    //          result(null, res);
    //         }
    //     });   
};

// module.exports= entry;

