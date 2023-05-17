const Node = require("../models/nodeModel.js");
const Light = require("../models/lightModel.js");
const Moisture = require("../models/moistureModel.js");
const Cam = require("../models/camModel.js");
const Temp = require("../models/tempModel.js");
const Water = require("../models/waterModel.js");
const Fire = require("../models/fireModel.js");
const Dht11 = require("../models/dht11Model.js");
const arduinoData = require("request");
const http = require('http');
const socketIO = require('socket.io');
const app = require('express');
const server = http.createServer(app);
const io = socketIO(server);
var ObjectId = require('mongodb').ObjectID;
const { json } = require("express");
const data = require("../Embedded/jsonSensorData.json");
const mqtt = require('mqtt');
const { log } = require("console");
const option = {
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: 'therese',
  password: 'therese',
  clean: true
};
const client = mqtt.connect('mqtt://192.168.1.2:1883',option);
var temp=data['soilTemperature']
var light=data['lightSensor']
var water =data['waterSensor']
var fire = data["fireSensor"]
var dht11 = data['dht11']
var dht11Temp = dht11['temperature']
var dht11Hum = dht11['humidity']
var fan = data['fan']
var pump = data['pump']
var moisture = data['soilMoisture']
const now = new Date();
senderMsg="hello esp";
receiveMsg ='';
const options = {timeZone: 'Africa/Tunis', hour12: true};
/*
*Declaration de l'adr ip du serveur embarqué
*/ 
arduinoData({
   url:"http://192.168.137.105/json",
   json: true
 },(err,response, body)=>{
    const msg= JSON.stringify(body)
  //  var obj = JSON.parse(msg);
  //  console.log(obj);
  //   var keys = Object.keys(obj);
  // for (var i = 0; i < (keys.length); i++) {
  //   console.log(obj[keys[i]]);
  // }
 });


 // Gérer la connexion d'un client Socket.io
io.on('connection', (socket) => {
  console.log('Nouvelle connexion Socket.io :', socket.id);

  // Écouter l'événement 'disconnect' lorsque le client se déconnecte
  socket.on('disconnect', () => {
    console.log('Déconnexion Socket.io :', socket.id);
  });
});

io.emit('node',senderMsg)

//MQTT
 client.on('connect', function () {
  console.log('Client MQTT connecté');
  client.subscribe('esp');
});
client.subscribe('esp');

client.on('error', function (error) {
  console.log('Erreur de connexion:', error);
  client.reconnect();
});

client.on('reconnect', function () {
    console.log('Reconnexion au serveur MQTT...');
  });

exports.firstpage =  (req, res, next) => {
  console.log("hello world")
  res.send("Hi I'm sensor microservice");
}

