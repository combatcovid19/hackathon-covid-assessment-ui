import { observable, decorate } from "mobx";

class SignUpStore {
    test = "test";    
}
decorate(SignUpStore, {
    test: observable,
  })

export default new SignUpStore();