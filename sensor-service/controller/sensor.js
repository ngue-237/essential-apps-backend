const Node = require("../models/nodeModel.js");
const Npk = require("../models/npkModel.js");
const Moisture = require("../models/moistureModel.js");
const Cam = require("../models/camModel.js");
const Temp = require("../models/tempModel.js");

exports.firstpage =  (req, res, next) => {
  console.log("hello world")
  res.send("Hi I'm sensor microservice");
}

/**Node controller */
exports.getNodeInfo = (req, res) => {
    Node.find().populate("temp").populate("npk").populate("moisture").populate("cam").populate("user").then(
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

   /**Node controller */
exports.getNpkInfo = (req, res) => {
    Npk.find().then(
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

exports.createNpk = (req,res) => {
 const  npk = new Npk(req.body);
  console.log(Npk);
  npk.save().then(
    () => {
      res.status(201).json({
        message: 'Npk saved successfully!'
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

exports.updateNpk = (req, res, next) => {

    Npk.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'Npk updated successfully!'
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

  exports.deleteNpk = (req, res, next) => {
    Npk.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Npk Deleted!'
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

  
exports.getOneNpk = (req, res, next) => {
    Npk.findOne({
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