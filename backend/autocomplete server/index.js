const express = require('express');
const cors = require ('cors');
const app = express();

app.use(cors());

const port = 5000;

var fs = require("fs");
var dictionary = fs.readFileSync("/usr/share/dict/words").toString().split("\n");

const autocomplete = (prefix) => {                  // O(1)
  
    const list = [];                                // O(1)
    
    // const lowerPrefix = prefix.toLowerCase();
    
    for(let i = 0; i < dictionary.length; i++){     // O(n)
      //Add toLowerCase to remove caseSentitive
      if(dictionary[i].startsWith(prefix)) {        // O(n)
        list.push(dictionary[i]);                   // O(n)
      }
    }
  return list                                       // O(1)
}

app.get('/prefix/:pre', (req, res) => {
    const words = autocomplete(req.params.pre)
    res.json(words);
})

app.listen(port, () => {
    console.log(`Server on ; ${port}`);
});


