import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LoginController extends Controller {
    @action
    login(){
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
                this.transitionToRoute('user',response);
            }
        },document.getElementById('error').innerHTML = "User doesn't found.");
        }
}
