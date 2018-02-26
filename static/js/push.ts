import * as webpush from 'web-push';
const vapidKeys = {
  publicKey: 'BPkIUOIylNfWjC9MQ3_8oVx0MsaryiEaak1WyYWyqWp1-FuyQitttiMkdjvACkoEds94crwhyRIyVTyc2tVYICI',
  privateKey: 'StnpgzEGF2q5Et03uoeouNrLfZG0V_9wgHaDedMI2EU'
};
const webPush = webpush;
webPush.setVapidDetails(
  'mailto:xiang.2.li@aw.atos.net',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const options = {
  icon: '/pocpwa/static/img/icons/android-chrome-200x200_LFP.png',
  body: 'Angular 測試工作坊 9月23日(六)',
  data: {
          link: 'https://forum.angular.tw/'
        },
  requireInteraction: true
};
const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/fwNbCkZtyr0:APA91bF-tttRSH0KBHuZ3lGehkd7kcNzWOfAVTKeXp4cYUURgq2bEkTkCtLQAvrzDZ7q_N7on0ved-Ss9SGLRYGm61D2rkmPe2R2EUnLn7s1y7Fwrjts2I-qM94SQINyJA4VBV5spTdy',
  expirationTime: null,
  keys: {
    p256dh: 'BKsb5IumFOgJMBgk15Ce-oU123T5EuPFo3goBbRhwZarYlUfGC-I7JTKSee2TpmjG3HNZQcwirLYz2Fx9b_eZrU',
    auth: 'I4qBuGIBj1pUVbT4sQnHEg=='
  }
};
webPush.sendNotification(subscription, JSON.stringify(options));