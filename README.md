<div align="center">
  <a href="https://github.com/posquit0/node-kakao-alimtalk-bizmsg" title="Koa Legit">
    <img alt="Koa Legit" src="http://www.hey.fr/fun/emoji/twitter/en/icon/twitter/706-emoji_twitter_horizontal_traffic_light.png" width="220px" />
  </a>
  <br />
  <h1>Koa Legit</h1>
</div>

<p align="center">
  :love_letter: Client for BizMsg Kakao Alimtalk API
</p>

<div align="center">
  <a href="https://circleci.com/gh/posquit0/node-kakao-alimtalk-bizmsg">
    <img alt="CircleCI" src="https://circleci.com/gh/posquit0/node-kakao-alimtalk-bizmsg.svg?style=shield" />
  </a>
  <a href="https://coveralls.io/github/posquit0/node-kakao-alimtalk-bizmsg">
    <img src="https://coveralls.io/repos/github/posquit0/node-kakao-alimtalk-bizmsg/badge.svg" alt='Coverage Status' />
  </a>
  <a href="https://badge.fury.io/js/node-kakao-alimtalk-bizmsg">
    <img alt="npm version" src="https://badge.fury.io/js/node-kakao-alimtalk-bizmsg.svg" />
  </a>
  <a href="https://www.npmjs.com/package/node-kakao-alimtalk-bizmsg">
    <img alt="npm" src="https://img.shields.io/npm/dt/node-kakao-alimtalk-bizmsg.svg" />
  </a>
  <a href="https://david-dm.org/posquit0/node-kakao-alimtalk-bizmsg">
    <img alt="npm" src="https://img.shields.io/david/posquit0/node-kakao-alimtalk-bizmsg.svg?style=flat-square" />
  </a>
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT License" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://github.com/ellerbrock/open-source-badge/">
    <img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" />
  </a>
</div>

<br />

**Kakao Alimtalk BizMsg** is the client library for [BizMsg](https://www.bizmsg.kr) Kakao Alimtalk API to send alimtalk message with phone-numbers, message, and template-id.


## Installation

```bash
# NPM
$ npm install --save node-kakao-alimtalk-bizmsg
# Yarn
$ yarn add node-kakao-alimtalk-bizmsg
```


## Example

```node
const BizMsg = require('kakao-alimtalk-bizmsg');

const client = new BizMsg({
  userId: process.env.BIZMSG_USER_ID,
  apiKey: process.env.BIZMSG_API_KEY
});

const to = ['01012345678', '01056784321'];
const message = 'Hello World!';
const templateId = 'cp-example-123';

// Send alimtalk message
client.send(to, message, templateId)
  .then(console.log)
  .catch(console.error);
```


## API

To be updated


## Contributing

This project follows the [**Contributor Covenant**](http://contributor-covenant.org/version/1/4/) Code of Conduct.

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/posquit0/node-kakao-alimtalk-bizmsg/issues) to report any bugs or ask feature requests.


## Self Promotion

Like node-kakao-alimtalk-bizmsg? Follow the repository on [GitHub](https://github.com/posquit0/node-kakao-alimtalk-bizmsg). And if you're feeling especially charitable, follow [posquit0](https://posquit0.com) on [GitHub](https://github.com/posquit0).


## Contact

If you have any questions, feel free to join me at [`#posquit0` on Freenode](irc://irc.freenode.net/posquit0) and ask away. Click [here](https://kiwiirc.com/client/irc.freenode.net/posquit0) to connect.


## License

Provided under the terms of the [MIT License](https://github.com/posquit0/node-kakao-alimtalk-bizmsg/blob/master/LICENSE).

Copyright © 2017, [Byungjin Park](http://www.posquit0.com).
