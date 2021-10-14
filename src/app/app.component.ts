import { Component } from '@angular/core';
import { sampleData } from '../assets/mock/data';
import {
  SortService,
  ResizeService,
  EditService,
  ExcelExportService,
  PdfExportService,
  ContextMenuService,
} from '@syncfusion/ej2-angular-treegrid';
import { EditSettingsModel } from '@syncfusion/ej2-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    SortService,
    ResizeService,
    EditService,
    ExcelExportService,
    PdfExportService,
    ContextMenuService,
  ],
})
export class AppComponent {
  public data: Object[] = [];
  public contextMenuItems: string[] = [];
  public editing: EditSettingsModel;
  public toolbar: string[] = [];
  public editparams: Object;

  constructor() {
    this.editing = { allowDeleting: true, allowEditing: true, mode: 'Row' };
    this.editparams = { params: { format: 'n' } };
  }

  ngOnInit(): void {
    this.data = sampleData;
    this.contextMenuItems = [
      'AutoFit',
      'AutoFitAll',
      'SortAscending',
      'SortDescending',
      'Edit',
      'Delete',
      'Save',
      'Cancel',
      'PdfExport',
      'ExcelExport',
      'CsvExport',
      'FirstPage',
      'PrevPage',
      'LastPage',
      'NextPage',
    ];
  }
}
