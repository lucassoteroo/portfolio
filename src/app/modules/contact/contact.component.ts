import { Component } from '@angular/core';
import { DatabaseContactService } from 'src/app/services/database-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false
})
export class ContactComponent {

  dataContacts: any[] = []

  constructor(private contactsService: DatabaseContactService) { }

  ngOnInit(): void {
    this.dataContacts = this.contactsService.contacts

    console.log(this.dataContacts)
  }

  openLink(item: any) {
    switch (item.type) {
      case 'Phone':
        const number = `55${item.data}`;
        const message = encodeURIComponent('Olá! Vim pelo seu portfólio.');
        const urlWpp = `https://wa.me/${number}?text=${message}`;
        window.open(urlWpp, '_blank', 'noopener,noreferrer');
        break;
      case 'Email':
        const subject = encodeURIComponent('Contato via portfólio');
        const body = encodeURIComponent('Olá Lucas, tudo bem?');
        const urlEmail = `mailto:${item.data}?subject=${subject}&body=${body}`;
        window.open(urlEmail, '_self');
        break;
      case 'Linkedin':
        const urlLinkedin = `https://${item.data}`;
        window.open(urlLinkedin, '_blank', 'noopener,noreferrer');
        break;
      case 'Github':
        const urlGithub = `https://${item.data}`
        window.open(urlGithub, '_blank', 'noopener,noreferrer');
        break;
      default:
        break;
    }
  }
}
