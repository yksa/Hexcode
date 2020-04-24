import Route from '@ember/routing/route';

export default class UserRoute extends Route {
    model(params){
        console.log("routeHello");
        return this.store.peekRecord('user', params.user_id);
    }
}