/**Node controller */
exports.getNodeInfo = (req, res) => {
    Node.find().populate("user").then(
      (msg) => {
        client.publish('server', senderMsg);
        //client.subscribe('server');
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  
  };

exports.createNode = (req,res) => {
 const  node = new Node(req.body);
  console.log(node);
  
  node.save().then(
    () => {
      res.status(201).json({
        message: 'Node saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
    );
};

exports.updateNode = (req, res, next) => {

    Node.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'node updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteNode = (req, res, next) => {
    Node.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Node Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.getNodeTest=(req,res)=>{
  Node.findOne({
    _id: req.params.id
  }).then(
    msg=>{
      res.status(200).json(msg);
      // var test =msg["water"]
      // console.log(test[1]);
    }
  )
}

exports.getOneNode = (req, res, next) => {
    Node.findOne({
      _id: req.params.id
    }).then(
      (msg) => {
        // Faire une requete au microcontroller pour avoir les données
        client.on('message', function (topic, message) {
          receiveMsg=message.toString();
          console.log(receiveMsg);
       // console.log('Received message on topic:', topic, 'message:', message.toString());
        });
        var idFire = [Fire()]
        var idTemp = [Temp()]
        var idDht11 = [Dht11()]
        var idLight = [Light()]
        var idWater = [Water()]
        var idMoisture = [Moisture()]
        idFire.length=0
        idTemp.length=0
        idDht11.length=0
        idLight.length=0
        idWater.length=0
        idMoisture.length=0
        
        const  new_temp = new Temp({value:temp, time:{date: now.toLocaleDateString('fr-TN',options),hr:now.toLocaleTimeString('fr-TN',options)}});
        setTimeout(()=>{
            new_temp.save().then(
              () => {
                console.log ('Temp saved successfully!')
                Temp.find()
                .then((msg)=>{
                  idTemp = msg.map(({ _id }) => ({ _id }));
                });
                }).catch(
              (error) => {
                console.log ('Temp not saved!')
              }
              );
            const  new_light = new Light({value:light,time:{date: now.toLocaleDateString('fr-TN',options),hr:now.toLocaleTimeString('fr-TN',options)}});
            new_light.save().then(
              () => {
                console.log ('light saved successfully!')
                Light.find()
                .then((msg)=>{
                  idLight= msg.map(({ _id }) => ({ _id }));
                });
                }).catch(
              (error) => {
                console.log ('light not saved!')
              }
              );
            const  new_moisture = new Moisture({value:moisture,time:{date: now.toLocaleDateString('fr-TN',options),hr:now.toLocaleTimeString('fr-TN',options)}});
            new_moisture .save().then(
              () => {
                console.log ('moisture saved successfully!')
                Moisture.find()
                .then((msg)=>{
                  idMoisture=  msg.map(({ _id }) => ({ _id }));
                });
                }).catch(
              (error) => {
                console.log ('moisture not saved!')
              }
              );
            const  new_water = new Water({value:water,time:{date: now.toLocaleDateString('fr-TN',options),hr:now.toLocaleTimeString('fr-TN',options)}});
            new_water .save().then(
              () => {
                console.log ('water saved successfully!')
                Water.find()
                .then((msg)=>{
                  idWater = msg.map(({ _id }) => ({ _id }));
                });
                }).catch(
              (error) => {
                console.log ('water not saved!')
              }
              );
            const  new_dht11 = new Dht11({humidity:dht11Hum,temperature:dht11Temp,time:{date: now.toLocaleDateString('fr-TN',options),hr:now.toLocaleTimeString('fr-TN',options)}});
            new_dht11 .save().then(
              () => {
                console.log ('dht11 saved successfully!')
                Dht11.find()
                .then((msg)=>{
                  idDht11=  msg.map(({ _id }) => ({ _id }));
                });
                }).catch(
              (error) => {
                console.log ('dht11 not saved!')
              }
              );
            const  new_fire = new Fire({value:fire,time:{date: now.toLocaleDateString('fr-TN',options),hr:now.toLocaleTimeString('fr-TN',options)}});
            new_fire .save().then(
              () => {
                console.log ('fire saved successfully!')
                Fire.find()
                .then((msg)=>{
                  idFire=  msg.map(({ _id }) => ({ _id }));
                });
                }).catch(
              (error) => {
                console.log ('fire not saved!')
              }
              );
          },350)
          setTimeout(()=>{
           //// Je veux renvoyer le dernier obId dans le tableau
          Node.findOneAndUpdate({_id: req.params.id},{$set:{fire:idFire,water:idWater,light:idLight,temp:idTemp,dht11:idDht11,moisture:idMoisture,fan:fan, pump:pump}},{ new: true }).then(
            (msg) => {
              console.log('node updated successfully!');
            }
          ).catch(
            (error) => {
              console.log('node not updated !');
            }
          );
        },400)
        console.log(msg);
        io.emit('node', msg);
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
 };

 client.on('close', function () {
  console.log('Client MQTT déconnecté');
});

process.on('SIGINT', function () {
  client.end();
  process.exit();
});

/**Temp */
exports.getTempInfo = (req, res) => {
    Temp.find().then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.createTemp = (req,res) => {
 const  temp = new Temp(req.body);
  console.log(Temp);
  temp.save().then(
    () => {
      res.status(201).json({
        message: 'Temp saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
    );
};

exports.updateTemp = (req, res, next) => {
    Temp.findOneAndUpdate({_id: req.params.id},{$set:{value:temp}},{ new: true }).then(
      (msg) => {
        res.status(201).json({
          message: 'Temp updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteTemp = (req, res, next) => {
    Temp.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Temp Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  
exports.getOneTemp = (req, res, next) => {
    Temp.findOne({
      _id: req.params.id
    }).then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
   };

   /**Cam */

exports.getCamInfo = (req, res) => {
    Cam.find().then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.createCam = (req,res) => {
 const  cam = new Cam(req.body);
  cam.save().then(
    () => {
      res.status(201).json({
        message: 'Cam saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
    );
};

exports.updateCam = (req, res, next) => {
    Cam.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'Cam updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteCam = (req, res, next) => {
    Cam.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Cam Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  
exports.getOneCam = (req, res, next) => {
    Cam.findOne({
      _id: req.params.id
    }).then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
   };  

   /**Light controller */
exports.getLightInfo = (req, res) => {
    Light.find().then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.createLight = (req,res) => {
 const  light = new Light(req.body);
  console.log(Light);
  light.save().then(
    () => {
      res.status(201).json({
        message: 'Light saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
    );
};

exports.updateLight = (req, res, next) => {
  Light.findOneAndUpdate({_id: req.params.id},{$set:{value:light}},{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'Light updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteLight = (req, res, next) => {
    Light.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Light Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  
exports.getOneLight = (req, res, next) => {
    Light.findOne({
      _id: req.params.id
    }).then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
   };   

   //Moisture
   exports.getMoistureInfo = (req, res) => {
    Moisture.find().then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.createMoisture = (req,res) => {
 const  moisture = new Moisture(req.body);
  console.log(Moisture);
  moisture.save().then(
    () => {
      res.status(201).json({
        message: 'Moisture saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
    );
};

exports.updateMoisture = (req, res, next) => {
    Moisture.findOneAndUpdate({_id: req.params.id},{$set:{value:moisture}},{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'Moisture updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteMoisture = (req, res, next) => {
    Moisture.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Moisture Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  
exports.getOneMoisture = (req, res, next) => {
    Moisture.findOne({
      _id: req.params.id
    }).then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
   };   

//Water

exports.getWaterInfo = (req, res) => {
  console.log("test");
  Water.find().exec().then(
    (msg) => {
      res.status(200).json(msg);
      console.log(msg);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.createWater = (req,res) => {
const  water = new Water(req.body);
water.save().then(
  () => {
    res.status(201).json({
      message: 'Water saved successfully!'
    });
  }
).catch(
  (error) => {
    res.status(400).json({
      error: error
    });
    console.log(error);
  }
  );
};

exports.updateWater = (req, res, next) => {
    Water.findOneAndUpdate({_id: req.params.id},{$set:{value:water}},{ new: true }).then(  
    (msg) => {
      console.log(msg);
      res.status(201).json({
        message: 'Water updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteWater = (req, res, next) => {
  Water.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Water Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.getOneWater = (req, res, next) => {
  Water.findOne({
    _id: req.params.id
  }).then(
    (msg) => {
      res.status(200).json(msg);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
 };   

 //Dht11

 exports.getDht11Info = (req, res) => {
  Dht11.find().then(
    (msg) => {
      res.status(200).json(msg);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.createDht11 = (req,res) => {
const  dht11 = new Dht11(req.body);
console.log(Dht11);
dht11.save().then(
  () => {
    res.status(201).json({
      message: 'Dht11 saved successfully!'
    });
  }
).catch(
  (error) => {
    res.status(400).json({
      error: error
    });
    console.log(error);
  }
  );
};

exports.updateDht11 = (req, res, next) => {
  var dht11 = data['dht11']
var dht11Temp =data['temperature']
var dht11Hum = data['Humidity']
    Dht11.findOneAndUpdate({_id: req.params.id},{$set:{humidity:dht11Hum,temperature:dht11Temp}},{ new: true }).then(
    (msg) => {
      console.log(msg);
      res.status(201).json({
        message: 'Dht11 updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteDht11 = (req, res, next) => {
  Dht11.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Dht11 Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.getOneDht11 = (req, res, next) => {
  Dht11.findOne({
    _id: req.params.id
  }).then(
    (msg) => {
      res.status(200).json(msg);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
 };   

 //fire

 exports.getFireInfo = (req, res) => {
    Fire.find().then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.createFire = (req,res) => {
 const  fire = new Fire(req.body);
  console.log(Fire);
  fire.save().then(
    () => {
      res.status(201).json({
        message: 'Fire saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
    );
};

exports.updateFire = (req, res, next) => {
    Fire.findOneAndUpdate({_id: req.params.id}, { $set: {value:fire}},{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'Fire updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteFire = (req, res, next) => {
    Fire.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Fire Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  
exports.getOneFire = (req, res, next) => {
    Fire.findOne({
      _id: req.params.id
    }).then(
      (msg) => {
        res.status(200).json(msg);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
   };   