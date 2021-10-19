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
  public contextMenuItems: any[] = [];
  public editing: EditSettingsModel;
  public toolbar: string[] = ['ColumnChooser'];
  public editparams: Object;
  public selectionSettings = { type: 'Multiple', mode: 'Both' };

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  constructor(public dialog: MatDialog) {
    this.editing = { allowDeleting: true, allowEditing: true, mode: 'Row' };
    this.editparams = { params: { format: 'n' } };
    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  ngOnInit(): void {
    this.data = sampleData;
    // this.contextMenuItems = [
    //   { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
    //   { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
    //   { text: 'Collapse All', target: '.e-headercontent', id: 'collapseall' },
    //   { text: 'Expand All', target: '.e-headercontent', id: 'expandall' },
    // ];
  }

  // contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
  //   let elem: Element = arg?.event.target as Element;
  //   let row: Element | any = elem.closest('.e-row');
  //   let uid: string = row && row.getAttribute('data-uid');
  //   let items: Array<HTMLElement> = [].slice.call(
  //     document.querySelectorAll('.e-menu-item')
  //   );
  //   for (let i: number = 0; i < items.length; i++) {
  //     items[i].setAttribute('style', 'display: none;');
  //   }
  //   if (elem.closest('.e-row')) {
  //     if (
  //       isNullOrUndefined(uid) ||
  //       isNullOrUndefined(
  //         getValue(
  //           'hasChildRecords',
  //           this.treegrid?.grid.getRowObjectFromUID(uid).data
  //         )
  //       )
  //     ) {
  //       (arg as any).cancel = true;
  //     } else {
  //       let flag: boolean = getValue(
  //         'expanded',
  //         this.treegrid?.grid.getRowObjectFromUID(uid).data
  //       );
  //       let val: string = flag ? 'none' : 'block';
  //       document
  //         .querySelectorAll('li#expandrow')[0]
  //         .setAttribute('style', 'display: ' + val + ';');
  //       val = !flag ? 'none' : 'block';
  //       document
  //         .querySelectorAll('li#collapserow')[0]
  //         .setAttribute('style', 'display: ' + val + ';');
  //     }
  //   } else {
  //     let len =
  //       this.treegrid?.element.querySelectorAll('.e-treegridexpand').length;
  //     if (len !== 0) {
  //       document
  //         .querySelectorAll('li#collapseall')[0]
  //         .setAttribute('style', 'display: block;');
  //     } else {
  //       document
  //         .querySelectorAll('li#expandall')[0]
  //         .setAttribute('style', 'display: block;');
  //     }
  //   }
  // }

  // contextMenuClick(args?: MenuEventArgs): void {
  //   if (args?.item.id === 'collapserow') {
  //     this.treegrid?.collapseRow(
  //       this.treegrid.getSelectedRows()[0] as HTMLTableRowElement,
  //       this.treegrid.getSelectedRecords()[0]
  //     );
  //   } else if (args?.item.id === 'expandrow') {
  //     this.treegrid?.expandRow(
  //       this.treegrid.getSelectedRows()[0] as HTMLTableRowElement,
  //       this.treegrid.getSelectedRecords()[0]
  //     );
  //   } else if (args?.item.id === 'collapseall') {
  //     this.treegrid?.collapseAll();
  //   } else if (args?.item.id === 'expandall') {
  //     this.treegrid?.expandAll();
  //   }
  // }

  @HostListener('mousedown', ['$event'])
  openColumnEdit(e: MouseEvent): boolean {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target.classList.contains('e-headertext') && e.button === 2) {
      const columnName = target.innerText;
      const dialogRef = this.dialog.open(EditColumnDialog, {
        data: {
          columnName: columnName,
        },
        width: '400px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === null || result === undefined) {
          return;
        }
        this.changeColumnFontColor(result.font_color.hex, target);
      });
    }
    return false;
  }

  private changeColumnFontColor(color: string, target: HTMLElement) {
    const element = document.querySelectorAll('.e-treecell');
    debugger;
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
