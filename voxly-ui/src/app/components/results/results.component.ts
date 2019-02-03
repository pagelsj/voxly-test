import { Component, OnInit } from '@angular/core';
import { InsightsService } from '../../services/insights.service';

@Component({
  selector: 'voxly-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
	public insightResults: any;
	public moodAverage: string;

  constructor(
  	private insightsService: InsightsService
	) { }

  ngOnInit() {
  	this.loadResults();
  }

  loadResults() {
		this.insightResults = this.insightsService.get().subscribe(resp => {
      this.insightResults = resp;
    	
      let avg = 0;
    	this.insightResults.forEach(entry => {
    		avg += parseInt(entry.mood);
    	})

    	this.moodAverage = (avg / this.insightResults.length).toFixed(2);
    });

    
  }
}
