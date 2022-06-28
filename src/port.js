const Ship = require("./ship");

function Port(setPort){
    this.name = setPort;
    this.ships = [];
};

Port.prototype.addShip = function addShip(newShip){
    this.ships.push(newShip);
};

Port.prototype.removeShip = function removeShip(remove){
    this.ships = this.ships.filter((ship) => ship !== remove);
};

module.exports = Port;