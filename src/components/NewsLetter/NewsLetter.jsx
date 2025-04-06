// import React from "react";
// import styles from "../NewsLetter/NewsLetter.module.css";
// import Button from "../Button/Button";
// import { assets } from "../../assets/assets";

// const NewsLetter = () => {
//   return (
//     <div className={styles.newsletter__container}>
//       <div className={styles.description}>
//         <img src={assets.logo} alt="" />
//         <h2>Stay updated! Subscribe to my newsletter for the latest tips, trends, and exclusive content 😎</h2>
//       </div>
//       <div className={styles.form__container}>
//         <form className={styles.form}>
//           <input type="email" name="" id="" />
//           <input type="submit" value="Subscribe" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;

import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "../NewsLetter/NewsLetter.module.css";
import { assets } from "../../assets/assets";

const NewsLetter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(""); // "success", "error", "sending"

  const mailchimpUrl = "https://gmail.us14.list-manage.com/subscribe/post?u=38b9124edef3c7c0237165650&amp;id=ec60146770&amp;f_id=00a69ae1f0";

  const handleSubmit = (subscribe, e) => {
    e.preventDefault();
    const email = e.target.email.value;
    subscribe({ EMAIL: email });
    setIsModalOpen(true);
    setModalType("sending");
    setModalMessage("Enviando sua inscrição...");
  };

  return (
    <div className={styles.newsletter__container}>
      <div className={styles.description}>
        <img src={assets.logo} alt="" />
        <h2>Stay updated! Subscribe to my newsletter for the latest tips, trends, and exclusive content 😎</h2>
      </div>

      <div className={styles.form__container}>
        <MailchimpSubscribe
          url={mailchimpUrl}
          render={({ subscribe, status, message }) => {
            // Atualiza o modal quando o status muda
            if (status === "success" || status === "error") {
              setModalType(status);
              setModalMessage(status === "success" ? "Inscrição confirmada! 🎉" : message || "Erro ao inscrever. Tente novamente.");
            }

            return (
              <>
                <form onSubmit={(e) => handleSubmit(subscribe, e)} className={styles.form}>
                  <input type="email" name="email" placeholder="Your Email" required />
                  <input type="submit" value="Subscribe" />
                </form>

                {/* Modal de Status */}
                {isModalOpen && (
                  <div className={styles.modal__overlay}>
                    <div className={`${styles.modal} ${styles[modalType]}`}>
                      <p>{modalMessage}</p>
                      <button onClick={() => setIsModalOpen(false)} className={styles.modal__close}>
                        Fechar
                      </button>
                    </div>
                  </div>
                )}
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
