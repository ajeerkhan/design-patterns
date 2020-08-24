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

export default Logger;