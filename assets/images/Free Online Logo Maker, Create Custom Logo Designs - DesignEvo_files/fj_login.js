window.fj=window.fj?window.fj:{};window.fj.fb_app_id=(document.domain==="www.designevo.com")||(document.domain==="designevo.com")?'348667772210542':'145376632291335';window.fj.google_auth2_id="385660717962-nlcuj8f80042ufvvhk6br4t5apitmhhk.apps.googleusercontent.com";window.captchaCallback=function(){window.getGoogleRecaptchaId=function(){if(window.gcId==undefined){window.gcId=grecaptcha.render('grc',{'sitekey':'6LeKzqQUAAAAAEJ6PafM6cSZhhN8ghYC0MRvJpyT','callback':(captcha)=>{googleRecaptcha.gcAjax(captcha);},'expired-callback':()=>{},'error-callback':()=>{},});}
return window.gcId;}};window.loadGoogleRecaptchaSDK=function()
{(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.async='async';js.defer='defer';js.src="https://www.google.com/recaptcha/api.js?onload=captchaCallback&render=explicit";fjs.parentNode.insertBefore(js,fjs);})(document,'script','google-recaptcha-jssdk');window.googleRecaptcha.loaded=true;}
window.googleRecaptcha={post_data:{},target:null,targets:[],needLoginRecaptcha:false,loaded:false,addTarget:function(name,func,callback=null)
{this.targets.push({name:name,func:func,callback:callback});},gcAjax:function(captcha){this.post_data['recaptcha']=captcha;if(window.csrf_token){this.post_data[window.csrf_token]=1;}
this.post_data["rt"]="gl";this.targets.forEach((target)=>{if(target.name==this.target)
{target.func(this.post_data,(result)=>{this.reset();if(target.callback)
target.callback(...arguments);});}});},reset:function()
{this.target=null;if((typeof window.grecaptcha!=="undefined")&&window.grecaptcha&&(typeof gcId!=="undefined")){grecaptcha.reset(window.gcId);};},submit:function(post_data,target){if(window.getGoogleRecaptchaId){this.post_data=post_data;this.target=target;var gcId=window.getGoogleRecaptchaId();grecaptcha.execute(gcId);}
else{setTimeout((post_data,target)=>{this.submit(post_data,target);},100);}}}
window.TCRloadCallback=function(){window.TCcaptcha=new TencentCaptcha('2080394949',function(res){tencentRecaptcha.gcAjax(res);});};window.loadTencentRecaptchaSDK=function()
{(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.async='async';js.defer='defer';js.src="https://ssl.captcha.qq.com/TCaptcha.js";fjs.parentNode.insertBefore(js,fjs);if(js.addEventListener){js.addEventListener('load',function(){window.TCRloadCallback();},false);}else if(js.attachEvent){js.attachEvent('onreadystatechange',function(){var target=window.event.srcElement;if(target.readyState=='loaded'){window.TCRloadCallback();}});}})(document,'script','tencent-recaptcha-jssdk');window.tencentRecaptcha.loaded=true;};window.tencentRecaptcha={post_data:{},target:null,targets:[],loaded:false,addTarget:function(name,func,callback=null)
{this.targets.push({name:name,func:func,callback:callback});},gcAjax:function(res){if(res.ret===0){this.post_data['recaptcha']=res.ticket;if(window.csrf_token){this.post_data[window.csrf_token]=1;}
this.post_data["rt"]="tc";this.post_data["randstr"]=res.randstr;this.targets.forEach((target)=>{if(target.name==this.target)
{target.func(this.post_data,(result)=>{if(target.callback)
target.callback(...arguments);});}});}else if(res.ret===2){if(window.tcRecaptchaCloseCallback){window.tcRecaptchaCloseCallback();}}},submit:function(post_data,target){this.post_data=post_data;this.target=target;window.TCcaptcha.show();}}
window.fbAsyncInit=function(){FB.init({appId:window.fj.fb_app_id,xfbml:true,version:'v2.11'});};window.loadFacebookSDK=function()
{(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.async='async';js.defer='defer';js.src="//connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs);})(document,'script','facebook-jssdk');}
function stopDefault(e){if(e&&e.preventDefault){e.preventDefault();}else{window.event.returnValue=false;}
return false;}
window.connectWithFaceBook={errorcallback:function(){},login:function(e,errorcallback){if(errorcallback){window.connectWithFaceBook.errorcallback=errorcallback;}
stopDefault(e);FB.login(function(response){if(response.status==='connected'){this.handleFacebookConnected(response);}else if(response.status==='not_authorized'){window.connectWithFaceBook.errorcallback();}else{window.connectWithFaceBook.errorcallback();}}.bind(this),{scope:'public_profile,email'});},handleFacebookConnected:function handleFacebookConnected(resp){var token=resp.authResponse.accessToken;this.ajaxConnectFacebook(token);},ajaxConnectFacebook:function(token){var post_data={token:token};post_data[window.csrf_token]=1;window.fjuser.connectFacebook(post_data,(result,json)=>{if(result)
{if(json.data.register==true){if(window.app_survey){window.app_survey.openBox();}
if(window.gaEvent){window.gaEvent("signUp","signUp_success_facebook");}}}});},statusChangeCallback:function statusChangeCallback(response){if(response.status==='connected'){this.handleFacebookConnected(response);}else if(response.status==='not_authorized'){}else{}},checkLoginState:function checkLoginState(){FB.getLoginStatus(function(response){this.statusChangeCallback(response);}.bind(this));},};window.loadGoogleSDK=function(){(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.gapi_processed="true";js.async='async';js.defer='defer';js.src="https://apis.google.com/js/api:client.js";fjs.parentNode.insertBefore(js,fjs);})(document,'script','google-jssdk');}
function attachGoogleSignin(element){auth2.attachClickHandler(element,{},function(googleUser){connectWithGoogle.onSignIn(googleUser);},function(error){window.connectWithGoogle.errorcallback();});}
var googleUser={};$(function(){});var googleOauthLoaded=false;window.connectWithGoogle={errorcallback:function(){},login:function(e,errorcallback){if(errorcallback){window.connectWithGoogle.errorcallback=errorcallback;}
if(!googleOauthLoaded){var dom=jQuery(".designevo-login-gl-btn")[0];if(window.gapi!=undefined&&dom!=undefined){gapi.load('auth2',function(){auth2=gapi.auth2.init({client_id:window.fj.google_auth2_id,cookiepolicy:'single_host_origin',});attachGoogleSignin(dom);googleOauthLoaded=true;$(e.target).click();});}else{setTimeout(function(){window.connectWithGoogle.login(e);},1000);}}else{$(e.target).click();}},loginClick:function(e){stopDefault(e);},onSignIn:function(googleUser){var id_token=googleUser.getAuthResponse().id_token;this.ajaxConnectGoogle(id_token);},signOut:function(){try{var auth2=gapi.auth2.getAuthInstance();auth2.signOut().then(function(){});}catch(e){}},ajaxConnectGoogle:function(token){var post_data={token:token};post_data[window.csrf_token]=1;window.fjuser.connectGoogle(post_data,(result,data)=>{if(result){if(data.register==true){if(window.app_survey){window.app_survey.openBox();}
if(window.gaEvent){window.gaEvent("signUp","signUp_success_google");}}}})}};Vue.component('fj-user-container',{template:`
        <div class="fj-user-container">
            <fj-box-button v-show="0" :text="loginLanguage.login" :onClick="showSignIn" v-if="!hasLogin" :className="'fj-btn-signin'" />
            <fj-box-button :text="loginLanguage.signUp" :onClick="showSignUp" v-if="!hasLogin" :className="'fj-btn-signup'" />
            <fj-user-info v-if="hasLogin" :userInfo="userInfo" :hasLogin="hasLogin" :loginLanguage="loginLanguage" />
        </div>
    `,props:{loginLanguage:Object,hasLogin:Boolean,setPanelMode:Function,userInfo:Object,},methods:{showSignUp:function(){this.setPanelMode(false);},showSignIn:function(){this.setPanelMode(true);},userLogedout:function(){this.hasLogin=false;this.userInfo={};}},});Vue.component('fj-user-info',{template:`
        <div id="logged" class="">
            <div class="userGroup user-avatar dropdown">
                <button id="btUser" class="fj-user" type="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleMenu" >
                    <img id="imgAvatarThumb" :src="userInfo.img">
                </button>
                <transition name="drop">
                    <ul id="fj-profile-drop-menu" class="fj-profile-drop-menu dropdown-menu" role="menu" v-show="isOpen">
                        <div class="fj-profile-userinfo">
                            <img :src="userInfo.img" />
                            <span>{{userInfo.email}}</span>
                        </div>
                        <li>
                            <a id="myDesigns" @click="myDesigns">
                                {{loginLanguage.myDesigns}}
                            </a>
                        </li>
                        <li>
                            <a id="myProfile" target="_self" ref="nofollw" href="/profile.html">
                                {{loginLanguage.myAccount}}
                            </a>
                        </li>
                        <li>
                            <a id="logout" @click="userLogout">
                               {{loginLanguage.signOut}}
                            </a>
                        </li>
                    </ul>
                </transition>
            </div>
        </div>
    `,props:{userInfo:Object,hasLogin:Boolean,loginLanguage:Object,},data:function(){return{isOpen:false,};},methods:{toggleMenu:function(){this.isOpen=!this.isOpen;},userLogout:function(){window.fjuser.logoutPost((json)=>{if(json.code===200){this.$parent.userLogedout();}});},upgrade:function(){if(window.openSubscription){window.openSubscription("profile");}},billing:function(){window.open("/profile.html?page=billing",'_blank');},myDesigns:function(){$("#logged").hide();localStorage.setItem("isDefaultProjectPage",true);location.href="/app/";}},created:function(){document.addEventListener('click',(e)=>{if(this.isOpen===true){dom=e.target;className01=$(dom).attr("class");className02=$(dom).parent().attr("class");className03=$(dom).parent().parent().attr("class");if(className01!=="fj-user"&&className02!=="fj-user"&&className03!=="fj-user"){this.isOpen=false;}}});}});Vue.component('fj-login-panel',{template:`
        <div class="fj-login-panel">
            <div class="fj-login-head">
                <div class="fj-login-head__title">{{headTitle}}</div>
                <div class="fj-login-head__desc">
                    <span>{{headDesc}}</span>
                    <span @click="togglePanel" class="fj-login-head__desc-sign">{{headToggleTitle}}</span>
                </div>
            </div>
            <fj-bar />
            <fj-third-button :onClick="facebookSubmit" :text="facebookText" :isLoading="isLoadingFB">
                <template v-slot:icon>
                    <svg class="fl-facebook-icon" version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<path fill="#3B5997" d="M21.643,2.176h-3.31c0,0-5.299-0.973-5.299,5.346c0,1.359,0,4.207,0,4.207H9.561l0.015,3.583h3.159
	l0.004,15.522h3.875V15.311h4.751l0.894-3.583h-5.645V7.395c0,0,0.535-1.637,2.352-1.637h2.662L21.643,2.176L21.643,2.176z"/>
</svg>
                </template>
            </fj-third-button>
            <fj-third-button :onClick="googleSubmit" :text="googleText" :btn_class="'designevo-login-gl-btn'" :isLoading="isLoadingGL">
                <template v-slot:icon>
                    <svg class="fl-google-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<g>
	<g>
		<g>
			<g>
				<defs>
					<path id="SVGID_1_" d="M27.59,13.673H16.408v4.636h6.436c-0.6,2.944-3.107,4.637-6.436,4.637c-3.926,0-7.09-3.161-7.09-7.09
						s3.164-7.09,7.09-7.09c1.691,0,3.218,0.6,4.418,1.582l3.49-3.491c-2.127-1.854-4.854-3-7.909-3c-6.655,0-12,5.346-12,12
						c0,6.654,5.345,12,12,12c6,0,11.456-4.362,11.456-12C27.863,15.146,27.754,14.382,27.59,13.673z"/>
				</defs>
				<clipPath id="SVGID_2_">
					<use xlink:href="#SVGID_1_"  overflow="visible"/>
				</clipPath>
				<path clip-path="url(#SVGID_2_)" fill="#FBBC05" d="M3.317,22.945V8.764l9.273,7.089L3.317,22.945z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<g>
				<defs>
					<path id="SVGID_3_" d="M27.59,13.673H16.408v4.636h6.436c-0.6,2.944-3.107,4.637-6.436,4.637c-3.926,0-7.09-3.161-7.09-7.09
						s3.164-7.09,7.09-7.09c1.691,0,3.218,0.6,4.418,1.582l3.49-3.491c-2.127-1.854-4.854-3-7.909-3c-6.655,0-12,5.346-12,12
						c0,6.654,5.345,12,12,12c6,0,11.456-4.362,11.456-12C27.863,15.146,27.754,14.382,27.59,13.673z"/>
				</defs>
				<clipPath id="SVGID_4_">
					<use xlink:href="#SVGID_3_"  overflow="visible"/>
				</clipPath>
				<path clip-path="url(#SVGID_4_)" fill="#EA4335" d="M3.317,8.764l9.273,7.089l3.818-3.326L29.499,10.4V2.764H3.317V8.764z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<g>
				<defs>
					<path id="SVGID_5_" d="M27.59,13.673H16.408v4.636h6.436c-0.6,2.944-3.107,4.637-6.436,4.637c-3.926,0-7.09-3.161-7.09-7.09
						s3.164-7.09,7.09-7.09c1.691,0,3.218,0.6,4.418,1.582l3.49-3.491c-2.127-1.854-4.854-3-7.909-3c-6.655,0-12,5.346-12,12
						c0,6.654,5.345,12,12,12c6,0,11.456-4.362,11.456-12C27.863,15.146,27.754,14.382,27.59,13.673z"/>
				</defs>
				<clipPath id="SVGID_6_">
					<use xlink:href="#SVGID_5_"  overflow="visible"/>
				</clipPath>
				<path clip-path="url(#SVGID_6_)" fill="#34A853" d="M3.317,22.945L19.682,10.4l4.311,0.546L29.5,2.763v26.182H3.317V22.945z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<g>
				<defs>
					<path id="SVGID_7_" d="M27.59,13.673H16.408v4.636h6.436c-0.6,2.944-3.107,4.637-6.436,4.637c-3.926,0-7.09-3.161-7.09-7.09
						s3.164-7.09,7.09-7.09c1.691,0,3.218,0.6,4.418,1.582l3.49-3.491c-2.127-1.854-4.854-3-7.909-3c-6.655,0-12,5.346-12,12
						c0,6.654,5.345,12,12,12c6,0,11.456-4.362,11.456-12C27.863,15.146,27.754,14.382,27.59,13.673z"/>
				</defs>
				<clipPath id="SVGID_8_">
					<use xlink:href="#SVGID_7_"  overflow="visible"/>
				</clipPath>
				<path clip-path="url(#SVGID_8_)" fill="#4285F4" d="M29.499,28.945L12.59,15.854l-2.182-1.636l19.091-5.455V28.945z"/>
			</g>
		</g>
	</g>
</g>
</svg>
                </template>
            </fj-third-button>
            <div class="fj-or">
                <i />
                <span class="fj-or-text">{{loginLanguage.or}}</span>
                <i />
            </div>
            <div v-show="!isLoginMode" class="fj-sign-inputs" >
                <fj-email-input ref="emailSignInput" :inputLanguage="loginLanguage.email" :change="checkInput" :keyupEnter="submitNull" />
                <fj-email-input ref="emailSignConfirmInput" :inputLanguage="loginLanguage.emailConfirm" :change="checkInput" :keyupEnter="submitNull" />
                <fj-password-input ref="passwordSignInput" :loginLanguage="loginLanguage" :change="checkInput" :keyupEnter="submit" />
            </div>
            <div v-show="isLoginMode" class="fj-login-inputs">
                <fj-email-input   ref="emailLoginInput" :inputLanguage="loginLanguage.email" :change="checkInput" :keyupEnter="submitNull" />
                <fj-password-input  ref="passwordLoginInput" :loginLanguage="loginLanguage" :change="checkInput" :keyupEnter="submit" />
            </div>
            <fj-login-remember ref="loginRemember" v-show="isLoginMode" :loginLanguage="loginLanguage"/>
            <div class="joms-input--append designevo-login-input-append" style="display: none">
                <div id="grc" class="g-recaptcha" data-size="invisible"></div>
            </div>
            
            <fj-button :onClick="submit" :style="submitStyle" type="primary" :text="submitText" :isLoading="isLoading" />
            <div class="fj-login-policy">
                <span>{{isLoginMode ? loginLanguage.loginPolicy : loginLanguage.signPolicy}}</span>
                <a href="/terms.html" target="_blank">{{loginLanguage.terms}}</a>
                <span>{{loginLanguage.and}}</span>
                <a href="/privacy.html" target="_blank">{{loginLanguage.privacyPolicy}}</a>
            </div>
        </div>
    `,props:{loginLanguage:Object,isLoginMode:Boolean,hideLoginPanel:Function,showLoginPanel:Function,setPanelMode:Function,userLogined:Function,},data:function(){return{isLoading:false,isLoadingFB:false,isLoadingGL:false,isFirstSignIn:true,isFirstSignUp:true,};},computed:{headTitle:function(){let{signUp,login}=this.loginLanguage;return this.isLoginMode?login:signUp;},headToggleTitle:function(){let{signUp,login}=this.loginLanguage;return this.isLoginMode?signUp:login;},headDesc:function(){let{haveAccount,noAccount}=this.loginLanguage;return this.isLoginMode?noAccount:haveAccount;},googleText:function(){let{googleSignUp,googleLogin}=this.loginLanguage;return this.isLoginMode?googleLogin:googleSignUp;},facebookText:function(){let{facebookSignUp,facebookLogin}=this.loginLanguage;return this.isLoginMode?facebookLogin:facebookSignUp;},submitText:function(){let{signUp,login}=this.loginLanguage;return this.isLoginMode?login:signUp;},loadingText:function(){return "Loading...";},submitStyle:function(){return{display:'block',margin:'auto','min-width':'350px',}},loadingStyle:function(){return{display:'block',margin:'auto','min-width':'350px','box-shadow':'0 4px 8px 0 rgba(238,92,51,0.3)','background':"#a74f37",}}},methods:{setRemember:function(state){this.$refs.loginRemember.setValue(state);},autoLogin:function(data){this.$refs.emailLoginInput.setValue(data.email);this.$refs.passwordLoginInput.setValue(data.pswd);},initFirst:function(){this.isFirstSignIn=true;this.isFirstSignUp=true;},checkInput:function(){if(this.isFirstSignIn===false){this.validateLogin();}
if(this.isFirstSignUp===false){this.validateSignUp();}},checkLoading:function(){return false;},loading:function(){this.isLoading=true;},loaded:function(){this.isLoading=false;},facebookSubmit:function(e){if(this.isLoadingFB){return false;}
if(window.connectWithFaceBook&&window.FB){this.isLoadingFB=true;var _this=this;connectWithFaceBook.login(e,function(){_this.isLoadingFB=false;});}},googleSubmit:function(e){if(this.isLoadingGL){return false;}
if(window.connectWithGoogle&&window.gapi){this.isLoadingGL=true;var _this=this;connectWithGoogle.login(e,function(){_this.isLoadingGL=false;});}},togglePanel:function(){if(this.checkLoading()){return false;}
if(this.isLoginMode===true){this.$emit("setPanelMode",false);}else{this.$emit("setPanelMode",true);}},resetLoading:function(){this.isLoading=false;this.isLoadingFB=false;this.isLoadingGL=false;},reset:function(){let{emailSignInput,emailSignConfirmInput,passwordSignInput,emailLoginInput,passwordLoginInput,}=this.$refs;emailSignInput.reset();emailSignConfirmInput.reset();passwordSignInput.reset();emailLoginInput.reset();passwordLoginInput.reset();},isRemember:function(){return this.$refs.loginRemember?true:false;},submitNull:function(){},submit:function(){if(this.isLoading){return false;}
let loginRemember=this.$refs.loginRemember;let isRemember=loginRemember.getValue();if(this.isLoginMode===true){var loginData=this.validateLogin();this.isFirstSignIn=false;if(loginData){loginData.remember=isRemember;this.isLoading=true;if(window.needLoginRecaptcha===undefined){window.needLoginRecaptcha=false;}
if(window.needLoginRecaptcha===true){window.recaptchaPost(loginData,'login');}else{window.fjuser.loginPost(loginData,(result,data)=>{if(data.needCaptcha===true){window.needLoginRecaptcha=true;if(result===true){this.userLogined(data);}}});}}}else{var signUpData=this.validateSignUp();this.isFirstSignUp=false;if(signUpData){email=signUpData.email;var emailService=jQuery("#emailService")[0];emailService.href="http://www."+email.substr(email.indexOf("@")+1);signUpData.remember=isRemember;this.isLoading=true;window.recaptchaPost(signUpData,'register');}}},validateSignUp:function(){let emailSignInput=this.$refs.emailSignInput;let emailSignConfirmInput=this.$refs.emailSignConfirmInput;let passwordSignInput=this.$refs.passwordSignInput;let emailText=emailSignInput.getValue();let emailConfirmText=emailSignConfirmInput.getValue();let passwordText=passwordSignInput.getValue();let emailErrText=this.validateEmail(emailText);let passwordErrText=this.validatePassword(passwordText);let emailNotConfirm=false;if(emailErrText){emailSignInput.setErr(emailErrText);}else{emailSignInput.setErr("");}
if(emailConfirmText===''){emailSignConfirmInput.setErr(this.loginLanguage.emailEmpty);emailNotConfirm=true;}else if(emailConfirmText!==emailText){emailSignConfirmInput.setErr(this.loginLanguage.emailWrongConfirm);emailNotConfirm=true;}else{emailSignConfirmInput.setErr("");}
if(passwordErrText){passwordSignInput.setErr(passwordErrText);}else{passwordSignInput.setErr("");}
return emailErrText||emailNotConfirm||passwordErrText?null:{email:emailText,password:passwordText};},validateLogin:function(){let emailLoginInput=this.$refs.emailLoginInput;let passwordLoginInput=this.$refs.passwordLoginInput;let emailText=emailLoginInput.getValue();let passwordText=passwordLoginInput.getValue();let emailErrText=this.validateEmail(emailText);let passwordErrText=this.validatePassword(passwordText);if(emailErrText){emailLoginInput.setErr(emailErrText);}else{emailLoginInput.setErr("");}
if(passwordErrText){passwordLoginInput.setErr(passwordErrText);}else{passwordLoginInput.setErr("");}
return emailErrText||passwordErrText?null:{email:emailText,password:passwordText};},checkEmail:function checkEmail(email){if(email.indexOf(".")===-1){return false}
let regex=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;return regex.test(email);},validateEmail:function(value){let email=value.replace(/(^\s*)|(\s*$)/g,"");let errText='';let{emailEmpty,emailOverLength,emailWrongAddress}=this.loginLanguage;if(email.length===0){errText=emailEmpty;}else if(email.length>64){errText=emailOverLength;}else if(!this.checkEmail(email)){errText=emailWrongAddress;}
return errText;},validatePassword:function(value){let password=value.replace(/(^\s*)|(\s*$)/g,"");let errText='';let{passwordEmpty,passwordOverLength}=this.loginLanguage;if(password.length===0){errText=passwordEmpty;}else if(password.length<6||password.length>64){errText=passwordOverLength;}
return errText;},setError:function(text){let emailSignInput=this.$refs.emailSignInput;if(this.isLoginMode===true){emailSignInput=this.$refs.emailLoginInput;}
emailSignInput.setErr(text);},},created:function(){var _this=this;window.tcRecaptchaCloseCallback=function(){console.log("close");_this.isLoading=false;};},watch:{isLoginMode:function(){this.reset();}}});Vue.component('fj-login-remember',{template:`
        <div class="fj-login-remember">
            <div :class="checkClass" @click="toggleCheck">
                <div class="fj-check-box"><img v-show="this.isRemember" src="/media/login/images/check.svg"></div>
                <div class="fj-check-label">{{loginLanguage.rememberMe}}</div>
            </div>
            <a href="/reset-request.html" target="_blank" class="fj-login-forgot-password">{{loginLanguage.forgotPassword}}</a>
        </div>
    `,data:function(){return{isRemember:false,}},props:{loginLanguage:Object,},computed:{checkClass:function(){return this.isRemember?'fj-login-remember-check fj-checked':'fj-login-remember-check';},},methods:{getValue:function(){return this.isRemember;},setValue:function(state){this.isRemember=state;},toggleCheck:function(){this.isRemember=!this.isRemember;},}});Vue.component('fj-box-button',{template:`
        <div @click="onClick" class="fj-box-button" :class="className">
            <span>{{text}}</span>
        </div>
    `,props:{onClick:Function,text:String,type:String,className:String}});Vue.component('fj-bar',{template:`
        <i :class="classObject"/>
    `,props:{type:{type:String,default:'horizontal'},},computed:{classObject:function(){return{'fj-bar':true,'fj-bar-horizontal':this.type==='horizontal','fj-bar-vertical':this.type==='vertical',}}}});Vue.component('fj-input',{template:`
        <div class="fj-login-input">
            <slot name="icon"></slot>
            <input v-model="value" :placeholder="placeholder" :type="inputType" @keyup="change" @keyup.enter="keyupEnter" />
            <span v-show="this.isErr" class="fj-login-input-err">{{errText}}</span>
        </div>
    `,props:{placeholder:String,inputType:String,change:Function,keyupEnter:Function,},data:function(){return{isErr:false,errText:'',value:'',};},methods:{getValue:function(){return this.value;},setValue:function(value){this.value=value;},updateErr:function(value){this.errText=value;},showErr:function(){this.isErr=true;},hideErr:function(){this.isErr=false;},}});Vue.component('fj-email-input',{template:`
        <fj-input ref="input" :placeholder="inputLanguage" :inputType="emailType" :change="change" :keyupEnter="keyupEnter">
            <template v-slot:icon>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<path fill="#C8C8C8" d="M22,6.322c-0.001-0.133-0.035-0.265-0.059-0.397c-0.002-0.009-0.002-0.019-0.004-0.028
	c-0.055-0.288-0.143-0.571-0.305-0.815c-0.18-0.272-0.433-0.501-0.714-0.683c-0.029-0.019-0.058-0.039-0.087-0.057
	c-0.058-0.033-0.105-0.082-0.166-0.109c-0.054-0.023-0.109-0.034-0.163-0.054c-0.049-0.02-0.101-0.033-0.151-0.05
	c-0.084-0.026-0.168-0.055-0.254-0.073c-0.151-0.032-0.308-0.051-0.467-0.054C19.624,4.002,19.618,4,19.611,4h-0.004h-0.074h-0.398
	h-0.719h-0.41H16.38h-0.085H14.4h-0.822h-1.327h-1.602h-0.566H8.056H7.892h-1.56H5.717H5.068H4.505H4.428
	C4.247,4,4.064,4.021,3.886,4.057C3.862,4.062,3.837,4.059,3.813,4.064C3.794,4.068,3.778,4.08,3.76,4.084
	C3.735,4.091,3.709,4.092,3.685,4.1C3.609,4.124,3.542,4.163,3.47,4.194C2.763,4.477,2.185,5.109,2.052,5.839
	c-0.03,0.169-0.045,0.337-0.044,0.506C2.007,6.373,2,6.399,2,6.427v0.254v1.13V9.56v2.088v2.172v1.992v1.551v0.846
	c0,0.197,0.013,0.396,0.075,0.583c0.241,0.71,0.875,1.198,1.635,1.207c0.141,0.002,0.279,0,0.42,0h1.041h1.53h1.891h2.1h2.181h2.126
	h1.938h1.61H19.7h0.559c0.349,0,0.716-0.092,0.992-0.304c0.347-0.258,0.632-0.609,0.707-1.045C21.98,18.525,22,18.398,22,18.271
	c0.002-0.229,0-0.451,0-0.676v-1.435V14.24v-2.156V9.959V8.127V6.85V6.389c0-0.011-0.007-0.022-0.007-0.034S22,6.334,22,6.322z
	 M12.457,13.176c-0.063,0.043-0.131,0.078-0.2,0.112c-0.057,0.019-0.114,0.034-0.172,0.047c-0.056,0.003-0.112,0.003-0.168,0
	c-0.061-0.013-0.12-0.029-0.179-0.048c-0.062-0.031-0.124-0.063-0.183-0.103c-0.24-0.192-0.472-0.395-0.707-0.589
	c-0.615-0.517-1.229-1.033-1.846-1.549c-0.749-0.628-1.496-1.253-2.245-1.88C6.124,8.637,5.49,8.104,4.856,7.574
	C4.567,7.331,4.274,7.091,3.988,6.846C3.936,6.802,3.892,6.751,3.846,6.701c-0.03-0.043-0.057-0.088-0.082-0.134
	c-0.019-0.056-0.035-0.112-0.047-0.17c-0.001-0.037,0-0.073,0.001-0.11C3.73,6.232,3.746,6.178,3.764,6.124
	C3.793,6.067,3.825,6.012,3.86,5.959c0.036-0.04,0.074-0.077,0.113-0.113c0.046-0.03,0.094-0.058,0.143-0.083
	C4.172,5.745,4.229,5.73,4.288,5.718C4.44,5.709,4.595,5.706,4.746,5.706h1.095h1.647H9.5h2.22h2.241h2.084h1.754h1.24H19.6
	c0.029,0,0.058,0.004,0.086,0.006c0.063,0.012,0.125,0.03,0.187,0.049c0.05,0.026,0.099,0.054,0.146,0.084
	c0.038,0.035,0.075,0.072,0.11,0.11c0.034,0.052,0.066,0.107,0.095,0.163c0.023,0.07,0.045,0.14,0.059,0.212
	c0,0.014,0.002,0.028,0.002,0.042c-0.014,0.065-0.032,0.129-0.053,0.193c-0.023,0.042-0.049,0.083-0.075,0.124
	c-0.096,0.103-0.197,0.199-0.307,0.29c-0.178,0.149-0.354,0.298-0.535,0.447c-0.604,0.507-1.207,1.013-1.812,1.521
	c-0.747,0.625-1.496,1.253-2.243,1.879c-0.643,0.539-1.285,1.079-1.93,1.618C13.037,12.689,12.748,12.933,12.457,13.176z
	 M18.674,18.289H16.88h-2.188h-2.396H9.872H7.616h-1.91H4.35H3.741C3.73,18.286,3.72,18.283,3.709,18.28
	c0-0.001,0-0.002-0.001-0.003c-0.003-0.096-0.006-0.191-0.006-0.285v-0.866V14.24v-3.472V8.789c0.292,0.244,0.584,0.489,0.876,0.733
	c0.71,0.595,1.421,1.191,2.132,1.786c0.7,0.586,1.4,1.175,2.103,1.76c0.459,0.387,0.917,0.77,1.376,1.154
	c0.07,0.059,0.139,0.115,0.209,0.174c0.213,0.177,0.42,0.309,0.674,0.414c0.26,0.104,0.504,0.155,0.788,0.184
	c0.241,0.02,0.493-0.012,0.726-0.066c0.229-0.055,0.459-0.148,0.659-0.271c0.371-0.23,0.702-0.554,1.032-0.831
	c0.592-0.495,1.184-0.992,1.771-1.487c0.733-0.615,1.471-1.23,2.202-1.846c0.646-0.541,1.289-1.082,1.937-1.622
	c0.033-0.027,0.064-0.055,0.098-0.082v1.663v3.462v2.963c0,0.46,0.002,0.92,0,1.38c-0.002,0.008-0.005,0.016-0.007,0.023
	c-0.002,0-0.004,0.001-0.006,0.001c-0.135,0.007-0.271,0.008-0.403,0.008H18.674z"/>
</svg>
            </template>
        </fj-input>
    `,data:function(){return{emailType:'email',};},props:{change:Function,keyupEnter:Function,inputLanguage:String,},methods:{getValue:function(){return this.$refs.input.getValue();},setValue:function(val){return this.$refs.input.setValue(val);},setErr:function(value){this.$refs.input.updateErr(value);this.$refs.input.showErr();},reset:function(){this.$refs.input.setValue('');this.$refs.input.updateErr('');this.$refs.input.hideErr();},}});Vue.component('fj-password-input',{template:`
        <fj-input ref="input" :placeholder="loginLanguage.password" :inputType="passwordType" :change="change" :keyupEnter="keyupEnter">
            <template v-slot:icon>
                <svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
	<g id="Logoin-" transform="translate(-467.000000, -406.000000)">
		<g id="password" transform="translate(467.000000, 406.000000)">
			<path id="Shape" fill="#C2C2C2" d="M12,13c-0.468,0-1,0.45-1,0.999v1.999C11,16.55,11.532,17,12,17s1-0.45,1-1.002v-1.999
				C13,13.45,12.468,13,12,13z"/>
			<path id="Shape_1_" fill="#C2C2C2" d="M18.566,6.11C17.979,3.18,15.514,1,12.604,1C9.71,1,7.296,3.124,6.662,6.072
				C5.032,6.339,4,7.813,4,9.601v8.813C4,20.393,5.254,22,7.189,22H12.5h5.311C19.746,22,21,20.393,21,18.416V9.601
				C21,7.896,20.064,6.472,18.566,6.11z M12.994,3C14.842,3,16.42,4.254,17,6h-4.113H9C9.601,4.233,11.152,3,12.994,3z M19,18.514
				C19,19.334,18.693,20,17.914,20H12.5H7.085C6.306,20,6,19.334,6,18.514V9.488C6,8.667,6.306,8,7.085,8H12.5h5.414
				C18.693,8,19,8.667,19,9.488V18.514z"/>
		</g>
	</g>
</svg>
            </template>
        </fj-input>
    `,data:function(){return{passwordType:'password',};},props:{change:Function,keyupEnter:Function,},methods:{getValue:function(){return this.$refs.input.getValue();},setValue:function(val){return this.$refs.input.setValue(val);},setErr:function(value){this.$refs.input.updateErr(value);this.$refs.input.showErr();},reset:function(){this.$refs.input.setValue('');this.$refs.input.updateErr('');this.$refs.input.hideErr();},}});Vue.component('fj-button',{template:`
        <button @click="onDataChange" :style="style" :class="buttonClass">
            <div v-show="!this.isLoading">
                <template>
                    <slot name="icon"></slot>
                    <span class="fj-third-text">{{text}}</span>
                </template>
            </div>
            <fj-loading v-show="this.isLoading" />
        </button>
    `,data:function(){},props:{icon:String,text:String,style:Object,type:{type:String,default:'primary',},className:{type:String,default:'',},onClick:Function,isLoading:Boolean,isLoadingThird:Boolean,},computed:{buttonClass:function(){return{'fj-button':true,'fj-button_primary':this.type==='primary','fj-button_default':this.type==='default','fj-button_warning':this.type==='warning','fj_button_loading':this.isLoading,'fj_loading_third':this.isLoadingThird,[this.className]:this.className,}}},methods:{onDataChange:function(e){if(this.onClick){this.onClick(e);}},}});Vue.component('fj-third-button',{template:`
        <fj-button :onClick="onClick" className="fj-third-button" :icon="icon" :text="text" type="default" :class="btn_class" :isLoading="isLoading" :isLoadingThird="isLoadingThird">
            <template v-slot:icon>
                <slot name="icon"></slot>
            </template>
          </div>
        </fj-button>
    `,props:{icon:String,text:String,onClick:Function,btn_class:String,isLoading:Boolean},data:function(){return{isLoadingThird:true,};},});Vue.component('fj-modal',{template:`
        <div v-show="isVisible" class="fj-modal">
            <transition name="fade">
                <div class="mask"/>
            </transition>
            <div class="wrap">
                <div @click="closeModal" class="close">
                    <img src="/media/login/images/close.svg?v=1.1.2">
                </div>
                <slot name="content"></slot>
            </div>
        </div>
    `,props:{isVisible:Boolean,closeModal:Function},data:function(){return{isHover:false};},methods:{}});Vue.component('fj-loading',{template:`
        <div class="loader-inner ball-pulse">
            <div></div>
            <div></div>
            <div></div>
        </div>
    `});var app_fj_login=new Vue({el:'#login',template:`
        <div id="login-module">
            <div id="logged" v-show="hasLogin">
                <div id="userGroup" class="avatar dropdown">
                    <div id="btUser" class="fj-user" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="imgAvatarThumb" :src="userInfo.img">
                    </div>
                    <ul id="fj-profile-drop-menu" class="fj-profile-drop-menu" role="menu">
                        <div>
                            <img class="imgAvatar" style="" :src="userInfo.img">
                            <span class="fj-login-email">
                                <nobr id="user_name">{{userInfo.email}}</nobr>
                            </span>
                        </div>
                        <li><a id="myLogos" href="javascript:void(0);">{{loginLanguage.myDesigns}}</a></li>
                        <li><a id="myProfile" rel="nofollow" href="javascript:void(0);">{{loginLanguage.myAccount}}</a>
                        </li>
                        <li @click="userLogout"><a id="logout" href="javascript:void(0)">{{loginLanguage.signOut}}</a></li>
                    </ul>
                </div>
            </div>
            <div id="unlogin" v-show="!hasLogin">
                <button id="btSignUp" class="fj-signup-button" @click="showSignUpPanel">{{loginLanguage.signUp}}</button>
            </div>
            <fj-modal :closeModal="hideLoginPanel" :isVisible="active">
                <template v-slot:content>
                    <fj-login-panel ref="fj_login_panel" :loginLanguage="loginLanguage"
                                    :isLoginMode="isLoginMode" 
                                    :hideLoginPanel="hideLoginPanel" 
                                    :showLoginPanel="showLoginPanel"
                                    @setPanelMode="setPanelMode"
                                    :userLogined="userLogined"
                                      />
                </template>
            </fj-modal>
        </div>
    `,data:function(){return{hasLogin:false,isLoginMode:null,loginLanguage:loginLanguage,userInfo:null,};},computed:{active:function(){return this.isLoginMode!==null}},methods:{autoLogin:function(data){this.$refs.fj_login_panel.autoLogin(data);},userLogout:function(){window.fjuser.logoutPost();},checkRemeber:function(){var _this=this;if(window.CookieFunc){window.CookieFunc.initLogin(function(token){if(token){_this.$refs.fj_login_panel.setRemember(true);jQuery.ajax({type:"POST",url:"/user/rememberState",data:{token:token},success:function(result){if(result.code===200){_this.autoLogin(result.data);}}});}});}},setPanelMode:function(statue){this.isLoginMode=statue;if(statue===true){this.checkRemeber();}
if(!window.hasAutoLogin){window.hasAutoLogin=true;this.checkAutoLogin();}
this.ensureSDKs();if(statue===false){this.$refs.fj_login_panel.initFirst();}},showLoginPanel:function(){this.setPanelMode(true);},hideLoginPanel:function(){this.setPanelMode(null);},showSignUpPanel:function(){this.setPanelMode(false);},checkAutoLogin:function(){var _this=this;$.post("/user/checkState",{},function(json){if(200==json.code){_this.userLogined(json.data);}
if(json.token){window.csrf_token=json.token;}})},userLogined:function(info){this.userInfo=info;this.hasLogin=true;this.setEmailWeb(info.email);if(info.remembertoken){this.setRememberState(info.remembertoken);}
this.hideLoginPanel();this.$refs.fj_login_panel.resetLoading();if(window.appLoginCallback){window.appLoginCallback();}},setEmailWeb:function(email){var emailService=jQuery("#emailService")[0];emailService.href="http://www."+email.substr(email.indexOf("@")+1);},setRememberState:function(remembertoken){is_remember=this.$refs.fj_login_panel.isRemember();if(is_remember){CookieFunc.setCookie('fj_remember',true);CookieFunc.setCookie('fj_usertoken',remembertoken);}
else{CookieFunc.delCookie('fj_remember');CookieFunc.delCookie('fj_usertoken');}},loading:function(){this.$refs.fj_login_panel.loading();},loaded:function(){this.$refs.fj_login_panel.loaded();},setError:function(text){this.$refs.fj_login_panel.setError(text);},getQueryVariable:function(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return(false);},updatePackInfo:function(data){this.userInfo.policy=data.package;this.userInfo.period=data.period;},ensureSDKs:function(){this.ensureRecaptcha();},setUserInfo:function(data){$('#user_name').text(data.email);$('#imgAvatar').attr("src",data.img);$('#imgAvatarThumb').attr("src",data.img);window.userInfo={img:data.img,userName:data.name,userEmail:data.email,};if(window.appLoginCallback){window.appLoginCallback();}
if(window.packageLoginCallback){window.packageLoginCallback();}},ensureRecaptcha:function(){if(window.googleRecaptcha.loaded||window.tencentRecaptcha.loaded){return true;}
$.ajax({type:"POST",url:"https://ipapi.co/json/",data:{},success:function(res){if(res.country==="CN"){window.loadTencentRecaptchaSDK();}else{window.loadGoogleRecaptchaSDK();window.loadFacebookSDK();window.loadGoogleSDK();}},error:function(jqXHR,textStatus,errorThrown){window.loadGoogleRecaptchaSDK();window.loadFacebookSDK();window.loadGoogleSDK();console.log("Error, status = "+textStatus+", "+
"error thrown: "+errorThrown);}});}},created:function(){var _this=this;_this.hasLogin=window.fjuser.isUserLogin();_this.userInfo=window.fjuser.info;window.fjuser.addListener(window.fjuser.eventType.login,(result,response)=>{if(result){this.userLogined(response.data);window.loginStatus=true;this.setUserInfo(response.data);if(window.updateState){window.updateState(1);}
return;}
if(305===response.code||335===response.code){this.loaded();this.setError(response.msg);return;}
this.loaded();this.setError(this.loginLanguage.userWrong);return;});window.fjuser.addListener(window.fjuser.eventType.register,(result,response)=>{if(result){this.userLogined(response.data);if(window.app_survey){window.app_survey.openBox();}
window.loginStatus=true;this.setUserInfo(response.data);if(window.updateState){window.updateState(1);}
if(window.gaEvent){window.gaEvent("signUp","signUp_success_mail");}}
if(505===response.code){app_fj_login.setError(json.msg);}else{app_fj_login.setError(this.loginLanguage.userWrong);}
app_fj_login.loaded();});window.fjuser.addListener(window.fjuser.eventType.logout,(result,response)=>{this.hasLogin=!result;if(result)
{this.userInfo={result:false};window.loginStatus=false;if(window.updateState){window.updateState(-1);}
if(window.appLogoutCallback){window.appLogoutCallback("Logout");}
url=location.href;if(url.indexOf("profile.html")!=-1){location.href="/";}
if(window.inAppPayment){$("#logged").hide();}
if(window.inAppPayment){DEPackage.backAction();DEPackage.backAction();window.inAppPayment=false;DEPackage.showApp();jQuery(DEPaymentSuccess.$el).hide();window.hideHeaderInApp();}}
this.loaded();});if(!this.userInfo||!this.userInfo.result){action=this.getQueryVariable("action");if(action=="signin"){this.setPanelMode(true);}else if(action=="signup"){this.setPanelMode(false);}}
setTimeout(()=>{this.ensureSDKs();},6000);}});var CookieFunc={initLogin:function(callback){if('true'===this.getCookie('fj_remember')){var usertoken=this.getCookie('fj_usertoken');if(usertoken){callback(usertoken)}}},setCookie:function(name,value){if(CookieFunc.getCookie(name)){CookieFunc.delCookie(name);}
var Days=10;var exp=new Date();exp.setTime(exp.getTime()+Days*24*60*60*1000);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();},getCookie:function(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))
return unescape(arr[2]);else
return null;},delCookie:function(name){var exp=new Date();exp.setTime(exp.getTime()-1);var cval=this.getCookie(name);if(cval!=null)
document.cookie=name+"="+cval+";expires="+exp.toGMTString();}}
window.fjuser.initWithMethods(app_fj_login.showLoginPanel,app_fj_login.showSignUpPanel);if(window.googleRecaptcha){window.googleRecaptcha.addTarget('login',window.fjuser.loginPost);window.googleRecaptcha.addTarget('register',window.fjuser.registerPost);}
if(window.tencentRecaptcha){window.tencentRecaptcha.addTarget('login',window.fjuser.loginPost);window.tencentRecaptcha.addTarget('register',window.fjuser.registerPost);}
window.recaptchaPost=function(data,type){if(window.googleRecaptcha.loaded===true){window.googleRecaptcha.submit(data,type);}
if(window.tencentRecaptcha.loaded===true){window.tencentRecaptcha.submit(data,type);}}
if(window.fjuser.info.result===true){window.loginStatus=true;window.userInfo={img:window.fjuser.info.img,userEmail:window.fjuser.info.email,userName:window.fjuser.info.name,};}else{window.loginStatus=false;window.userInfo={};}
window.PanelFunc={signupClick:function(){window.fjuser.showRegisterPanel();},};window.AjaxPost={ajaxLogout:function(){app_fj_login.userLogout();},};function updateUserBtnPosition(a){jQuery("#btSignUp").css({marginTop:a?"25px":"14px"});jQuery("#btUser").css({marginTop:a?"36px":"25px"});jQuery(".c-payment-b .de-back-describe").css({top:a?"30px":"16px"})}
if(!window.bannerAnimationCallbacks){window.bannerAnimationCallbacks=new Array()}window.bannerAnimationCallbacks.push(updateUserBtnPosition);window.inAppPayment=false;window.showHeaderInApp=function(){$(".web_menu_bg").css("cssText","width:100%;");$(".menu_bg").show();if(window.fjuser.info.result===false){$("#unlogin").css("cssText","display:block !important;");};window.inAppPayment=true;};window.hideHeaderInApp=function(){$(".web_menu_bg").css("cssText","width:0");$(".web_menu_bg").show();$("#unlogin").css("cssText","display:none !important;");window.inAppPayment=false;};$(function(){$(document).on("click",".upgrade-btn",function(){window.showHeaderInApp();})})
url=window.location.href;isAppPage=false;if(url.indexOf("logo-maker")!=-1||url.indexOf("apps/logo")!=-1){isAppPage=true;}
if(isAppPage){window.hideHeaderInApp();}
Vue.component('de-icon-success',{template:`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="46px" height="46px" viewBox="0 0 46 46" enable-background="new 0 0 46 46" xml:space="preserve">
<polygon fill="#52BF8A" points="17.998,34.414 10.584,27 11.999,25.586 17.998,31.586 33.998,15.586 35.412,17 "/>
<path fill="#52BF8A" d="M23,46C10.317,46,0,35.684,0,23C0,10.318,10.317,0,23,0c12.684,0,23,10.318,23,23
	C45.998,35.684,35.684,46,23,46z M23,2.001C11.421,2.001,2,11.421,2,23s9.421,20.998,21,20.998c11.58,0,20.998-9.419,20.998-20.998
	C43.996,11.421,34.578,2.001,23,2.001z"/>
</svg>
`});Vue.component('de-icon-delete',{template:`
<svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: sketchtool 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
    <title>73E9C865-B140-4020-81F7-4E5628F0F688</title>
    <desc>Created with sketchtool.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2.9.3-调查窗口3-copy" transform="translate(-284.000000, -173.000000)" fill="#404040">
            <path d="M291.364803,178.95059 L295.606827,174.708565 C296.000149,174.315244 295.997968,173.68426 295.607444,173.293735 C295.214197,172.900488 294.583479,172.903487 294.192614,173.294352 L289.95059,177.536376 L285.708565,173.294352 C285.315244,172.90103 284.68426,172.903211 284.293735,173.293735 C283.900488,173.686982 283.903487,174.3177 284.294352,174.708565 L288.536376,178.95059 L284.294352,183.192614 C283.90103,183.585935 283.903211,184.216919 284.293735,184.607444 C284.686982,185.000691 285.3177,184.997692 285.708565,184.606827 L289.95059,180.364803 L294.192614,184.606827 C294.585935,185.000149 295.216919,184.997968 295.607444,184.607444 C296.000691,184.214197 295.997692,183.583479 295.606827,183.192614 L291.364803,178.95059 Z" id="delete"></path>
        </g>
    </g>
</svg>
`});Vue.component('de-icon-back',{template:`
<svg width="17px" height="18px" viewBox="0 0 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: sketchtool 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
    <title>8193A034-C229-4A35-98E8-F1A3EE9ADA13</title>
    <desc>Created with sketchtool.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2.9.3-调查窗口3-copy" transform="translate(-169.000000, -57.000000)" fill-rule="nonzero" fill="#6A6E79">
            <path d="M173.414214,65 L179.707107,58.7071068 L178.292893,57.2928932 L169.585786,66 L178.292893,74.7071068 L179.707107,73.2928932 L173.414214,67 L186,67 L186,65 L173.414214,65 Z" id="Back"></path>
        </g>
    </g>
</svg>
`});Vue.component('de-icon-step',{template:`
<svg width="13px" height="9px" viewBox="0 0 13 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: sketchtool 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
    <title>812F623D-E5C8-417F-83CD-9AF088F8D726</title>
    <desc>Created with sketchtool.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2.9.3-调查窗口-2" transform="translate(-489.000000, -233.000000)" fill-rule="nonzero" fill="#FFFFFF">
            <polygon id="Path-3" points="490.353553 236.646447 489.646447 237.353553 494 241.707107 501.353553 234.353553 500.646447 233.646447 494 240.292893"></polygon>
        </g>
    </g>
</svg>
`});Vue.component('de-icon-enterprise',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M54.3,21.6H41.4V7.4c0-0.969-0.73-1.7-1.7-1.7H20.3c-0.969,0-1.7,0.731-1.7,1.7v14.2H5.7
		c-0.969,0-1.7,0.731-1.7,1.7v29.3c0,0.97,0.731,1.7,1.7,1.7h14.6h19.4h14.6c0.97,0,1.7-0.73,1.7-1.7V23.3
		C56,22.331,55.27,21.6,54.3,21.6z M5,52.6V23.3c0-0.425,0.275-0.7,0.7-0.7h12.9v30c0,0.253,0.052,0.488,0.143,0.7H5.7
		C5.275,53.3,5,53.025,5,52.6z M20.3,53.3c-0.425,0-0.7-0.274-0.7-0.7V7.4c0-0.425,0.274-0.7,0.7-0.7h19.4
		c0.426,0,0.7,0.274,0.7,0.7v45.2c0,0.426-0.274,0.7-0.7,0.7H20.3z M55,52.6c0,0.426-0.274,0.7-0.7,0.7H41.258
		c0.091-0.212,0.143-0.447,0.143-0.7v-30H54.3c0.426,0,0.7,0.274,0.7,0.7V52.6z"/>
	<path fill="#404040" d="M34.9,10.3h-9.7c-0.969,0-1.7,0.731-1.7,1.7v6.1c0,0.969,0.731,1.7,1.7,1.7h9.7
		c0.969,0,1.699-0.731,1.699-1.7V12C36.6,11.031,35.869,10.3,34.9,10.3z M35.6,18.1c0,0.425-0.274,0.7-0.699,0.7h-9.7
		c-0.425,0-0.7-0.274-0.7-0.7V12c0-0.425,0.275-0.7,0.7-0.7h9.7c0.425,0,0.699,0.275,0.699,0.7V18.1z"/>
	<rect x="50.1" y="31.8" fill="#404040" width="1" height="15.9"/>
	<rect x="29.5" y="34.9" fill="#404040" width="1" height="1.8"/>
	<rect x="29.5" y="31.2" fill="#404040" width="1" height="1.8"/>
	<rect x="29.5" y="42.2" fill="#404040" width="1" height="1.8"/>
	<rect x="29.5" y="38.5" fill="#404040" width="1" height="1.9"/>
	<rect x="29.5" y="27.6" fill="#404040" width="1" height="1.8"/>
	<rect x="25.9" y="34.9" fill="#404040" width="1" height="1.8"/>
	<rect x="25.9" y="31.2" fill="#404040" width="1" height="1.8"/>
	<rect x="25.9" y="42.2" fill="#404040" width="1" height="1.8"/>
	<rect x="25.9" y="38.5" fill="#404040" width="1" height="1.9"/>
	<rect x="25.9" y="27.6" fill="#404040" width="1" height="1.8"/>
	<rect x="22.2" y="34.9" fill="#404040" width="1" height="1.8"/>
	<rect x="22.2" y="31.2" fill="#404040" width="1" height="1.8"/>
	<rect x="22.2" y="42.2" fill="#404040" width="1" height="1.8"/>
	<rect x="22.2" y="38.5" fill="#404040" width="1" height="1.9"/>
	<rect x="36.8" y="34.9" fill="#404040" width="1" height="1.8"/>
	<rect x="36.8" y="31.2" fill="#404040" width="1" height="1.8"/>
	<rect x="36.8" y="42.2" fill="#404040" width="1" height="1.8"/>
	<rect x="36.8" y="38.5" fill="#404040" width="1" height="1.9"/>
	<rect x="33.1" y="27.6" fill="#404040" width="1" height="1.8"/>
	<rect x="33.1" y="34.9" fill="#404040" width="1" height="1.8"/>
	<rect x="33.1" y="31.2" fill="#404040" width="1" height="1.8"/>
	<rect x="33.1" y="42.2" fill="#404040" width="1" height="1.8"/>
	<rect x="29.5" y="45.9" fill="#404040" width="1" height="1.8"/>
	<rect x="25.9" y="45.9" fill="#404040" width="1" height="1.8"/>
	<rect x="22.2" y="45.9" fill="#404040" width="1" height="1.8"/>
	<rect x="36.8" y="45.9" fill="#404040" width="1" height="1.8"/>
	<rect x="33.1" y="45.9" fill="#404040" width="1" height="1.8"/>
	<rect x="33.1" y="38.5" fill="#404040" width="1" height="1.9"/>
	<rect x="45.4" y="31.8" fill="#404040" width="1" height="15.9"/>
	<rect x="13.7" y="31.8" fill="#404040" width="1" height="15.9"/>
	<rect x="8.9" y="31.8" fill="#404040" width="1" height="15.9"/>
</g>
</svg>
`});Vue.component('de-icon-nonprofit-ngo',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M54.9,33.9h-8.7c-0.576,0-1.101,0.524-1.1,1.133l0.156,2.365c-1.136-0.631-5.203-2.694-8.391-1.78
	c-1.685,0.468-3.561,1.679-5.546,2.962c-0.159,0.103-0.319,0.205-0.479,0.309l2.045-8.269L32.9,30.5c0-0.373-0.327-0.7-0.7-0.7
	H21.703c0.222-0.483,0.406-0.927,0.553-1.337l2.171-3.78c0.025,0.004,0.047,0.018,0.073,0.018l0.982-0.007
	c1.457-0.243,2.346-0.614,2.948-1.217c1.103-0.965,1.15-2.49,1.07-3.676c0-0.338-0.295-1.334-0.422-1.747L28.877,17.4l-0.562,0.389
	c-0.013,0.009-1.293,0.893-2.555,1.572c-1.106,0.603-1.688,1.36-1.942,2.502C23.6,22.63,23.6,23.295,23.6,24
	c0,0.03,0.012,0.056,0.017,0.084l-0.927,1.614c-0.201-1.531-1.34-2.573-3.096-4.163l-0.563-0.511
	c-3.116-2.749-1.765-7.537-1.751-7.584c0.077-0.265-0.075-0.542-0.339-0.62c-0.269-0.079-0.542,0.074-0.62,0.338
	c-0.044,0.149-0.728,2.574-0.069,5.108c-0.242-0.181-0.473-0.364-0.687-0.536l-0.147-0.118C14.477,16.844,14,15.729,14,14.3
	c0-0.769,0.241-1.461,0.647-2.376c0.28-0.56,0.76-1.23,1.426-1.992c0.82-0.922,1.389-1.69,1.757-2.23
	c0.14,0.287,0.305,0.611,0.493,0.979c0.16,0.313,0.336,0.659,0.542,1.067c0.711,1.245,1.241,2.271,1.579,3.059
	C20.874,13.75,21.1,14.612,21.1,15.3c0,0.832-0.411,1.976-1.112,3.117l-1.1,1.6c-0.156,0.228-0.099,0.539,0.129,0.695
	c0.086,0.06,0.185,0.088,0.283,0.088c0.159,0,0.315-0.076,0.413-0.217l1.114-1.621c0.822-1.335,1.274-2.636,1.274-3.663
	c0-0.841-0.25-1.819-0.741-2.896c-0.348-0.813-0.895-1.874-1.612-3.127c-0.193-0.387-0.371-0.735-0.532-1.05
	c-0.411-0.804-0.708-1.385-0.841-1.785l-0.354-1.061l-0.937,1.641c-0.326,0.489-0.895,1.275-1.76,2.248
	c-0.725,0.828-1.253,1.57-1.581,2.227C13.367,12.342,13,13.255,13,14.3c0,1.719,0.617,3.133,1.788,4.091l0.15,0.12
	c0.467,0.376,1.049,0.843,1.714,1.224c0.055,0.032,0.113,0.048,0.172,0.058c0.36,0.701,0.858,1.376,1.54,1.978l0.56,0.507
	c2.483,2.247,3.364,3.059,2.493,5.591l-1.405-0.961c-0.296-0.591-0.604-1.198-1.031-1.732c-0.668-0.779-1.364-1.344-2.575-1.563
	c-1.403-0.301-2.907-0.602-2.907-0.602l-0.701-0.14l0.109,0.707c0.035,0.224,0.212,1.358,0.313,1.661
	c0.43,1.504,1.218,2.548,2.284,3.022c0.408,0.175,0.872,0.263,1.392,0.263c0.502,0,1.057-0.083,1.663-0.248
	c0.342-0.113,0.583-0.233,0.92-0.458c0.015-0.01,0.024-0.025,0.039-0.037l1.529,1.046c-0.091,0.211-0.189,0.43-0.298,0.663
	c-0.047,0.102-0.049,0.209-0.028,0.311H11.1c-0.373,0-0.7,0.327-0.7,0.7l2.511,10.723c-2.11-1.538-4.687-3.291-5.645-3.418
	c-1.381-0.192-2.396,0.768-2.674,1.065c-0.21,0.224-0.688,0.803-0.577,1.351c0.152,0.609,10.853,13.123,12.161,13.727
	c0.774,0.387,5.28,0.664,9.233,0.664c2.712,0,5.164-0.131,5.972-0.445c0.845-0.328,1.889-1.153,2.994-2.025
	c1.332-1.053,2.842-2.245,3.895-2.445c2.009-0.289,7.703,0.492,7.761,0.5c0.023,0.003,0.046-0.005,0.069-0.006l0.1,1.511
	c0,0.627,0.473,1.1,1.1,1.1H54.9c0.575,0,1.1-0.524,1.1-1.1V35C56,34.373,55.527,33.9,54.9,33.9z M18.923,26.984
	c-0.265,0.176-0.424,0.256-0.655,0.333c-0.983,0.268-1.78,0.277-2.365,0.025c-0.781-0.347-1.376-1.17-1.729-2.401
	c-0.036-0.107-0.1-0.444-0.164-0.808c0.567,0.115,1.397,0.286,2.2,0.458c0.944,0.171,1.452,0.582,1.999,1.22
	c0.273,0.341,0.499,0.739,0.719,1.167C18.927,26.981,18.925,26.982,18.923,26.984z M26.237,20.24
	c0.788-0.424,1.567-0.914,2.074-1.245c0.104,0.378,0.186,0.717,0.19,0.838c0.1,1.491-0.119,2.355-0.754,2.914
	c-0.467,0.467-1.194,0.754-2.347,0.954h-0.651c-0.031-0.07-0.078-0.131-0.14-0.181c0.009-0.476,0.038-0.913,0.18-1.411
	C24.957,21.351,25.258,20.774,26.237,20.24z M11.484,30.8h20.328l-2.193,8.864c-1.775,1.1-3.534,2.042-5.081,2.24l-1.154,0.14
	c-2.906,0.345-5.887,0.704-7.39,1.726c-0.009-0.139-0.069-0.272-0.187-0.364c-0.295-0.229-0.897-0.695-1.654-1.264L11.484,30.8z
	 M38.106,48.709c-1.315,0.25-2.858,1.469-4.351,2.646c-1.045,0.825-2.031,1.604-2.737,1.879c-1.667,0.648-13.35,0.342-14.409-0.188
	C15.458,52.489,5.977,41.34,5.014,39.982c0.151-0.381,1.079-1.314,2.12-1.188c0.995,0.133,5.471,3.383,8.059,5.399
	c0.066,0.052,0.141,0.077,0.218,0.092c-0.01,0.012-0.026,0.021-0.036,0.033c-0.311,0.399-0.436,0.852-0.371,1.345
	c0.337,2.589,1.566,2.729,3.122,2.907l0.191,0.021c0.212,0.035,0.473,0.084,0.771,0.139c1.476,0.273,3.751,0.694,5.925,0.694
	c1.286,0,2.537-0.147,3.566-0.56c3.124-1.209,7.334-4.233,7.511-4.361c0.225-0.161,0.275-0.474,0.113-0.697
	c-0.162-0.226-0.476-0.276-0.697-0.113c-0.043,0.03-4.285,3.077-7.293,4.242c-2.507,1.001-6.854,0.197-8.944-0.188
	c-0.305-0.057-0.571-0.105-0.813-0.146l-0.218-0.024c-1.542-0.177-2.008-0.23-2.244-2.043c-0.029-0.225,0.024-0.416,0.169-0.602
	c0.88-1.13,4.46-1.556,7.337-1.897l1.162-0.14c2.267-0.291,4.774-1.91,7.2-3.477c1.92-1.24,3.733-2.411,5.274-2.84
	c3.245-0.926,7.857,1.82,7.903,1.848c0.09,0.055,0.189,0.067,0.287,0.062l0.706,10.698C45.146,49.068,40.126,48.422,38.106,48.709z
	 M55,51.695c-0.006,0.035-0.066,0.097-0.103,0.104H47.3c-0.1,0-0.1-0.053-0.101-0.133l-1.1-16.662
	c0.006-0.036,0.069-0.099,0.101-0.104h8.7c0.1,0,0.1,0.053,0.1,0.1V51.695z"/>
</svg>
`});Vue.component('de-icon-store',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M33.8,44.2H44c0.262,0,0.477-0.124,0.618-0.3H44.9v-8.7c0-0.479-0.414-0.8-0.801-0.8H33.8
		c-0.479,0-0.8,0.413-0.8,0.8v8.2C33,43.872,33.422,44.2,33.8,44.2z M34,35.4h9.9v7.5H43.8v0.3H34V35.4z"/>
	<path fill="#404040" d="M56,50.7h-5.811c0.065-0.084,0.11-0.185,0.11-0.3V28.1c0-0.012-0.006-0.022-0.007-0.034
		C52.992,27.77,55.1,25.477,55.1,22.7v-5.4v-0.194V17.1c0-0.26-0.201-0.467-0.455-0.491l-7.302-7.967
		C47.254,8.451,47.064,8.3,46.8,8.3H13.2c-0.222,0-0.449,0.127-0.548,0.349l-7.32,7.985c-0.15,0.054-0.261,0.178-0.305,0.333
		L4.9,17.105V17.3c0,0.11,0.041,0.218,0.1,0.314V22.7c0,2.743,2.058,5.01,4.71,5.351C9.708,28.068,9.7,28.083,9.7,28.1v22.3
		c0,0.115,0.045,0.216,0.11,0.3H4c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h52c0.276,0,0.5-0.224,0.5-0.5S56.276,50.7,56,50.7z
		 M13.412,9.3h33.177l6.966,7.6H6.445L13.412,9.3z M6,22.7v-4.8h9.3h9.8h9.8h9.8h0.1h9.3v4.8c0,2.426-1.974,4.4-4.399,4.4
		c-2.427,0-4.4-1.974-4.4-4.4v-4.3c0-0.276-0.224-0.5-0.5-0.5c-0.018,0-0.032,0.008-0.05,0.01c-0.018-0.002-0.032-0.01-0.05-0.01
		c-0.276,0-0.5,0.224-0.5,0.5v4.3c0,2.426-1.974,4.4-4.4,4.4c-2.426,0-4.399-1.974-4.399-4.4v-4.3c0-0.276-0.224-0.5-0.5-0.5
		s-0.5,0.224-0.5,0.5v4.3c0,2.426-1.974,4.4-4.4,4.4c-2.426,0-4.4-1.974-4.4-4.4v-4.3c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5
		v4.3c0,2.426-1.974,4.4-4.4,4.4s-4.4-1.974-4.4-4.4v-4.3c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v4.3
		c0,2.426-1.974,4.4-4.4,4.4S6,25.126,6,22.7z M10.697,28.085c2.044-0.112,3.786-1.362,4.603-3.129
		c0.856,1.853,2.728,3.145,4.9,3.145c2.172,0,4.043-1.292,4.9-3.145c0.856,1.853,2.728,3.145,4.9,3.145s4.044-1.292,4.9-3.145
		c0.856,1.853,2.728,3.145,4.899,3.145c2.213,0,4.117-1.339,4.95-3.248c0.783,1.793,2.513,3.079,4.554,3.228
		c0,0.007-0.004,0.013-0.004,0.02v22.3c0,0.115,0.045,0.216,0.11,0.3H29.6V35.2c0-0.479-0.414-0.8-0.8-0.8H16
		c-0.479,0-0.8,0.413-0.8,0.8v15.5h-4.61c0.065-0.084,0.11-0.185,0.11-0.3V28.1C10.7,28.095,10.697,28.09,10.697,28.085z M28.6,50.7
		H16.2V35.4h12.4V50.7z"/>
</g>
</svg>
`});Vue.component('de-icon-government',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M55.5,48.7h-2v-1.9c0-0.276-0.224-0.5-0.5-0.5h-4.9V25.2H53c0.276,0,0.5-0.224,0.5-0.5v-3.4
		c0-0.174-0.091-0.335-0.238-0.426l-23-14.1c-0.16-0.099-0.362-0.098-0.523,0l-22.9,14.1C6.69,20.965,6.6,21.126,6.6,21.3v3.4
		c0,0.276,0.224,0.5,0.5,0.5h4.8v21.1H7.1c-0.276,0-0.5,0.224-0.5,0.5v1.9H4.5c-0.276,0-0.5,0.224-0.5,0.5v3.6
		c0,0.276,0.224,0.5,0.5,0.5h51c0.276,0,0.5-0.224,0.5-0.5v-3.6C56,48.924,55.776,48.7,55.5,48.7z M47.1,46.3h-3.6V25.2h3.6V46.3z
		 M27.2,25.2v21.1h-9.7V25.2H27.2z M28.2,25.2h3.6v21.1h-3.6V25.2z M32.8,25.2h9.7v21.1h-9.7V25.2z M7.6,21.579L30,7.787L52.5,21.58
		V24.2H7.6V21.579z M12.9,25.2h3.6v21.1h-3.6V25.2z M55,52.3H5v-2.6h2.1c0.276,0,0.5-0.224,0.5-0.5v-1.9h44.9v1.9
		c0,0.276,0.224,0.5,0.5,0.5h2V52.3z"/>
	<path fill="#404040" d="M30,13.1c-2.041,0-3.7,1.66-3.7,3.7c0,2.041,1.66,3.7,3.7,3.7c2.04,0,3.7-1.66,3.7-3.7
		C33.7,14.76,32.04,13.1,30,13.1z M30,19.5c-1.489,0-2.7-1.211-2.7-2.7s1.211-2.7,2.7-2.7c1.489,0,2.7,1.211,2.7,2.7
		S31.489,19.5,30,19.5z"/>
</g>
</svg>

`});Vue.component('de-icon-self-employed',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M33.177,32.378C38.645,30.951,42.7,25.95,42.7,20c0-7.058-5.697-12.8-12.7-12.8S17.3,12.942,17.3,20
	c0,5.95,4.056,10.951,9.523,12.378C17.303,33.915,10,42.205,10,52.2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
	C11,41.668,19.523,33.1,30,33.1S49,41.668,49,52.2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
	C50,42.205,42.697,33.915,33.177,32.378z M18.3,20c0-6.506,5.249-11.8,11.7-11.8c6.451,0,11.7,5.293,11.7,11.8S36.451,31.8,30,31.8
	C23.548,31.8,18.3,26.506,18.3,20z"/>
</svg>

`});Vue.component('de-icon-community',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M30,15.9c4.656,0,8.391-7.363,8.547-7.676c0.123-0.247,0.023-0.547-0.224-0.671
		c-0.247-0.121-0.547-0.023-0.671,0.224C37.617,7.848,34.045,14.9,30,14.9c-4.039,0-7.617-7.052-7.653-7.124
		c-0.124-0.248-0.424-0.346-0.671-0.224c-0.247,0.124-0.347,0.424-0.224,0.671C21.609,8.537,25.345,15.9,30,15.9z"/>
	<path fill="#404040" d="M30,10.6c1.819,0,3.3-1.48,3.3-3.3C33.3,5.48,31.819,4,30,4s-3.3,1.48-3.3,3.3
		C26.7,9.089,28.211,10.6,30,10.6z M30,5c1.269,0,2.3,1.032,2.3,2.3c0,1.269-1.031,2.3-2.3,2.3c-1.225,0-2.3-1.075-2.3-2.3
		C27.7,6.032,28.732,5,30,5z"/>
	<path fill="#404040" d="M30,44.1c-4.655,0-8.391,7.363-8.547,7.677c-0.124,0.247-0.023,0.547,0.224,0.671
		c0.072,0.036,0.148,0.053,0.223,0.053c0.184,0,0.36-0.102,0.448-0.276C22.383,52.152,25.961,45.1,30,45.1s7.617,7.053,7.652,7.124
		c0.124,0.248,0.427,0.349,0.671,0.224c0.247-0.124,0.347-0.424,0.224-0.671C38.391,51.463,34.656,44.1,30,44.1z"/>
	<path fill="#404040" d="M30,49.4c-1.819,0-3.3,1.48-3.3,3.3S28.181,56,30,56s3.3-1.48,3.3-3.3C33.3,50.911,31.789,49.4,30,49.4z
		 M30,55c-1.268,0-2.3-1.031-2.3-2.3s1.032-2.3,2.3-2.3c1.226,0,2.3,1.074,2.3,2.3C32.3,53.969,31.269,55,30,55z"/>
	<path fill="#404040" d="M52.126,37.653C52.056,37.618,45.1,34.047,45.1,30c0-4.041,6.957-7.619,7.027-7.654
		c0.246-0.125,0.344-0.426,0.22-0.672c-0.126-0.247-0.426-0.345-0.672-0.22C51.365,21.611,44.1,25.347,44.1,30
		c0,4.654,7.266,8.389,7.575,8.546c0.072,0.036,0.149,0.054,0.226,0.054c0.182,0,0.357-0.101,0.446-0.274
		C52.472,38.079,52.373,37.778,52.126,37.653z"/>
	<path fill="#404040" d="M52.7,26.7c-1.819,0-3.3,1.48-3.3,3.3s1.48,3.3,3.3,3.3S56,31.819,56,30S54.52,26.7,52.7,26.7z M52.7,32.3
		c-1.269,0-2.3-1.031-2.3-2.3c0-1.268,1.031-2.3,2.3-2.3S55,28.732,55,30C55,31.269,53.969,32.3,52.7,32.3z"/>
	<path fill="#404040" d="M15.9,30c0-4.653-7.265-8.389-7.574-8.546c-0.247-0.127-0.548-0.027-0.672,0.22
		c-0.125,0.246-0.026,0.547,0.22,0.672C7.944,22.381,14.9,25.954,14.9,30c0,4.041-6.956,7.618-7.026,7.653
		c-0.246,0.125-0.345,0.426-0.22,0.673C7.742,38.5,7.918,38.6,8.101,38.6c0.076,0,0.153-0.018,0.226-0.054
		C8.635,38.389,15.9,34.654,15.9,30z"/>
	<path fill="#404040" d="M10.6,30c0-1.819-1.48-3.3-3.3-3.3C5.48,26.7,4,28.181,4,30s1.48,3.3,3.3,3.3
		C9.12,33.3,10.6,31.819,10.6,30z M7.3,32.3C6.032,32.3,5,31.269,5,30c0-1.268,1.032-2.3,2.3-2.3c1.269,0,2.3,1.032,2.3,2.3
		C9.6,31.269,8.568,32.3,7.3,32.3z"/>
	<path fill="#404040" d="M8.642,20.674c0.202,0.067,3.2,1.048,6.249,1.048c1.935,0,3.89-0.395,5.164-1.668
		c3.28-3.281,0.731-11.082,0.621-11.412c-0.087-0.262-0.369-0.405-0.632-0.316c-0.262,0.087-0.403,0.37-0.316,0.632
		c0.025,0.075,2.469,7.54-0.379,10.389c-2.846,2.844-10.313,0.404-10.389,0.379c-0.261-0.085-0.545,0.055-0.632,0.317
		C8.238,20.304,8.38,20.587,8.642,20.674z"/>
	<path fill="#404040" d="M14.05,17.225c0.859,0,1.677-0.345,2.303-0.972c1.292-1.292,1.292-3.315,0-4.607
		c-1.253-1.253-3.354-1.252-4.607,0c-1.292,1.292-1.292,3.315,0,4.607C12.373,16.88,13.191,17.225,14.05,17.225z M12.454,12.354
		c0.438-0.438,1.004-0.679,1.597-0.679c0.592,0,1.159,0.241,1.596,0.679c0.91,0.91,0.91,2.283,0,3.193
		c-0.875,0.875-2.318,0.875-3.193,0C11.543,14.636,11.543,13.264,12.454,12.354z"/>
	<path fill="#404040" d="M51.358,39.325c-0.331-0.11-8.133-2.659-11.412,0.621c-3.28,3.281-0.731,11.082-0.621,11.412
		c0.07,0.209,0.266,0.342,0.475,0.342c0.053,0,0.105-0.008,0.158-0.025c0.262-0.088,0.403-0.371,0.316-0.633
		c-0.025-0.075-2.47-7.54,0.379-10.389c2.845-2.847,10.314-0.403,10.389-0.379c0.263,0.087,0.545-0.055,0.633-0.316
		C51.762,39.695,51.62,39.413,51.358,39.325z"/>
	<path fill="#404040" d="M43.63,43.764c-1.165,1.282-1.165,3.291,0,4.572c0.571,0.629,1.403,0.988,2.282,0.988
		c0.871,0,1.724-0.354,2.342-0.971c1.291-1.291,1.291-3.315,0-4.607C47,42.493,44.915,42.478,43.63,43.764z M47.547,47.646
		c-0.862,0.86-2.4,0.869-3.177,0.018c-0.823-0.905-0.822-2.323-0.017-3.211c0.438-0.438,1.004-0.678,1.597-0.678
		c0.592,0,1.159,0.24,1.597,0.678C48.457,45.363,48.457,46.736,47.547,47.646z"/>
	<path fill="#404040" d="M39.946,19.954c1.274,1.274,3.229,1.669,5.164,1.668c3.048,0,6.046-0.98,6.248-1.048
		c0.262-0.087,0.403-0.37,0.316-0.632c-0.088-0.262-0.37-0.399-0.633-0.316c-0.074,0.026-7.544,2.464-10.389-0.379
		c-2.845-2.845-0.404-10.313-0.379-10.388c0.087-0.262-0.055-0.545-0.316-0.632c-0.261-0.085-0.545,0.054-0.633,0.316
		C39.215,8.873,36.666,16.673,39.946,19.954z"/>
	<path fill="#404040" d="M45.95,17.125c0.858,0,1.677-0.345,2.304-0.972c1.291-1.292,1.291-3.315,0-4.607
		c-1.254-1.254-3.355-1.252-4.607,0c-1.23,1.231-1.237,3.247,0,4.607C44.272,16.78,45.091,17.125,45.95,17.125z M44.354,12.253
		c0.438-0.438,1.004-0.679,1.597-0.679c0.592,0,1.159,0.241,1.597,0.679c0.91,0.91,0.91,2.283,0,3.193
		c-0.876,0.875-2.336,0.857-3.177,0.017C43.494,14.5,43.487,13.12,44.354,12.253z"/>
	<path fill="#404040" d="M20.054,40.047c-3.278-3.278-11.169-0.829-11.504-0.724c-0.263,0.083-0.409,0.364-0.326,0.627
		c0.083,0.264,0.362,0.409,0.627,0.326c0.076-0.022,7.644-2.375,10.496,0.478c2.845,2.845,0.404,10.313,0.379,10.388
		c-0.087,0.263,0.055,0.545,0.317,0.633c0.052,0.018,0.105,0.025,0.158,0.025c0.209,0,0.404-0.133,0.474-0.342
		C20.785,51.128,23.334,43.327,20.054,40.047z"/>
	<path fill="#404040" d="M11.747,43.746c-0.626,0.627-0.972,1.445-0.972,2.304c0,0.859,0.345,1.678,0.972,2.304
		s1.444,0.971,2.304,0.971c0.859,0,1.677-0.345,2.303-0.971c1.189-1.189,1.197-3.291,0-4.607
		C15.1,42.493,12.999,42.495,11.747,43.746z M15.646,47.646c-0.875,0.876-2.318,0.874-3.193,0c-0.438-0.438-0.679-1.004-0.679-1.597
		c0-0.592,0.241-1.159,0.679-1.597s1.004-0.678,1.597-0.678c0.592,0,1.159,0.24,1.58,0.66
		C16.448,45.337,16.456,46.837,15.646,47.646z"/>
</g>
</svg>

`});Vue.component('de-icon-school-university',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M59.881,23.876c-0.021-0.025-0.046-0.048-0.072-0.069c0,0,0,0,0,0c-0.033-0.026-0.069-0.047-0.107-0.064
	l-29.39-13.695C30.245,10.016,30.173,10,30.1,10h-0.2c-0.073,0-0.145,0.016-0.211,0.047l-29.4,13.7C0.113,23.829,0,24.105,0,24.3
	s0.113,0.371,0.289,0.453l11.705,5.455L7.1,32.342c-0.183,0.079-0.3,0.259-0.3,0.458v16.7c0,0.276,0.224,0.5,0.5,0.5
	s0.5-0.224,0.5-0.5V33.127l5.403-2.356l0.712,0.332c-0.005,0-0.009-0.003-0.015-0.003c-0.276,0-0.5,0.224-0.5,0.5v10.5
	c0,0.084,0.021,0.167,0.062,0.241C15.817,46.623,22.463,49.5,30,49.5c7.537,0,14.184-2.877,16.538-7.159
	c0.04-0.074,0.062-0.157,0.062-0.241V31.6c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v10.369C43.391,45.82,37.005,48.5,30,48.5
	c-7.004,0-13.39-2.68-15.6-6.531V31.6c0-0.129-0.052-0.244-0.132-0.332l15.421,7.186c0.066,0.031,0.139,0.047,0.211,0.047h0.2
	c0.073,0,0.146-0.017,0.212-0.048l29.223-13.716c0.257-0.021,0.461-0.267,0.465-0.529c0,0,0,0,0,0v0c0-0.002,0-0.005,0-0.007
	c0-0.001,0-0.003,0-0.004c0,0,0-0.001,0-0.001c0,0,0,0,0-0.001C59.998,24.072,59.954,23.961,59.881,23.876z M30,37.495
	l-15.574-7.258L30.2,23.358c0.253-0.11,0.369-0.405,0.259-0.658c-0.11-0.253-0.406-0.37-0.658-0.259l-16.584,7.233L1.577,24.25
	L30,11.005l28.319,13.197L30,37.495z"/>
</svg>

`});Vue.component('de-icon-other',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M51.672,47.166c-0.902-1.004-1.552-2.065-2.104-3.44C53.122,39.718,55,34.976,55,30
		C55,17.814,43.785,7.9,30,7.9S5,17.814,5,30c0,12.139,11.258,22.098,25.096,22.2c0.001,0,0.002,0,0.004,0
		c4.738,0,9.417-1.195,13.533-3.458c1.802,1.05,4.025,1.657,6.452,1.758l3.5,0.1c0.005,0,0.01,0,0.015,0c0.009,0,0.014,0,0.02,0
		c0.276,0,0.5-0.224,0.5-0.5c0-0.171-0.086-0.322-0.217-0.412L51.672,47.166z M50.12,49.5c-2.339-0.097-4.469-0.693-6.159-1.727
		C43.883,47.726,43.792,47.7,43.7,47.7H43.6c-0.307,0-0.479,0.109-0.575,0.235c-3.938,2.136-8.402,3.265-12.922,3.265
		C16.813,51.101,6,41.591,6,30C6,18.365,16.767,8.9,30,8.9S54,18.365,54,30c0,4.77-1.823,9.322-5.254,13.146
		c-0.257,0.257-0.289,0.586-0.11,0.939c0.599,1.495,1.306,2.651,2.29,3.745l1.535,1.736L50.12,49.5z"/>
	<path fill="#404040" d="M28.9,17.7c-1.972,0-3.908,0.827-5.312,2.268c-1.398,1.435-2.14,3.298-2.088,5.245
		c0.008,0.277,0.266,0.483,0.513,0.487c0.276-0.007,0.494-0.237,0.487-0.513c-0.044-1.675,0.597-3.281,1.805-4.521
		c1.217-1.249,2.892-1.965,4.595-1.965c3.108,0,5.761,2.182,6.308,5.188c0.477,2.667-0.591,5.233-2.789,6.699
		C30.09,32.174,28.7,34.833,28.7,37.7v0.6c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-0.6c0-2.536,1.227-4.886,3.277-6.284
		c2.53-1.688,3.762-4.639,3.215-7.706C35.559,20.228,32.491,17.7,28.9,17.7z"/>
	<path fill="#404040" d="M29.3,40.6c-0.4,0-0.7,0.301-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7
		C30,40.9,29.7,40.6,29.3,40.6z"/>
</g>
</svg>

`});Vue.component('de-icon-hr-admin',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M55.754,43.047l-0.086-0.086l-1.778-0.563l-0.315-0.655l-0.037-0.111l0.715-1.519l0.048-0.564l-0.084-0.126
		c-0.692-1.04-1.602-1.788-2.316-2.323L51.666,37H51.5l-1.826,0.765l-0.018-0.006c-0.184-0.15-0.363-0.21-0.499-0.256
		c-0.045-0.015-0.09-0.028-0.198-0.076l-0.572-1.648C48.349,35.601,48.209,35.3,47.7,35.3H44.6c-0.286,0-0.497,0.19-0.555,0.249
		l-0.085,0.086l-0.562,1.775l-0.655,0.315l-0.111,0.037l-1.519-0.715L40.549,37l-0.126,0.084c-1.038,0.691-1.786,1.601-2.323,2.316
		L38,39.533v0.078c-0.079,0.189-0.053,0.389,0.075,0.56l0.69,1.467l-0.339,0.703l-1.648,0.573C36.601,42.952,36.3,43.092,36.3,43.6
		V46.7c0,0.284,0.189,0.496,0.247,0.554l0.086,0.087l1.777,0.561l0.315,0.656l0.037,0.11l-0.715,1.52L38,50.751l0.084,0.126
		c0.691,1.038,1.601,1.786,2.316,2.323l0.232,0.1H40.8l1.832-0.767l0.711,0.342l0.572,1.647C43.953,54.7,44.093,55,44.6,55H47.7
		c0.283,0,0.494-0.187,0.552-0.244l0.088-0.087l0.562-1.779l0.767-0.353l1.52,0.715l0.563,0.048l0.126-0.084
		c1.04-0.692,1.788-1.602,2.323-2.316l0.1-0.134v-0.076c0.08-0.19,0.054-0.39-0.075-0.562l-0.689-1.466l0.34-0.705l1.647-0.571
		C55.7,47.348,56,47.208,56,46.7V43.6C56,43.315,55.812,43.104,55.754,43.047z M55,46.503L53.106,47.1l-0.481,1.144l-0.162,0.489
		l0.813,1.73c-0.447,0.583-1.038,1.273-1.805,1.818l-1.739-0.818L48.1,52.106L47.502,54h-2.704l-0.599-1.894l-1.142-0.481
		l-0.484-0.16l-1.77,0.786c-0.577-0.445-1.251-1.029-1.785-1.779l0.818-1.739l-0.19-0.557l-0.272-0.535L39.193,47.1L37.3,46.502
		v-2.703l1.894-0.599l0.481-1.143l0.162-0.49l-0.813-1.729c0.448-0.585,1.04-1.275,1.805-1.819l1.739,0.818l0.559-0.19l0.533-0.272
		l0.541-0.181l0.599-1.894h2.703l0.598,1.894l0.478,0.154c0.088,0.044,0.176,0.075,0.265,0.104c0.115,0.038,0.157,0.054,0.205,0.102
		l0.084,0.084l0.596,0.197l1.77-0.786c0.576,0.444,1.251,1.027,1.785,1.779l-0.818,1.739l0.19,0.559l0.18,0.357l0.273,0.716
		L55,43.798V46.503z"/>
	<path fill="#404040" d="M22.1,28.5c-5.459,0-9.9,4.441-9.9,9.9s4.441,9.899,9.9,9.899S32,43.859,32,38.4S27.559,28.5,22.1,28.5z
		 M22.1,47.3c-4.907,0-8.9-3.992-8.9-8.899s3.993-8.9,8.9-8.9s8.9,3.993,8.9,8.9S27.007,47.3,22.1,47.3z"/>
	<path fill="#404040" d="M22.1,31.8c-3.523,0-6.5,3.022-6.5,6.601c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		c0-3.036,2.519-5.601,5.5-5.601c0.276,0,0.5-0.224,0.5-0.5S22.376,31.8,22.1,31.8z"/>
	<path fill="#404040" d="M46.1,40.7c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S48.581,40.7,46.1,40.7z
		 M46.1,48.7c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S48.029,48.7,46.1,48.7z"/>
	<path fill="#404040" d="M34.5,29.3c0.373,0,0.7-0.327,0.7-0.7v-8.483l1.364-0.642C36.744,19.424,37,19.269,37,18.8v-5.4
		c0-1.669-1.287-3.16-2.944-3.397l-0.189-0.021l0.098-0.196C34.193,9.214,34.3,8.646,34.3,8c0-2.371-1.929-4.3-4.3-4.3
		S25.7,5.629,25.7,8c0,0.602,0.123,1.253,0.353,1.824l0.08,0.159l-0.203,0.022C24.232,10.248,23,11.675,23,13.4v5.4
		c0,0.47,0.256,0.625,0.436,0.675l1.364,0.642v5.265c-0.872-0.183-1.774-0.282-2.7-0.282c-1.47,0-2.879,0.253-4.2,0.702v-5.685
		l1.364-0.642C19.443,19.424,19.7,19.27,19.7,18.8v-5.4c0-1.669-1.287-3.16-2.945-3.397l-0.189-0.021l0.098-0.196
		C16.894,9.212,17,8.645,17,8c0-2.371-1.929-4.3-4.3-4.3c-2.411,0-4.3,1.845-4.3,4.2c0,0.741,0.146,1.314,0.453,1.824l0.08,0.159
		L8.729,9.905C7.032,10.147,5.8,11.575,5.8,13.3v5.4c0,0.463,0.25,0.62,0.428,0.673L7.5,20.009V28.5c0,0.373,0.327,0.7,0.7,0.7h4.39
		c-2.28,2.392-3.69,5.63-3.69,9.2c0,2.202,0.542,4.275,1.486,6.106l-1.942,1.941c-0.291,0.294-0.291,0.81-0.002,1.102l0.89,0.91
		l-5.084,5.086c-0.142,0.141-0.223,0.343-0.223,0.555c0,0.211,0.081,0.413,0.222,0.553l1.499,1.499
		c0.141,0.142,0.343,0.223,0.555,0.223c0.211,0,0.413-0.081,0.553-0.222l5.056-5.057l0.836,0.855
		c0.141,0.142,0.343,0.223,0.554,0.223c0.212,0,0.414-0.081,0.554-0.222l1.898-1.898C17.637,51.102,19.8,51.7,22.1,51.7
		c7.278,0,13.2-5.966,13.2-13.3c0-3.521-1.375-6.719-3.6-9.101H34.5z M24,18.636V13.4c0-1.222,0.871-2.233,2.055-2.403l1.613-0.18
		l-0.704-1.403C26.799,9.001,26.7,8.473,26.7,8c0-1.819,1.48-3.3,3.3-3.3s3.3,1.48,3.3,3.3c0,0.522-0.081,0.958-0.247,1.376
		l-0.722,1.441l1.599,0.178C35.071,11.158,36,12.237,36,13.4v5.236l-1.8,0.846V28.3h-2.8c-0.193,0-0.355,0.112-0.438,0.272
		c-1.462-1.339-3.216-2.356-5.162-2.93v-6.159L24,18.636z M6.8,18.541V13.3c0-1.222,0.871-2.233,2.055-2.403l1.613-0.18l-0.74-1.475
		C9.498,8.858,9.4,8.457,9.4,7.9c0-1.794,1.45-3.2,3.3-3.2C14.52,4.7,16,6.181,16,8c0,0.521-0.082,0.958-0.247,1.376l-0.721,1.441
		l1.598,0.178c1.142,0.163,2.071,1.242,2.071,2.405l0,5.236l-1.8,0.847V25.9c0,0.091,0.031,0.171,0.073,0.245
		c-1.288,0.549-2.465,1.308-3.507,2.219c-0.091-0.099-0.22-0.164-0.365-0.164H8.5v-8.809L6.8,18.541z M6.3,55.293L5.107,54.1
		l4.924-4.924l1.18,1.206L6.3,55.293z M13.302,51.091l-3.997-4.089l1.595-1.596c1.017,1.643,2.37,3.05,3.975,4.111L13.302,51.091z
		 M22.1,50.7c-2.292,0-4.431-0.652-6.265-1.765l-0.189-0.189l-0.045,0.045c-1.625-1.036-2.986-2.446-3.973-4.112l0.025-0.025
		l-0.102-0.103C10.508,42.739,9.9,40.643,9.9,38.4c0-6.782,5.473-12.3,12.2-12.3s12.2,5.518,12.2,12.3S28.827,50.7,22.1,50.7z"/>
	<path fill="#404040" d="M28.6,13.4h1.215c-0.126,0.091-0.215,0.232-0.215,0.4v3.9c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		v-3.9c0-0.168-0.088-0.309-0.215-0.4H31.6c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.276,0-0.5,0.224-0.5,0.5
		S28.324,13.4,28.6,13.4z"/>
	<path fill="#404040" d="M11.3,13.4h1.115c-0.127,0.091-0.215,0.232-0.215,0.4v3.9c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		v-3.9c0-0.168-0.088-0.309-0.215-0.4H14.2c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-2.9c-0.276,0-0.5,0.224-0.5,0.5
		S11.023,13.4,11.3,13.4z"/>
	<path fill="#404040" d="M40.836,19.375l1.364,0.643V28.5c0,0.379,0.32,0.7,0.7,0.7H51.8c0.38,0,0.7-0.321,0.7-0.7v-8.482
		l1.332-0.627c0.295-0.043,0.568-0.241,0.568-0.69v-5.4c0-1.668-1.287-3.16-2.944-3.397l-0.189-0.021l0.099-0.197
		C51.594,9.111,51.7,8.543,51.7,7.9c0-2.371-1.929-4.3-4.3-4.3S43.1,5.529,43.1,7.9c0,0.601,0.123,1.251,0.354,1.824l0.079,0.159
		L43.33,9.905c-1.698,0.243-2.93,1.67-2.93,3.395v5.4C40.4,19.169,40.656,19.324,40.836,19.375z M41.4,13.3
		c0-1.222,0.871-2.233,2.056-2.403l1.611-0.18l-0.703-1.403C44.198,8.9,44.1,8.371,44.1,7.9c0-1.819,1.48-3.3,3.301-3.3
		c1.819,0,3.3,1.48,3.3,3.3c0,0.52-0.081,0.956-0.247,1.376l-0.722,1.441l1.598,0.178c1.143,0.163,2.071,1.242,2.071,2.405v5.188
		l-1.9,0.895V28.2h-8.3v-8.817l-1.8-0.847V13.3z"/>
	<path fill="#404040" d="M46,13.4h1.215C47.088,13.491,47,13.632,47,13.8v3.9c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-3.9
		c0-0.168-0.088-0.309-0.215-0.4H48.9c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H46c-0.276,0-0.5,0.224-0.5,0.5
		S45.724,13.4,46,13.4z"/>
</g>
</svg>

`});Vue.component('de-icon-it-engineering',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M47.1,33.7c0-3.529-2.826-6.4-6.3-6.4h-2.989c0.053-0.321,0.09-0.675,0.09-1c0-3.529-2.826-6.4-6.301-6.4
		c-2.454,0-4.567,1.339-5.714,3.6H25.5c-2.491,0-4.792,1.513-5.832,3.8H19.2c-3.474,0-6.3,2.871-6.3,6.4
		c0,3.528,2.826,6.399,6.3,6.399h21.6C44.273,40.1,47.1,37.229,47.1,33.7z M40.8,39.1H19.2c-2.922,0-5.3-2.422-5.3-5.399
		s2.378-5.4,5.3-5.4h1.141l0.125-0.318c0.815-2.083,2.838-3.482,5.034-3.482h1.022l0.133-0.293c0.941-2.071,2.79-3.307,4.944-3.307
		c2.923,0,5.301,2.422,5.301,5.4c0,0.469-0.1,1.036-0.186,1.379L36.561,28.3H40.8c2.922,0,5.3,2.423,5.3,5.4
		C46.1,36.627,43.673,39.1,40.8,39.1z"/>
	<path fill="#404040" d="M30.5,49v-6.3c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5V49c0,0.276,0.224,0.5,0.5,0.5
		S30.5,49.276,30.5,49z"/>
	<path fill="#404040" d="M29.5,11v7.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V11c0-0.276-0.224-0.5-0.5-0.5
		S29.5,10.724,29.5,11z"/>
	<path fill="#404040" d="M30,9c2.15,0,3.9-1.794,3.9-4S32.15,1,30,1s-3.9,1.794-3.9,4S27.85,9,30,9z M30,2c1.6,0,2.9,1.346,2.9,3
		S31.6,8,30,8c-1.599,0-2.9-1.346-2.9-3S28.401,2,30,2z"/>
	<path fill="#404040" d="M30,51c-2.15,0-3.9,1.794-3.9,4s1.75,4,3.9,4s3.9-1.794,3.9-4S32.15,51,30,51z M30,58
		c-1.599,0-2.9-1.346-2.9-3s1.301-3,2.9-3c1.6,0,2.9,1.346,2.9,3S31.6,58,30,58z"/>
	<path fill="#404040" d="M45.457,40.671l-0.5-0.3c-0.233-0.142-0.543-0.065-0.686,0.172c-0.143,0.236-0.065,0.544,0.172,0.686
		l0.5,0.3c0.08,0.049,0.169,0.071,0.257,0.071c0.169,0,0.335-0.087,0.429-0.243C45.771,41.12,45.694,40.813,45.457,40.671z"/>
	<path fill="#404040" d="M20.406,23.604c0.089,0.064,0.192,0.096,0.294,0.096c0.154,0,0.307-0.071,0.405-0.206
		c0.163-0.223,0.113-0.536-0.11-0.699l-5.9-4.3c-0.223-0.162-0.536-0.114-0.699,0.11c-0.163,0.223-0.113,0.536,0.11,0.699
		L20.406,23.604z"/>
	<path fill="#404040" d="M9.9,19.3c2.15,0,3.9-1.794,3.9-4s-1.75-4-3.9-4S6,13.094,6,15.3S7.75,19.3,9.9,19.3z M9.9,12.3
		c1.599,0,2.9,1.346,2.9,3s-1.301,3-2.9,3S7,16.954,7,15.3S8.301,12.3,9.9,12.3z"/>
	<path fill="#404040" d="M50.1,40.7c-2.15,0-3.899,1.794-3.899,4s1.749,4,3.899,4s3.9-1.794,3.9-4S52.25,40.7,50.1,40.7z M50.1,47.7
		c-1.599,0-2.899-1.346-2.899-3s1.301-3,2.899-3c1.6,0,2.9,1.346,2.9,3S51.699,47.7,50.1,47.7z"/>
	<path fill="#404040" d="M15.335,40.176l-0.8,0.5c-0.234,0.146-0.305,0.454-0.159,0.688c0.095,0.152,0.258,0.235,0.424,0.235
		c0.09,0,0.182-0.024,0.265-0.076l0.8-0.5c0.234-0.146,0.305-0.454,0.159-0.688C15.877,40.1,15.57,40.029,15.335,40.176z"/>
	<path fill="#404040" d="M39.2,23.7c0.102,0,0.203-0.03,0.291-0.094l6-4.3c0.225-0.161,0.276-0.473,0.115-0.698
		c-0.161-0.226-0.476-0.275-0.697-0.115l-6,4.3c-0.225,0.161-0.276,0.473-0.115,0.698C38.892,23.628,39.045,23.7,39.2,23.7z"/>
	<path fill="#404040" d="M50.1,19.3c2.15,0,3.9-1.794,3.9-4s-1.75-4-3.9-4s-3.899,1.794-3.899,4S47.949,19.3,50.1,19.3z M50.1,12.3
		c1.6,0,2.9,1.346,2.9,3s-1.301,3-2.9,3c-1.599,0-2.899-1.346-2.899-3S48.501,12.3,50.1,12.3z"/>
	<path fill="#404040" d="M9.9,40.7c-2.15,0-3.9,1.794-3.9,4s1.75,4,3.9,4s3.9-1.794,3.9-4S12.05,40.7,9.9,40.7z M9.9,47.7
		c-1.599,0-2.9-1.346-2.9-3s1.301-3,2.9-3s2.9,1.346,2.9,3S11.499,47.7,9.9,47.7z"/>
</g>
</svg>

`});Vue.component('de-icon-designer',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M24.6,34c6.121,0,11.1-5.024,11.1-11.2c0-1.137,0-2.854-1.344-3.829c-1.215-0.73-2.791-0.343-4.21,1.075
		c-0.778,0.778-2.015,0.778-2.793,0C26.976,19.668,26.8,19.209,26.8,18.6c0-0.504,0.193-0.991,0.567-1.461
		c1.459-1.58,1.52-2.759,1.407-3.397c-0.261-0.784-0.883-1.455-1.751-1.89C26.318,11.5,25.366,11.5,24.6,11.5
		c-6.224,0-11.1,4.963-11.1,11.3C13.5,28.976,18.479,34,24.6,34z M24.6,12.5c0.625,0,1.482,0,1.976,0.247
		c0.62,0.31,1.075,0.788,1.23,1.235c0.051,0.308,0.04,1.165-1.197,2.505c-0.537,0.672-0.81,1.383-0.81,2.113
		c0,0.879,0.277,1.583,0.847,2.153c1.156,1.156,3.051,1.156,4.207,0c0.752-0.752,1.506-1.15,2.178-1.15
		c0.289,0,0.563,0.076,0.774,0.201C34.7,20.455,34.7,21.755,34.7,22.8c0,5.625-4.531,10.2-10.1,10.2s-10.1-4.576-10.1-10.2
		C14.5,16.928,18.842,12.5,24.6,12.5z"/>
	<path fill="#404040" d="M39.9,20.251V30h1v-9.62c1.284-0.104,2.3-1.17,2.3-2.48v-1.1c0-1.474,0-2.538,0.183-3.269l0.53-1.944
		l-1.941,0.53c-3.771,0.999-3.771,3.938-3.764,5.973C38.399,19.138,39.053,19.937,39.9,20.251z M42.231,13.083l0.257-0.07
		l-0.073,0.266C42.2,14.139,42.2,15.255,42.2,16.8v1.1c0,0.827-0.673,1.5-1.5,1.5c-0.74,0-1.346-0.599-1.5-1.4
		C39.2,16.071,39.2,13.885,42.231,13.083z"/>
	<path fill="#404040" d="M32,39.8h-3.9c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H32c0.276,0,0.5-0.224,0.5-0.5
		S32.276,39.8,32,39.8z"/>
	<path fill="#404040" d="M52.1,7.8H7.9c-2.467,0-4.4,1.933-4.4,4.4V39.6c0,2.427,1.974,4.4,4.4,4.4h21.6v7.2H15.1
		c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H45c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H30.5V44h21.6
		c2.468,0,4.4-1.933,4.4-4.4V12.2C56.5,9.774,54.526,7.8,52.1,7.8z M7.9,8.8h44.2c1.875,0,3.4,1.525,3.4,3.4v24.7h-51V12.2
		C4.5,10.262,5.961,8.8,7.9,8.8z M52.1,43H7.9c-1.875,0-3.4-1.525-3.4-3.4V37.9h51V39.6C55.5,41.538,54.038,43,52.1,43z"/>
	<path fill="#404040" d="M20.5,20.7c1.158,0,2.1-0.942,2.1-2.1s-0.942-2.1-2.1-2.1s-2.1,0.942-2.1,2.1S19.342,20.7,20.5,20.7z
		 M20.5,17.5c0.606,0,1.1,0.494,1.1,1.1s-0.494,1.1-1.1,1.1s-1.1-0.494-1.1-1.1S19.894,17.5,20.5,17.5z"/>
	<path fill="#404040" d="M19.2,26c1.158,0,2.1-0.942,2.1-2.1s-0.942-2.1-2.1-2.1c-1.158,0-2.1,0.942-2.1,2.1S18.042,26,19.2,26z
		 M19.2,22.8c0.606,0,1.1,0.494,1.1,1.1S19.807,25,19.2,25s-1.1-0.494-1.1-1.1S18.594,22.8,19.2,22.8z"/>
	<path fill="#404040" d="M21.2,28.4c0,1.158,0.942,2.1,2.1,2.1c1.158,0,2.1-0.942,2.1-2.1s-0.942-2.1-2.1-2.1
		C22.142,26.3,21.2,27.242,21.2,28.4z M23.3,27.3c0.606,0,1.1,0.494,1.1,1.1s-0.494,1.1-1.1,1.1s-1.1-0.494-1.1-1.1
		S22.693,27.3,23.3,27.3z"/>
	<path fill="#404040" d="M29.3,28.3c1.158,0,2.101-0.942,2.101-2.1c0-1.158-0.942-2.1-2.101-2.1c-1.158,0-2.1,0.942-2.1,2.1
		C27.2,27.358,28.142,28.3,29.3,28.3z M29.3,25.1c0.607,0,1.101,0.494,1.101,1.1s-0.494,1.1-1.101,1.1c-0.606,0-1.1-0.493-1.1-1.1
		S28.693,25.1,29.3,25.1z"/>
	<path fill="#404040" d="M41.9,30.2h-3c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h3c0.276,0,0.5-0.224,0.5-0.5
		S42.177,30.2,41.9,30.2z"/>
</g>
</svg>

`});Vue.component('de-icon-agent',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M51.9,16.7h-4.621c0.008-0.033,0.021-0.064,0.021-0.1v-1.3c0-0.976-0.824-1.8-1.8-1.8h-0.843
	c0.027-0.062,0.043-0.129,0.043-0.2v-3c0-1.68-1.42-3.1-3.101-3.1H18.4c-1.681,0-3.1,1.419-3.1,3.1v3c0,0.071,0.016,0.139,0.043,0.2
	H14.5c-0.976,0-1.8,0.824-1.8,1.8v1.3c0,0.036,0.013,0.067,0.02,0.1H8.1C6.419,16.7,5,18.12,5,19.8V23v5.2v21.5
	c0,1.68,1.419,3.1,3.1,3.1h43.8c1.68,0,3.1-1.42,3.1-3.1V28.2V23v-3.2C55,18.12,53.58,16.7,51.9,16.7z M46.3,15.3v1.3
	c0,0.036,0.013,0.067,0.021,0.1h-6.841c0.007-0.033,0.021-0.064,0.021-0.1v-1.3c0-0.426,0.374-0.8,0.8-0.8h5.2
	C45.926,14.5,46.3,14.874,46.3,15.3z M19.7,13.5h-0.843c0.027-0.062,0.043-0.129,0.043-0.2v-1.7c0-0.426,0.374-0.8,0.8-0.8h20.6
	c0.426,0,0.8,0.374,0.8,0.8v1.7c0,0.071,0.016,0.139,0.043,0.2H40.3c-0.976,0-1.8,0.824-1.8,1.8v1.3c0,0.036,0.014,0.067,0.021,0.1
	H21.48c0.007-0.033,0.02-0.064,0.02-0.1v-1.3C21.5,14.324,20.676,13.5,19.7,13.5z M16.3,13.3v-3c0-1.119,0.981-2.1,2.1-2.1h23.2
	c1.119,0,2.101,0.981,2.101,2.1v3c0,0.071,0.016,0.139,0.043,0.2h-1.687c0.027-0.062,0.043-0.129,0.043-0.2v-1.7
	c0-0.976-0.824-1.8-1.8-1.8H19.7c-0.976,0-1.8,0.824-1.8,1.8v1.7c0,0.071,0.016,0.139,0.043,0.2h-1.686
	C16.284,13.438,16.3,13.371,16.3,13.3z M13.7,16.6v-1.3c0-0.426,0.374-0.8,0.8-0.8h5.2c0.426,0,0.8,0.374,0.8,0.8v1.3
	c0,0.036,0.013,0.067,0.02,0.1h-6.84C13.687,16.667,13.7,16.636,13.7,16.6z M6,19.8c0-1.119,0.981-2.1,2.1-2.1h43.8
	c1.118,0,2.1,0.981,2.1,2.1V23v5.2c0,2.636-2.064,4.7-4.7,4.7H34.4V31.8c0-0.976-0.824-1.8-1.801-1.8h-5.2
	c-0.976,0-1.8,0.824-1.8,1.8V32.9H10.7c-2.592,0-4.7-2.108-4.7-4.7V23V19.8z M43.7,51.8H42.1V33.9H43.7V51.8z M17.9,51.8h-1.6V33.9
	h1.6V51.8z M18.9,33.9h6.7v1.8c0,0.976,0.824,1.8,1.8,1.8h5.2c0.977,0,1.801-0.824,1.801-1.8v-1.8H41.1V51.8H18.9V33.9z M33.4,35.7
	c0,0.426-0.374,0.8-0.801,0.8h-5.2c-0.426,0-0.8-0.374-0.8-0.8v-3.9c0-0.426,0.374-0.8,0.8-0.8h5.2c0.427,0,0.801,0.374,0.801,0.8
	V35.7z M6,49.7V31.419c1.028,1.497,2.751,2.481,4.7,2.481h4.6V51.8H8.1C6.981,51.8,6,50.818,6,49.7z M54,49.7
	c0,1.118-0.981,2.1-2.1,2.1h-7.2V33.9h4.6c1.974,0,3.681-0.956,4.7-2.439V49.7z"/>
</svg>

`});Vue.component('de-icon-analyst',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M51.9,16.7h-4.621c0.008-0.033,0.021-0.064,0.021-0.1v-1.3c0-0.976-0.824-1.8-1.8-1.8h-0.843
	c0.027-0.062,0.043-0.129,0.043-0.2v-3c0-1.68-1.42-3.1-3.101-3.1H18.4c-1.681,0-3.1,1.419-3.1,3.1v3c0,0.071,0.016,0.139,0.043,0.2
	H14.5c-0.976,0-1.8,0.824-1.8,1.8v1.3c0,0.036,0.013,0.067,0.02,0.1H8.1C6.419,16.7,5,18.12,5,19.8V23v5.2v21.5
	c0,1.68,1.419,3.1,3.1,3.1h43.8c1.68,0,3.1-1.42,3.1-3.1V28.2V23v-3.2C55,18.12,53.58,16.7,51.9,16.7z M46.3,15.3v1.3
	c0,0.036,0.013,0.067,0.021,0.1h-6.841c0.007-0.033,0.021-0.064,0.021-0.1v-1.3c0-0.426,0.374-0.8,0.8-0.8h5.2
	C45.926,14.5,46.3,14.874,46.3,15.3z M19.7,13.5h-0.843c0.027-0.062,0.043-0.129,0.043-0.2v-1.7c0-0.426,0.374-0.8,0.8-0.8h20.6
	c0.426,0,0.8,0.374,0.8,0.8v1.7c0,0.071,0.016,0.139,0.043,0.2H40.3c-0.976,0-1.8,0.824-1.8,1.8v1.3c0,0.036,0.014,0.067,0.021,0.1
	H21.48c0.007-0.033,0.02-0.064,0.02-0.1v-1.3C21.5,14.324,20.676,13.5,19.7,13.5z M16.3,13.3v-3c0-1.119,0.981-2.1,2.1-2.1h23.2
	c1.119,0,2.101,0.981,2.101,2.1v3c0,0.071,0.016,0.139,0.043,0.2h-1.687c0.027-0.062,0.043-0.129,0.043-0.2v-1.7
	c0-0.976-0.824-1.8-1.8-1.8H19.7c-0.976,0-1.8,0.824-1.8,1.8v1.7c0,0.071,0.016,0.139,0.043,0.2h-1.686
	C16.284,13.438,16.3,13.371,16.3,13.3z M13.7,16.6v-1.3c0-0.426,0.374-0.8,0.8-0.8h5.2c0.426,0,0.8,0.374,0.8,0.8v1.3
	c0,0.036,0.013,0.067,0.02,0.1h-6.84C13.687,16.667,13.7,16.636,13.7,16.6z M6,19.8c0-1.119,0.981-2.1,2.1-2.1h43.8
	c1.118,0,2.1,0.981,2.1,2.1V23v5.2c0,2.636-2.064,4.7-4.7,4.7H34.4V31.8c0-0.976-0.824-1.8-1.801-1.8h-5.2
	c-0.976,0-1.8,0.824-1.8,1.8V32.9H10.7c-2.592,0-4.7-2.108-4.7-4.7V23V19.8z M43.7,51.8H42.1V33.9H43.7V51.8z M17.9,51.8h-1.6V33.9
	h1.6V51.8z M18.9,33.9h6.7v1.8c0,0.976,0.824,1.8,1.8,1.8h5.2c0.977,0,1.801-0.824,1.801-1.8v-1.8H41.1V51.8H18.9V33.9z M33.4,35.7
	c0,0.426-0.374,0.8-0.801,0.8h-5.2c-0.426,0-0.8-0.374-0.8-0.8v-3.9c0-0.426,0.374-0.8,0.8-0.8h5.2c0.427,0,0.801,0.374,0.801,0.8
	V35.7z M6,49.7V31.419c1.028,1.497,2.751,2.481,4.7,2.481h4.6V51.8H8.1C6.981,51.8,6,50.818,6,49.7z M54,49.7
	c0,1.118-0.981,2.1-2.1,2.1h-7.2V33.9h4.6c1.974,0,3.681-0.956,4.7-2.439V49.7z"/>
</svg>

`});Vue.component('de-icon-blogger-writer',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M56.055,15.902c-2.549,0.232-6.921,2.851-13.365,8.006c-0.639,0.506-1.308,1.053-1.989,1.617V16.1h10.1
		v-3.5c0-2.812-2.198-5.1-4.899-5.1h-29c-0.104,0-0.195,0.039-0.275,0.094C16.326,7.534,16.017,7.5,15.7,7.5
		c-2.277,0-4.2,1.923-4.2,4.2v32.21c-0.084-0.065-0.185-0.11-0.3-0.11H2.5V47.4c0,2.859,2.196,5.1,5,5.1
		c0.66,0,1.276-0.107,1.828-0.3H36.5c2.276,0,4.2-1.924,4.2-4.2v-7.4c0-0.005-0.003-0.01-0.003-0.015
		c2.492-2.685,5.799-6.42,8.698-10.079c2.461-3.19,7.581-9.827,7.9-13.343l0.181-1.439L56.055,15.902z M45.9,8.5
		c2.15,0,3.899,1.839,3.899,4.1v2.5h-9.1V15H20.4v-2.8c0-1.509-0.728-2.84-1.836-3.7H45.9z M3.5,47.4V44.8h7.7
		c0.115,0,0.215-0.045,0.3-0.11V47.4c0,1.012-0.413,2.111-1.07,2.863l-0.373,0.41c-0.027,0.016-0.058,0.024-0.083,0.046
		C9.388,51.223,8.51,51.5,7.5,51.5C5.257,51.5,3.5,49.699,3.5,47.4z M39.7,48c0,1.734-1.466,3.2-3.2,3.2H10.93l0.246-0.271
		c0.829-0.946,1.324-2.266,1.324-3.528V11.7c0-1.735,1.465-3.2,3.2-3.2c2.04,0,3.7,1.66,3.7,3.7v3.1c0,0.373,0.327,0.7,0.7,0.7
		h0.215c0.082,0.059,0.177,0.1,0.285,0.1h19.1V26c0,0.105,0.04,0.197,0.095,0.277c-3.053,2.569-6.469,5.652-10.048,9.07
		c-2.709,2.709-2.612,6.71-2.442,8.323c0.004,0.027,0.083,0.534,0.413,1.106l-4.071,4.07c-0.195,0.195-0.195,0.512,0,0.707
		C23.744,49.651,23.872,49.7,24,49.7s0.256-0.049,0.354-0.146l4.052-4.052C29.21,45.927,30.638,46,31.5,46h0.01h0.01
		c2.574-0.103,4.919-1.031,6.434-2.547c0.465-0.464,1.063-1.081,1.747-1.805V48z M56.302,17.055
		c-0.295,3.244-5.482,9.969-7.693,12.835c-3.944,4.977-9.019,10.514-11.362,12.856c-1.337,1.338-3.435,2.159-5.756,2.254
		c-0.955-0.001-1.838-0.105-2.333-0.25l23.496-23.497c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0L28.459,44.033
		c-0.117-0.27-0.162-0.486-0.163-0.486c-0.152-1.452-0.248-5.089,2.148-7.485c4.729-4.517,9.179-8.448,12.867-11.371
		c6.2-4.96,10.518-7.582,12.85-7.794l0.162-0.021L56.302,17.055z"/>
	<path fill="#404040" d="M16.5,24.1h19.3c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H16.5c-0.276,0-0.5,0.224-0.5,0.5
		S16.224,24.1,16.5,24.1z"/>
	<path fill="#404040" d="M16.5,29.3h18c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-18c-0.276,0-0.5,0.224-0.5,0.5
		S16.224,29.3,16.5,29.3z"/>
	<path fill="#404040" d="M16.5,34.6h12.7c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H16.5c-0.276,0-0.5,0.224-0.5,0.5
		S16.224,34.6,16.5,34.6z"/>
	<path fill="#404040" d="M25.8,39.3c0-0.276-0.224-0.5-0.5-0.5h-8.8c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h8.8
		C25.576,39.8,25.8,39.576,25.8,39.3z"/>
</g>
</svg>

`});Vue.component('de-icon-consultant',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M21.788,31.582C26.911,30.215,30.7,25.548,30.7,20c0-6.617-5.383-12-12-12s-12,5.383-12,12
		c0,5.556,3.801,10.229,8.935,11.588C6.898,33.119,0,41.009,0,50.2c0,0.276,0.224,0.5,0.5,0.5S1,50.477,1,50.2
		c0-8.791,6.659-16.323,15.044-17.666l-0.501,1.566l1.515,1.92l-2.813,11.953l4.451,3.994l4.56-3.989l-2.814-11.958l1.508-1.91
		l-0.437-1.56C29.882,33.927,36.3,41.306,36.3,50.2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		C37.3,40.85,30.576,33.084,21.788,31.582z M7.7,20c0-6.065,4.935-11,11-11s11,4.935,11,11s-4.935,11-11,11S7.7,26.065,7.7,20z
		 M20.85,33.89l-1.492,1.891l2.787,11.841l-3.44,3.011l-3.35-3.006l2.788-11.846l-1.485-1.881l0.485-1.517
		c0.515-0.049,1.033-0.083,1.558-0.083c0.584,0,1.16,0.032,1.729,0.089L20.85,33.89z"/>
	<path fill="#404040" d="M58.1,11H34.8c-1.172,0-1.899,0.728-1.899,1.9v13.3c0,1.172,0.728,1.9,1.899,1.9h2.3v3.8
		c0,0.255,0.051,0.455,0.156,0.611c0.135,0.201,0.355,0.316,0.604,0.316c0.33,0,0.653-0.193,1.017-0.412
		c0.57-0.38,3.981-3.46,4.815-4.216H58.1c1.172,0,1.9-0.728,1.9-1.9V12.9C60,11.728,59.271,11,58.1,11z M59,26.3
		c0,0.623-0.277,0.9-0.9,0.9H43.307l-0.143,0.129c-1.717,1.558-4.424,3.976-4.821,4.242c-0.068,0.041-0.157,0.095-0.243,0.142V27.1
		h-3.3c-0.622,0-0.899-0.277-0.899-0.9V12.9c0-0.623,0.277-0.9,0.899-0.9h23.3c0.623,0,0.9,0.277,0.9,0.9V26.3z"/>
	<circle fill="#404040" cx="46.4" cy="20" r="1.3"/>
	<circle fill="#404040" cx="39.9" cy="20" r="1.3"/>
	<circle fill="#404040" cx="53" cy="20" r="1.3"/>
</g>
</svg>

`});Vue.component('de-icon-customer-service',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M21.788,31.582C26.911,30.215,30.7,25.548,30.7,20c0-6.617-5.383-12-12-12s-12,5.383-12,12
		c0,5.556,3.801,10.229,8.935,11.588C6.898,33.119,0,41.009,0,50.2c0,0.276,0.224,0.5,0.5,0.5S1,50.477,1,50.2
		c0-8.791,6.659-16.323,15.044-17.666l-0.501,1.566l1.515,1.92l-2.813,11.953l4.451,3.994l4.56-3.989l-2.814-11.958l1.508-1.91
		l-0.437-1.56C29.882,33.927,36.3,41.306,36.3,50.2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		C37.3,40.85,30.576,33.084,21.788,31.582z M7.7,20c0-6.065,4.935-11,11-11s11,4.935,11,11s-4.935,11-11,11S7.7,26.065,7.7,20z
		 M20.85,33.89l-1.492,1.891l2.787,11.841l-3.44,3.011l-3.35-3.006l2.788-11.846l-1.485-1.881l0.485-1.517
		c0.515-0.049,1.033-0.083,1.558-0.083c0.584,0,1.16,0.032,1.729,0.089L20.85,33.89z"/>
	<path fill="#404040" d="M58.1,11H34.8c-1.172,0-1.899,0.728-1.899,1.9v13.3c0,1.172,0.728,1.9,1.899,1.9h2.3v3.8
		c0,0.255,0.051,0.455,0.156,0.611c0.135,0.201,0.355,0.316,0.604,0.316c0.33,0,0.653-0.193,1.017-0.412
		c0.57-0.38,3.981-3.46,4.815-4.216H58.1c1.172,0,1.9-0.728,1.9-1.9V12.9C60,11.728,59.271,11,58.1,11z M59,26.3
		c0,0.623-0.277,0.9-0.9,0.9H43.307l-0.143,0.129c-1.717,1.558-4.424,3.976-4.821,4.242c-0.068,0.041-0.157,0.095-0.243,0.142V27.1
		h-3.3c-0.622,0-0.899-0.277-0.899-0.9V12.9c0-0.623,0.277-0.9,0.899-0.9h23.3c0.623,0,0.9,0.277,0.9,0.9V26.3z"/>
	<circle fill="#404040" cx="46.4" cy="20" r="1.3"/>
	<circle fill="#404040" cx="39.9" cy="20" r="1.3"/>
	<circle fill="#404040" cx="53" cy="20" r="1.3"/>
</g>
</svg>

`});Vue.component('de-icon-fitness-health',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M58.5,28.4h-6.118C53.435,26.457,54,24.306,54,22.1c0-3.443-1.363-6.762-3.839-9.346
	C47.813,10.305,44.475,8.9,41,8.9c-3.525,0-6.779,1.369-9.146,3.838l-1.846,1.763l-1.647-1.647C26.014,10.405,22.675,9,19.2,9
	c-3.475,0-6.814,1.405-9.157,3.85c-4.973,5.077-4.974,13.418,0.001,18.601l2.027,2.049H1.5C1.224,33.5,1,33.724,1,34
	s0.224,0.5,0.5,0.5h11.562l15.985,16.153c0.304,0.305,0.639,0.446,1.054,0.446c0.496,0,0.898-0.183,1.099-0.492l18.962-19.162
	c0.613-0.64,1.157-1.325,1.63-2.045H58.5c0.276,0,0.5-0.224,0.5-0.5S58.776,28.4,58.5,28.4z M10.761,30.753
	c-4.601-4.792-4.602-12.509,0-17.207C12.92,11.292,15.997,10,19.2,10s6.28,1.292,8.446,3.554l2.345,2.346l2.57-2.453
	C34.753,11.159,37.75,9.9,41,9.9c3.203,0,6.279,1.292,8.438,3.546C51.735,15.842,53,18.916,53,22.1c0,2.221-0.628,4.381-1.776,6.3
	H35.297l-5.519,10.578l-4.098-17.392L19.398,33.5h-5.919L10.761,30.753z M49.444,30.748l-19,19.2l-0.066,0.093
	C30.355,50.06,30.253,50.1,30.1,50.1c-0.15,0-0.228-0.034-0.345-0.151L14.469,34.5h5.533l5.317-10.086l4.103,17.409l6.48-12.423
	H50.56C50.217,29.867,49.854,30.321,49.444,30.748z"/>
</svg>

`});Vue.component('de-icon-manager',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M33.177,31.778C38.645,30.351,42.7,25.351,42.7,19.4c0-7.058-5.697-12.8-12.7-12.8s-12.7,5.742-12.7,12.8
	c0,5.951,4.056,10.951,9.523,12.378C17.303,33.315,10,41.605,10,51.6c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
	c0-9.535,6.994-17.438,16.092-18.852l-0.554,1.539l1.621,2.127l-3.014,12.557L30,53.375l4.855-4.404l-3.014-12.557l1.621-2.127
	l-0.555-1.539C42.006,34.162,49,42.064,49,51.6c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5C50,41.605,42.697,33.315,33.177,31.778
	z M18.3,19.4c0-6.506,5.249-11.8,11.7-11.8c6.451,0,11.7,5.293,11.7,11.8c0,6.507-5.249,11.8-11.7,11.8
	C23.548,31.2,18.3,25.907,18.3,19.4z M32.338,34.113l-1.58,2.072l2.986,12.443L30,52.025l-3.745-3.396l2.986-12.443l-1.579-2.072
	l0.548-1.522C28.8,32.535,29.396,32.5,30,32.5c0.604,0,1.199,0.035,1.789,0.091L32.338,34.113z"/>
</svg>

`});Vue.component('de-icon-marketer-pr',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M23.1,38.9v-1.282l12.749,4.059C35.898,41.692,35.949,41.7,36,41.7c0.104,0,0.208-0.033,0.295-0.097
		C36.424,41.51,36.5,41.359,36.5,41.2V17c0-0.16-0.076-0.31-0.205-0.404c-0.13-0.094-0.295-0.121-0.446-0.073l-24.5,7.8
		c-0.039,0.013-0.062,0.048-0.095,0.069c-0.029-0.018-0.046-0.048-0.078-0.061l-6.7-2.5c-0.153-0.058-0.325-0.037-0.46,0.058
		C3.88,21.982,3.8,22.136,3.8,22.3V35.9c0,0.164,0.08,0.317,0.215,0.411C4.1,36.37,4.199,36.4,4.3,36.4
		c0.059,0,0.118-0.011,0.175-0.031l6.7-2.5c0.032-0.012,0.05-0.043,0.078-0.061c0.034,0.021,0.056,0.056,0.095,0.068l2.178,0.693
		c-0.012,0.042-0.026,0.084-0.026,0.13v4.2c0,1.178,0.922,2.1,2.1,2.1H21C22.178,41,23.1,40.078,23.1,38.9z M10.5,33.054L4.8,35.18
		V23.02l5.7,2.127V33.054z M12,25.166l23.5-7.481v22.833L12,33.035V25.166z M14.5,38.9v-4.02l7.619,2.425
		C22.113,37.338,22.1,37.367,22.1,37.4v1.5c0,0.627-0.473,1.1-1.1,1.1h-5.4C14.973,40,14.5,39.527,14.5,38.9z"/>
	<path fill="#404040" d="M41.8,18.8h13.8c0.006,0,0.014,0,0.02,0c0.276,0,0.5-0.224,0.5-0.5c0-0.07-0.014-0.137-0.04-0.198
		l-0.083-0.66c-0.364-3.103-2.729-5.544-5.752-6.176C51.57,10.671,52.5,9.345,52.5,7.8c0-2.095-1.704-3.8-3.8-3.8
		s-3.8,1.705-3.8,3.8c0,1.549,0.935,2.88,2.267,3.471c-2.944,0.64-5.308,3.072-5.763,6.167l-0.101,0.8
		c-0.018,0.143,0.026,0.286,0.121,0.393C41.52,18.738,41.656,18.8,41.8,18.8z M45.9,7.8c0-1.544,1.256-2.8,2.8-2.8
		s2.8,1.256,2.8,2.8s-1.256,2.8-2.8,2.8S45.9,9.344,45.9,7.8z M42.396,17.573c0.466-3.171,3.117-5.473,6.305-5.473
		c3.227,0,5.937,2.347,6.304,5.462l0.029,0.238H42.366L42.396,17.573z"/>
	<path fill="#404040" d="M55.996,36.041c-0.36-3.059-2.663-5.473-5.623-6.146c1.255-0.621,2.127-1.902,2.127-3.395
		c0-2.095-1.704-3.8-3.8-3.8s-3.8,1.705-3.8,3.8c0,1.497,0.878,2.782,2.139,3.401c-2.885,0.682-5.186,3.086-5.635,6.136
		l-0.101,0.801c-0.018,0.143,0.026,0.286,0.121,0.394S41.656,37.4,41.8,37.4h13.8c0.006,0,0.014,0,0.02,0c0.276,0,0.5-0.224,0.5-0.5
		c0-0.07-0.014-0.138-0.04-0.198L55.996,36.041z M45.9,26.5c0-1.544,1.256-2.8,2.8-2.8s2.8,1.256,2.8,2.8s-1.256,2.8-2.8,2.8
		S45.9,28.044,45.9,26.5z M42.366,36.4l0.029-0.228c0.458-3.12,3.169-5.473,6.305-5.473c3.227,0,5.937,2.347,6.304,5.461
		l0.029,0.239H42.366z"/>
	<path fill="#404040" d="M55.996,54.642c-0.359-3.058-2.661-5.473-5.622-6.147c1.254-0.621,2.126-1.902,2.126-3.395
		c0-2.096-1.704-3.8-3.8-3.8s-3.8,1.704-3.8,3.8c0,1.497,0.877,2.782,2.138,3.401c-2.884,0.683-5.186,3.088-5.634,6.137l-0.101,0.8
		c-0.018,0.143,0.026,0.286,0.121,0.394S41.656,56,41.8,56h13.8c0.006,0,0.014,0,0.02,0c0.276,0,0.5-0.224,0.5-0.5
		c0-0.07-0.014-0.138-0.04-0.198L55.996,54.642z M45.9,45.1c0-1.544,1.256-2.8,2.8-2.8s2.8,1.256,2.8,2.8S50.244,47.9,48.7,47.9
		S45.9,46.644,45.9,45.1z M42.366,55l0.029-0.228c0.466-3.171,3.117-5.473,6.305-5.473c3.227,0,5.937,2.347,6.304,5.462L55.033,55
		H42.366z"/>
	<path fill="#404040" d="M30,25.4h-6.2c-1.177,0-2.1,0.922-2.1,2.1v1.693l-3.154,3.154c-0.143,0.143-0.186,0.358-0.108,0.545
		c0.077,0.187,0.26,0.309,0.462,0.309h11c1.065,0,1.921-0.755,2.076-1.771c0.077-0.088,0.124-0.204,0.124-0.33v-3.6
		C32.1,26.322,31.178,25.4,30,25.4z M31.1,30.8c-0.063,0.084-0.1,0.188-0.1,0.3c0,0.627-0.473,1.101-1.1,1.101h-9.793l2.347-2.347
		c0.058-0.058,0.247-0.269,0.247-0.554v-1.8c0-0.627,0.473-1.1,1.1-1.1H30c0.627,0,1.1,0.473,1.1,1.1V30.8z"/>
	<path fill="#404040" d="M28.5,28.8h-3.4c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h3.4c0.276,0,0.5-0.224,0.5-0.5
		S28.776,28.8,28.5,28.8z"/>
	<path fill="#404040" d="M39.4,6.9H16.6c-0.276,0-0.5,0.224-0.5,0.5v9.3c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V7.9h22.3
		c0.276,0,0.5-0.224,0.5-0.5S39.677,6.9,39.4,6.9z"/>
	<path fill="#404040" d="M39.4,52.1H17.1v-8.8c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v9.3c0,0.276,0.224,0.5,0.5,0.5h22.8
		c0.276,0,0.5-0.224,0.5-0.5S39.677,52.1,39.4,52.1z"/>
</g>
</svg>

`});Vue.component('de-icon-operations-finance',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M51.594,32.522c-0.033-0.213-0.199-0.381-0.412-0.416C51.131,32.098,49.929,31.9,48.8,31.9
		c-2.714,0-5.185,0.98-7.146,2.838c-2.371,2.269-3.464,5.531-2.974,8.851l-7.98,6.972V28.774c6.936-0.263,12.5-5.929,12.5-12.875
		c0-7.113-5.832-12.9-13-12.9c-7.168,0-13,5.787-13,12.9c0,6.945,5.564,12.611,12.5,12.875v17.211l-8.57-7.334
		c0.019-0.043,0.046-0.084,0.056-0.128l0.105-0.334c0.614-3.378-0.487-6.799-2.948-9.153c-1.929-1.822-4.453-2.829-7.023-2.829
		c-0.01,0-0.021,0-0.031,0c-0.234-0.043-0.487-0.064-0.751-0.064c-0.941,0-1.762,0.27-1.796,0.282
		c-0.178,0.059-0.307,0.212-0.336,0.397c-0.038,0.247-0.897,6.093,2.741,9.73c1.83,1.83,4.386,2.838,7.198,2.838h0
		c0.664,0,1.326-0.063,1.912-0.171l9.418,8.06c0.008,0.007,0.018,0.009,0.025,0.015V56h-9.2c-0.276,0-0.5,0.224-0.5,0.5
		s0.224,0.5,0.5,0.5h19.4c0.276,0,0.5-0.224,0.5-0.5S40.177,56,39.9,56h-9.2v-4.146c0.045-0.02,0.09-0.042,0.129-0.076l8.207-7.17
		c0.133,0.144,0.302,0.256,0.474,0.285c0.732,0.159,1.484,0.239,2.234,0.239c2.689,0,5.28-1.049,7.109-2.878
		C52.491,38.616,51.632,32.77,51.594,32.522z M18.344,38.392c-2.544,0-4.85-0.903-6.491-2.545c-2.822-2.822-2.613-7.328-2.496-8.554
		c0.277-0.066,0.715-0.148,1.18-0.148c0.188,0,0.382,0.013,0.662,0.056c2.413,0,4.706,0.91,6.454,2.561
		c2.216,2.119,3.208,5.203,2.671,8.181l-0.053,0.16c-0.125,0.007-0.246,0.062-0.337,0.16C19.407,38.342,18.875,38.392,18.344,38.392
		L18.344,38.392z M18.2,15.9c0-6.562,5.383-11.9,12-11.9c6.617,0,12,5.338,12,11.9s-5.383,11.9-12,11.9
		C23.583,27.8,18.2,22.461,18.2,15.9z M48.146,41.547c-2.092,2.092-5.355,3.021-8.378,2.378l-0.076-0.215
		c-0.555-3.045,0.438-6.129,2.651-8.247c1.77-1.677,4.002-2.563,6.456-2.563c0.684,0,1.418,0.082,1.847,0.139
		C50.766,34.328,50.94,38.753,48.146,41.547z"/>
	<path fill="#404040" d="M30.7,24.4v-1.844c0.95-0.097,1.771-0.416,2.425-0.976C33.883,20.931,34.3,20.015,34.3,19
		c0-0.904-0.419-1.75-1.146-2.354c-0.475-0.476-1.317-0.797-2.695-1.221c-1.488-0.497-2.511-0.971-3.004-1.379
		C27.02,13.612,26.8,13.126,26.8,12.6c0-0.592,0.287-1.18,0.825-1.72c0.629-0.54,1.331-0.78,2.275-0.78
		c0.006,0,0.011,0.001,0.017,0.001c0.082,0.058,0.176,0.099,0.283,0.099c0.08,0,0.152-0.022,0.219-0.056
		c0.399,0.062,0.779,0.182,1.171,0.313c0.443,0.266,0.86,0.523,1.189,0.918c0.029,0.054,0.063,0.114,0.099,0.178
		c0.084,0.149,0.188,0.326,0.247,0.504c0.086,0.261,0.369,0.403,0.632,0.317c0.263-0.087,0.404-0.37,0.317-0.632
		c-0.085-0.255-0.219-0.491-0.326-0.681c-0.038-0.068-0.073-0.13-0.101-0.184c-0.016-0.032-0.035-0.062-0.057-0.089
		c-0.458-0.571-1.005-0.899-1.534-1.216c-0.031-0.019-0.064-0.034-0.099-0.045c-0.399-0.133-0.812-0.264-1.258-0.345V7.3
		c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v1.815c-1.086,0.037-1.963,0.353-2.754,1.032C26.186,10.908,25.8,11.733,25.8,12.6
		c0,0.801,0.318,1.525,0.98,2.184c0.632,0.527,1.731,1.047,3.373,1.594c1.175,0.361,1.969,0.651,2.327,1.006
		c0.529,0.44,0.82,1.014,0.82,1.616c0,0.508-0.144,1.236-0.825,1.82c-0.612,0.525-1.39,0.78-2.375,0.78
		c-0.651,0-1.283-0.15-1.876-0.447c-0.488-0.244-0.837-0.671-1.202-1.127c-0.029-0.054-0.063-0.114-0.098-0.177
		c-0.085-0.15-0.189-0.328-0.249-0.506c-0.087-0.262-0.37-0.402-0.632-0.317c-0.262,0.087-0.404,0.37-0.317,0.632
		c0.085,0.256,0.219,0.493,0.328,0.684c0.038,0.067,0.073,0.129,0.1,0.183c0.016,0.031,0.035,0.061,0.056,0.088
		c0.427,0.534,0.869,1.085,1.567,1.435c0.612,0.306,1.258,0.478,1.924,0.53V24.4c0,0.276,0.224,0.5,0.5,0.5S30.7,24.676,30.7,24.4z"
		/>
</g>
</svg>

`});Vue.component('de-icon-organizer',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M20.9,24.9c0.276,0,0.5-0.224,0.5-0.5c0-4.797,3.858-8.7,8.6-8.7s8.6,3.903,8.6,8.7
		c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-4.466-3.007-8.227-7.079-9.349c2.165-0.984,3.68-3.189,3.68-5.751
		C36.2,5.826,33.419,3,30,3s-6.2,2.826-6.2,6.3c0,2.562,1.515,4.767,3.68,5.751c-4.073,1.123-7.08,4.883-7.08,9.349
		C20.4,24.676,20.624,24.9,20.9,24.9z M24.8,9.3C24.8,6.377,27.133,4,30,4s5.2,2.377,5.2,5.3s-2.333,5.3-5.2,5.3
		S24.8,12.222,24.8,9.3z"/>
	<path fill="#404040" d="M32.259,48.737c1.676-0.853,2.841-2.602,2.841-4.638c0-2.867-2.288-5.199-5.1-5.199
		c-2.812,0-5.1,2.332-5.1,5.199c0,2.036,1.165,3.785,2.841,4.638C24.483,49.725,22.1,52.784,22.1,56.4c0,0.276,0.224,0.5,0.5,0.5
		s0.5-0.224,0.5-0.5c0-3.859,3.095-7,6.9-7s6.9,3.141,6.9,7c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		C37.9,52.784,35.518,49.725,32.259,48.737z M25.9,44.1c0-2.315,1.839-4.199,4.1-4.199s4.1,1.884,4.1,4.199
		c0,2.316-1.839,4.2-4.1,4.2S25.9,46.416,25.9,44.1z"/>
	<path fill="#404040" d="M53.327,48.756c1.693-0.847,2.873-2.606,2.873-4.656c0-2.867-2.288-5.199-5.101-5.199
		c-2.812,0-5.1,2.332-5.1,5.199c0,2.023,1.15,3.761,2.81,4.62c-3.293,0.965-5.71,4.04-5.71,7.681c0,0.276,0.224,0.5,0.5,0.5
		s0.5-0.224,0.5-0.5c0-3.859,3.096-7,6.9-7s6.9,3.141,6.9,7c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5
		C58.9,52.809,56.551,49.764,53.327,48.756z M47,44.1c0-2.315,1.839-4.199,4.1-4.199S55.2,41.784,55.2,44.1
		c0,2.316-1.84,4.2-4.101,4.2S47,46.416,47,44.1z"/>
	<path fill="#404040" d="M11.159,48.737C12.835,47.885,14,46.136,14,44.1c0-2.867-2.288-5.199-5.1-5.199S3.8,41.232,3.8,44.1
		c0,2.036,1.165,3.785,2.841,4.638C3.383,49.725,1,52.784,1,56.4c0,0.276,0.224,0.5,0.5,0.5S2,56.677,2,56.4c0-3.859,3.095-7,6.9-7
		s6.9,3.141,6.9,7c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5C16.8,52.784,14.417,49.725,11.159,48.737z M4.8,44.1
		c0-2.315,1.839-4.199,4.1-4.199S13,41.784,13,44.1c0,2.316-1.839,4.2-4.1,4.2S4.8,46.416,4.8,44.1z"/>
	<path fill="#404040" d="M8.9,36.3c0.276,0,0.5-0.224,0.5-0.5v-4.5c0-0.123,0.077-0.2,0.2-0.2h19.9v4.7c0,0.276,0.224,0.5,0.5,0.5
		s0.5-0.224,0.5-0.5v-4.7h19.8c0.123,0,0.2,0.077,0.2,0.2v4.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-4.5
		c0-0.673-0.527-1.2-1.2-1.2H30.5v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v4H9.6c-0.673,0-1.2,0.527-1.2,1.2v4.5
		C8.4,36.076,8.624,36.3,8.9,36.3z"/>
</g>
</svg>

`});Vue.component('de-icon-owner',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M42.1,53.2h6.7c0.373,0,0.7-0.327,0.7-0.7v-5.3c0-0.38-0.32-0.7-0.7-0.7h-6.7
		c-0.379,0-0.699,0.32-0.699,0.7v5.3C41.4,52.873,41.728,53.2,42.1,53.2z M42.4,47.5h6.1v4.7h-6.1V47.5z"/>
	<path fill="#404040" d="M56.6,57h-4H39.7v-9.8c0-0.373-0.327-0.7-0.7-0.7h-8.3c-0.379,0-0.7,0.32-0.7,0.7V57h-3h-4
		c-0.276,0-0.5,0.224-0.5,0.5S22.724,58,23,58h33.6c0.276,0,0.5-0.224,0.5-0.5S56.876,57,56.6,57z M31,47.5h7.7V57H31V47.5z"/>
	<path fill="#404040" d="M27.5,56.5V42.051c0.167,0.018,0.328,0.049,0.5,0.049c1.72,0,3.167-0.93,3.927-2.313
		C32.7,41.115,34.121,42,35.8,42c1.737,0,3.198-0.949,3.95-2.356C40.502,41.051,41.963,42,43.7,42c1.717,0,3.163-0.927,3.923-2.306
		c0.744,1.435,2.219,2.405,3.977,2.405c0.172,0,0.334-0.031,0.5-0.049V56.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V42
		c0-0.056-0.015-0.107-0.031-0.157c1.776-0.599,3.031-2.239,3.031-4.243v-2.901l0.728-0.002l-5.678-6.246
		c-0.1-0.223-0.327-0.351-0.55-0.351H28.9c-0.266,0-0.457,0.153-0.545,0.348L23.4,34.01v0.19c0,0.126,0.043,0.229,0.1,0.317V37.6
		c0,2.004,1.255,3.645,3.032,4.243C26.515,41.893,26.5,41.944,26.5,42v14.5c0,0.276,0.224,0.5,0.5,0.5S27.5,56.776,27.5,56.5z
		 M29.113,29.1h21.274l4.186,4.604l-29.645,0.093L29.113,29.1z M24.5,37.6v-2.802l30.6-0.096V37.6c0,1.963-1.537,3.5-3.5,3.5
		c-1.804,0-3.231-1.303-3.455-3.036c0.023-0.187,0.056-0.37,0.056-0.563v-2c0-0.276-0.224-0.5-0.5-0.5
		c-0.163,0-0.302,0.084-0.393,0.205C47.185,35.296,47.1,35.435,47.1,35.6v2c0,0.159,0.03,0.31,0.045,0.464
		C46.881,39.747,45.47,41,43.7,41c-1.788,0-3.209-1.28-3.45-2.991c0.019-0.169,0.05-0.334,0.05-0.509v-2c0-0.276-0.224-0.5-0.5-0.5
		c-0.018,0-0.032,0.008-0.05,0.01C39.732,35.008,39.718,35,39.7,35c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.175,0.031,0.34,0.05,0.509
		C39.009,39.72,37.588,41,35.8,41c-1.652,0-2.991-1.096-3.377-2.611c0.044-0.257,0.077-0.518,0.077-0.789v-2
		c0-0.233-0.163-0.421-0.38-0.476C32.033,35.05,31.924,35,31.8,35c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.32,0.033,0.632,0.095,0.933
		C31.028,39.979,29.673,41.1,28,41.1C26.038,41.1,24.5,39.563,24.5,37.6z"/>
	<path fill="#404040" d="M14.6,14.6c3.757,0,6.7-2.987,6.7-6.8c0-3.75-3.005-6.8-6.7-6.8c-3.757,0-6.7,2.987-6.7,6.8
		C7.9,11.549,10.906,14.6,14.6,14.6z M14.6,2c3.143,0,5.7,2.602,5.7,5.8c0,3.252-2.503,5.8-5.7,5.8c-3.143,0-5.7-2.602-5.7-5.8
		C8.9,4.547,11.404,2,14.6,2z"/>
	<path fill="#404040" d="M37.5,25.3c2.188,0,3.9-1.713,3.897-3.952c-0.241-2.287-1.963-3.947-4.065-3.947c-0.001,0-0.002,0-0.002,0
		L20.7,16.4h-2.5c-0.414,0-0.749,0.142-1.092,0.489l-2.71,3.409l-2.845-3.552C11.257,16.45,10.937,16.3,10.6,16.3H8.9
		c-1.748,0-3.383,0.758-4.482,2.078c-1.164,1.375-1.639,2.985-1.414,4.785l1.4,11.104c0.228,1.706,1.237,3.3,2.672,4.181
		l0.164,0.082L9.605,56.17c0.226,1.582,1.485,2.73,2.995,2.73h3.9c1.481,0,2.74-1.101,2.997-2.645l1.199-10.688L23.437,25.3H37.5z
		 M22.504,24.733l-2.801,20.711l-1.196,10.674C18.359,57.004,17.622,57.9,16.5,57.9h-3.9c-1.007,0-1.851-0.787-2.004-1.867
		l-2.4-17.899c-0.022-0.164-0.124-0.307-0.272-0.381l-0.362-0.179c-1.13-0.695-1.98-2.046-2.166-3.437l-1.4-11.1
		c-0.189-1.511,0.21-2.862,1.188-4.018C6.095,17.927,7.449,17.3,8.9,17.3h1.7c0.058,0,0.15,0.058,0.209,0.113l3.2,4
		c0.095,0.119,0.239,0.188,0.391,0.188c0,0,0,0,0.001,0c0.152,0,0.296-0.07,0.391-0.189l3.062-3.857
		c0.119-0.119,0.197-0.154,0.347-0.154l2.47-0.001L37.3,18.4c1.826,0,2.943,1.536,3.101,3c0,1.815-1.475,2.9-2.9,2.9H23
		C22.75,24.3,22.538,24.485,22.504,24.733z"/>
</g>
</svg>

`});Vue.component('de-icon-sales',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M38.4,36.6c7.829,0,14.199-6.415,14.199-14.3S46.229,8,38.4,8c-7.83,0-14.2,6.415-14.2,14.3
		S30.57,36.6,38.4,36.6z M38.4,9C45.679,9,51.6,14.966,51.6,22.3S45.679,35.6,38.4,35.6s-13.2-5.966-13.2-13.3S31.122,9,38.4,9z"/>
	<path fill="#404040" d="M38.263,22.781c1.278,0.365,2.161,0.739,2.612,1.099c0.682,0.584,0.825,1.313,0.825,1.82
		c0,0.768-0.346,1.523-0.954,2.046C40.18,28.313,39.323,28.6,38.2,28.6c-0.723,0-1.352-0.137-2.022-0.416
		c-0.563-0.375-1.009-0.732-1.361-1.261c-0.165-0.248-0.251-0.506-0.342-0.78c-0.087-0.262-0.37-0.403-0.632-0.317
		c-0.263,0.087-0.404,0.37-0.317,0.632c0.103,0.31,0.219,0.661,0.459,1.021c0.471,0.707,1.065,1.157,1.719,1.582
		c0.779,0.334,1.456,0.491,2.197,0.526V31.8c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2.25
		c1.062-0.111,1.922-0.465,2.524-1.069c0.799-0.685,1.275-1.724,1.275-2.78c0-1.015-0.417-1.931-1.188-2.591
		c-0.576-0.46-1.549-0.882-2.972-1.289c-1.627-0.479-2.681-0.955-3.287-1.474C34.719,19.812,34.5,19.334,34.5,18.7
		c0-0.776,0.247-1.34,0.829-1.924C36.031,16.162,36.8,15.9,37.9,15.9c0.807,0,1.402,0.11,1.876,0.347
		c0.635,0.317,1.13,0.686,1.407,1.031c0.179,0.267,0.363,0.543,0.441,0.78c0.086,0.261,0.37,0.403,0.632,0.317
		c0.263-0.087,0.404-0.37,0.317-0.632c-0.121-0.365-0.344-0.698-0.584-1.054c-0.398-0.499-0.992-0.948-1.767-1.335
		c-0.384-0.191-0.821-0.313-1.323-0.382V12.7c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v2.2c-1.327,0-2.354,0.357-3.254,1.146
		C33.854,16.839,33.5,17.658,33.5,18.7c0,0.904,0.323,1.63,1.075,2.379C35.331,21.729,36.468,22.252,38.263,22.781z"/>
	<path fill="#404040" d="M56.742,39.401c-0.385-0.834-1.234-1.314-2.108-1.196c-1.499,0.199-15.344,2.986-15.933,3.104
		c-0.271,0.055-0.446,0.318-0.392,0.589c0.055,0.271,0.323,0.445,0.589,0.392c0.144-0.029,14.401-2.898,15.868-3.095
		c0.442-0.056,0.866,0.187,1.068,0.626c0.31,0.67,0.022,1.495-0.771,2.211c-1.021,0.807-18.636,8.071-23.171,8.071
		c-0.059,0-0.116-0.001-0.17-0.003c-2.721-0.121-7.517-2.616-11.02-4.438c-2.248-1.17-4.023-2.093-4.913-2.255
		c-1.79-0.323-3.128,1.076-3.784,1.968l0.75-10.687c0.091,0.008,0.184,0.001,0.271-0.044c0.056-0.027,5.562-2.802,9.028-1.767
		c3.765,1.149,12.317,5.689,12.655,7.712c0.183,0.99-0.191,1.278-0.314,1.372c-1.479,1.136-7.029-0.818-10.18-2.314
		c-0.25-0.12-0.548-0.013-0.667,0.236c-0.119,0.25-0.012,0.548,0.237,0.666c0.711,0.339,5.876,2.738,9.176,2.738
		c0.834,0,1.55-0.153,2.043-0.532c0.448-0.345,0.932-1.031,0.689-2.339c-0.472-2.827-10.115-7.509-13.351-8.497
		c-3.446-1.024-8.353,1.154-9.513,1.709L13,31.2c0-0.576-0.524-1.101-1.1-1.101H4.1C3.524,30.1,3,30.624,3,31.2v17.1
		C3,48.876,3.524,49.4,4.1,49.4h6.6c0.576,0,1.1-0.524,1.098-1.065l0.109-1.551c0.209,0.041,0.428-0.051,0.534-0.248
		c0.013-0.025,1.349-2.488,3.17-2.144c0.742,0.135,2.631,1.117,4.63,2.157c3.785,1.969,8.496,4.419,11.437,4.549
		c0.055,0.003,0.11,0.004,0.17,0.004c4.581-0.001,22.933-7.377,23.888-8.331C57.07,41.569,57.131,40.242,56.742,39.401z
		 M10.8,48.295c-0.006,0.036-0.067,0.098-0.104,0.105H4.105C4.069,48.395,4.006,48.331,4,48.3l0-17.095
		c0.006-0.036,0.069-0.1,0.101-0.105h7.795c0.037,0.006,0.096,0.066,0.106,0.065L10.8,48.295z"/>
</g>
</svg>

`});Vue.component('de-icon-student',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<path fill="#404040" d="M54.1,6H41.8H18.2H5.9C5.624,6,5.4,6.224,5.4,6.5S5.624,7,5.9,7h10.819C16.644,7.186,16.6,7.388,16.6,7.6
	v10.5c0,0.882,0.718,1.6,1.6,1.6h0.271c-0.181,0.868-0.271,1.804-0.271,2.9c0,6.126,3.756,11.277,8.824,12.757
	c-8.843,1.417-15.624,9-15.624,18.143c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-9.595,7.896-17.4,17.6-17.4
	c9.704,0,17.6,7.806,17.6,17.4c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-9.142-6.78-16.726-15.623-18.143
	c5.067-1.48,8.823-6.631,8.823-12.757c0-1.023-0.142-1.974-0.303-2.9H41.8c0.883,0,1.601-0.718,1.601-1.6V7.6
	c0-0.212-0.044-0.415-0.119-0.6H48.3v13.8c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V7h4.8c0.276,0,0.5-0.224,0.5-0.5
	S54.376,6,54.1,6z M40.8,22.6c0,6.727-4.845,12.2-10.8,12.2s-10.8-5.473-10.8-12.2c0-1.129,0.09-2.042,0.289-2.9h20.993
	C40.653,20.66,40.8,21.588,40.8,22.6z M42.4,7.6v10.5c0,0.325-0.275,0.6-0.601,0.6h-0.481h-22.6H18.2c-0.325,0-0.6-0.275-0.6-0.6
	V7.6c0-0.325,0.275-0.6,0.6-0.6h23.6C42.125,7,42.4,7.275,42.4,7.6z"/>
</svg>

`});Vue.component('de-icon-teacher-professor',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M59.5,8.7H2.7c-0.276,0-0.5,0.224-0.5,0.5v3.2c0,0.276,0.224,0.5,0.5,0.5H5v21.4
		c0,0.091,0.031,0.171,0.073,0.245l-3.668,4.849l-0.659,0.853c-0.619,0.619-0.936,1.463-0.87,2.313
		c0.065,0.825,0.477,1.57,1.105,2.026l5.7,4.7c0.042,0.035,0.104,0.067,0.156,0.087c0.031,0.012,0.077,0.035,0.135,0.063
		c0.087,0.042,0.203,0.098,0.339,0.155c-0.185,0.131-0.264,0.375-0.176,0.595C7.435,50.935,8.035,51.4,8.7,51.4h12.4
		c0.927,0,1.6-0.673,1.6-1.601V48.4h34c0.276,0,0.5-0.224,0.5-0.5v-35h2.3c0.276,0,0.5-0.224,0.5-0.5V9.2
		C60,8.924,59.776,8.7,59.5,8.7z M21.7,49.8c0,0.141-0.043,0.601-0.6,0.601H8.7c-0.284,0-0.508-0.29-0.622-0.552
		c0.745,0.176,1.678,0.164,2.421-0.648c0.522-0.392,0.738-1.114,0.593-1.982c-0.125-0.749-0.4-1.248-0.86-1.591l-2.146-1.916
		C8.096,43.676,8.1,43.638,8.1,43.6v-3.393l1.456-1.455c0.292-0.295,0.292-0.812-0.003-1.106c-0.294-0.293-0.811-0.293-1.096-0.01
		l-1.746,1.649l-1.664,2.061c-0.165,0.164-0.241,0.401-0.204,0.633c0.036,0.22,0.167,0.41,0.366,0.531L9.6,46.4
		c0.282,0.211,0.424,0.486,0.507,0.981c0.078,0.466-0.003,0.865-0.274,1.079c-0.696,0.755-1.619,0.459-2.429,0.073
		c-0.054-0.026-0.103-0.049-0.144-0.067l-5.667-4.671c-0.416-0.303-0.678-0.781-0.72-1.315c-0.044-0.566,0.162-1.109,0.621-1.574
		l6.56-8.653c0.276-0.276,0.515-0.516,1.004-0.679c0.073-0.024,0.14-0.065,0.194-0.12l0.06-0.063
		c0.378-0.303,0.948-0.491,1.487-0.491h8.3c0.516,0,1.147,0.208,1.584,0.514c0.073,0.121,0.188,0.208,0.315,0.253
		c0.055,0.034,0.109,0.065,0.162,0.097c0.128,0.075,0.249,0.146,0.265,0.195c0.017,0.051,0.042,0.099,0.074,0.142l5.748,7.655
		c0.131,0.13,0.232,0.205,0.391,0.232c0.149,0.068,0.318,0.073,0.474,0.009c0.146-0.061,0.261-0.177,0.327-0.319L35.3,33.4
		c0.24-0.18,0.738-0.271,1.116-0.225c0.1,0.063,0.218,0.131,0.339,0.201c0.145,0.084,0.339,0.196,0.453,0.265
		c0.01,0.114,0.053,0.227,0.141,0.313c0.031,0.031,0.068,0.048,0.104,0.069c0.089,0.225,0.149,0.475,0.156,0.778
		c-0.083,0.417-0.251,0.749-0.563,1.144l-6.4,7.5c-0.296,0.296-0.675,0.469-1.304,0.579C29.119,44.1,28.879,44.1,28.6,44.1
		c-1.265,0-2.296-0.545-2.984-1.577c-0.048-0.072-0.115-0.132-0.193-0.17l-2.27-2.906C22.907,39.2,22.632,39.2,22.5,39.2h-0.1
		c-0.132,0-0.259,0.053-0.353,0.146C21.909,39.483,21.7,39.691,21.7,40v7.4h-0.2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h0.2
		V49.8z M7.1,40.389v2.447l-1.157-1.013L7.1,40.389z M43.3,47.1v-2.6c0-0.123,0.077-0.2,0.2-0.2h7.3c0.123,0,0.2,0.077,0.2,0.2v2.6
		c0,0.123-0.077,0.2-0.2,0.2h-7.3C43.377,47.3,43.3,47.223,43.3,47.1z M56.2,47.4h-4.26C51.966,47.302,52,47.207,52,47.1v-2.6
		c0-0.673-0.527-1.2-1.2-1.2h-7.3c-0.673,0-1.2,0.527-1.2,1.2v2.6c0,0.107,0.034,0.202,0.06,0.301H22.7v-6.904l1.901,2.506
		c0.047,0.062,0.107,0.111,0.176,0.146l0.084,0.042c0.871,1.233,2.193,1.91,3.739,1.91c0.319,0,0.681,0,0.982-0.106
		c0.762-0.126,1.325-0.394,1.799-0.869l6.272-7.37l0.138-0.142c0.452-0.566,0.684-1.033,0.809-1.712
		c0-0.497-0.075-0.905-0.225-1.271l11.181-11.277c0.194-0.196,0.192-0.513-0.004-0.707c-0.195-0.194-0.511-0.192-0.707,0.003
		L37.766,32.823c-0.14-0.093-0.304-0.192-0.51-0.312c-0.143-0.082-0.278-0.161-0.379-0.228c-0.055-0.036-0.115-0.062-0.179-0.074
		c-0.561-0.114-1.425-0.039-2.035,0.421l-6.831,6.245l-5.491-7.321c-0.149-0.347-0.438-0.516-0.674-0.654
		c-0.055-0.032-0.111-0.065-0.168-0.102c-0.025-0.033-0.054-0.063-0.087-0.09C20.797,30.217,19.889,29.9,19.1,29.9h-8.3
		c-0.768,0-1.557,0.265-2.152,0.746l-0.021,0.021c-0.639,0.237-0.981,0.581-1.326,0.933L6,33.319V12.9h50.2V47.4z M59,11.9H3.2V9.7
		H59V11.9z"/>
	<path fill="#404040" d="M14.9,29.1c3.75,0,6.8-3.051,6.8-6.8c0-3.763-2.833-6.71-6.448-6.71c-0.126,0-0.253,0.004-0.352,0.01
		c-3.75,0-6.8,3.05-6.8,6.8C8.1,26.157,11.087,29.1,14.9,29.1z M14.928,16.599c0.109-0.006,0.217-0.009,0.324-0.009
		c3.055,0,5.448,2.508,5.448,5.71c0,3.198-2.602,5.8-5.8,5.8c-3.252,0-5.8-2.504-5.8-5.7C9.1,19.202,11.702,16.6,14.928,16.599z"/>
</g>
</svg>

`});Vue.component('de-icon-trainer',{template:`
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">
<g>
	<path fill="#404040" d="M53.939,46.771c0.243-0.188,0.386-0.472,0.386-0.771c0-0.324-0.168-0.63-0.391-0.771l-8.3-7.5
		c-0.008-0.007-0.018-0.009-0.025-0.015c-0.022-0.519-0.052-0.876-0.092-1.114H45.6c0-4.301-3.454-7.8-7.699-7.8h-5.462
		c0.711-0.695,1.161-1.655,1.161-2.7V11.786c0.059-0.082,0.101-0.177,0.101-0.286V6.8c0-2.06-1.74-3.8-3.8-3.8h-9.2
		c-2.06,0-3.8,1.74-3.8,3.8v2.8c0,0.031,0.012,0.057,0.018,0.086c-0.495,0.234-0.991,0.495-1.489,0.793l-1.7,1.1
		c-0.186,0.121-0.271,0.349-0.208,0.562C13.583,12.354,13.778,12.5,14,12.5h2.8v13.6c0,1.045,0.45,2.005,1.161,2.7H13.3
		c-4.174,0-7.7,3.572-7.7,7.8v19.9c0,0.276,0.224,0.5,0.5,0.5h39.1c0.007-0.001,0.014-0.001,0.02,0c0.276,0,0.5-0.224,0.5-0.5
		c0-0.049-0.007-0.096-0.02-0.141c0-0.041,0-0.099,0-0.156L53.939,46.771z M53.322,45.984c-0.036,0.024-0.07,0.054-0.1,0.087
		l-7.523,8.611c-0.001-1.894-0.004-5.012-0.012-8.134c-0.009-3.574-0.015-5.918-0.041-7.466L53.322,45.984z M38.5,49.965
		l-5.923-5.349c0.036-0.023,0.067-0.052,0.096-0.084l5.827-6.544V49.965z M38.514,29.832C38.511,29.854,38.5,29.875,38.5,29.9v6.613
		c-0.024,0.02-0.052,0.032-0.073,0.056l-6.465,7.259c-0.243,0.189-0.387,0.473-0.387,0.772c0,0.324,0.167,0.629,0.389,0.771
		l6.536,5.941V56H26.2V41.274c4.729-0.265,8.5-4.228,8.5-9.074v-2.4h3.2C38.107,29.8,38.312,29.813,38.514,29.832z M17.7,29.8h1.843
		C19.516,29.861,19.5,29.929,19.5,30v1.5c0,3.229,2.523,5.872,5.7,6.079v2.695c-4.178-0.264-7.5-3.779-7.5-8.074V29.8z M30.7,29.8
		v1.7c0,2.812-2.288,5.1-5.1,5.1s-5.1-2.288-5.1-5.1V30c0-0.04-0.014-0.076-0.023-0.113c0.042,0.001,0.081,0.013,0.123,0.013h9.2
		c0.282,0,0.555-0.039,0.821-0.1H30.7z M31.7,31.5v-1.7h2v2.4c0,4.295-3.322,7.811-7.5,8.074v-2.705
		C29.283,37.267,31.7,34.661,31.7,31.5z M25.781,12.5H32.6v2.318l-1.983,2.362c-0.415,0.498-0.883,0.72-1.516,0.72
		c-0.382,0-0.704-0.161-1.043-0.329C27.586,17.289,26.985,17,26.1,17h-1.711l1.386-4.245C25.803,12.669,25.799,12.583,25.781,12.5z
		 M17.9,6.8c0-1.518,1.282-2.8,2.8-2.8h9.2c1.518,0,2.8,1.282,2.8,2.8v4.015C32.642,10.896,32.6,10.991,32.6,11.1v0.018
		l-0.906-0.624C29.795,9.124,27.584,8.4,25.3,8.4h-3.1c-1.404,0-2.842,0.29-4.3,0.858V6.8z M15.958,11.329
		C18.091,10.049,20.191,9.4,22.2,9.4h3.1c2.073,0,4.082,0.659,5.817,1.912l0.273,0.188H15.693L15.958,11.329z M24.807,12.5
		l-1.529,4.685l-0.581,0.258c-0.056,0.025-0.141,0.065-0.185,0.108c-0.065,0.025-0.142,0.054-0.312,0.149
		c-0.288,0.216-0.568,0.3-1,0.3c-0.497,0-1.075-0.282-1.516-0.72L17.8,15.019V12.5H24.807z M17.8,26.1v-9.52l1.146,1.374
		C19.611,18.619,20.433,19,21.2,19c0.645,0,1.139-0.154,1.523-0.453c0.058-0.029,0.105-0.047,0.146-0.062
		c0.087-0.034,0.192-0.074,0.301-0.159L23.906,18H26.1c0.604,0,1.013,0.171,1.476,0.447C28,18.659,28.481,18.9,29.1,18.9
		c0.932,0,1.678-0.353,2.283-1.078l1.217-1.449V26.1c0,1.28-0.916,2.382-2.112,2.7H19.912C18.715,28.482,17.8,27.38,17.8,26.1z
		 M16.7,29.8v2.4c0,4.847,3.771,8.81,8.5,9.074V56H12.9V29.9c0-0.028-0.011-0.051-0.016-0.078C13.022,29.813,13.16,29.8,13.3,29.8
		H16.7z M6.6,36.6c0-3.2,2.313-5.966,5.3-6.64V56H6.6V36.6z M39.5,56V30.004c2.923,0.73,5.1,3.407,5.1,6.596
		c0,0.037,0.004,0.074,0.012,0.108C44.675,37.523,44.699,48.454,44.7,56H39.5z"/>
	<path fill="#404040" d="M26.1,24.2h-4.2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h4.2c0.276,0,0.5-0.224,0.5-0.5
		S26.376,24.2,26.1,24.2z"/>
</g>
</svg>

`});window.app_survey=new Vue({el:'.app_survey',data:{local:{answerType:'organization',step:1,animateStepClass:"step0-step1-next",isOtherOrganization:false,isShowOtherDelBtn:false,otherOrganization:null,doSurvey:false,}},methods:{askRole:function(organization){this.local.answerType=organization;this.local.animateStepClass="step1-step2-next",this.local.step=2;},submitSurvey:function(role){console.log(role);if(document.domain!="localhost"){gaEvent("userSurvey","userSurvey_"+this.local.answerType,"userSurvey_"+this.local.answerType+"_"+role);};this.local.animateStepClass="step2-step3-next",this.local.step=3;},goBack(){if(this.local.step===2){if(this.local.isOtherOrganization){this.local.isOtherOrganization=false;}else{this.local.answerType='organization';}
this.local.animateStepClass="step2-step1-prev";this.local.step=1;}},closeBox(){this.local.doSurvey=false;if(document.domain!="localhost"){if(this.local.step===1){gaEvent("userSurvey","userSurvey_clickCancel","userSurvey_clickCancel_organization");}
if(this.local.step===2&&this.local.isOtherOrganization&&this.local.answerType==="organization"){gaEvent("userSurvey","userSurvey_clickCancel","userSurvey_clickCancel_organizationOther");}
if(this.local.step===2&&this.local.isOtherOrganization&&this.local.answerType!="organization"){gaEvent("userSurvey","userSurvey_clickCancel","userSurvey_clickCancel_role");}}},openBox(){this.local.step=1;this.local.answerType='organization';this.local.animateStepClass="step0-step1-next";this.local.isOtherOrganization=false;this.local.isShowOtherDelBtn=false;this.local.otherOrganization=null;this.local.doSurvey=true;},goOtherPage(){if(this.local.step===1){this.local.animateStepClass="step1-step2-next";this.local.isOtherOrganization=true;this.local.step=2;}else if(this.local.step===2&&this.local.answerType!='organization'){this.local.step=3;if(document.domain!="localhost"){gaEvent("userSurvey","userSurvey_"+this.local.answerType,"userSurvey_"+this.local.answerType+"_roleOther");}}},inputChange(){if(this.local.otherOrganization.length>0){this.local.isShowOtherDelBtn=true;}else{this.local.isShowOtherDelBtn=false;}},clearOtherInput(){this.local.otherOrganization=null;this.local.isShowOtherDelBtn=false;},completeOther(){if(this.local.answerType==="organization"){if(document.domain!="localhost")gaEvent("userSurvey","userSurvey_organizationOther",this.local.otherOrganization);}
this.local.step=3;this.local.isOtherOrganization=false;},goConfirmEmail:function(){jQuery("#emailService")[0].click();this.local.doSurvey=false;}},create:function(){},mounted:function(){},});function isContain(str,sub_str){return str.indexOf(sub_str)!=-1?true:false;}
$(function(){var url=location.href;if(isContain(url,"/blog/")&&isContain(url,".html")){var flexbox=`
            <div class="blog-box-wrapper">
                <div class="blog-close" onclick="closeBlogFlexbox()">
                    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>Created with sketchtool.</desc> 
                        <defs></defs> 
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="2.9.3-调查窗口3-copy" transform="translate(-284.000000, -173.000000)" fill="#404040">
                                <path d="M291.364803,178.95059 L295.606827,174.708565 C296.000149,174.315244 295.997968,173.68426 295.607444,173.293735 C295.214197,172.900488 294.583479,172.903487 294.192614,173.294352 L289.95059,177.536376 L285.708565,173.294352 C285.315244,172.90103 284.68426,172.903211 284.293735,173.293735 C283.900488,173.686982 283.903487,174.3177 284.294352,174.708565 L288.536376,178.95059 L284.294352,183.192614 C283.90103,183.585935 283.903211,184.216919 284.293735,184.607444 C284.686982,185.000691 285.3177,184.997692 285.708565,184.606827 L289.95059,180.364803 L294.192614,184.606827 C294.585935,185.000149 295.216919,184.997968 295.607444,184.607444 C296.000691,184.214197 295.997692,183.583479 295.606827,183.192614 L291.364803,178.95059 Z" id="delete">
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="blog-gift-img">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="66px" height="66px" viewBox="0 0 66 66" enable-background="new 0 0 66 66" xml:space="preserve">
                    <title>编组</title>
                    <desc>Created with Sketch.</desc>
                    <path fill="#F67E1D" d="M33,66C14.775,66,0,51.226,0,33S14.775,0,33,0c18.226,0,33,14.774,33,33S51.227,66,33,66z"/>
                    <path id="形状结合" fill="#FFFFFF" d="M21.584,25.457c-3.866-1.238-5.556-3.262-5.556-3.262l3.452-3.463
                        c1.206,4.579,5.644,5.871,5.644,5.871c-0.274-0.353-6.138-4.344-1.151-7.867c4.987-3.522,7.009,2.681,7.009,2.681
                        c1.199-9.158,9.821-8.332,10.15-4.166c0.412,5.206-3.186,9.645-3.186,9.645c4.494-1.703,7.082-7.693,7.082-7.693l3.057,4.171
                        c-1.82,2.378-5.174,3.559-7.219,4.083h7.947c0.639,0,1.156,0.501,1.156,1.119v5.305c0,0.618-0.518,1.119-1.156,1.119H35.828v-7.18
                        h-0.171c0.055-0.071,0.112-0.151,0.171-0.24v-0.123h0.08c1.45-2.274,4.076-9.185-0.251-8.134c-4.592,1.115-3.244,8.497-3.244,8.497
                        h-1.096c-0.274-1.717-4.274-10.141-5.63-6.148c-0.903,2.661,1.275,4.713,2.828,5.786h1.656V33H17.186
                        c-0.639,0-1.157-0.501-1.157-1.119v-5.305c0-0.618,0.518-1.119,1.157-1.119H21.584z M30.171,33.943v19.799h-9.204
                        c-0.645,0-1.167-0.512-1.167-1.146V33.943H30.171z M35.828,33.943H46.2v18.653c0,0.634-0.522,1.146-1.167,1.146h-9.205V33.943z"/>
                    </svg>
                </div>
                <div class="blog-title">[Lucky You!] The $5 off coupon hits you! Take it now or never!</div>
                <div class="blog-coupon">Coupon Code: BLGCP5DF</div>
                <div class="blog-btn" onclick="goLogoMaker()">Make Your Logo Now</div>
            </div>
        `;window.closeBlogFlexbox=function(){$(".blog-box-wrapper").remove();};window.openBlogFlexbox=function(){$("body").append(flexbox);};window.goLogoMaker=function(){location.href="/logo-maker/";};setTimeout(openBlogFlexbox,20000);}});$(document).on("click",".ga_ab_button",function(){var parameter01=$(this).attr("ga-parameter01");var parameter02=$(this).attr("ga-parameter02");var parameter03=$(this).attr("ga-parameter03");if(window.gaEvent){gaEvent(parameter01,parameter02,parameter03);}});function stopDefault(e){if(e&&e.preventDefault){e.preventDefault();}else{window.event.returnValue=false;}
return false;}
function commonCurrentLanguageHref(){var url=document.location.href;var tag='/';if(url.indexOf('/cn/')!=-1)
tag='cn/';else if(url.indexOf('/tw/')!=-1)
tag='tw/';else if(url.indexOf('/de/')!=-1)
tag='de/';else if(url.indexOf('/es/')!=-1)
tag='es/';else if(url.indexOf('/pt/')!=-1)
tag='pt/';else if(url.indexOf('/jp/')!=-1)
tag='jp/';else if(url.indexOf('/fr/')!=-1)
tag='fr/';return tag;}
var LocalFunc={_:function(val){return localTipTitle[val];}};var modalName=null;jQuery(window).resize(function(){var w=document.documentElement.clientWidth;var h=document.documentElement.clientHeight;var overlay=document.getElementById("sbox-overlay");if(overlay){overlay.style.width=w+"px";overlay.style.height=h+"px";}
if(jQuery("#modal_mask").is(':visible')){jQuery("#modal_mask").css({"height":jQuery(document).height(),"width":jQuery(document).width()});}})
jQuery("#myLogos").click(function(){localStorage.setItem('mylogo',true);var hasLangTag=window.language_tag?true:false;if(hasLangTag&&"en"!=window.language_tag){window.open("/"+window.language_tag+"/logo-maker/","_blank");}else{window.open("/logo-maker/","_blank");}});jQuery("#myProfile").click(function(){localStorage.setItem("profile","profile");var hasLangTag=window.language_tag?true:false;if(hasLangTag&&"en"!=window.language_tag){window.open("/"+window.language_tag+"/profile.html","_blank");}else{window.open("/profile.html","_blank");}});var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}
t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}
return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}
if(a!=64){t=t+String.fromCharCode(i)}}
t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}
return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}
return t}};jQuery("document").ready(function(){jQuery(".designevo-checkbox-btn").click(function(event){var target=event.currentTarget;jQuery(target).toggleClass('designevo-checkbox-btn-checked');});});