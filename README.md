# post-command-hook-notify-plugin [![NPM version][npm-image]][npm-url]
> Post command hook plugin to notify after command execution.


Notify plugin for [post-command-hook](https://www.npmjs.com/package/post-command-hook) that gives you a possibility to send a notification after some command have been executed using [node-notifier](https://www.npmjs.com/package/node-notifier).

## Installation

```sh
$ npm install --save post-command-hook-notify-plugin
```

## Usage

```js
const PostCommandHook = require('post-command-hook');
const PostCommandHookNotifyPlugin = require('post-command-hook-notify-plugin');

const postCommandHook = new PostCommandHook({ command: 'npx', args: ['create-react-app', 'myapp'] });
postCommandHook.use(new PostCommandHookNotifyPlugin('myapp have been generated')).run();
```

## API

### new NotifyPostCommandHookPlugin(message, options = {})

Constructs an instance of NotifyPostCommandHookPlugin class providing `message` and `options`.

#### message

A message to be displayed. It can be string or object with `title` and `message` keys. Please see [node-notifier](https://www.npmjs.com/package/node-notifier) documentation for details.

#### options

Additional optional options.

##### premessage
A message to be shown in the console before sending a notification.

##### postmessage
A message to be shown in the console after sending a notification.

## License

MIT © [Rushan Alyautdinov](https://github.com/akgondber)


[npm-image]: https://img.shields.io/npm/v/post-command-hook-notify-plugin.svg?style=flat
[npm-url]: https://npmjs.org/package/post-command-hook-notify-plugin
