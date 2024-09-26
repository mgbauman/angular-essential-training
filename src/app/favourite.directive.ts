import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[mwFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favorite') isFavourite = true;
}