import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-bootstrap";
import { useState, useRef } from "react"; // useRef 추가

const Example2 = () => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [resultText, setResultText] = useState("");

  const checkScore = () => {
    const num = Number(inputRef.current.value);    
    console.log(num);
    if (num < 1 || num > 100) {
      return setResultText("정확한 범위의 숫자를 입력하세요");
    } 
    if(num >= 90) return setResultText("당신의 등급은 A입니다.")
    if(num >= 80) return setResultText("당신의 등급은 B입니다.")
    if(num >= 70) return setResultText("당신의 등급은 C입니다.")
    if(num >= 0) return setResultText("당신의 등급은 D입니다.")
    return setResultText("당신의 등급은 F입니다.")
    }
  return (
    <>
      <Card
        className="max-h-[650px] m-[5px]"
        style={{ width: "18rem", fontSize: "0.8em" }}
      >
        <Card.Body className="bg-[black] text-white flex flex-col">
          <div className="min-h-[30%]">
            <Card.Title>문제2</Card.Title>
            <div className="h-[30%]">
              <div className="min-h-[200px]">
                <p className="text-[0.9em]">
                  나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는
                  프로그램을 만드시오.
                </p>
                <p className="text-[0.7em]">
                  [90~100 : A 80~89 : B 70~79 : C 60~69 : D less than 59 : F]
                </p>
                <div className="flex">
                  <input type="number" ref={inputRef} />
                  <button onClick={() => checkScore()}>입력</button>
                </div>
                <span>{resultText}</span>
              </div>
              <Collapse in={open} className="">
                <div
                  id="example-fade-text"
                  className="overflow-hidden transition-all duration-300 mt-[1em]"
                >
                  <p>
                    {`코드: if (num < 1 || num > 100) {
                        return setResultText("정확한 범위의 숫자를 입력하세요");
                      } 
                      if(num >= 90) return setResultText("당신의 등급은 A입니다.")
                      if(num >= 80) return setResultText("당신의 등급은 B입니다.")
                      if(num >= 70) return setResultText("당신의 등급은 C입니다.")
                      if(num >= 0) return setResultText("당신의 등급은 D입니다.")
                      return setResultText("당신의 등급은 F입니다.")`}
                  </p>
                  <p>
                    해설 : 점수가 1~100이니까 첫 if문에서 범위를 설정하고 범위를 벗어나면 경고문구 출력 그 다음 개별 if문을 사용해 각각 참이되면 바로 등급을 리턴.
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

export default Example2;
