import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ITAuditRequestInput {
    contactName: string;
    itChallenges: string;
    preferredAuditDate: string;
    email: string;
    companyName: string;
    phone: string;
    industry: string;
}
export type Timestamp = bigint;
export type Result = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface ITAuditRequest {
    id: bigint;
    contactName: string;
    itChallenges: string;
    preferredAuditDate: string;
    submittedAt: Timestamp;
    email: string;
    companyName: string;
    phone: string;
    industry: string;
}
export interface ContactSubmission {
    id: bigint;
    name: string;
    submittedAt: Timestamp;
    email: string;
    serviceInterest: string;
    message: string;
    phone: string;
}
export interface ConsultationBooking {
    id: bigint;
    name: string;
    submittedAt: Timestamp;
    email: string;
    preferredDateTime: string;
    notes: string;
    phone: string;
}
export interface ConsultationBookingInput {
    name: string;
    email: string;
    preferredDateTime: string;
    notes: string;
    phone: string;
}
export interface ContactFormInput {
    name: string;
    email: string;
    serviceInterest: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getConsultationBookings(): Promise<Array<ConsultationBooking>>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getITAuditRequests(): Promise<Array<ITAuditRequest>>;
    submitConsultationBooking(input: ConsultationBookingInput): Promise<Result>;
    submitContactForm(input: ContactFormInput): Promise<Result>;
    submitITAuditRequest(input: ITAuditRequestInput): Promise<Result>;
}
