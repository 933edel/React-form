import React from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import { TbManualGearbox } from "react-icons/tb";

import { GiCarWheel } from "react-icons/gi";

import { IoCarSport } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const Form = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button text={"Configure"} icon={<TbManualGearbox />} />
          <Button text={"Test Drive"} icon={<GiCarWheel />} />
        </div>
        <Button isOutline={true} text={"Brochure"} icon={<IoCarSport />} />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />
          </div>
        </form>

        <Button isOutline={false} text={"Next"} icon={<MdOutlinePayment />} />
      </div>

      <div className={`${styles.contact_image}`}>
        <img
          src="/images/car.jpg
        "
          alt="wallpaper"
        />
      </div>
    </section>
  );
};

export default Form;
