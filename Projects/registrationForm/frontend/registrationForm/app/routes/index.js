import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model(){
        const user = this.store.findAll('user');
        return {user};
    }
}