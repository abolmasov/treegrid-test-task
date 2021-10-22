import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { sampleData } from '../assets/mock/data';
import {
  SortService,
  ResizeService,
  EditService,
  ExcelExportService,
  PdfExportService,
  ContextMenuService,
  ColumnChooserService,
  ToolbarService,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { EditSettingsModel } from '@syncfusion/ej2-treegrid';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from '@angular-material-components/color-picker';

export interface ColumnUpdates {
  alignment: any;
  background_color: any;
  data_type: any;
  font_color: Color;
  font_size: any;
  min_width: any;
  text_wrap: any;
}

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
    ColumnChooserService,
    ToolbarService,
  ],
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public columns: any;
  public editing: EditSettingsModel;
  public toolbar: string[] = ['ColumnChooser'];
  public editparams: Object;
  public selectionSettings = { type: 'Multiple', mode: 'Both' };

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  constructor(public dialog: MatDialog) {
    this.editing = { allowDeleting: true, allowEditing: true, mode: 'Row' };
    this.editparams = { params: { format: 'n' } };
    // ─────────────────────────────────────────────────────────────────
    // Disable context menu
    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  ngOnInit(): void {
    this.data = sampleData;
    this.columns = [
      {
        field: 'taskID',
        headerText: 'Task ID',
        isPrimaryKey: 'true',
        width: '80',
        textAlign: 'Right',
        editType: 'numericedit',
        customAttributes: {
          'additional-data-id': 'taskID',
        },
      },
      {
        field: 'taskName',
        headerText: 'Task Name',
        width: '190',
        customAttributes: {
          'additional-data-id': 'taskName',
        },
      },
      {
        field: 'startDate',
        headerText: 'Start Date',
        width: '90',
        format: 'yMd',
        textAlign: 'Right',
        editType: 'datepickeredit',
        customAttributes: {
          'additional-data-id': 'startDate',
        },
      },
      {
        field: 'endDate',
        headerText: 'End Date',
        width: '90',
        format: 'yMd',
        textAlign: 'Right',
        editType: 'datepickeredit',
        customAttributes: {
          'additional-data-id': 'endDate',
        },
      },
      {
        field: 'duration',
        headerText: 'Duration',
        width: '85',
        textAlign: 'Right',
        editType: 'numericedit',
        customAttributes: {
          'additional-data-id': 'duration',
        },
      },
      {
        field: 'progress',
        headerText: 'Progress',
        width: '90',
        textAlign: 'Right',
        editType: 'numericedit',
        customAttributes: {
          'additional-data-id': 'progress',
        },
      },
      {
        field: 'priority',
        headerText: 'Priority',
        width: '80',
        textAlign: 'Left',
        editType: 'stringedit',
        customAttributes: {
          'additional-data-id': 'priority',
        },
      },
    ];
  }

  @HostListener('mousedown', ['$event'])
  openColumnEdit(e: MouseEvent): boolean {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLElement;
    // ─────────────────────────────────────────────────────────────────
    // Find closes element with attribute
    const column: any = target?.closest('[additional-data-id]');
    const attributeValue = column?.getAttribute('additional-data-id');
    if (target.classList.contains('e-headertext') && e.button === 2) {
      const dialogRef = this.dialog.open(EditColumnDialog, {
        width: '400px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === null || result === undefined) {
          return;
        }
        this.updateColumnParams(result, attributeValue);
      });
    }
    return false;
  }

  private updateColumnParams(data: ColumnUpdates, attributeValue: string) {
    if (data.font_color && data.font_color.hex && attributeValue) {
      this.updateFontColor(data.font_color.hex, attributeValue);
    }
  }

  private updateFontColor(color: string, attributeValue: string) {
    const elements = document.querySelectorAll(
      `[additional-data-id=${attributeValue}]`
    );
    for (let index = 0; index < elements.length; index++) {
      (elements[index] as HTMLElement).style.color = `#${color}`;
    }
  }
}

// Delete user dialog────────────────────────────────────────────────────────────────────────────────
@Component({
  selector: 'edit-column',
  templateUrl: 'edit-column.html',
})
export class EditColumnDialog {
  public editColumnForm: FormGroup;

  public dataTypes: any[] = [
    {
      value: 'text',
      viewValue: 'Text',
    },
    {
      value: 'number',
      viewValue: 'Number',
    },
    {
      value: 'date',
      viewValue: 'Date',
    },
    {
      value: 'boolean',
      viewValue: 'Boolean',
    },
    {
      value: 'dropDownList',
      viewValue: 'Dropdown list',
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<EditColumnDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.editColumnForm = this.formBuilder.group({
      data_type: [],
      min_width: [],
      font_size: [],
      font_color: [],
      background_color: [],
      alignment: [],
      text_wrap: [],
    });
  }

  processeEditColumnForm(formValue: any, isValid: boolean, $event: Event) {
    this.dialogRef.close(formValue);
  }

  cancelDelete(): void {
    this.dialogRef.close();
  }
}
