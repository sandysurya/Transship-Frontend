import axios from "./index";
let base = "users";
let base1 = "shipment";
let customers = "customers";
class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/login`, data);
  };
  static ChangeUserPassword = (data) => {
    return axios.post(`${base}/edit`, data);
  };
  static UserInfo = (data) => {
    return axios.post(`${base}/edit`, data);
  };
  static UserDoc = (data) => {
    return axios.post(`${base}/edit`, data);
  };
  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };
  static Shipment = (data) => {
    return axios.post(`${base1}/add`, data);
  };
  static CShipmentData = (data) => {
    return axios.post(`${base1}/list`, data);
  };
  static Logout = (data) => {
    return axios.post(`${base}/logout`, data);
  };
  static UserDashboardData = (data) => {
    return axios.post(`${base1}/userdashboard`, data);
  };
  //Admin Api
  static ShipmentData = (data) => {
    return axios.post(`${base1}/listall`, data);
  };
  static CustomerData = (data) => {
    return axios.post(`${customers}/listall`, data);
  };
    static UserData = (data) => {
    return axios.post(`${base}/listall`, data);
  };
  static EditUserData = (data) => {
    return axios.post(`${base}/edits`, data);
  };
  static NewCustomerInfo = (data) => {
    return axios.post(`${customers}/add`, data);
  };
  static NewCustomerDoc = (data) => {
    return axios.post(`${customers}/doc`, data);
  };
  static EditCustomerInfo = (data) => {
    return axios.post(`${customers}/edit`, data);
  };
  static ChangeAdminUserPassword = (data) => {
    return axios.post(`${base}/edits`, data);
  };
  static NewUserData = (data) => {
    return axios.post(`${base}/add`, data);
  };
  static DashboardData = (data) => {
    return axios.post(`${base1}/dashboard`, data);
  };
  static TrackingData = (data) => {
    return axios.post(`${base1}/tracking`, data);
  };
}



export default AuthApi;
