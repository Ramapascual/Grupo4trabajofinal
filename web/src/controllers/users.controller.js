module.exports = {
    login: (req, res) => {
        res.render('../views/users/login', {
            title: 'login',
            styles: ['loginMobile', 'loginTablet', 'loginDesktop'],
            className: 'not-main-Home',
            formClass: 'main-form',
            iconClass: 'material-icons',
            inputs: [
                {
                    type: 'text',
                    name: 'userName',
                    placeholder: 'Nombre de usuario',
                    icon: 'badge',
                    fieldClass: null,
                    class: 'username-control',
                    minlength: 4,
                    required: true
                },
                {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Contraseña',
                    icon: 'key',
                    spanClass: 'password-icon',
                    fieldClass: 'last-field',
                    class: 'password-control',
                    minlength: 8,
                    required: true
                }
            ]
        });
    },
    register: (req, res) => {
        res.render('../views/users/register', {
            title: 'register',
            styles: ['registerMobile', 'registerTablet', 'registerDesktop'],
            className: 'not-main-Home',
            formClass: 'main-form',
            iconClass: 'material-icons',
            inputs: [
                {
                    type: 'text',
                    name: 'fullName',
                    placeholder: 'Nombre y apellido',
                    icon: 'person_pin',
                    fieldClass: null,
                    class: 'control',
                    minlength: 4,
                    required: true
                },
                {
                    type: 'text',
                    name: 'userName',
                    placeholder: 'Nombre de usuario',
                    icon: 'badge',
                    fieldClass: null,
                    class: 'control',
                    minlength: 4,
                    required: true
                },
                {
                    type: 'email',
                    name: 'email',
                    placeholder: 'E-mail',
                    icon: 'email',
                    spanClass: null,
                    fieldClass: null,
                    class: 'control',
                    minlength: 8,
                    required: true
                },
                {
                    type: 'date',
                    name: 'birthDay',
                    placeholder: 'Tu fecha de nacimiento',
                    icon: 'event',
                    spanClass: 'password-icon',
                    fieldClass: null,
                    class: 'control date',
                    min: '1900-01-01',
                    max: '2020-01-01',
                    required: false
                },
                {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Contraseña',
                    icon: 'key',
                    spanClass: 'password-icon',
                    fieldClass: null,
                    class: 'control',
                    minlength: 8,
                    required: true
                },
                {
                    type: 'password',
                    name: 'passwordConfirm',
                    placeholder: 'Confirmar contraseña',
                    icon: 'password',
                    fieldClass: 'last-field',
                    class: 'control',
                    minlength: 8,
                    required: true
                }
                
            ]
        });   
    }
}