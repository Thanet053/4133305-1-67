"use client";
import { verify } from "crypto";
import { FC } from "react";

const staticNum: number = 5;

type Gender = "Mallw" | "Female" | "LGBQ";

interface Props {
  initVal: number;
  gender: Gender;
}

interface Person {
  fristName: string;
  lastName: string;
  age?: number;
  single: boolean;
}

const person: Person = {
  fristName: "Thanet",
  lastName: "Taidang",
  age: 28,
  single: false,
};

const Basic: FC<Props> = ({ initVal, gender }) => {
  const verifyGender = (gd: Gender) => {
    if (gd === "Female") console.log(gd);
    else console.log("Not Female");
  };

  return (
    <>
      <p>Basic</p>
      <div>{staticNum}</div>
      <div>{person.fristName}</div>
      <div>{initVal}</div>
      <div>{gender}</div>
      <button>Increase</button>
      <button onClick={() => verifyGender(gender)}>Gendre</button>
    </>
  );
};

Basic.defaultProps = {
  initVal: 0,
  gender: "Female",
};
export default Basic;
