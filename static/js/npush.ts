const webpush = require('web-push');

webpush.setGCMAPIKey('AAAAK1R1Ucw:APA91bHUkZMu5vZfljcc4v1CjH5sj2ywVw5kdvF1OjhwqtZvEtktYe0bjW_yi7JBKo2BJZ4LyKqhZmjIWZ5Jw24KLJ9sp3jxvDw6JRTiDG48TG0k_xN3f9mr90fHpt2N0KzsaTCX52Lv');
webpush.setVapidDetails(
  'mailto:weizibo295@hotmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'fBy3S6eOcH4:APA91bF0JXkubEbYgxcJpxzV4xUvQuiSjb_cWP-tVHsQK0T8AUKkid29J0J8Jr61-mzJWOkS6ARidEQRK0G3muNTwzsPHGgHqj33_OJLlZDNACAT9Q7mIWcxD146pz33n5Lu6xhDrajp',
  keys: {
    auth: '1PkYH5xux5meBqJC5svgmA==',
    p256dh: 'BKSZ_CdDVFJJ8YvcD2Pr4Xt-Vu7mRwawqdEvIghE9-r20rmIOKCrKTPaTF5EotQAPqVu-3nh980fgXQmAGUFOLE='
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');