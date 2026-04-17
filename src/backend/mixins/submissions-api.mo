import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Types "../types/submissions";
import Common "../types/common";

mixin (
  contacts : List.List<Types.ContactSubmission>,
  consultations : List.List<Types.ConsultationBooking>,
  itAudits : List.List<Types.ITAuditRequest>,
  nextContactId : { var val : Nat },
  nextConsultationId : { var val : Nat },
  nextITAuditId : { var val : Nat },
) {
  public func submitContactForm(input : Types.ContactFormInput) : async Common.Result<Nat> {
    Runtime.trap("not implemented");
  };

  public func submitConsultationBooking(input : Types.ConsultationBookingInput) : async Common.Result<Nat> {
    Runtime.trap("not implemented");
  };

  public func submitITAuditRequest(input : Types.ITAuditRequestInput) : async Common.Result<Nat> {
    Runtime.trap("not implemented");
  };

  public query func getContactSubmissions() : async [Types.ContactSubmission] {
    Runtime.trap("not implemented");
  };

  public query func getConsultationBookings() : async [Types.ConsultationBooking] {
    Runtime.trap("not implemented");
  };

  public query func getITAuditRequests() : async [Types.ITAuditRequest] {
    Runtime.trap("not implemented");
  };
};
