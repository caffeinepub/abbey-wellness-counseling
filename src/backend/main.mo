import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    preferredContactMethod : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Int.compare(submission1.timestamp, submission2.timestamp);
    };
  };

  let submissions = Map.empty<Time.Time, Submission>();

  public shared ({ caller }) func submit(name : Text, email : Text, phone : Text, message : Text, preferredContactMethod : Text) : async () {
    let newSubmission : Submission = {
      name;
      email;
      phone;
      message;
      preferredContactMethod;
      timestamp = Time.now();
    };

    if (submissions.containsKey(newSubmission.timestamp)) {
      Runtime.trap("Duplicate timestamp.");
    };

    submissions.add(newSubmission.timestamp, newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray();
  };
};
