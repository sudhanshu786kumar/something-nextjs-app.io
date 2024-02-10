import hstyles from "@/app/styles/herosection.module.css";
import cstyle from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const Hero = ({title,imageUrl}) => {
  return (
   <>
   <main className={hstyles.main_section}>
    <div className={cstyle.container}>
<div className={cstyle.grid_two_section}>
<div className={hstyles.hero_content}>
<h1>{title}</h1>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<Link href="/software">
<button>
    Explore Next.js
</button>
</Link>

</div>
<div className={hstyles.hero_image}>
<Image src={imageUrl} width={500} height={500}/>
</div>
</div>
    </div>
    <div className={hstyles['custom-shape-divider-bottom-1707563388']}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={hstyles['shape-fill']}></path>
    </svg>
</div>
   </main>
   </>
  )
}

export default Hero