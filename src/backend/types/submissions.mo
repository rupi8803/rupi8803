import Common "common";

module {
  public type Timestamp = Common.Timestamp;

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
    submittedAt : Timestamp;
  };

  public type ConsultationBooking = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    preferredDateTime : Text;
    notes : Text;
    submittedAt : Timestamp;
  };

  public type ITAuditRequest = {
    id : Nat;
    companyName : Text;
    contactName : Text;
    email : Text;
    phone : Text;
    industry : Text;
    itChallenges : Text;
    preferredAuditDate : Text;
    submittedAt : Timestamp;
  };

  public type ContactFormInput = {
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
  };

  public type ConsultationBookingInput = {
    name : Text;
    email : Text;
    phone : Text;
    preferredDateTime : Text;
    notes : Text;
  };

  public type ITAuditRequestInput = {
    companyName : Text;
    contactName : Text;
    email : Text;
    phone : Text;
    industry : Text;
    itChallenges : Text;
    preferredAuditDate : Text;
  };
};
