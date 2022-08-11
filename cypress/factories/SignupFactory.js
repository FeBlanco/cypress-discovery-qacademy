var Chance = require('chance')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var chance = new Chance()

        var data = {
            name: chance.name(),
            cpf: cpf.generate(),
            email: chance.email(),
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}