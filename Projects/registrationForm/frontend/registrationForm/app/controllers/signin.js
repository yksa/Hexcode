import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SigninController extends Controller {

    @action
    signin(){
        console.log("hello");
        let email = this.get('email');
        let password = this.get('password');
        let data = {
            "email": email,
            "password": password
        };
        this.store.queryRecord("user",data).then((response)=> {
            console.log(response);
            if(response.isEmpty===false){
                this.transitionToRoute('index',response);
            }
        },document.getElementById('error').innerHTML = "User doesn't found.");
        }
}

