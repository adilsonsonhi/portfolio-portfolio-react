import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "./ContactForm.module.css";
import Heading from "../Heading/Heading";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    FNAME: "",
    LNAME: "",
    EMAIL: "",
    MESSAGE: "",
    website_design: false,
    ux_ui_design: false,
    content_creation: false,
    strategy_consulting: false,
    app_development: false,
    other: false,
  });
  const [errors, setErrors] = useState({
    FNAME: false,
    LNAME: false,
    EMAIL: false,
    MESSAGE: false,
    checkboxes: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  const maxMessageLength = 255; // Limite máximo de caracteres para a mensagem

  const mailchimpUrl = "https://gmail.us14.list-manage.com/subscribe/post?u=38b9124edef3c7c0237165650&amp;id=ec60146770&amp;f_id=00a59ae1f0";

  // Valida o formulário em tempo real
  useEffect(() => {
    const isCheckboxSelected =
      formData.website_design || formData.ux_ui_design || formData.content_creation || formData.strategy_consulting || formData.app_development || formData.other;

    const isValid = formData.FNAME.trim() !== "" && formData.LNAME.trim() !== "" && formData.EMAIL.trim() !== "" && formData.MESSAGE.trim() !== "" && isCheckboxSelected;

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Limpa erros ao digitar
    if (errors[name] || name.startsWith("group")) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (subscribe, e) => {
    e.preventDefault();

    // Validação final (redundante para segurança)
    const isCheckboxSelected =
      formData.website_design || formData.ux_ui_design || formData.content_creation || formData.strategy_consulting || formData.app_development || formData.other;

    const newErrors = {
      FNAME: formData.FNAME.trim() === "",
      LNAME: formData.LNAME.trim() === "",
      EMAIL: formData.EMAIL.trim() === "",
      MESSAGE: formData.MESSAGE.trim() === "",
      checkboxes: !isCheckboxSelected,
    };

    setErrors(newErrors);

    if (isFormValid) {
      const data = {
        EMAIL: formData.EMAIL,
        FNAME: formData.FNAME,
        LNAME: formData.LNAME,
        MESSAGE: formData.MESSAGE,
        "group[8858][1]": formData.website_design ? "1" : undefined,
        "group[8859][2]": formData.ux_ui_design ? "2" : undefined,
        "group[8860][4]": formData.content_creation ? "4" : undefined,
        "group[8861][8]": formData.strategy_consulting ? "8" : undefined,
        "group[8862][16]": formData.app_development ? "16" : undefined,
        "group[8863][32]": formData.other ? "32" : undefined,
      };

      subscribe(data);
      setIsModalOpen(true);
      setModalType("sending");
      setModalMessage("Sending your message...");
    } else {
      setModalType("error");
      setModalMessage("Fill in all required fields.");
      setIsModalOpen(true);
    }
  };

  return (
    <div className={styles.contactForm__container}>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => {
          if (status === "success" || status === "error") {
            setModalType(status);
            setModalMessage(status === "success" ? "Message sent successfully! 🎉" : message || "Error sending. Please try again.");
          }

          return (
            <div className={styles.container}>
              <Heading title="Contact Me" paragraph="From sleek designs to seamless functionality, I ensure your online platform reflects your vision and drives results" />

              <div className={styles.container__form}>
                <div className={styles.left__side}>
                  <form onSubmit={(e) => handleSubmit(subscribe, e)} className={styles.form}>
                    <div className={styles.indicatesRequired}>
                      <span className={styles.asterisk}>*</span> (Required fields)
                    </div>

                    <div className={styles.nameGroup}>
                      {/* Primeiro Nome */}
                      <div className={styles.fieldGroup}>
                        <label htmlFor="mce-FNAME">
                          First Name <span className={styles.asterisk}>*</span>
                        </label>
                        <input
                          type="text"
                          name="FNAME"
                          placeholder="E.g.: João"
                          id="mce-FNAME"
                          value={formData.FNAME}
                          onChange={handleChange}
                          className={`${styles.input} ${errors.FNAME ? styles.errorInput : ""}`}
                        />
                        {errors.FNAME && <p className={styles.errorText}>Campo obrigatório.</p>}
                      </div>

                      {/* Último Nome */}
                      <div className={styles.fieldGroup}>
                        <label htmlFor="mce-LNAME">
                          Last Name <span className={styles.asterisk}>*</span>
                        </label>
                        <input
                          type="text"
                          name="LNAME"
                          placeholder="E.g.: Silva"
                          id="mce-LNAME"
                          value={formData.LNAME}
                          onChange={handleChange}
                          className={`${styles.input} ${errors.LNAME ? styles.errorInput : ""}`}
                        />
                        {errors.LNAME && <p className={styles.errorText}>Campo obrigatório.</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="mce-EMAIL">
                        Email <span className={styles.asterisk}>*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="E.g.: joao.silva@email.com"
                        value={formData.EMAIL}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.EMAIL ? styles.errorInput : ""}`}
                      />
                      {errors.EMAIL && <p className={styles.errorText}>Campo obrigatório.</p>}
                    </div>

                    {/* Mensagem */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="mce-MESSAGE">
                        Message <span className={styles.asterisk}>*</span>
                      </label>
                      <textarea
                        name="MESSAGE"
                        id="mce-MESSAGE"
                        placeholder="Write your message here..."
                        value={formData.MESSAGE}
                        onChange={handleChange}
                        maxLength={maxMessageLength}
                        className={`${styles.textarea} ${errors.MESSAGE ? styles.errorInput : ""}`}
                      />
                      {errors.MESSAGE && <p className={styles.errorText}>Mandatory field.</p>}
                      <div className={styles.characterCount}>
                        {formData.MESSAGE.length}/{maxMessageLength} characters
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className={styles.checkboxGroup}>
                      <h6>
                        Subject (Select at least 1) <span className={styles.asterisk}>*</span>
                      </h6>
                      {errors.checkboxes && <p className={styles.errorText}>Please select at least one option.</p>}
                      <ul>
                        {[
                          { id: "website_design", label: "Website Design", value: "1" },
                          { id: "ux_ui_design", label: "UX/UI Design", value: "2" },
                          { id: "content_creation", label: "Content Creation", value: "4" },
                          { id: "strategy_consulting", label: "Strategy & Consulting", value: "8" },
                          { id: "app_development", label: "App Development", value: "16" },
                          { id: "other", label: "Other", value: "32" },
                        ].map((item) => (
                          <li key={item.id}>
                            <input type="checkbox" id={item.id} name={item.id} checked={formData[item.id]} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.label}</label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={!isFormValid}>
                      Submit
                    </button>
                  </form>
                </div>

                <div className={styles.right__side}>
                  <ul>
                    <li>
                      <h6>Let's Connect</h6>
                    </li>
                    <li>
                      <p>Stay in touch and reach me directly.</p>
                    </li>
                    <li>
                      <NavLink>
                        <img src={assets.message_circle} alt="" />
                        <span>WhatsApp</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <img src={assets.instagram} alt="" />
                        <span>Instagram</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <img src={assets.linkedin} alt="" />
                        <span>LinkedIn</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <img src={assets.github} alt="" />
                        <span>Github</span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h6>Want to meet up?</h6>
                    </li>
                    <li>
                      <p>Let's schedule a time to talk.</p>
                    </li>
                    <li>
                      <NavLink>
                        <img src={assets.map_pin} alt="" />
                        <span>Avenida Praia da Vitória 19, Lisboa, PT</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modal de status */}
              {isModalOpen && (
                <div className={styles.modalOverlay}>
                  <div className={`${styles.modal} ${styles[modalType]}`}>
                    <p>{modalMessage}</p>
                    <button onClick={() => setIsModalOpen(false)} className={styles.modalClose}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default ContactForm;
