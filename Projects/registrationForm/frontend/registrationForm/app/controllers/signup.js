import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SignupController extends Controller {
    @action
    add(){
        let data = {name: this.get('name'), email: this.get('email'), password: this.get('password_1')};
        let newuser = this.store.createRecord('user',data);
        newuser.save();
        this.set('name','');
        this.set('email','');
        this.set('password_1','');
        this.set('password_2','');
    }
}
