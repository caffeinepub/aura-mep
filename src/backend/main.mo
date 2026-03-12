import Set "mo:core/Set";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      switch (Text.compare(submission1.name, submission2.name)) {
        case (#equal) { Text.compare(submission1.email, submission2.email) };
        case (order) { order };
      };
    };
  };

  let submissions = Set.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      message;
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray();
  };
};
