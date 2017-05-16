import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jh441CountryMySuffixModule } from './country/country-my-suffix.module';
import { Jh441DepartmentMySuffixModule } from './department/department-my-suffix.module';
import { Jh441EmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { Jh441JobMySuffixModule } from './job/job-my-suffix.module';
import { Jh441JobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
import { Jh441LocationMySuffixModule } from './location/location-my-suffix.module';
import { Jh441RegionMySuffixModule } from './region/region-my-suffix.module';
import { Jh441TaskMySuffixModule } from './task/task-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Jh441CountryMySuffixModule,
        Jh441DepartmentMySuffixModule,
        Jh441EmployeeMySuffixModule,
        Jh441JobMySuffixModule,
        Jh441JobHistoryMySuffixModule,
        Jh441LocationMySuffixModule,
        Jh441RegionMySuffixModule,
        Jh441TaskMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jh441EntityModule {}
