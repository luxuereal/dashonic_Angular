import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  /**
   * Show Toasts
   */
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  /**
   * Remove Toasts
   */
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
