import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Employee } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-assignment-day18',
  templateUrl: './assignment-day18.component.html',
  styleUrls: ['./assignment-day18.component.scss']
})
export class AssignmentDay18Component implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort: MatSort;
  employeeList: Employee[] = [
    { id: 1, name: 'Aung Aung', department: 'Information Technology (IT)', gender: 'Male', position: 'Senior', phoneNumber: '09123456780', joinDate: '25-4-2018' },
    { id: 2, name: 'Aye Aye', department: 'Information Technology (IT)', gender: 'Female', position: 'Senior', phoneNumber: '09123456781', joinDate: '25-4-2018' },
    { id: 3, name: 'Hla Hla', department: 'Application Development', gender: 'Female', position: 'Senior', phoneNumber: '09123456782', joinDate: '1-1-2019' },
    { id: 4, name: 'Mg Mg', department: 'Application Development', gender: 'Male', position: 'Senior', phoneNumber: '09123456783', joinDate: '1-1-2019' },
    { id: 5, name: 'Mya Mya', department: 'Application Management', gender: 'Female', position: 'Junior', phoneNumber: '09123456784', joinDate: '1-1-2019' },
    { id: 6, name: 'Kyaw Kyaw', department: 'Application Management', gender: 'Male', position: 'Junior', phoneNumber: '09123456781', joinDate: '1-1-2019' },
    { id: 7, name: 'Aye Aung', department: 'Business Intelligence (BI)', gender: 'Female', position: 'Senior', phoneNumber: '09123456785', joinDate: '1-2-2019' },
    { id: 8, name: 'War So', department: 'Business Intelligence (BI)', gender: 'Female', position: 'Senior', phoneNumber: '09123456786', joinDate: '1-2-2019' },
    { id: 9, name: 'Ya Ti', department: 'IT Management & Administration', gender: 'Female', position: 'Junior', phoneNumber: '09123456787', joinDate: '1-2-2019' },
    { id: 10, name: 'Zaw Zaw', department: 'IT Management & Administration', gender: 'Male', position: 'Junior', phoneNumber: '09123456788', joinDate: '1-2-2019' },
    { id: 11, name: 'Kyaw Zaw', department: 'IT Procurement', gender: 'Male', position: 'Junior', phoneNumber: '09123456789', joinDate: '1-3-2019' },
    { id: 12, name: 'Tun Tun', department: 'IT Procurement', gender: 'Male', position: 'Junior', phoneNumber: '09123456790', joinDate: '1-3-2019' },
    { id: 13, name: 'Hnin Hnin', department: 'IT Security', gender: 'Female', position: 'Senior', phoneNumber: '09123456791', joinDate: '1-4-2019' },
    { id: 14, name: 'Yi Mon', department: 'IT Security', gender: 'Female', position: 'Senior', phoneNumber: '09123456792', joinDate: '1-4-2019' },
    { id: 15, name: 'Khet Khet', department: 'Network Adminstration', gender: 'Female', position: 'Senior', phoneNumber: '09123456793', joinDate: '1-5-2019' },
    { id: 16, name: 'Soe Moe', department: 'Network Adminstration', gender: 'Male', position: 'Senior', phoneNumber: '09123456794', joinDate: '1-5-2019' },
    { id: 17, name: 'Kyaw Soe', department: 'Systems Analyst & Architecture', gender: 'Male', position: 'Junior', phoneNumber: '09123456795', joinDate: '1-8-2019' },
    { id: 18, name: 'Soe Soe', department: 'Systems Analyst & Architecture', gender: 'Female', position: 'Junior', phoneNumber: '09123456796', joinDate: '1-8-2019' },
    { id: 19, name: 'Moe Moe', department: 'Systems Analyst & Architecture', gender: 'Female', position: 'Junior', phoneNumber: '09123456797', joinDate: '1-10-2019' },
    { id: 20, name: 'Aung Paing', department: 'Systems Analyst & Architecture', gender: 'Male', position: 'Junior', phoneNumber: '09123456798', joinDate: '1-10-2019' },
    { id: 21, name: 'Myat Thu', department: 'User Support & Services', gender: 'Male', position: 'Junior', phoneNumber: '09123456799', joinDate: '1-1-2020' },
    { id: 22, name: 'Zaw Htay', department: 'User Support & Services', gender: 'Male', position: 'Junior', phoneNumber: '09123456701', joinDate: '1-1-2020' },
    { id: 23, name: 'Nwe Nwe', department: 'User Support & Services', gender: 'Female', position: 'Junior', phoneNumber: '09123456702', joinDate: '1-1-2020' },
    { id: 24, name: 'Aye Moh', department: 'User Support & Services', gender: 'Female', position: 'Junior', phoneNumber: '09123456704', joinDate: '1-1-2020' },
    { id: 25, name: 'Nyein Nyein', department: 'User Support & Services', gender: 'Female', position: 'Junior', phoneNumber: '09123456704', joinDate: '1-1-2020' }
  ];
  displayedColumns: string[] = ['id', 'name', 'department', 'gender', 'position', 'phoneNumber', 'joinDate'];
  dataSource: MatTableDataSource<Employee>;
  pageSize: number[] = [5, 10, 15];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.employeeList);
      this.dataSource.paginator = this.paginator;
      this.empTbSort.disableClear = true;
      this.dataSource.sort = this.empTbSort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
