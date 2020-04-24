import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UserController extends Controller {
    @action
    get(obj){
        return document.getElementById(obj);
    }
    @action
    switOne(){
        this.get("tab-1").style.background = "#fff";
        this.get("tab-2").style.background = "#e55";
        this.get("panel-1").style.display = "block";
        this.get("panel-2").style.display = "none";
    }
    @action
    switTwo(){
        this.get("tab-1").style.background = "#e55";
        this.get("tab-2").style.background = "#fff";
        this.get("panel-1").style.display = "none";
        this.get("panel-2").style.display = "block";
    }
}
