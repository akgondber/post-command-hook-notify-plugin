const notifier = require("node-notifier");
const PostCommandHookNotifyPlugin = require("../index.js");

jest.mock("node-notifier", () => ({
  notify: jest.fn()
}));

describe("PostCommandHookNotifyPlugin", () => {
  describe(".run", () => {
    it("calls notifier's notify method", () => {
      const message = "Command npm i have been finished!";
      new PostCommandHookNotifyPlugin(message).run();

      expect(notifier.notify).toHaveBeenCalledWith(message);
    });
  });
});
