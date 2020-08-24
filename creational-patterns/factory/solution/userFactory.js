import Shopper from './Shopper.js';
import Employee from './Employee.js';

const UserFactory = (name, money, type, employer='')=>{
    var user=null;
    if (type === 'employee')
        user = new Employee(name, money, employer);
       else 
       user = new Shopper(name, money);
       
    return user;
}

export default UserFactory;