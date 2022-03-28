var axios = require('axios');

var config = {
  method: 'POST',
  url: 'http://localhost:3000/api/transcript/',
  headers: { 
     'Content-Type': 'application/json',
  },
  data : {
    id: "123456789123456789",
    data: {
      id: "a",  
      channelName: "b",  
      messages: [
    { 
      input: "123", 
      sender: "Panda", timestamp: "1648478713"
    }, 
      { 
        input: "12345", sender: "Panda255", timestamp: "1648478713"
      }
    ]
    },
    guild: {
      id: "1235555",
      name: "Serveur de Test"
    }
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});