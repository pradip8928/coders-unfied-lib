
export class Log{
    static success(message:string){
        console.log(`%c ${message}`,'color:green');
    }
    static danger(message:string){
        console.log(`%c ${message}`,'color:red');
    }
    static warning(message:string){
        console.log(`%c ${message}`,'color:yellow;background:rosybrown;');
    }
}