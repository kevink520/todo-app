import Ember from "ember";

var EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

export default EditTodoView;