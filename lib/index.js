"use strict";

const notifier = require("node-notifier");

class PostCommandHookNotifyPlugin {
  constructor(message, options = {}) {
    this.message = message;
    this.premessage = options.premessage;
    this.postmessage = options.postmessage;
  }

  run() {
    notifier.notify(this.message);
  }
}

module.exports = PostCommandHookNotifyPlugin;
