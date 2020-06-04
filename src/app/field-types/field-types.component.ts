import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-field-types",
  templateUrl: "./field-types.component.html",
  styleUrls: ["./field-types.component.scss"]
})
export class FieldTypesComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Creation of the form model
    this.form = this.fb.group({
      name: ["Wam"]
    });
  }

  submit() {
    const value = this.form.get("name").value;
  }
}
