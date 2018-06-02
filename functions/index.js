const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendNotifications = functions.firestore
    .document('OfferZone/{OfferZoneId}').onCreate((snap) => {
       const OfferValue = snap.data();
	   
	   
	 
		  
	 
		    const PayLoad ={
			  notification : {
				  title : 'You recieved an offer!',
				  body : 'Someone is offering for your job',
				  
			  }	
			
         } 
		       
			   
			   
	admin.firestore().collection('Users')
	                 .doc(OfferValue.AdposterID)
	                 .get().then(doc => {
					
	  console.log(doc.data().name);  	

     admin.messaging().sendToDevice(doc.data().token, PayLoad);	  
	
                     return 0;
		
						 
					 }).catch(err =>{
						 
						  console.log(err);  
						  return 0;
					 });
	
	
	
	       return 0;

	
					 });