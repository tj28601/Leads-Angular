import { Component, OnInit } from '@angular/core';
// import { CompanyService } from './company.service.ts';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(
   // private companyService: CompanyService
   private companyService: CompanyService
  ) { }

  companies: Company[] = [];

  ngOnInit() {
    this.allCompanies();
  }

  allCompanies(): void {
    this.companyService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }
}
