import product from '../../assets/bose-headset.png';
import { getDiscount, IProduct } from '../../redux/shop/shop-data';
import { Pill } from '../../styles/pill.styles';
import {
  CardBody,
  CardContainer,
  CardFooter,
  CardImg,
  CardPrice,
  CardPriceContainer,
} from '../../styles/product-card.styles';

interface IProductCardProps extends IProduct {
  category: string;
}
const ProductCardLg = ({ name, price, discount, category }: IProductCardProps) => (
  <CardContainer>
    <CardImg>
      <img src={product} alt="product image" />
    </CardImg>
    <CardBody>
      <p>{name}</p>
      <CardPriceContainer>
        <CardPrice>
          <h5>$ {getDiscount(discount, price)}</h5>
          <span>{price}</span>
        </CardPrice>
        <Pill>{discount}% OFF</Pill>
      </CardPriceContainer>
      <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, explicabo?</p>
      <CardFooter>
        <p className="review">
          <strong>5.0</strong>(34)
        </p>
        <p className="category">{category}</p>
      </CardFooter>
    </CardBody>
  </CardContainer>
);

export default ProductCardLg;
