import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './toast-service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

/**
 * Notification Component
 */
export class NotificationsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(public toastService: ToastService, private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Extended UI' },
      { label: 'Notifications', active: true }
    ];
  }

  /**
   * Standard message 
   */
  showStandard() {
    this.toastService.show('Normal Message', { classname: 'bg-primary text-center text-white', delay: 10000 });
  }

  /**
   * Success message 
   */
  showSuccess() {
    this.toastService.show('Success Message', { classname: 'bg-success text-center text-white', delay: 10000 });
  }

  /**
   * Danger message 
   */
  showDanger() {
    this.toastService.show('Error Message', { classname: 'bg-danger text-center text-white', delay: 10000 });
  }

  /**
   * Warning message 
   */
  showWarning() {
    this.toastService.show('Warning Message', { classname: 'bg-warning text-center text-white', delay: 10000 });
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }

  /**
   * Success message 
   */
  alertDialogs() {
    this.toastService.show('Ok', { classname: 'bg-success text-center text-white', delay: 10000 });
  }

  /**
   * Open modal
   * @param Confirmcontent modal content
   */
  confirmModal(content: any) {
    this.modalService.open(content);
  }

  /**
   * Success message 
   */
  confirmDialogs() {
    this.toastService.show('Cancel', { classname: 'bg-danger text-center text-white', delay: 10000 });
  }

}
