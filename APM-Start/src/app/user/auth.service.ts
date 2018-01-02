import { Injectable } from '@angular/core';

import { IUser } from './user';
import { MessageService } from '../messages/message.service';

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;

    constructor(private messageService: MessageService) { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): void {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (userName === 'admin') {
            this.currentUser = {
                UserId: 1,                
                FirstName: "Rohaan",
                LastName: "Kathirgamathamby",
                Email: "rohaan@email.com",
                UserName: userName,
                UserAccessLevelId: 1,
                IsActive: true,
                MemberTypeId: 1,
                MobileNumber: "0455240905",
                CompanyName: "Demo",
                ContactPerson: "Rohaan",
                Address1: "Address 1",
                Address2: "Address 2",
                CountryId: 64,
                CityId: 1,
                Website: "www.demo.com",
                IsAdmin: true
            };
            this.messageService.addMessage('Admin login');
            return;
        }
        this.currentUser = {
            UserId: 1,                
            FirstName: "Rohaan",
            LastName: "Kathirgamathamby",
            Email: "rohaan@email.com",
            UserName: userName,
            UserAccessLevelId: 1,
            IsActive: true,
            MemberTypeId: 1,
            MobileNumber: "0455240905",
            CompanyName: "Demo",
            ContactPerson: "Rohaan",
            Address1: "Address 1",
            Address2: "Address 2",
            CountryId: 64,
            CityId: 1,
            Website: "www.demo.com",
            IsAdmin: false
        };
        this.messageService.addMessage(`User: ${this.currentUser.UserName} logged in`);
    }

    logout(): void {
        this.currentUser = null;
    }
}
