This is the test task, please implemented it using TypeScript+Angular:

Please create a single webpage of TreeGrid, and host it online, so that we can test it together.
You may borrow this source code: https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/contextmenu-default, and make all your changes.
By default, your TreeGrid has 1,000 rows (random data), all users edit this single copy of TreeGrid (JSON file on server), data is not reset between users.
This TreeGrid shall always occupy user's browser full-screen, no Pager bar (i.e. single page), enable Vertical & Horizontal default-scroll-bars.
This TreeGrid shall be fully responsive on both PC browser (keyboard+mouse) and Mobile touchscreen (fingers).
(Note: ☑ means this context menu item is an on/off switch)

Please implement 2 Context Menus on this TreeGrid:
Context Menu 1 - Right-click or long-press a "Column Header", to pop-up these menu items:
Style: User can set the Current column Data-Type (Text/Num/Date/Boolean/DropDownList), Default-Value (of current DataType),
Minimum-Column-Width (when screen shrinked), Font-size, Font-color, Background-color, Alignment, Text-wrap.
New; Del; Edit: User can Create(New)/Del/Edit(Rename) a column, (user can also Drag-n-drop to Reorder & Resize columns).
Choose: User choose columns to show or hide. See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/columnchooser
Freeze ☑: Enable Freeze all-left-side (including current) columns, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/frozen-column
Filter ☑: Enable "Filter Bar" in Parent Hierarchy Mode, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/filter
MultiSort ☑: Enable Multi-Sort for all columns, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/sorting
Context Menu 2 - Rright-click or long-press a "Row Header (i.e. Drag Icon)", to pop-up these menu items:
AddNext; AddChild; Del; Edit: User can Add(Next)/Add(Child)/Del/"Dialog-Edit" a row, (user can also Drag-n-drop to Move multi-selected rows).
MultiSelect ☑: Enable user to "Multi-select" rows on PC and Mobile, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/selection
Copy; Cut: Copy/Cut multi-selected rows - similar to how MS Windows File Explorer copy/cut Files (leaf rows) and Folders (non-leaf rows).
(The rows being Copied/Cut shall be highlighted in Pink color, but not removed yet, until user perform Paste)
PasteNext: Insert the copied/cut Rows as "next siblings" of the current row
PasteChild: Insert the copied/cut Rows as "children" of the current row

Tech stack:
Please use Syncfusion EJ2 Angular TreeGrid (trial version), but it doen't support all requested features, so, you HAVE to write custom code.
We carefully designed this test task to be self-explanatory, ambiguity free, please let us know if you see any room for improvement.
Please double-check the above requirements before you commit to implement it 100% (word for word) -- not 98%, not 99%.
We won't set a timeline for your test task, we hope you take time to deliver true quality result rather than speedy delivery.
After you complete the test task 100%, you became qualifed candidate for our project, we will sign outsourcing contract with you asap.
We suggest you add the test task billable hours into the project contract, which saves us from paying for your test task seperately.
