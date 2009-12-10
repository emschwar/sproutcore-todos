// ==========================================================================
// Project:   Todos.TableView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Todos.Table = SC.ListView.extend({
  tagName: 'table',
  exampleView: SC.View.extend(
   /** @scope Todos.TableView.prototype */ {
     contentDisplayProperties: 'isDone description'.w(),

     render: function(context, firstTime) {
       var content = this.get('content');
       var attributes = content.get('attributes');

       context = context.begin('tr').addClass('task-row');
       for (attr in attributes) {
         context = context.begin('td').addClass(attr).push(attributes[attr]).end();
       }
       context.end();

       sc_super();
     }
   })
});