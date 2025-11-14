import { Component, OnInit } from '@angular/core';
import { DatabaseCertificatesService } from 'src/app/services/database-certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  standalone: false
})
export class CertificatesComponent implements OnInit {

  dataCertificates: any[] = []
  active: string = '';

  constructor(private certificatesService: DatabaseCertificatesService) { }

  ngOnInit(): void {
    this.dataCertificates = this.certificatesService.certificates
  }

}
