/*School Catalogue
Let’s put your knowledge of classes to the test by creating a digital school 
catalog for the New York City Department of Education. 
The Department of Education wants the catalog to hold 
quick reference material for each school in the city.

We need to create classes for primary and high schools. 
Because these classes share properties and methods, each will inherit from a parent School class. 
Our parent and three child classes have the following properties, getters, setters, and methods:  */

  class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    get level() {
      return this._level;
    }
  
    quickFacts() {
      return `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`;
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const index = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[index];
    }
  
    set numberOfStudents(number) {
      typeof number === "number"
        ? (this._numberOfStudents = number)
        : console.log("Invalid input: numberOfStudents must be set to a number.");
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  
    set pickupPolicy(policy) {
      typeof policy === "string"
        ? (this._pickupPolicy = policy)
        : console.log("Pick up policy must be input as a string");
    }
  }
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, PTAMeetingTimes) {
      super(name, "middle", numberOfStudents);
      this._PTAMeetingTimes = PTAMeetingTimes;
    }
  
    get PTAMeetingTimes() {
      return this._PTAMeetingTimes;
    }
  
    set PTAMeetingTimes(meetingTimes) {
      typeof meetingTimes === "string"
        ? (this._PTAMeetingTimes = meetingTimes)
        : console.log("New meeting times must be input as a string");
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  class SchoolCatalogue {
    constructor(district, primarySchool, middleSchool, highSchool) {
      this._district = district;
      this._primarySchool = primarySchool;
      this._middleSchool = middleSchool;
      this._highSchool = highSchool;
      this._totalStudents =
        this._primarySchool._numberOfStudents +
        this._middleSchool._numberOfStudents +
        this._highSchool._numberOfStudents;
    }
  
    get district() {
      return this._district;
    }
  
    get primarySchool() {
      return this._primarySchool.name;
    }
  
    get middleSchool() {
      return this._middleSchool.name;
    }
  
    get highSchool() {
      return this._highSchool.name;
    }
  
    get totalStudents() {
      return this._totalStudents;
    }
  }
  
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  
  const sallyRide = new MiddleSchool(
    "Sally Ride",
    472,
    "1st and 3rd Thursday of the month at 6pm"
  );
  
  const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
  const newYorkCity = new SchoolCatalogue(
    "New York City",
    lorraineHansbury,
    sallyRide,
    alSmith
  );
  
  // Testing <3
  // lorraineHansbury.quickFacts();
  // School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  // lorraineHansbury.numberOfStudents = 'trees'
  // lorraineHansbury.numberOfStudents = 515
  // lorraineHansbury.pickupPolicy = 4
  // lorraineHansbury.pickupPolicy = "Students must be picked up by a parent, guardian, or a family member over the age of 15."
  // lorraineHansbury.pickupPolicy;
  // lorraineHansbury.quickFacts();
  // alSmith.sportsTeams;
  // sallyRide.quickFacts();
  // sallyRide.PTAMeetingTimes;
  // sallyRide.PTAMeetingTimes = 'Never';
  // sallyRide.PTAMeetingTimes;
  // console.log(newYorkCity.primarySchool);
  // console.log(newYorkCity.totalStudents);
  