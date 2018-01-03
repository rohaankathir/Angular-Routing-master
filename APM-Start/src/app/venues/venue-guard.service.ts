import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { VenueEditComponent } from './venue-edit.component';

@Injectable()
export class VenueEditGuard implements CanDeactivate<VenueEditComponent> {
    canDeactivate(component: VenueEditComponent): boolean {
        if(component.isDirty){
            let venueName = component.venue.venueName || 'New Venue';
            console.log(venueName);
            return confirm(`Navigate away and lose all changes to ${venueName}?`);
        }
        return true;
    }
}