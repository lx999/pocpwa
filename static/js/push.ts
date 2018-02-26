import * as webpush from 'web-push';
const vapidKeys = {
  publicKey: 'BKsb5IumFOgJMBgk15Ce-oU123T5EuPFo3goBbRhwZarYlUfGC-I7JTKSee2TpmjG3HNZQcwirLYz2Fx9b_eZrU',
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
  endpoint: 'https://fcm.googleapis.com/fcm/send/daSHTr1i3-s:APA91bG-kL83_kmJGddVlOrYpav7EFKd0hfMih-OvX_gGsYRUAMxeuIkL0lFjM7ty0MseUrHRyys-OXGZyRo4vhIInVn08TIsfwKf0n3itdX0gMyPWu27tte6gl0vQeMAnQ9-heuylZZ',
  expirationTime: null,
  keys: {
    p256dh: 'BOcDjl4aGtSthyvkYByAhHI8Agt6SFTAHiWW93p_XlT4z1EADsa80_bbyQffx30ezjuO6hz4pQc8yOK04ZyXhX4=',
    auth: 'QA8fMBVVis1que_OHOxuOg=='
  }
};
webPush.sendNotification(subscription, JSON.stringify(options));

