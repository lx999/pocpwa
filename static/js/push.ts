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
  image: '/pocpwa/static/img/icons/android-chrome-200x200_LFP.png',
  data: {
          link: 'https://forum.angular.tw/'
        }
};
const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/e44NjDy1CVs:APA91bH06_GKup0xvvz6POgr4wEd7HjwIHCuPaEAZEuU-_E6hpodZQ1n_61MgtGw2aJ9FsFnC2NBZCFq4UGKRklAeQAjydGrPx9AqQKqhyJTWTPoYRM_BWI-60t7IZdSjJKQA2Ef_SXZ',
  expirationTime: null,
  keys: {
    p256dh: 'BO0nL8rx6EGHvwht9sOHsn_zMKuVcopai9vmtVHAgYZ3yyQixuSuyhe5vEZWSOG3NLhbeB0DvdICE-mKDmyIdaw=',
    auth: '1rnBfL5OJp-MONTnpU38Bw=='
  }
};
webPush.sendNotification(subscription, JSON.stringify(options));

