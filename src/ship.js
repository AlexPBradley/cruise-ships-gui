function Ship(setPort){
    this.currentPort = setPort;
};

Ship.prototype.setSail = function setSail(setPort){
    this.currentPort = setPort;
};

Ship.prototype.dock = function dock(setPort){
    this.currentPort = setPort;
};

module.exports = Ship;