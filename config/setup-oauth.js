'use strict';

var Client = require('../clients/client');
var User = require('../clients/user');
var config = require('./config');

Client.getByPublicId(config.get('sitegate.clientId'), function (err, client) {
  if (!client) {
    User.getByUsername('root', function (err, user) {
      if (user) {
        Client.create({
          name: config.get('app.name'),
          publicId: config.get('sitegate.clientId'),
          secret: config.get('sitegate.clientSecret'),
          authCallbackUrl: config.get('sitegate.callbackURL'),
          trusted: true,
          homepageUrl: 'https://localhost:3040',
          userId: user.id
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