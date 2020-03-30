import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "ns-external-statistics",
    templateUrl: "./external-statistics.component.html"
})
export class ExternalStatisticsComponent {
    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
    }

    back() {
        this.routerExtension.back();
    }

    backByOutlet() {
        this.routerExtension.back({ outlets: ["primary"] });
    }

    backByParentRoute() {
        this.routerExtension.back({ relativeTo: this.activeRoute.parent });
    }

    backByActivatedRoute() {
        this.routerExtension.back({ relativeTo: this.activeRoute });
    }

}
