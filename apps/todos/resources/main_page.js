// ==========================================================================
// Project:   Todos - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This page describes the main user interface for your application.
Todos.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({

    childViews: 'middleView topView bottomView'.w(),

    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'labelView addButton'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      labelView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value:   'Todos'
      }),

      addButton: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 100 },
        title:  "Add Task",
        target: "Todos.taskController",
        action: "addTask"
      })
    }),

    middleView: SC.View.design({
      classNames: "middleView",
      layout: { top: 36, bojttom: 32, left: 0, right: 0 },
      backgroundColor: 'white',
      childViews: 'tableView'.w(),
      tableView: SC.ListView.design({
        tagName: "table",
        exampleView: Todos.TaskView,
        contentBinding: "Todos.taskController.content"
      })
    }),


    bottomView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 32 },
      anchorLocation: SC.ANCHOR_BOTTOM,
      childViews: 'summaryView'.w(),

      summaryView: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, right: 20 },
        textAlign: SC.ALIGN_CENTER,
        valueBinding: "Todos.taskController.summary"
      })
    })

  })

});
