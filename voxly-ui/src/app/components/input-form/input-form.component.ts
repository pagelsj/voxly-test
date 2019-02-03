import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsightsService } from '../../services/insights.service';

@Component({
  selector: 'voxly-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
	insightForm: FormGroup;
  successfullyAdded: boolean;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private insightsService: InsightsService
  ) { }

  ngOnInit() {
  	this.insightForm = this.formBuilder.group({
      mood: ['', Validators.required],
      feeling: ['', Validators.required],
      comment: ['']
    });
  }

  submitForm() {
    this.isSubmitted = true;

  	if (!this.insightForm.invalid) {
      this.insightsService.post(this.insightForm.value)
        .subscribe(resp => {
          this.successfullyAdded = true;

          setTimeout(() => {
            this.successfullyAdded = false;
            this.isSubmitted = false;
          }, 2500);
        });
    }

  }

}
