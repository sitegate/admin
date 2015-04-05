'use strict';

var Client = require('../clients/client');
var User = require('../clients/user');
var config = require('./config');

Client.getByPublicId(config.get('sitegate.clientId'), function (err, client) {
  if (!client) {
    User.query({
      count: 1,
      fields: ['username']
    }, function (err, users) {
      if (users && users.length) {
        Client.create({
          name: config.get('app.name'),
          publicId: config.get('sitegate.clientId'),
          secret: config.get('sitegate.clientSecret'),
          authCallbackUrl: config.get('sitegate.callbackURL'),
          trusted: true,
          homepageUrl: 'https://localhost:3040',
          userId: users[0].id
        });
      }
    });
    
    return;
  }

  if (client.publicId !== config.get('sitegate.clientId') || client.secret !== config.get('sitegate.clientSecret')) {
    Client.update(client.id, {
      publicId: config.get('sitegate.clientId'),
      secret: config.get('sitegate.clientSecret'),
      authCallbackUrl: config.get('sitegate.callbackUrl')
    });
  }
});