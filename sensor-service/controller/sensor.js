const Node = require("../models/nodeModel.js");
const Ligth = require("../models/ligthModel.js");
const Moisture = require("../models/moistureModel.js");
const Cam = require("../models/camModel.js");
const Temp = require("../models/tempModel.js");
const Water = require("../models/waterModel.js");
const Fire = require("../models/fireModel.js");
const Dht11 = require("../models/dht11Model.js");

exports.firstpage =  (req, res, next) => {
  console.log("hello world")
  res.send("Hi I'm sensor microservice");
}

/**Node controller */
exports.getNodeInfo = (req, res) => {
    Node.find().populate("temp").populate("ligth").populate("moisture").populate("cam").populate("user").populate("water").populate("fire").populate("dht11").populate("fire").then(
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
    Node.findOne({
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

    Temp.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
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

   /**Ligth controller */
exports.getLigthInfo = (req, res) => {
    Ligth.find().then(
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

exports.createLigth = (req,res) => {
 const  light = new Ligth(req.body);
  console.log(Ligth);
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

exports.updateLigth = (req, res, next) => {

    Ligth.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'Ligth updated successfully!'
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

  exports.deleteLigth = (req, res, next) => {
    Ligth.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Ligth Deleted!'
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

  
exports.getOneLigth = (req, res, next) => {
    Ligth.findOne({
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

    Moisture.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
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

  Water.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
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

  Dht11.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
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

    Fire.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
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