import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonComponent } from "./button/button.component";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormFieldComponent } from "./form-field/form-field.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FieldTypesComponent } from "./field-types/field-types.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormFieldComponent,
    FieldTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    FormGroup,
    FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
