
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import Loader from "../home/loader";
import { LoginFormInputData } from "@/constants/data/formdata";
import {
  offLoginModal,
  offRegisterModal,
  onRegisterModal,
} from "../../features/modals/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/features/auth/authReducer";

const ModalVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  enter: {
    opacity: 1,
    y: "0",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 1,
    y: "100vh",

    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};
const LoginModal = () => {
  const dispatch = useDispatch();

  const { loginisSuccess, loginisLoading } = useSelector((store) => store.auth);
  const { loginmodal } = useSelector((store) => store.modal);
  const handleClearAlert = () => {
    dispatch(offLoginModal());
  };
  const [formvalue, setFormValue] = useState({
    email: "victorcancode100@gmail.com",
    hashedPassword: "12345",
  });

  const handleFormChange = (e) => {
    setFormValue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginModal = () => {
    dispatch(offLoginModal());
    dispatch(onRegisterModal());
  };
  const handleFormSubmision = (e) => {
    e.preventDefault();
    dispatch(LoginUser(formvalue));
  };

  useEffect(() => {
    if (loginisSuccess) {
      dispatch(offLoginModal());
    }
  }, [loginisSuccess]);
  return (
    <LoginModalStyles
      as={motion.div}
      initial={{ opacity: 0 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1.7,
        },
      }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        variants={ModalVariants}
        initial="initial"
        animate={loginmodal ? "enter" : "exit"}
        exit="exit"
        className="guestModalCard gap-8 relative justify-center items-center"
      >
        <div
          className="cross absolute top-5 z-[500] right-5"
          onClick={handleClearAlert}
        >
          <RxCross2 />
        </div>
        <div className="w-full top-0 left-0 relative px-8 flex items-center justify-between">
          <h3 className="text-3xl font-booking_font4 family2">
            Sign In
            <span className="block text-sm font-normal max-w-[250px] pt-1 regular">
              Login to your account and check out your bookings
            </span>
          </h3>
        </div>
        <div className="w-full overflow-auto h-[350px]  flex">
          <form
            onSubmit={handleFormSubmision}
            className="w-[90%] mx-auto p-4 pb-8 flex flex-col gap-8 lg:gap-16 "
          >
            <div className="w-full flex flex-col gap-2">
              {LoginFormInputData?.map((input, index) => {
                return (
                  <label
                    key={index}
                    htmlFor={input.label}
                    className="text-sm font-booking_font flex flex-col gap-2 text-dark"
                  >
                    <span className="text-dark">{input.label}</span>
                    <input
                      className="w-full rounded-md inputs text-dark
                           font-normal text-sm"
                      required={true}
                      name={input?.name}
                      id={input.label}
                      value={formvalue[input.name]}
                      type={input.type}
                      placeholder={input.label}
                      onChange={handleFormChange}
                    ></input>
                  </label>
                );
              })}
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-3">
              <button
                data-test="loginmodal_button"
                type="submit"
                disabled={loginisLoading}
                className="p-3 px-8 hover:opacity-[.5] text-[#fff] flex btn items-center justify-center w-full cursor-pointer 
                   bg-[#000] rounded-md regular"
              >
                {loginisLoading ? (
                  <div className="w-full flex justify-center items-center gap-4">
                    <Loader type="dots" /> Login in progress
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
              <div className="w-full flex items-center justify-start gap-2">
                <span className="text-sm font-normal text-dark">
                  <span className="text-grey">Not yet a Member?</span>{" "}
                  <span
                    onClick={handleLoginModal}
                    style={{ textDecoration: "underline" }}
                    className="font-booking_font_bold family2 cursor-pointer"
                    //  to={"#"}
                  >
                    Sign Up
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </LoginModalStyles>
  );
};
const LoginModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 4900000;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  .option {
    width: 100%;
    position: relative;
    text-align: center;
    padding: 0 1.4rem;
    font-size: 15px;
    &::after {
      width: 45%;
      height: 0.2px;
      content: "";
      background-color: rgba(0, 0, 0, 0.1);
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      width: 45%;
      height: 0.4px;
      content: "";
      background-color: rgba(0, 0, 0, 0.1);
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .guestModalCard {
    max-width: 420px;
    min-width: 400px;
    display: flex;
    height: 580px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 2rem;
    border-radius: 20px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);
    position: relative;
    @media (max-width: 780px) {
      max-width: 100%;
      min-width: 100%;
      height: 100vh;
      border-radius: 0px;
    }
    .cross {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: #d9d8d8;
      }
      svg {
        font-size: 20px;
      }
    }
    .deleteCardBottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
      gap: 1rem;
      button {
        padding: 1rem 2rem;
        border: none;
        /* font-size: 1.4rem; */
        font-weight: 400;
        background: var(--grey-2);
        color: #fff;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        text-transform: none;
        &:hover {
          background: var(--grey-1);
          color: var(--text-color);
          box-shadow: 0 0 0 6px #e7e7e9;
          transition: all 0.3s;
        }
        &.deleteBtn {
          background: var(--blue-1);
          &:hover {
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default LoginModal;
