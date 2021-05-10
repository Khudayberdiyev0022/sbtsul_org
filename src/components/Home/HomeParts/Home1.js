import React, { useEffect, useState } from "react";
import img1 from "../../../assets/img/slider1.webp";
import img2 from "../../../assets/img/slider2.webp";
import img3 from "../../../assets/img/slider3.webp";
import style from "./Home1.module.css";
import { Fragment } from "react";

function Home1({ name }) {
  const [image, setImage] = useState(img1);
  useEffect(() => {
    const interval = setInterval(() => {
      switch (image) {
        case img1:
          setImage(img2);
          break;
        case img2:
          setImage(img3);
          break;
        case img3:
          setImage(img1);
          break;
        default:
          setImage(img1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("admin")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // style.links
  if (admin) {
    return null;
  } else {
    return (
      <Fragment>
        <div className={style.main}>
          <div
            className={style.Home1}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={style.bg}></div>
            {/* <span></span> */}
            <h1>{name}</h1>

            {/* <h2 className={style.sections}>{name}</h2> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home1;

// class Home1 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       img: img1,
//       img1: img2,
//       img2: img3,
//       img3: img1,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       switch (this.state.img) {
//         case img1:
//           this.setState({ img: img2 });
//           break;
//         case img2:
//           this.setState({ img: img3 });
//           break;
//         case img3:
//           this.setState({ img: img1 });
//           break;

//         default:
//           this.setState({ img: null });
//           break;
//       }
//     }, 5000);
//   }
//   componentDidUpdate() {
//     clearInterval(this.setInterval);
//   }

//   componentWillUnmount() {
//     clearInterval(this.setInterval);
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className={style.main}>
//           <div
//             className={style.Home1}
//             style={{ backgroundImage: `url(${this.state.img})` }}
//           >
//             <div className={style.bg}></div>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default Home1;
