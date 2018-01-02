/* Defines the user entity */
export interface IUser {
    UserId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    UserName: string;
    UserAccessLevelId: number;
    IsActive: boolean;
    MemberTypeId: number;
    MobileNumber: string;
    CompanyName: string;
    ContactPerson: string;
    Address1: string;
    Address2: string;
    CountryId: number;
    CityId: number;
    Website: string;
    IsAdmin: boolean;
}
