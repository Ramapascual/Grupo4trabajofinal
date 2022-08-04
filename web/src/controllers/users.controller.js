module.exports = {
    login: (req, res) => {
        res.render('login', {
            title: 'login',
            styles: ['loginMobile', 'loginTablet', 'loginDesktop']
        });
    },
    register: (req, res) => {
        res.render('register', {
            title: 'register',
            styles: ['registerMobile', 'registerTablet', 'registerDesktop']
        });   
    }
}