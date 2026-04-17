import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/submissions";
import Common "../types/common";

module {
  public type ContactSubmission = Types.ContactSubmission;
  public type ConsultationBooking = Types.ConsultationBooking;
  public type ITAuditRequest = Types.ITAuditRequest;
  public type ContactFormInput = Types.ContactFormInput;
  public type ConsultationBookingInput = Types.ConsultationBookingInput;
  public type ITAuditRequestInput = Types.ITAuditRequestInput;
  public type Result<T> = Common.Result<T>;

  public func submitContact(
    contacts : List.List<ContactSubmission>,
    nextId : Nat,
    input : ContactFormInput,
  ) : Result<Nat> {
    Runtime.trap("not implemented");
  };

  public func submitConsultation(
    bookings : List.List<ConsultationBooking>,
    nextId : Nat,
    input : ConsultationBookingInput,
  ) : Result<Nat> {
    Runtime.trap("not implemented");
  };

  public func submitITAudit(
    audits : List.List<ITAuditRequest>,
    nextId : Nat,
    input : ITAuditRequestInput,
  ) : Result<Nat> {
    Runtime.trap("not implemented");
  };

  public func listContacts(contacts : List.List<ContactSubmission>) : [ContactSubmission] {
    Runtime.trap("not implemented");
  };

  public func listConsultations(bookings : List.List<ConsultationBooking>) : [ConsultationBooking] {
    Runtime.trap("not implemented");
  };

  public func listITAudits(audits : List.List<ITAuditRequest>) : [ITAuditRequest] {
    Runtime.trap("not implemented");
  };

  public func validateEmail(email : Text) : Bool {
    Runtime.trap("not implemented");
  };

  public func validateRequired(value : Text) : Bool {
    Runtime.trap("not implemented");
  };
};
