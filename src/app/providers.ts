import { createInjectionToken } from "@angular/compiler/src/core";
import { InjectionToken } from "@angular/core";

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: ['Movies', 'Series']
  };