import { observable, decorate } from "mobx";

class AppStore {
  isLoading = false;
  setLoading(isLoading) {
    return this.isLoading = isLoading;
  };
  providerList = [
    { 
      provider_Latitude: "34.102676000000",
      provider_Longitude: "-118.452472000000",
      distance: "6.788 Km",
      provider_Email_Id: "test@123.com",
      provider_Street_Address: "ABCD",
      provider_City_Name: "LOS ANGELES",
      provider_Pin_Zip_Code: 90077,
      provider_Phone_Number1: "(123) 456-7890"
    },
    { 
      provider_Latitude: "34.102676000000",
      provider_Longitude: "-118.452472000000",
      distance: "6.788 Km",
      provider_Email_Id: "test@123.com",
      provider_Street_Address: "ABCD",
      provider_City_Name: "LOS ANGELES",
      provider_Pin_Zip_Code: 90077,
      provider_Phone_Number1: "(123) 456-7890"
    }
  ];
  providers(providers) {
    return this.providerList = providers;
  }
}

export default new AppStore();