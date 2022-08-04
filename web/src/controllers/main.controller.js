module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'index',
            styles: ['indexMobile', 'indexTablet', 'indexDesktop'],
            className: 'mainHome',
            elementID: ['homeHeader','homeMain', 'homeFooter'],
            categorySection: [
                {
                    id: 'intro',
                    divClass: 'heading-content',
                    h4Class: 'heading-tittle',
                    h4Content: 'Enriquece tu contenido con',
                    spanClass: 'typing-effect',
                    spanId: 'typing-effect',
                    spanContent: [
                        'Mercancía personalizable canjeable por tus espectadores',
                        'Interacciones divertidas que promueven tu salud',
                        'Dispositivos que faciliten tu transmisión',
                        'Objetos para tu comodidad'
                    ],
                    figureContent: '<div class="image-loop"></div>',
                    hasButton: false
                },
                {
                    id: 'cat1',
                    divClass: 'cat-content',
                    h4Class: 'cat-tittle',
                    h4Content: 'Dispositivos y herramientas',
                    spanClass: 'cat-description',
                    spanId: null,
                    spanContent: 'Encuentra todo lo necesario para hacer tu transmisión en alta calidad de video y sonido, con baja latencia. Cámaras, micrófonos, capturadoras y más...',
                    figureContent: '/assets/devices.jpg',
                    hasButton: true
                }, 
                {
                    id: 'cat2',
                    divClass: 'cat-content',
                    h4Class: 'cat-tittle',
                    h4Content: 'Salud del streamer',
                    spanClass: 'cat-description',
                    spanId: null,
                    spanContent: 'Cuida del recurso más importante en tu transmisión... Tú!',
                    figureContent: '/assets/health.jpg',
                    hasButton: true
                },
                {
                    id: 'cat3',
                    divClass: 'cat-content',
                    h4Class: 'cat-tittle',
                    h4Content: 'Muebles',
                    spanClass: 'cat-description',
                    spanId: null,
                    spanContent: 'Haz de tu espacio de transmisión tan cómodo y conveniente que no necesites levantarte para nada. Encuentra mini heladeras, sillas, mueblería y accesorios aquí',
                    figureContent: '/assets/space.jpg',
                    hasButton: true
                },
                {
                    id: 'cat4',
                    divClass: 'cat-content',
                    h4Class: 'cat-tittle',
                    h4Content: 'Canjeables',
                    spanClass: 'cat-description',
                    spanId: null,
                    spanContent: 'Recompensa a tus espectadores con gran variedad de artículos canjeables, crea tu marca y fideliza',
                    hasButton: true
                }
            ]
        });
    },
    cart: (req, res)=>{
        res.render('productCart', {
            title: 'Carrito de compras',
            styles: ['cartMobile', 'cartTablet', 'cartDesktop'],
        });
    }
}