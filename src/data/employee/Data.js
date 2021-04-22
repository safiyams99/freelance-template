import ResumeData from "./Resume";
import Messages from "./Messages";

import A from "../../img/client-1.jpg";
import B from "../../img/client-2.jpg";
import C from "../../img/client-4.jpg";
import D from "../../img/client-5.jpg";

const Data = [
  {
    name: "Adam Declizer",
    fname: "",
    mname: "",
    lname: "",
    designation: "CEO & Founder",
    profile: "",
    coverPhoto: "",
    email: "youremail@gmail.com",
    location: {
      city: "Mohali",
      zip: 71000,
      state: "Punjab",
      country: "India",
      Address: "SCO 210, Neez Plaza"
    },
    password: "",
    phone: "+91 123 456 7854",
    fax: "(622) 123 456",
    organization: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // rating:"",
    // verified:true,
    //skills:[],
    jobPost: 200,
    jobShared: 450,
    Liked: 189,
    socialLinks: [
      {
        web: "",
        blog: "",
        portfolio: "",
        facebook: "",
        linkdin: "",
        pintererst: "",
        instagram: "",
        twitter: ""
      }
    ],
    messages: [
      {
        read: true,
        senderemail: "theadmin@thetheme.io",
        receiveremail: "subscriber@yahoo.com",
        time: "07:34 AM",
        day: "Today",
        img: "",
        sender: "Daniel Duke",
        message:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
      }
    ],
    online: true,
    friends: [
      {
        name: "Charles Hopman",
        designation: "Web designer",
        profile: "",
        email: "friendemail@gmail.com",
        status: "Pending",
        description:
          "Our analysis team at Megriosft use end to end innovation proces"
      },
      {
        name: "Ethan Marion",
        designation: "IOS designer",
        profile: "",
        email: "friend2email@gmail.com",
        status: "Available",
        description:
          "Our analysis team at Megriosft use end to end innovation proces"
      }
    ]
    // jobs: JobPosted
    // reviews:[
    //   {
    //     clientName:"",
    //     tagline:"",
    //     time:"",
    //     message:""
    //   }
    // ]
  }
];
const EData = [
  {
    id: 1,
    profile_image: A,
    name: "Anna Hoysted",
    tagline: "Web Designer",
    links: ["fa fa-facebook", "fa fa-twitter", "fa fa-linkedin"]
  },
  {
    id: 2,
    profile_image: B,
    name: "Jesse Leslie",
    tagline: "App Designer",
    links: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-linkedin",
      "fa fa-instagram"
    ]
  },
  {
    id: 3,
    profile_image: C,
    name: "Zane Joyner",
    tagline: "IOS Developer",
    links: ["fa fa-facebook", "fa fa-linkedin"]
  },
  {
    id: 4,
    profile_image: D,
    name: "Finn Osman",
    tagline: "UI/UX Designer",
    links: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-linkedin",
      "fa fa-instagram"
    ]
  },
  {
    id: 5,
    profile_image: B,
    name: "Taylah Axon",
    tagline: "PHP Developer",
    links: ["fa fa-facebook", "fa fa-linkedin"]
  },
  {
    id: 6,
    profile_image: C,
    name: "Zane Joyner",
    tagline: "IOS Developer",
    links: ["fa fa-facebook", "fa fa-linkedin"]
  },
  {
    id: 7,
    profile_image: D,
    name: "Finn Osman",
    tagline: "UI/UX Designer",
    links: ["fa fa-facebook", "fa fa-linkedin"]
  },
  {
    id: 8,
    profile_image: B,
    name: "Taylah Axon",
    tagline: "PHP Developer",
    links: ["fa fa-facebook", "fa fa-linkedin"]
  },
  {
    id: 9,
    profile_image: A,
    name: "Anna Hoysted",
    tagline: "Web Designer",
    links: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-linkedin",
      "fa fa-instagram"
    ]
  }
];

export { Data, EData };
//  const Data = [
//    {
//      id:0,
//      name:"",
//      profileImg:"",
//      tagline:"",
//      location:{
//      address:"",
//      city:"",
//      state:"",
//      zipcode:71000,
//      country:"",
//      telephone:"",
//      email:'',
//      },
//      description:"",
//      socialLinks:[],
//      resume: ResumeData,
//      messages:Messages
//    }
//  ]
//  export default Data
