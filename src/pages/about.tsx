import Image from "next/image";
import robinImage from '../../public/robin.jpg';

export default function About() {
    return <div>
        About
        <br />
        <Image alt="" src={robinImage} />
    </div>
}