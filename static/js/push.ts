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
  title: 'Yo',
  body: 'Pls',
  image: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t31.0-8/21273134_10156585628499554_8520027102111869914_o.jpg?oh=9d7bcbc999c161f5ce778e361a4b9ea4&oe=5A47D9EE',
  data: {
    link: 'https://lx999.github.io/pocpwa/',
  },
};
const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/e1kkm276nAc:APA91bGupVFT6nK_H8_cnQqwh4x2wXrq9Yh8wygFg1nIIke1gX6zrsVdlcq2_UFW79J5uYD13s7Y_ffGrHs65PzH8xnYlp0jgiDrYS1CVd9PgOI-H1kKs_wk0Tlfb1uyffM42WpiWus6',
  expirationTime: null,
  keys: {
    p256dh: 'BBKqxyiW15rq_Otun6OAbMP8p43psRNjI2J4A_UfLvUq2UIQbHmNrwvhcHWkwmPaWrvroB1E_FFkVF12JAdZJvg=',
    auth: '_pcx-IM5t_QYsjcnbgLIjg=='
  }
};
webPush.sendNotification(subscription, JSON.stringify(options));