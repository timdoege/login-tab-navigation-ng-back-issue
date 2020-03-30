import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from "@angular/core";
import { DataService, DataItem } from "../data.service";

@Component({
    selector: "ns-players",
    moduleId: module.id,
    templateUrl: "./players.component.html",
})
export class PlayerComponent implements OnInit {
    items: DataItem[];

    constructor(private routerExtension: RouterExtensions,
        private itemService: DataService) { }

    ngOnInit(): void {
        this.items = this.itemService.getPlayers();
    }

    showExternalStatistics() {
        this.routerExtension
          .navigate(['/external-statistics'], {})
          .then((done) => console.log({ done }))
          .catch((err) => console.error(err));
    }
}