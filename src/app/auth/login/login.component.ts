import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputOtpModule } from 'primeng/inputotp';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';





@Component({
  selector: 'app-login',
  imports: [InputTextModule,FloatLabelModule,InputOtpModule,PasswordModule,DividerModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
curentUserName : string = 'Amin'
curentPassword : string = '1234'
}
