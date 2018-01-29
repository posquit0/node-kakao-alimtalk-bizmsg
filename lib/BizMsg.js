'use strict';

const axios = require('axios');
const debug = require('debug')('kakao-alimtalk-bizmsg');


/**
 * Class representing a client for BizMsg AlimTalk
 */
class BizMsg {
  /**
   * Create a new Bizmsg instance.
   * TODO: Consider other options
   *
   * @param {Object} [options={}] - The options of Bizmsg.
   */
  constructor(options = {}) {
    debug('create an instance');
    this.options = Object.assign({
      userId: 'prepay_user',
      apiKey: '89823b83f2182b1e229c2e95e21cf5e6301eed98',
      host: 'https://alimtalk-api.bizmsg.kr',
      timeout: 1000 * 20
    }, options);

    this.host = this.options.host;
    this.client = axios.create({
      baseURL: this.host,
      responseType: 'json',
      timeout: this.options.timeout
    });
  }

  /**
   * Send a Kakao Alimtalk message to.
   *
   * @param {string[]} to - The phone numbers to send a message.
   * @param {string} message - The message to send.
   * @param {string} templateId - The template id of message in BizMsg.
   * @param {Object} [options={}] - The additional send options.
   * @param {string} [options.reserveDt] - The reserved time to send message(yyyyMMddHHmmss).
   * @param {string} [options.smsKind] - The kind of SMS(S: SMS, L: LMS).
   * @param {string} [options.msgSms] - The SMS message.
   * @param {string} [options.smsSender] - The SMS sender.
   * @param {string} [options.smsLmsTit] - The LMS message title.
   */
  async send(to, message, templateId, options = {}) {
    const url = '/v1/sender/send';

    if (!Array.isArray(to))
      throw new TypeError('No destination phone numbers provided');

    /**
     * user_id: The account at bizmsg.kr
     * message_type: at(alim talk), ft(friend talk)
     * profile: API Key
     * tmplId: The registered template id
     * msg: The message which satisfied to the message template
     * phn: The destination phonenumber including the national code
     */
    const data = to
      .map(phoneNumber => phoneNumber.replace(/^0?(10[0-9]{7,8})$/, '82$1'))
      .map(phoneNumber => (Object.assign({
        'userId': this.options.userId,
        'profile': this.options.apiKey,
        'message_type': 'at',
        'tmplId': templateId,
        'msg': message,
        'phn': phoneNumber,
        'reserveDt': '00000000000000',
        'smsKind': 'L'
      }, options)));

    let res;
    try {
      debug(`send a message to ${to.length} destination(s)`);
      res = await this.client.post(url, data);
    } catch (err) {
      debug('occured error on sending message');
    }

    return res.data;
  }
}

module.exports = BizMsg;
