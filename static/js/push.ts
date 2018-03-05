pushData: any = {
 'notification': {
    "title": "Background Message Title",
    "body": "Background Message Body"
  },
  "to": "cSOEmPddzk0:APA91bGTYDl1wAwEDCSsgEmp5jwr0j-sZ4QuRAEHN8zpw6n5qZRslGhnr75WM_WBQ8LorM861nWcrYpp4C_TcXJk-5mc7eHIaxlo9Qim10Yv38vPhLeFz0JGJ3fdfmGtMyUwmfrzPheY"
}

generatePush(pushData) {
   let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'key=AIzaSyBDB7tizfKHj52jIeoJssDGLsFFuT0ZNNk'});
   let options = new RequestOptions({ 'Content-Type': 'application/json' });
   return this.http.post('https://fcm.googleapis.com/fcm/send', pushData, options)
     .map(data => {console.log("Successfully Sent")});
}