var node=require("../routes/node.js");
var json = {
    var1: 1,
    var2: 2,
    var3: 3,
  };
  
module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log("connected");
		socket.on('disconnect', () => console.log('disconnected')); 
		socket.on('msg',()=>{
            let ms = 'max'
            io.emit(ms);
        })
	})
}