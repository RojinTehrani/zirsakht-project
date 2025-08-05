import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { ChartModule } from 'primeng/chart';
import { ChipModule, Chip } from 'primeng/chip';
import { TagModule, Tag } from 'primeng/tag';
import { DividerModule, Divider } from 'primeng/divider';
import { ProgressBarModule, ProgressBar } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule, Chip, Tag, ProgressBar, Divider , CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  data: any;
  options: any;

  constructor() {
    this.initChart();
  }
  initChart() {
    this.data = {
      labels: ['توسعه', 'طراحی', 'تست', 'مستندات'],
      datasets: [
        {
          data: [300, 200, 100, 150],
          backgroundColor: [ 
            '#42A5F5', 
            '#66BB6A', 
            '#FFA726',
            '#EC407A'
          ],
          hoverBackgroundColor: [
            '#64B5F6',
            '#81C784',
            '#FFB74D',
            '#EF5350'
          ]
        }
      ]
    };
  
    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            font: {
              family: 'IRANSans', // فونت دلخواه
            }
          },
          rtl: true
        },
        tooltip: {
          bodyFont: {
            family: 'IRANSans',
          },
          titleFont: {
            family: 'IRANSans',
          }
        },
        title: {
          display: false,
          text: 'لیست پروژه‌ها',
          font: {
            family: 'IRANSans',
          }
        }
      }
    };
  }
  


  activeFilter = 'all';
  
  projects = [
    {
      title: 'بروزرسانی سیستم پرداخت',
      priority: 'high',
      priorityLabel: 'مهم',
      deadline: new Date('2023-12-15'),
      progress: 45,
      team: ['امین', 'مریم', 'رضا']
    },
    {
      title: 'طراحی پنل مدیریت جدید',
      priority: 'medium',
      priorityLabel: 'متوسط',
      deadline: new Date('2023-11-30'),
      progress: 80,
      team: ['سارا', 'محمد']
    },
    {
      title: 'بهینه‌سازی دیتابیس',
      priority: 'low',
      priorityLabel: 'عادی',
      deadline: new Date('2024-01-10'),
      progress: 20,
      team: ['علی', 'نازنین']
    }
  ];

  filteredProjects = this.projects;

  // داده‌های نمودار
  chartData = {
    labels: ['مهم', 'متوسط', 'عادی'],
    datasets: [{
      data: [5, 12, 8],
      backgroundColor: ['#ef4444', '#f59e0b', '#10b981']
    }]
  };

  chartOptions = {
    plugins: {
      legend: { rtl: true }
    }
  };

  filterProjects(filter: string) {
    this.activeFilter = filter;
    this.filteredProjects = filter === 'all' 
      ? this.projects 
      : this.projects.filter(p => p.priority === filter);
  }

  getPrioritySeverity(priority: string) {
    switch(priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'info';
    }
  }

}
