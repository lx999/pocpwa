import * as webpush from 'web-push';
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
  endpoint: 'https://fcm.googleapis.com/fcm/send/ejQdiVRbX5o:APA91bEWmjLsuGmbLTyhR9-L7oOBvtF_ZpId764RYpwLp8I-m2vT295zO7r9rSQ5CwDGfeVsGIv_uv6IYH-tcdvEfHJFszlYQHnnf5ezhvQoJj24V52hxZ-oavHWHp6vcq5gyGCXnXBg',
  expirationTime: null,
  keys: {
    p256dh: 'BIRqOaHIf8DT2iEfta3yQqdFN1kNoIJ1G-k_wmLNSU5iCSbO8-sw786cYbbRW5R9krmF0w_93l68OgbZ5_6n_Uk=',
    auth: 'Ekxm90zzy0NvjNO7LfvmKA=='
  }
};
webPush.sendNotification(subscription, JSON.stringify(options));

