module.exports = {
    products: (req, res) => {
        res.render('../views/products/products', {
            title: 'Productos',
            styles: ['productsMobile', 'productsTablet', 'productsDesktop']
        });
    },
    create: (req, res) => {
        res.render('../views/products/productCreate', {
            title: 'Crear Producto',
            styles: ['pCreateMobile', 'pCreateTablet', 'pCreateDesktop']
        });   
    },
    detail: (req, res)=>{
        res.render('../views/products/productDetail', {
            title: 'Detalle',
            styles: ['productDetailMobile', 'productDetailTablet', 'productDetail desktop'],
        });
    },
    edit: (req, res)=>{
        res.render('../views/products/productEdit', {
            title: 'Editar Producto',
            styles: ['pEditMobile', 'pEditTablet', 'pEditDesktop'],
        });
    }    
}