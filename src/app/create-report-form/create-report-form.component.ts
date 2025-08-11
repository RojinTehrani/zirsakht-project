import { Component ,OnInit} from '@angular/core';
import { FormsModule, UntypedFormBuilder } from '@angular/forms'; // برای ngModel
import { CardModule } from 'primeng/card'; // p-card
import { InputTextModule } from 'primeng/inputtext'; // pInputText
import { CheckboxModule } from 'primeng/checkbox'; // p-checkbox
import { ButtonModule } from 'primeng/button'; // p-button
import { StepperModule } from 'primeng/stepper';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputOtpModule } from 'primeng/inputotp';
import { TextareaModule } from 'primeng/textarea';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-report-form',
  imports: [ButtonModule,CheckboxModule,InputTextModule,CardModule,FormsModule,StepperModule,BreadcrumbModule,FieldsetModule,FloatLabelModule
    ,InputOtpModule,TextareaModule,PanelModule,TooltipModule,MultiSelectModule,CommonModule
  ],
  standalone: true,
  templateUrl: './create-report-form.component.html',
  styleUrl: './create-report-form.component.css',

})
export class CreateReportFormComponent implements OnInit{

 items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Electronics' },
            { label: 'Computer' },
            { label: 'Accessories' },
            { label: 'Keyboard' },
            { label: 'Wireless' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

  // آبجکت گزارش
  report = {
    title: '',
    description: '',
    type: null,
    isActive: false
  };
  // انواع گزارش
  reportTypes = [
    { label: 'مالی', value: 'financial' },
    { label: 'عملیاتی', value: 'operational' },
    { label: 'منابع انسانی', value: 'hr' },
    { label: 'فنی', value: 'technical' }
  ];

  saveReport() {
    console.log('گزارش ذخیره شد:', this.report);
  }

  cancel() {
    this.report = {
      title: '',
      description: '',
      type: null,
      isActive: false
    };
    console.log('عملیات لغو شد');
  }
}
