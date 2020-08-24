class Logger {
    constructor(name){
        this.name = name;
        this.logs = [];
    }

    log(msg){
        const _time = new Date().toISOString();
        const _msg = `${this.name} - ${_time} - ${msg}`;
        this.logs.push(_msg);
        console.log(_msg);
    }
    count(){
        return this.logs.length;
    }
    toString(){
        return( JSON.stringify(
            {
             name : this.name,
             messages : [...this.logs]
            })
        )
    }
}

export default new Logger('default');

//instance manager to control the creation of logger instance.
//variable 'loggerInstance' is referred with class name to indicate this as class level, not a instance level.
//if you use keyword 'this', then 'loggerInstance' become instance variable, then it will create new instance for each new();
class LoggerInstanceManager {
    constructor(name){
        if(!LoggerInstanceManager.loggerInstance){
            LoggerInstanceManager.loggerInstance = new Logger(name);
        }
    }

    getInstance(){
        return LoggerInstanceManager.loggerInstance;
    }
}

export {LoggerInstanceManager as Logger};


/**
 * Approach 2
 */
class LoggerManager {
    static _instance;
    static getInstance(name) {
        console.log( `1 instance status ${LoggerManager._instance}`)
        if( typeof LoggerManager._instance === 'undefined') {
            LoggerManager._instance = new Logger(name);
            console.log( `2 instance status ${LoggerManager._instance}`)
            return  LoggerManager._instance;
        }
        else{
            console.log( `3 instance status ${LoggerManager._instance}`)
            return LoggerManager._instance;
        }
        
    }
}
export {LoggerManager};


//Approach 3
LoggerManager._getInstance = (name)=> {
    console.log( `1 instance status ${LoggerManager._instance}`)
    if( typeof LoggerManager._instance === 'undefined') {
        LoggerManager._instance = new Logger(name);
        console.log( `2 instance status ${LoggerManager._instance}`)
        return  LoggerManager._instance;
    }
    else{
        console.log( `3 instance status ${LoggerManager._instance}`)
        return LoggerManager._instance;
    }
}

