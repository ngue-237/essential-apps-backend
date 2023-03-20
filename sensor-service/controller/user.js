const User = require("../models/userModel.js");


/**User controller */
exports.getUserInfo = (req, res) => {
    User.find().then(
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

exports.createUser = (req,res) => {
 const  user = new User(req.body);
  console.log(user);
  
  user.save().then(
    () => {
      res.status(201).json({
        message: 'User saved successfully!'
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

exports.updateUser = (req, res, next) => {

    User.findOneAndUpdate({_id: req.params.id},req.body,{ new: true }).then(
      (msg) => {
        console.log(msg);
        res.status(201).json({
          message: 'User updated successfully!'
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

  exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'User Deleted!'
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

  
exports.getOneUser = (req, res, next) => {
    User.findOne({
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