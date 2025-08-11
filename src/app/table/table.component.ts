import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  imports: [ButtonModule,MenuModule,TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
report = [
 { reportName: 'گزارش 1', desc: 'توضیحات نمونه', reportType:'نوع 1' },
  { reportName: 'گزارش 2',desc: 'توضیحات نمونه', reportType:'نوع 2'}
];


projectReports = [
  { reportName: 'گزارش 1', desc: 'توضیحات نمونه', reportType:'نوع 1' },
  { reportName: 'گزارش 2',desc: 'توضیحات نمونه', reportType:'نوع 2'},
  { reportName: 'گزارش 3', desc: 'توضیحات نمونه',reportType:'نوع 44' },
  { reportName: 'گزارش 4', desc: 'توضیحات نمونه',reportType:'نوع 6'},
];


getMenuItems(rowData: any) {
  return [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.editRow(rowData)
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => this.deleteRow(rowData)
    }
  ];
}

editRow(data: any) {
  console.log('Edit:', data);
}

deleteRow(data: any) {
  console.log('Delete:', data);
}

}
