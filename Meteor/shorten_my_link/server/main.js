import { Meteor } from 'meteor/meteor';
import { LinkCollection } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function () {
    return LinkCollection.find({});
  });
});

function onRoute(req, res, next) {
  const { token } = req.params;
  const link = LinkCollection.findOne({ token });

  if (link) {
    LinkCollection.update(link, { $inc: { clicks: 1 } });
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    next();
  }
}

const middleware = ConnectRoute(function (router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
