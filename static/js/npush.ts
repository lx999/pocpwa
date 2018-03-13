const webpush = require('web-push');
const vapidKeys = {
  publicKey: 'BKsb5IumFOgJMBgk15Ce-oU123T5EuPFo3goBbRhwZarYlUfGC-I7JTKSee2TpmjG3HNZQcwirLYz2Fx9b_eZrU',
  privateKey: 'StnpgzEGF2q5Et03uoeouNrLfZG0V_9wgHaDedMI2EU'
};
webpush.setGCMAPIKey('AAAAK1R1Ucw:APA91bHUkZMu5vZfljcc4v1CjH5sj2ywVw5kdvF1OjhwqtZvEtktYe0bjW_yi7JBKo2BJZ4LyKqhZmjIWZ5Jw24KLJ9sp3jxvDw6JRTiDG48TG0k_xN3f9mr90fHpt2N0KzsaTCX52Lv');
webpush.setVapidDetails(
  'mailto:weizibo295@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/eIIArDty6xo:APA91bF9NnTqC0zT9b_ivUj7uU991Ox6VOyxJsOTuRfy1tHerIn5iR6UG7_7S1sL1Q_nr7Ctfvlq2AIIUryzuVTMBuI0x0ZqLVXwdelkTACnIrdB1nWCpcNkU5ys5o4d6e4PzJpgJekm',
  keys: {
    auth: '3dhdNJd6vBTonI8r-7_JHQ==',
    p256dh: 'BBIGWC0Dk0kcHQdOwDlTm4yQycrtvyQ5qUSz-EypAPb46ci8cwtmIbqL7cU1WMKJQnTxGU88taABIUDosb-2mrc='
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');