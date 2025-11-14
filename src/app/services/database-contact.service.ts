import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DatabaseContactService {
    private contactsInformation: any = [
        {
            type: 'Phone',
            data: '92993800146',
            image: './assets/images/contact/whatsapp-icon.svg'
        },
        {
            type: 'Email',
            data: 'luucassotero@gmail.com',
            image: './assets/images/contact/gmail-icon.svg'
        },
        {
            type: 'Linkedin',
            data: 'www.linkedin.com/in/lucassoteroo',
            image: './assets/images/contact/linkedin-icon.svg'
        },
        {
            type: 'Github',
            data: 'www.github.com/lucassoteroo',
            image: './assets/images/contact/github-icon.svg'
        }
    ]

    constructor() { }

    public contacts: any = this.contactsInformation
}