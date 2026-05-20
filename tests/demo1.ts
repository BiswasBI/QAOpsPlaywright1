import { Locator, Page } from "@playwright/test";

let message1: stringtring="hello TS";
console.log(message1);
let num1: number=5;
console.log(num1);
let nums1: number[]=[1,4,2,3,7,8];
console.log(nums1);
let abc1:any= "dkjfh fdsjfn kjhf289749";
console.log(abc1);
function add(a:number,b:number):number
{
    return a+b;
}
console.log(add(4,5));
 
let user1:{name:string,age:number,location:string}={name: "robin", age: 30,location:"chennai"};
user1.location="bangalore";

class LoginPage {
page:Page;
userName:Locator;
passWord:Locator;
submitButton:Locator;

    constructor(page:any) {
        this.page = page;
        this.userName = page.locator('#email');
        this.passWord = page.locator("[type='password']");
        this.submitButton = page.locator("[type='submit']");

    }
