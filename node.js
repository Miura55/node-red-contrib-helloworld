module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    this.inputText = config.inputText;
    var node = this;
    node.on("input", function (msg) {
      msg.payload = msg.payload.toLowerCase();
      // logging
      RED.log.info(msg.payload);
      node.send(msg);
    });
  }
  RED.nodes.registerType("lower-case", LowerCaseNode);
};
