pushData: any = {
 'notification': {
    "title": "Background Message Title",
    "body": "Background Message Body"
  },
  "to": ""
}

generatePush(pushData) {
   let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'key=AIzaSyBDB7tizfKHj52jIeoJssDGLsFFuT0ZNNk'});
   let options = new RequestOptions({ 'Content-Type': 'application/json' });
   return this.http.post('https://fcm.googleapis.com/fcm/send', pushData, options)
     .map(data => {console.log("Successfully Sent")});
}