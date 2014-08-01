import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import EditTodoView from './views/edit-todo';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'todo-app', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'todo-app');

Ember.Handlebars.helper('edit-todo', EditTodoView);

export default App;
