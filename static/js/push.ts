const webpush = require('web-push');
const vapidKeys = {
  publicKey: 'BKsb5IumFOgJMBgk15Ce-oU123T5EuPFo3goBbRhwZarYlUfGC-I7JTKSee2TpmjG3HNZQcwirLYz2Fx9b_eZrU',
  privateKey: 'StnpgzEGF2q5Et03uoeouNrLfZG0V_9wgHaDedMI2EU'
};
const webPush = webpush;
webPush.setVapidDetails(
  'mailto:weizibo295@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const options = {
  icon: '/pocpwa/static/img/icons/android-chrome-200x200_LFP.png',
  body: 'Angular 測試工作坊 9月23日(六)',
  data: {
          link: 'https://forum.angular.tw/'
        }
};
const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/ciXw2zvFi6Y:APA91bEAcmDNiFztaosQ8OVVOaJGls2yUwGdyMbTYMK9ViS1BQz56eSoZhN4h9Hx3sIIq89CtP_qIeG86U8t8xaELHAG1eKrO7hOe9HuxFKD0pRObK_hfo-YQgE5piXBxSOoWhNTZyqq',
  expirationTime: null,
  keys: {
    p256dh: 'BDhxcl_kOKXj8ia5V3cXt6b0ncvowt0dQV28y0kOj_KlWFPINAjX_QDTu3YeGOlMeB5bCHlsX-I5XW42Qf2fD8w=',
    auth: 'iEkpNwYgG6xMwFgNQQnImg=='
  }
};
webPush.sendNotification(subscription, JSON.stringify(options));

