import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-bootstrap";
import { useState, useRef } from "react"; // useRef 추가

const Example1 = () => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [resultText, setResultText] = useState("");

  const checkNumtype = () => {
    const num = Number(inputRef.current.value);
    console.log(num);
    let result = num == "0" ? 0 : num < 0 ? "음수" : "양수";
    console.log(result);
    result = "입력한 숫자는 " + result + "입니다"
    return setResultText(result);
  };
  return (
    <>
      <Card
        className="max-h-[650px] m-[5px]"
        style={{ width: "18rem", fontSize: "0.8em" }}
      >
        <Card.Body className="bg-[black] text-white flex flex-col">
          <div className="min-h-[30%]">
            <Card.Title>문제1</Card.Title>
            <div className="h-[30%]">
              <div className="min-h-[200px]">
                <p className="text-[0.9em]">
                  유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는
                  프로그램을 만드시오.
                </p>
                <p></p>
                <div className="flex">
                  <input type="number" ref={inputRef} />
                  <button onClick={() => checkNumtype()}>입력</button>
                </div>
                <span>{resultText}</span>
              </div>
              <Collapse in={open}>
                <div
                  id="example-fade-text"
                  className="overflow-hidden transition-all duration-300 mt-[1em]"
                >
                  <p>코드: {"num == '0' ? 0:num < 0? '음수':'양수'"}</p>
                  <p>
                    해설: 삼항연산식을 사용해서 첫 조건에서 0인지 아닌지
                    판단하고 0이 아니면 다름 삼항연산식을 실행 양수 음수 판단.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <Button
            className="mt-[0.5em]"
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            해설 보기
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Example1;
