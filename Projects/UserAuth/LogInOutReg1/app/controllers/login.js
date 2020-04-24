import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
    
        login() {
            let email = this.get('email');
            let password = this.get('password');
            let data = {
                "email": email,
                "password": password
            };
            this.store.queryRecord("user", data).then((response) => {
                this.transitionToRoute('index', response);
            });
        }

    }
});