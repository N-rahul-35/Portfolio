/*import React from "react";
import PageHeaderContent from "../../Components/pageHeadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";

import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;*/
/*
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../Components/pageHeadercontent";
import axios from "axios";
import "./style.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;*/


// import React, { useState } from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import PageHeaderContent from "../../Components/pageHeadercontent";
// import axios from "axios";
// import "./style.scss";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/contact", formData);
//       alert(response.data.message);
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//       alert("There was an error submitting the form!");
//     }
//   };

//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Talk</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <form className="contact__content__form" onSubmit={handleSubmit}>
//             <div className="contact__content__form__controlswrapper">
//               <div>
//                 <input
//                   required
//                   name="name"
//                   className="inputName"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name" className="nameLabel">
//                   Name
//                 </label>
//               </div>
//               <div>
//                 <input
//                   required
//                   name="email"
//                   className="inputEmail"
//                   type="text"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="email" className="emailLabel">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <textarea
//                   required
//                   name="description"
//                   className="inputDescription"
//                   rows="5"
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="description" className="descriptionLabel">
//                   Description
//                 </label>
//               </div>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </Animate>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-helpimport React from 'react';
//https://formspree.io/f/xleqyqekimport React from 'react';import React from 'react';
import React, { useState } from "react";
import PageHeaderContent from "../../Components/pageHeadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const Contact = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xleqyqek");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    navigate("/");
    toast.success("Message sent successfully!");
    // if (state.succeeded) {
    //   setFormState({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });
    //   navigate("/home");
    // }
  };

  return (
    <section id="contact" className="contact">
      <ToastContainer />
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form onSubmit={onSubmit} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formState.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  rows="5"
                  value={formState.message}
                  onChange={handleInputChange}
                />
                <label htmlFor="message" className="descriptionLabel">
                  Description
                </label>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
