import Product, { IProduct } from './Product';

interface IProductListProps {
    products: IProduct[]
}

export default function ProductList(props: IProductListProps) {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index} />)}
        </div>
    )
}