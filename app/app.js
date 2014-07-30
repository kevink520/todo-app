import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'todo-app', // TODO: loaded via config
  Resolver: Resolver
});

App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});

loadInitializers(App, 'todo-app');

export default App;
