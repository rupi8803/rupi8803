import List "mo:core/List";
import Types "types/submissions";
import SubmissionsApi "mixins/submissions-api";

actor {
  let contacts = List.empty<Types.ContactSubmission>();
  let consultations = List.empty<Types.ConsultationBooking>();
  let itAudits = List.empty<Types.ITAuditRequest>();
  var nextContactId : Nat = 0;
  var nextConsultationId : Nat = 0;
  var nextITAuditId : Nat = 0;

  let _nextContactIdBox = { var val = nextContactId };
  let _nextConsultationIdBox = { var val = nextConsultationId };
  let _nextITAuditIdBox = { var val = nextITAuditId };

  include SubmissionsApi(
    contacts,
    consultations,
    itAudits,
    _nextContactIdBox,
    _nextConsultationIdBox,
    _nextITAuditIdBox,
  );
};
