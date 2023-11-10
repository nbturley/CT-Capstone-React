import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {useEffect} from 'react'; 

// interface UserType {
//     uid:string,
//     displayName: string,
//     email: string,
//     emailVerified: boolean
// }

const auth = getAuth();

onAuthStateChanged(auth, user => {
    if(user==null) { return; }
    const { uid, displayName, email, emailVerified } = user;
    console.log(uid, displayName, email, emailVerified);
})

// export const auth = getAuth();
// console.log(auth);
// export const displayName = auth.currentUser?.displayName
// console.log(displayName);

// useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         const displayName = user.displayName;
//         // ...
//         console.log("uid", uid)
//         console.log("displayName", displayName);
        
//       } else {
//         // User is signed out
//         // ...
//         console.log("user is logged out")
//       }
//     })
//   });

// import { getAuth } from "firebase/auth";
// export const useGetUserProfile = () => {
    // const auth = getAuth();
    // const user = auth.currentUser;


    // if (user !== null) {
    // // The user object has basic properties such as display name, email, etc.
    // const displayName = user.displayName;
    // console.log(displayName);
    
    // const email = user.email;
    // console.log(email);
        
    // const photoURL = user.photoURL;
    // console.log(photoURL);
    
    // const emailVerified = user.emailVerified;
    // console.log(emailVerified);
    
    // // The user's ID, unique to the Firebase project. Do NOT use
    // // this value to authenticate with your backend server, if
    // // you have one. Use User.getToken() instead.
    // const uid = user.uid;
    // console.log(uid);
    
    // }
// }
