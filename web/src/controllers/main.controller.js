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
            className: 'not-main-Home',
            shoppingItems:[
                {
                    formSelectorName: 'cartArticle1',
                    formSelectorValue: 'productID=1, value=40000',
                    checkboxName: 'cartArticleSelected',
                    productId: 1,
                    mainPicSrc: '/assets/productImages/streamDeck.jpg',
                    picAlt: 'Streamdeck',
                    productName: 'Stream deck Elgato MK.2',
                    price: 40000
                },
                {
                    formSelectorName: 'cartArticle2',
                    formSelectorValue: 'productID=2, value=20490',
                    checkboxName: 'cartArticle2Selected',
                    productId: 2,
                    mainPicSrc: '/assets/productImages/capturer.jpg',
                    picAlt: 'Capturer',
                    productName: '4K Plus Capturadora de video HDMI con loop out, HD 60S USB 3.0',
                    price: 20490
                }
            ],
            purchaseSubTotal: 0,
            paymentMethods: [
                {
                    selectorValue: 'paymentMetId=1, cardNumber= "4010990061071678", cardIssuer= "Visa", cardHolder= "Sebastian Rangel", expirationDate= 01/03/2025',
                    radioValue: 'paymentId = 1',
                    issuer: 'Visa',
                    last4: '1678',
                    cardHolder: 'Sebastian Rangel',
                    expirationDate: '03/25'
                },
                {
                    selectorValue: 'paymentMetId=2, cardNumber= "530455348651162", cardIssuer= "Mastercard", cardHolder= "Sebastian Rangel", expirationDate= 01/04/2024',
                    radioValue: 'paymentId = 2',
                    issuer: 'Mastercard',
                    last4: '1162',
                    cardHolder: 'Sebastian Rangel',
                    expirationDate: '04/24'
                }
            ],
            shippingAddresses: [
                {
                    selectorValue: 'addressID= 1, fullName = "Sebastian Rangel", address= "11580 NW 105th St", city= "Miami" state= "Florida", zipCode= 33178',
                    radioValue: 'addressId =1',
                    tittle: 'Sebastian Rangel',
                    address: '11580 NW 105th St Miami, Florida',
                    zipCode: 33178
                },
                {
                    selectorValue: 'addressID= 2, fullName = "Camila Carreño", address= "208 Ridge St", city= "Clark Summit" state= "Pennsylvania", zipCode= 18411',
                    radioValue: 'addressId =1',
                    tittle: 'Camila Carreño',
                    address: '208 Ridge St Clark Summit, Pennsylvania',
                    zipCode: 18411
                }
            ]
        });
    }
}