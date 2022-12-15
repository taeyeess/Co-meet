import axios from "axios";

export function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}
export function loginUser(logindata) {
  return axios({
    url: "http://3.39.32.185:8080/api/login",
    method: "post",
    data: logindata,
    withCredentials: true,
  });
  // .then(res => {
  //   console.log(res.data);
  //   console.log(res.headers);
  //   console.log(res.cookies);
  //   // console.log(res.headers["set-cookie"]);
  //   // console.log(res.headers["access_token"]);
  //   // console.log(res.headers["refresh_token"]);
  //   // console.log(res.headers.get("cookie"));
  //   // console.log(res.headers.get("Cookie"));
  //   // console.log(res.headers.get("access_token"));
  //   // console.log(res.cookies["access_token"]);
  //   // console.log(res.cookies["refresh_token"]);
  //   // console.log(1);
  //   // if (res.data.token) {
  //   //   axios.defaults.headers.common[
  //   //     "Authorization"
  //   //   ] = `Bearer ${res.data.token}`;
  //   // } else {
  //   //   delete axios.defaults.headers.common["Authorization"];
  //   // }
  //   // const userInfo = res.data.user;
  //   // return { userInfo: userInfo };
  // });
}

export function signupUser(signUpData) {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify(signUpData)], { type: "application/json" })
  );
  return axios({
    url: "http://3.39.32.185:8080/api/member/join",
    method: "post",
    data: formData,
  });
}

export function checkIdEmail(data) {
  return axios({
    url: "http://3.39.32.185:8080/api/member/validate",
    method: "get",
    params: data,
  });
}
export function logoutUser() {
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}
// {withCredentials: true}

//    .post(
//   "http://3.39.32.185:8080/api/user/validate",
//   { data },
//   {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "application/json",
//     },
//   },
//   { withCredentials: true }
// )

// return axios
//     .get("http://3.39.32.185:8080/api/user/validate", JSON.stringify(data))
//     .then(res => {
//       console.log("중복확인 완료");
//       console.log(res.response_message);
//     });
