// ==========================================================================
// Project:   Todos.TableView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Todos.TableView = SC.View.extend(
/** @scope Todos.TableView.prototype */ {
  emptyElement: '<table><tr><td></td></tr></table>',
  content: [],
  contentBindingDefault: SC.Binding.MultipleNotEmpty,

  render: function() {
    var html = [];
    var content = this.get('content');
    alert("content: " + content);

    // iterate through the collection and add rows
    html.push(this._renderRowHtml(content));

    // Finally, set the inner HTML of the view
    html = html.join('');
    this.set('innerHtml', html);
  }.observes('content'),

  _renderRowHtml: function(content) {
    var html = [];

    content.forEach(function(record) {
      html.push('<tr>');
      var noColumns = record.get('properties').length;
      for(i=0; i < noColumns; i++) {
        html.push('<td>');
        html.push(record.get(record.get('properties')[i]));
        html.push('</td>');
      }
      html.push('</tr>');
    });

    return html.join('');
  }
});
