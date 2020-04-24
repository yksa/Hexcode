import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        register() {
            let data = { name: this.get('name'), email: this.get('email'), password: this.get('password')};
            let newUser = this.store.createRecord('user', data);
            newUser.save();
            this.set('name', '');
            this.set('email', '');
            this.set('password', '');
        }
    }
});