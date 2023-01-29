class telephone {
  constructor() {
    this.observers = new Set();
    this.phoneNumber = new Set();
  }
  addObservers = (observer) => {
    this.observers.add(observer);
  };
  removeObserver = () => {};
  notifyObserver = () => {
    // return this.observer.update(console.log("telephone dialed"));
    // for (let observer of this.observers) {
    //   observer.update(context);
    // }
  };
  addPhoneNumber = (number) => {
    return this.phoneNumber.add(number);
  };
  removePhoneNumber = () => {
    this.phoneNumber.delete(number);
  };
  dialPhoneNumber = () => {
    return this.phoneNumber.values();
  };
}

//Instance of telephone class
let newTelephone = new telephone();

//Class of observer
class observer {
  constructor() {}
  update = (context) => {
    console.log(context);
  };
}
let observer1 = new observer("2347037348971");
let observer2 = new observer("Telephone is Dialed 2347037348971");

newTelephone.addObservers(observer1);
newTelephone.addObservers(observer2);
{
  newTelephone.observers.has(observer1)
    ? newTelephone.addPhoneNumber(2347037348971)
    : "";
}

observer1.update("Telephone is Dialed");
observer1.update("calling 2347037348971");
