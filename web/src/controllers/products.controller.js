module.exports = {
    products: (req, res) => {
        res.render('products', {
            title: 'Productos',
            styles: ['productsMobile', 'productsTablet', 'productsDesktop']
        });
    },
    create: (req, res) => {
        res.render('productCreate', {
            title: 'Crear Producto',
            styles: ['pCreateMobile', 'pCreateTablet', 'pCreateDesktop']
        });   
    },
    detail: (req, res)=>{
        res.render('productDetail', {
            title: 'Detalle',
            styles: ['productDetailMobile', 'productDetailTablet', 'productDetail desktop'],
        });
    },
    edit: (req, res)=>{
        res.render('productEdit', {
            title: 'Editar Producto',
            styles: ['pEditMobile', 'pEditTablet', 'pEditDesktop'],
        });
    }    
}