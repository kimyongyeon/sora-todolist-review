// 대문자 써서 이름을 지어야 한다.
// 프로토타이핑 객체지향 언어
export default function Test() {
  // 생성자 ...
  // new new new new ...
  //this.render = function() {}
}

// 싱글턴~~~
Test.prototype.render = function () {};

const test = new Test();
test.render();

// redux - store.js
const list = [];
export function setTodoList(item) {
  return [...this.list, item];
}

export function getTodoList() {
  return this.list;
}

document.querySelector("input").addEventListener("keyup", function (e) {
  todoItemWrite(e.target.value);
  todoListRender();
});

function validationInput(val) {
  if (val === "") {
    throw new Error("공백일 수 없습니다.");
  }
  return true;
}

function todoItemWrite(val) {
  try {
    validationInput(val);

    setTodoList({
      title: val,
      date: new Date(),
      id: new Date(),
    });
    // commit
  } catch (e) {
    // rollback
    errorLog(e.message);
  }

  const env = process.env.runType;

  function debugLog(val) {
    if (env === "dev") {
      // npm run dev crossEnv=dev
      console.log("Debug :: ", val);
    } else if (env === "prd") {
      // npm run dev crossEnv=prd
      // 운영은 로그를 쌓지 않습니다.
    }
  }

  function errorLog(val) {
    console.error("Error :: ", val);
  }
}

function todoListRender() {
  // list
  getTodoList().map((item) => {
    return render(item);
  });
}

// list
getTodoList().map((item) => {
  return render(item);
});
