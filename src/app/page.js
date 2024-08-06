import HoverCard from '../app/components/HoverCard.js';
import styles from './page.module.css'
import Image1 from "../../public/images/image1.jpeg";
import Image2 from "../../public/images/image2.jpeg"
import Image5 from "../../public/images/image5.jpg"
import Image6 from "../../public/images/image6.jpg"
import Image4 from "../../public/images/image4.jpg"
import Image3 from "../../public/images/image3.jpeg"

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6
];

export default function Home() {
  return (
    <div className={styles.container}>
      {images.map((imageSrc, index) => (
        <HoverCard key={index} imageSrc={imageSrc} />
      ))}
    </div>
  );
}
