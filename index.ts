class FacebookClass{

ProfileName : String;
Followers:Number;
Following:Number;
NumberOfFriends:Number;
About:String;
NoOfPhotos:Number;
PendingApproval:Number;
birthday:Number;





constructor(ProfileName : String, Followers:Number,Following:Number,NumberOfFriends:Number,
    About:String,NoOfPhotos:Number,PendingApproval:Number,birthday:Number){
    this.ProfileName =ProfileName;
    this.Followers =Followers;
    this.Following = Following;
    this.NumberOfFriends =NumberOfFriends;
    this.About = About;
    this.NoOfPhotos = NoOfPhotos;
    this.PendingApproval = PendingApproval;
    this.birthday = birthday;

}




checkActivityLog=()=>{
   console.log("No pending activity");
}


updateCoverPicture=()=>{

}

updateProfilePicture=()=>{

}

AddComment=()=>{

}

DeleteComment=()=>{

}
SendFriendRequest=()=>{

}
ApproveFriendRequest=()=>{

}
SendMessage=()=>{

}
RecieveMessage=()=>{

}
OpenProfile=()=>{

}

BlockContact=()=>{

}

upadteStatus=()=>{

}

getAge=()=>{
    
 return this.birthday;
}



}


let today = new Date();
let yyyy = today.getFullYear();
console.log(yyyy);


let allFacebookAttribute = new FacebookClass("Pooja",2000,1000,100,"Live life king size",20,10,2011);
let GivenBirthday = allFacebookAttribute.birthday;
console.log(GivenBirthday);
let age = yyyy - 2011;
console.log("Age of "+ allFacebookAttribute.ProfileName+ " is "+ age)
