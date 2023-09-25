import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  ICartItem,
  decreaseProductCount,
  deleteItem,
  increaseProductCount,
} from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";

interface IShoppingCartItem {
  item: any;
  cartItems: any[];
  img: string;
  title: string;
  count: number;
  category: string;
  price: number;
}

export default function ShoppingCartItem({
  item,
  cartItems,
  img,
  title,
  count,
  category,
  price,
}: IShoppingCartItem) {
  const dispatch = useDispatch();
  const handleDecrease = (product: ICartItem, id: number) => {
    if (cartItems.some((item) => item.id === id)) {
      if (product.count <= 1) dispatch(deleteItem(id));
      dispatch(decreaseProductCount(product));
    }
  };
  return (
    <Card sx={{ width: "100%", maxHeight: 200, display: "flex" }}>
      <Image
        width={200}
        height={100}
        style={{ objectFit: "cover" }}
        src={img}
        alt={category}
      />
      {/* <CardMedia component="img" sx={{}} image={img} alt={category} /> */}
      <CardContent sx={{ width: "100%" }}>
        <Typography
          sx={{ width: "100%" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <div className="flex w-[50%] justify-center items-center gap-4">
        <button onClick={() => handleDecrease(item, item.id)}>
          <Minus />
        </button>
        <span className="w-4 h-4 flex justify-center items-center font-medium">
          {count}
        </span>
        <button onClick={() => dispatch(increaseProductCount(item))}>
          <Plus />
        </button>
      </div>
    </Card>
  );
}
