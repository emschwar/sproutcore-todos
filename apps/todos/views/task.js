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
  childViews: "isDone description".w(),
  tagName: "tr",
  layout: { height: 36, left: 0, right: 0 },

  isDone: SC.LabelView.design({
    tagName: "td",
    valueBinding: ".parentView*content.isDone"
  }),
  description: SC.LabelView.design({
    tagName: "td",
    valueBinding: ".parentView*content.description"
  })
});
