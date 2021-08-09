const mongoose= require('mongoose')
const EmpleadoShema= mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    salario:{
        type: Number,
        require: true
    },
});
module.exports = mongoose.model('Empleado',EmpleadoShema);