import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ChatUser, ChatMessage } from './chat.model';
import { chatData, chatMessagesData } from './data';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

/**
 * Chat Component
 */
export class ChatComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  chatData!: ChatUser[];
  chatMessagesData!: ChatMessage[];
  username: any = 'John Howard';
  usermessage!: string;
  formData!: FormGroup;
  chatSubmit?: boolean;
  profile: string = 'assets/images/users/avatar-2.jpg';
  isFlag: boolean = false;
  isStatus: string = 'online';

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'Chat', active: true }
    ];

    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    // Chat Data Get Function
    this._fetchData();
  }

  // Chat Data Fetch
  private _fetchData() {
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
  }

  /***
  * OnClick User Chat show
  */
  chatUsername(name: string, profile: any, status: string) {
    this.isFlag = true;
    this.username = name;
    this.usermessage = 'Hello';
    this.chatMessagesData = [];
    const currentDate = new Date();
    this.profile = profile;
    this.isStatus = status;

    this.chatMessagesData.push({
      name: this.username,
      message: this.usermessage,
      time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      profile: profile,
    });
  }

  onListScroll() { }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message')!.value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: 'right',
        name: 'Kate Dudley',
        profile: 'assets/images/users/avatar-1.jpg',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      });
      this.onListScroll();

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
    }
  }

}
