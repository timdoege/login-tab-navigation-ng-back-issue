
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { ExternalStatisticsComponent } from './external-statistics.component';

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: '',
                component: ExternalStatisticsComponent
            },
        ]),
    ],
    declarations: [
        ExternalStatisticsComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ExternalStatisticsModule { }
