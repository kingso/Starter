/* eslint-disable no-console */

function router() {
  (async function addUser() {
    const client = 'oh!';

    try {
      console.log(client);
    } catch (err) {
      console.log(err);
    }
  }());
}

router();
