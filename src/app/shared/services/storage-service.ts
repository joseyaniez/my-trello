import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private platformId = inject(PLATFORM_ID);

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getItem<T>(key: string): T | null {
    if(!this.isBrowser()) return null;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setItem(key: string, value: any): void {
    if(this.isBrowser()){
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
