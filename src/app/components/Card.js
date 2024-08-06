import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';

export default function Card({ imageSrc }) {
  return (
    <div>
      <div className={styles.content}>
        <Image 
        src={imageSrc}
        alt="Image" 
        width={500} 
        height={300} 
        className={styles.card}
      />
      </div>
    </div>
  );
}
