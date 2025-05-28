// Description:
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

const obj_1 = {

}

function addProperty(obj, prop, value) {
    let propertyExists = false;

    for (let key in obj) {
        if (key === prop) {
            propertyExists = true;
            break;
        }
    }

    if (propertyExists) {
        throw new Error(`Свойство "${prop}" уже существует в объекте.`);
    } else {
        obj[prop] = value;
    }
}

console.log(addProperty(obj_1, 'name', 'Dmitry'));
