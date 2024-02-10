import Image from "next/image";

import styles from "@/app/styles/common.module.css";
import Link from "next/link";
const SoftwareCard = (elem) => {
    const{id,type,title,synopsis}=elem.jawSummary;
  return (
   <>
   <div className={styles.card}>
    <div className={styles.card_image} >
      <Image src={elem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
    </div>
    <div className={styles.card_data}>
<h2>
  {synopsis}
</h2>
<Link href={`/software/${id}`} ><button>check</button></Link>
    </div>
   </div>
   </>
  )
}

export default SoftwareCard