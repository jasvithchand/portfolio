import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import Blogpost from "../blogPost/Blogpost";
import "./recblog.css"

export default function Recblog() {
    const list =  [1,2,3,4,5,6,7]
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);



  return (
    <motion.div  ref={carousel} className="carousel">
        <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
            {list.map(blog => (
                <motion.div key={blog}>
                    {/* <div className="cardy">
                        {blog}
                    </div> */}
                    <Blogpost/>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  );
}
