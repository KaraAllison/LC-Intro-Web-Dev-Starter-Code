class Rover {
   
    // create constructor that gets tests to pass (Test 7)
    constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
    }
    // create receiveMessage(message) method
    receiveMessage(message) {
      let response = {
        message: message.name,
        results: []
      }
      for (let i = 0; i < message.commands.length; i++) {
        if (message.commands[i].commandType === "STATUS_CHECK") {
          let result = {
            completed: true,
            roverStatus: {
              position: this.position,
              mode: this.mode,
              generatorWatts: this.generatorWatts
            }
          }
          response.results.push(result);
        } else if (message.commands[i].commandType === "MODE_CHANGE") {
          let result = {
            completed: true
          }
          this.mode = message.commands[i].value;
          response.results.push(result);
        } else if (message.commands[i].commandType === "MOVE") {
          let result = {};
          if (this.mode === "LOW_POWER") {
            result['completed'] = false;
          } else {
            result['completed'] = true;
            this.position = message.commands[i].value;
          }
          response.results.push(result);
        } else {
          response.results.push({});
        }
      }
      return response;
    }
  
      // create response object, and set its message property (Test 8)
  
      // add a results property to response object, as an empty array (Test 9)
  
      // for each command in the message, add an item to the results array (Test 9)
  
        // for each command, add {} (an empty object) (Test 9)
  
        // if the command.commandType is STATUS_CHECK (Test 10) 
  
          // create a result object (empty to start)
  
          // set result.completed = true;
  
          // add a roverStatus object to the result object, with the status values of the rover
  
          // add the result object to the results array
  
        // if command.commandType is MODE_CHANGE (Test 11)
  
          // create a result obj
  
          // set result.completed = true
  
          // update rover's mode
  
          // add result to the results array
  
      // if command.commandType is MOVE (Test 12)
  
        // if rover mode is LOW_POWER, don't move and send competed = false in response
  
        // else if mode is NORMAL, change the position and send completed = false in response (Test 13)
    
      // return the response object
    
  }
  
  module.exports = Rover;