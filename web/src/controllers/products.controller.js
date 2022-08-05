module.exports = {
    products: (req, res) => {
        res.render('../views/products/products', {
            title: 'Productos',
            styles: ['productsMobile', 'productsTablet', 'productsDesktop'],
            className: 'not-main-Home',
        });
    },
    create: (req, res) => {
        res.render('../views/products/productCreate', {
            title: 'Crear Producto',
            styles: ['pCreateMobile', 'pCreateTablet', 'pCreateDesktop'],
            className: 'not-main-Home',
        });   
    },
    detail: (req, res)=>{
        res.render(('../views/products/productDetail'), {
            title: 'Detalle',
            styles: ['productDetailMobile', 'productDetailTablet', 'productDetailDesktop'],
            className: 'not-main-Home',
            product:{
                id: '1',
                category: 'Dispositivos',
                subCategory: 'Stream decks',
                images: [
                    '/assets/productImages/streamDeck.jpg',
                    '/assets/productImages/streamdeck1.jpg',
                    '/assets/productImages/streamdeck2.jpg',
                    '/assets/productImages/streamdeck3.jpg'
                ],
                picAlt: 'device',
                name: 'Stream deck Elgato MK.2',
                rating: 4,
                price: 20490,
                description: {
                    features: [
                        '15 teclas LCD: toque para cambiar escenas, inicie medios, ajuste el audio y más',
                        'Totalmente personalizable: Personaliza las teclas con iconos personalizados o elige entre cientos.',
                        'Integración directa: control de captura de juegos, OBS, XSplit, TipeeeStream, Twitch, YouTube, Mixer y más.',
                        'Fácil configuración: simplemente arrastra y suelta acciones en las teclas de la aplicación.',
                        'Control ilimitado: anidar carpetas dentro de carpetas para almacenar tantas acciones como desee.'
                    ],
                    infoImages: [
                        '/assets/productImages/info1.jpg',
                        '/assets/productImages/info2.jpg',
                        '/assets/productImages/info3.jpg',
                        '/assets/productImages/info4.jpg'
                    ]
                },
                specs: '',
                more: ''
            }
        });
    },
    edit: (req, res)=>{
        res.render('../views/products/productEdit', {
            title: 'Editar Producto',
            styles: ['pEditMobile', 'pEditTablet', 'pEditDesktop'],
            className: 'not-main-Home',
        });
    }    
}