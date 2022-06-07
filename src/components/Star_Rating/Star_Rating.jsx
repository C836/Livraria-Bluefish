import { useEffect, useState } from "react";
import { empty, full, half } from "./../../assets/images/stars/index";

export default function Star_Rating(props) {
  const [rating, setRating] = useState([]);

  useEffect(() => {
    let star = Number(String(props.avaliacao).replace(",", "."));
    let arr = [0, 0, 0, 0, 0];

    for (let x in arr) {
      arr[x] = star >= 1 ? 2 : star >= 0.5 ? 1 : 0;
      star--;
    }

    setRating(arr);
  }, [props.avaliacao]);

  return (
    <>
      {rating.map((item, index) => {
        return (
          <img
            key={index}
            src={
              rating[index] === 0 ? empty : rating[index] === 1 ? half : full
            }
          />
        );
      })}
    </>
  );
}
