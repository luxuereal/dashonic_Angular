import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})

/**
 * Sweetalert Component
 */
export class SweetalertComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Extended UI' },
      { label: 'SweetAlert 2', active: true }
    ];
  }

  /**
   * Basic sweet alert
   * @param basicMessage modal content
   */
  basicMessage() {
    Swal.fire('Any fool can use a computer');
  }

  /**
  * Title sweet alert
  * @param titleText modal content
  */
  titleText() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      confirmButtonColor: 'rgb(3, 142, 220)',
      confirmButtonText: 'OK'
    });
  }

  /**
   * Success sweet alert
   * @param successmsg modal content
   */
  successmsg() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'OK'
    });
  }

  /**
   * Confirm sweet alert
   * @param confirm modal content
   */
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(81, 210, 140)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  /**
   * cancel sweet alert
   * @param cancel modal content
   */
  cancel() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }

  /**
   * imageHeader sweet alert
   * @param imageHeader modal content
   */
  imageHeader() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'assets/images/logo-sm.png',
      imageHeight: 50,
      confirmButtonColor: 'rgb(3, 142, 220)'
    });
  }

  /**
   * timer sweet alert
   * @param timer modal content
   */
  timer() {
    let timerInterval: any;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b: any = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  /**
   * custom sweet alert
   * @param custom modal content
   */
  custom() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonColor: 'rgb(71, 189, 154)',
      cancelButtonColor: 'rgb(243, 78, 78)',
    });
  }

  /**
   * position sweet alert
   * @param position modal content
   */
  position() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /**
   * customBackground sweet alert
   * @param customBackground modal content
   */
  customBackground() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      confirmButtonColor: '#556ee6',
      background: 'rgb(224, 225, 243) url(assets/images/auth-bg.jpg)',
    });
  }

  /**
   * ajax sweet alert
   * @param ajax modal content
   */
  ajax() {
    Swal.fire({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      confirmButtonColor: '#556ee6',
      cancelButtonColor: '#f46a6a',
      preConfirm: (email) => {
        // eslint-disable-next-line no-unused-vars
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              Promise.reject(new Error('This email is already taken.'));
            } else {
              resolve();
            }
          }, 2000);
        });
      },
      allowOutsideClick: false,
    }).then((email) => {
      Swal.fire({
        icon: 'success',
        title: 'Ajax request finished!',
        html: 'Submitted email: ' + email,
      });
    });
  }

}
