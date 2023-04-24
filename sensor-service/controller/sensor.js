const Node = require("../models/nodeModel.js");
const Light = require("../models/lightModel.js");
const Moisture = require("../models/moistureModel.js");
const Cam = require("../models/camModel.js");
const Temp = require("../models/tempModel.js");
const Water = require("../models/waterModel.js");
const Fire = require("../models/fireModel.js");
const Dht11 = require("../models/dht11Model.js");
const arduinoData = require("request");
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { json } = require("express");
const { log } = require("console");
const data= {
  "dht11":{"temperature":22,"humidity":32},
  "fireSensor":15,
  "ligthSensor":18,
  "soilTemperature":15,
  "soilMoisture":25,
  "waterSensor":20,
  "fan":20,
  "pump":20
}

arduinoData({
   url:"http://192.168.137.195/json",
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


exports.firstpage =  (req, res, next) => {
  console.log("hello world")
  res.send("Hi I'm sensor microservice");
}

/**Node controller */
exports.getNodeInfo = (req, res) => {
  
    Node.find().populate("temp").populate("light").populate("moisture").populate("cam").populate("user").populate("water").populate("fire").populate("dht11").then(
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
        // this.updateDht11;
        // this.updateFire;
        // this.updateLight;
        // this.updateWater;
        // this.updateMoisture
        // this.updateTemp;
        socket.emit('NodeSocket',Node);
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

  
exports.getOneNode = (req, res, next) => {
  io.on('connection',socket=>{
    console.log("test");
    Node.findOne({
      _id: req.params.id
    }).populate("temp").populate("light").populate("moisture").populate("cam").populate("user").populate("water").populate("fire").populate("dht11").then(
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
  })
   };

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

  let msg =  JSON.stringify(req.body);
  let donnee =JSON.parse(msg)
    Temp.findOneAndUpdate({_id: req.params.id}, { $set: {value:data['soilTemperature'],name:donnee['name']}},{ new: true }).then(
      (msg) => {
        console.log(msg);
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
  let msg =  JSON.stringify(req.body);
  let donnee =JSON.parse(msg)
    Light.findOneAndUpdatefindOneAndUpdate({_id: req.params.id}, { $set: {value:data['soilTemperature'],name:donnee['name']}},{ new: true }).then(
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
  let msg =  JSON.stringify(req.body);
  let donnee =JSON.parse(msg)
    Moisture.findOneAndUpdatefindOneAndUpdate({_id: req.params.id}, { $set: {value:data['soilTemperature'],name:donnee['name']}},{ new: true }).then(
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
  Water.find().then(
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

exports.createWater = (req,res) => {
const  water = new Water(req.body);
console.log(Water);
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
  let msg =  JSON.stringify(req.body);
  let donnee =JSON.parse(msg)
  Water.findOneAndUpdatefindOneAndUpdate({_id: req.params.id}, { $set: {value:data['soilTemperature'],name:donnee['name']}},{ new: true }).then(
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
  let msg =  JSON.stringify(req.body);
  let donnee =JSON.parse(msg)
  Dht11.findOneAndUpdatefindOneAndUpdate({_id: req.params.id}, { $set: {value:data['soilTemperature'],name:donnee['name']}},{ new: true }).then(
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
  let msg =  JSON.stringify(req.body);
  let donnee =JSON.parse(msg)
    Fire.findOneAndUpdatefindOneAndUpdate({_id: req.params.id}, { $set: {value:data['soilTemperature'],name:donnee['name']}},{ new: true }).then(
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