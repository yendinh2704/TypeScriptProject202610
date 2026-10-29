//named function
function getTestConfig(): void {
    let baseURL: string = "https://demoqa.com/";
    let timeOut: number = 30000;
    let isHeadless: boolean = true;
    console.log(`Running test on ${baseURL} with timeout ${timeOut}ms (Headless: ${isHeadless})`);
} 
//console.log(getTestConfig());

//anonymous function
let myConfig = function(): void {
    let baseURL: string = "https://demoqa.com/";
    let timeOut: number = 30000;
    let isHeadless: boolean = true;
    console.log(`Running test on ${baseURL} with timeout ${timeOut}ms (Headless: ${isHeadless})`);
};
//console.log(myConfig());

//arrow function
let myConfigArrow = (): void => {
    let baseURL: string = "https://demoqa.com/";
    let timeOut: number = 30000;
    let isHeadless: boolean = true;
    console.log(`Running test on ${baseURL} with timeout ${timeOut}ms (Headless: ${isHeadless})`);
};
    //console.log(myConfigArrow());

let Option1 : {
    timeout: number;
    force: boolean;
}
let elementArrow = (selector: string, options: Option1): void => {
    if( options == null){
        options = {timeout: 5000, force: false};
    }
    console.log(`Clicking ${selector} with timeout ${options.timeout}ms and force=${options.force}`);
}
console.log(elementArrow("#submit", {timeout: 10000, force: true}));
