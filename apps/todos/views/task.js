// ==========================================================================
// Project:   Todos.TableView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Todos.TaskView = SC.View.extend(
/** @scope Todos.TableView.prototype */ {
  isDone: false,
  description: "a task description",

  displayProperties: 'isDone description'.w(),

  render: function(context, firstTime) {
    var isDone = this.get('isDone');
    var description = this.get('description');

    context = context.begin('tr').addClass('task-row');
    context = context.begin('td').addClass('isDone').push(isDone).end();
    context = context.begin('td').addClass('description').push(description).end();
    context.end();

    sc_super();
  }
});
