const { initializeApp, fromAuthURI } = require('@maidsafe/safe-node-app')
// import { initializeApp, fromAuthURI } from '@maidsafe/safe-node-app';

const APP_INFO = {
  info: {
    id: "net.maidsafe.examples.mailtutorial",
    scope: null,
    name: "SAFE Mail Tutorial",
    vendor: "MaidSafe.net Ltd"
  },
  opts: {
    own_container: true
  },
  containers: {
    publicNames: '_publicNames'
  },
  permissions: {
    _publicNames: ['Read', 'Insert']
  }
};


const requestAuth = async () => {
  try {
    const app = await initializeApp(APP_INFO.info);
    const resp = await app.auth.genAuthUri(APP_INFO.permissions, APP_INFO.opts);
    console.log("reqqqq", resp.uri);
    await app.auth.openUri(resp.uri);
    console.log("posttttttt    reqqqq");
    return null;
  } catch (err) {
    console.error(err);
    // showError();
  }
}

console.log("HEREeee");


requestAuth();
