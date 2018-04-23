


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
  
  
  
function LoginButtonLoader(){
	
	
	
	
	
	
 // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: 'index.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
           
		  
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID		  
         
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
	  	

      ui.start('#LoginDiv', uiConfig);


	
	document.getElementById("LoginDiv").style.height = "auto";
	
	
	
	
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
     ///////////////////////
     
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