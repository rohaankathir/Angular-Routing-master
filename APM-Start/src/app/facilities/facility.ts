/* Defines the Facility entity */
export interface IFacility {
    FacilityId: number;
    VenueId: number;
    Name: string;
    Height: number;
    Length: number;
    Width: number;
    MinPack: number;
    MaxPack: number;
    StyleId: number;
    MinBudget: number;
    MaxBudget: number;
    Comments: string;
}