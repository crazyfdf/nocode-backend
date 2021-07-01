'use strict';

const { Controller } = require('egg');
const { sleep } = require('../utils/index');


class Index1Controller extends Controller {
  async list() {
    const { ctx } = this;
    await sleep(Math.random());
    ctx.body = [
      {
        id: 1,
        name: 'hi,egg',
        email: 'yuga_sun@163.com',
      },
    ];
  }
}

module.exports = Index1Controller;
