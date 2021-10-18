import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, EditColumnDialog } from './app.component';

// ────────────────────────────────────────────────────────────────────────────────
// @syncfusion packages
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import {
  DropDownListAllModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';

import {
  ToolbarModule,
  ToolbarAllModule,
} from '@syncfusion/ej2-angular-navigations';

import {
  ButtonAllModule,
  CheckBoxAllModule,
} from '@syncfusion/ej2-angular-buttons';

import {
  DatePickerModule,
  DatePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ────────────────────────────────────────────────────────────────────────────────
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [AppComponent, EditColumnDialog],
  imports: [
    CommonModule,
    TreeGridAllModule,
    NumericTextBoxAllModule,
    ToolbarModule,
    DropDownListAllModule,
    ButtonAllModule,
    DialogModule,
    MultiSelectAllModule,
    CheckBoxAllModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    SparklineAllModule,
    BrowserModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
