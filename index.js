var FacebookClass = /** @class */ (function () {
    function FacebookClass(ProfileName, Followers, Following, NumberOfFriends, About, NoOfPhotos, PendingApproval, birthday) {
        var _this = this;
        this.checkActivityLog = function () {
            console.log("No pending activity");
        };
        this.updateCoverPicture = function () {
        };
        this.updateProfilePicture = function () {
        };
        this.AddComment = function () {
        };
        this.DeleteComment = function () {
        };
        this.SendFriendRequest = function () {
        };
        this.ApproveFriendRequest = function () {
        };
        this.SendMessage = function () {
        };
        this.RecieveMessage = function () {
        };
        this.OpenProfile = function () {
        };
        this.BlockContact = function () {
        };
        this.upadteStatus = function () {
        };
        this.getAge = function () {
            return _this.birthday;
        };
        this.ProfileName = ProfileName;
        this.Followers = Followers;
        this.Following = Following;
        this.NumberOfFriends = NumberOfFriends;
        this.About = About;
        this.NoOfPhotos = NoOfPhotos;
        this.PendingApproval = PendingApproval;
        this.birthday = birthday;
    }
    return FacebookClass;
}());
var today = new Date();
var yyyy = today.getFullYear();
console.log(yyyy);
var allFacebookAttribute = new FacebookClass("Pooja", 2000, 1000, 100, "Live life king size", 20, 10, 2011);
var GivenBirthday = allFacebookAttribute.birthday;
console.log(GivenBirthday);
var age = yyyy - 2011;
console.log("Age of " + allFacebookAttribute.ProfileName + " is " + age);
