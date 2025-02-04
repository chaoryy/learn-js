let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

function isEmpty(schedule) {
    for(let key in schedule) {
        return false;
    }
    return true;
}

function multiplyNumeric(menu) {
    for(let key in menu){
        if(typeof menu[key] == 'number'){
            menu[key] *= 2;
        }
    }
}