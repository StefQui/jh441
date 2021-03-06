import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JobHistoryMySuffix } from './job-history-my-suffix.model';
import { JobHistoryMySuffixService } from './job-history-my-suffix.service';

@Component({
    selector: 'jhi-job-history-my-suffix-detail',
    templateUrl: './job-history-my-suffix-detail.component.html'
})
export class JobHistoryMySuffixDetailComponent implements OnInit, OnDestroy {

    jobHistory: JobHistoryMySuffix;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private jobHistoryService: JobHistoryMySuffixService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['jobHistory', 'language']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.jobHistoryService.find(id).subscribe(jobHistory => {
            this.jobHistory = jobHistory;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
