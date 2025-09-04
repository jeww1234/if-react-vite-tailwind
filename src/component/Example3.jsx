import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-bootstrap";
import { useState } from "react"; // useRef 추가

const Example3 = () => {
  const [open, setOpen] = useState(false);
  const [resultText, setResultText] = useState("");
  const [randomSkills, setRandimSkills] = useState([]);
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Vue",
    "Vite",
    "Typescript",
  ];

  const generateRandomSkills = () => {
    const newSkills = skills.filter(() => Math.random() > 0.7);
    setRandimSkills(newSkills);
    return newSkills;
  };

  const checkSkill = () => {
    let currentSkills = generateRandomSkills();
    const hasJs = currentSkills.includes("Javascript");
    const hasRe = currentSkills.includes("React");

    if (hasJs && hasRe) {
      setResultText("당신은 합격 입니다.");
    } else if (hasJs || hasRe) {
      setResultText("당신은 보류 입니다.");
    } else {
      setResultText("당신은 불합격 입니다.");
    }
  };

  return (
    <>
      <Card
        className="max-h-[650px] m-[5px]"
        style={{ width: "18rem", fontSize: "0.8em" }}
      >
        <Card.Body className="bg-[black] text-white flex flex-col">
          <div className="min-h-[30%]">
            <Card.Title>문제3</Card.Title>
            <div className="h-[30%]">
              <div className="min-h-[200px]">
                <p className="text-[0.9em]">
                  지원자가 사용 가능한 스킬은 배열에 제공이 된다.
                </p>
                <p className="text-[0.7em]">
                  let skills =["HTML","CSS","Javascript","React"] Javascript와
                  React 둘 다 할 줄 안다면 "합격!" Javascript와 React 둘 중
                  하나만 할 줄 안다면 "예비", 두 스킬이 없다면 "탈락"을 보여주는
                  프로그램을 짜시오.
                </p>
                <div className="flex">
                  <button onClick={() => checkSkill()}>랜덤 지원자</button>
                </div>

                {randomSkills.length >= 0 && (
                  <p className="mt-[0.5em] text-[0.8em] text-green-300">
                    선택된 스킬: {randomSkills.join(", ")}
                  </p>
                )}
                <span>{resultText}</span>
              </div>
              <Collapse in={open}>
                <div
                  id="example-fade-text"
                  className="overflow-hidden transition-all duration-300 mt-[1em]"
                >
                  <p>
                    {`코드: let currentSkills = generateRandomSkills();
                      const hasJs = currentSkills.includes("Javascript");
                      const hasRe = currentSkills.includes("React");

                      if (hasJs && hasRe) {
                        setResultText("당신은 합격 입니다.");
                      } else if (hasJs || hasRe) {
                        setResultText("당신은 보류 입니다.");
                      } else {
                        setResultText("당신은 불합격 입니다.");
                      }`}
                  </p>
                  <p>
                    해설 : Math.random 으로 원본 배열에서 랜덤으로 새로운 배열을
                    만들고 해당 배열이 Js, React를 포함하는지 2개의 변수에 bool
                    값 저장 if문으로 둘 다 참이면 합 하나만 참이면 보류 둘다
                    거짓이면 불합 출력.
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

export default Example3;
