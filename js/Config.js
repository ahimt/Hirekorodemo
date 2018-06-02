var CountryCode = "+61";

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA6uiwCxfP8ui70UKEHU1CLp3w_KrQ0SMI",
    authDomain: "fir-32d86.firebaseapp.com",
    databaseURL: "https://fir-32d86.firebaseio.com",
    projectId: "fir-32d86",
    storageBucket: "fir-32d86.appspot.com",
    messagingSenderId: "728581794819"
  };
  firebase.initializeApp(config);
  
const messaging = firebase.messaging();



  
function LoginButtonLoader(){
	
	var LoginDiv = document.getElementById("LoginDiv");
	LoginDiv.innerHTML = " <button class='AgreeButton' onclick='GoogleLogin()' >Google</button> " + 
	" <button  class='AgreeButton' onclick='FaceBookLogin()' >Facebook</button>";
	
	
	
	
	
}


function GoogleLogin(){
	
	var provider = new firebase.auth.GoogleAuthProvider();
	
	firebase.auth().signInWithRedirect(provider);
	
	firebase.auth().getRedirectResult().then(function(result) {
		

		
}).catch(function(error) {
 
 GoogleLogin();
 
});
	
	
}



function FaceBookLogin(){
	
	var provider = new firebase.auth.FacebookAuthProvider();
	
	firebase.auth().signInWithRedirect(provider);
	
	firebase.auth().getRedirectResult().then(function(result) {
		
	
		
}).catch(function(error) {
 
 FaceBookLogin();
 
});
	
	
}



  window.fbAsyncInit = function() {
    FB.init({
      appId      : '137145246916295',
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
   function processUser()
  {  
 
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");    
    status = unescape(temp[1]);
    temp = parameters[1].split("=");
    code = unescape(temp[1]);
    temp = parameters[2].split("=");
    state= unescape(temp[1]);   
    
   
 
    
   if(status =="PARTIALLY_AUTHENTICATED"){  
   
   LoaderSpinnerAnimation();
    
    
     $.getJSON('https://graph.accountkit.com/v1.2/access_token?grant_type=authorization_code&code=' +code+ '&access_token=AA|137145246916295|b38d0ec389020b91e4458c962617765e',function (data)
     {      
          
     if(data.access_token!=null){

     
     $.getJSON('https://graph.accountkit.com/v1.2/me/?access_token=' +data.access_token ,function (data)
     {  
     
             Phone = data.phone.number;
	          setTimeout(function(){
	                 
					RegisterUser(UserID,DisplayName,Phone,Email,PhotoURL);
					 
               }, 1000);
      
     },'jsonp');
     
     
  
                            
     
     }
     
     
     
     
     },'jsonp');
  

   
   }
  
         
 

  }

  
  function SaveToken(){
	  
messaging.requestPermission()
.then (function(){
		console.log(messaging.getToken());
	return messaging.getToken();

}).then(function(token){
	
	MessageToken = token;
		console.log(token);
	

})
.catch(function(err){
	
	alert("not Granted");
});

	  
  }