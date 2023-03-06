const Node = require("../models/nodeModel.js");

exports.getNodeInfo = (req,res,next) => {
    Node.find().then(
        (node) => {
          res.status(200).json(node);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
    };

exports.createNode = async(req,res) => {
 const  node = new Node({
        name:req.body.name,
        temp:req.body.temp.name,
        npk:req.body.npk.name,
        moisture:req.body.moisture.name,
        cam:req.body.cam.name,
  });
  console.log(node);
  try{
  await node.save()
  return res.status(201).json({
        message: 'node added successfully!'
      });
    }
 catch(error) {
      res.status(400).json({
        error: error
      });
      console.log(error);
    }
};

exports.updateNode = (req, res, next) => {
    const node = new Node({
        name:req.body.name,
        temp:req.body.temp.name,
        npk:req.body.npk.name,
        moisture:req.body.moisture.name,
        cam:req.body.cam.name,
    });
    Node.updateOne({_id: req.params.id}, node).then(
      () => {
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
