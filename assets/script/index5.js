const btn = document.querySelector(".header_btn");
const header = document.querySelector(".header");
const label_test = document.querySelectorAll(".label_test");
const block_2__test_btn = document.querySelectorAll(".block_2__test_btn");
const block_2__test_item = document.querySelectorAll(".block_2__test_item");
const questionTitle = document.querySelector(".block_2__test_title");
const question1 = document.querySelector(".question-1");
const question2 = document.querySelector(".question-2");
const question3 = document.querySelector(".question-3");
btn.addEventListener("click", () => {
    btn.classList.toggle("is-open");
    header.classList.toggle("is-open");
});
label_test.forEach((e) => {
    e.addEventListener("click", () => {
        label_test.forEach((i) => {
            if (i.children[0].style.outline = "2px solid #488AEA") {
                i.children[0].style.outline = "1px solid gray"
            }
        });
        e.children[0].style.outline = "2px solid #488AEA";
    });
});
questionTitle.innerHTML = "1. Ввод формул в таблицу начинается со знака";
question1.innerHTML = "&";
question2.innerHTML = "#";
question3.innerHTML = "=";
localStorage.removeItem("result_array_success");
localStorage.removeItem("result_array_error");
block_2__test_btn.forEach((b) => {
    b.addEventListener("click", () => {
        let inputChecked = document.querySelector('input[name="get"]:checked');
        if (inputChecked && b.dataset.action != "restart") {
            if (b.dataset.stage == "1") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "3") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Следующий вопрос";
                } else if (b.dataset.action == "next") {
                    b.dataset.stage = "2";
                    b.dataset.action = "valid";
                    b.textContent = "Проверить ответ";
                    block_2__test_item.forEach((e) => {
                        e.style.outline = "1px solid gray";
                    });
                    inputChecked.checked = false;
                    questionTitle.innerHTML = "2. Строка формул используется в табличном процессоре для отображения:";
                    question1.innerHTML = "только адреса текущей строки";
                    question2.innerHTML = "только содержимого текущей ячейки";
                    question3.innerHTML = "адреса и содержимого текущей ячейки";
                }
            } else if (b.dataset.stage == "2") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "3") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Следующий вопрос";
                } else if (b.dataset.action == "next") {
                    b.dataset.stage = "3";
                    b.dataset.action = "valid";
                    b.textContent = "Проверить ответ";
                    block_2__test_item.forEach((e) => {
                        e.style.outline = "1px solid gray";
                    });
                    inputChecked.checked = false;
                    questionTitle.innerHTML = "3. В электронных таблицах нельзя удалить";
                    question1.innerHTML = "строку";
                    question2.innerHTML = "содержимое ячейки";
                    question3.innerHTML = "имя ячейки";
                }
            } else if (b.dataset.stage == "3") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "3") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Следующий вопрос";
                } else if (b.dataset.action == "next") {
                    b.dataset.stage = "4";
                    b.dataset.action = "valid";
                    b.textContent = "Проверить ответ";
                    block_2__test_item.forEach((e) => {
                        e.style.outline = "1px solid gray";
                    });
                    inputChecked.checked = false;
                    questionTitle.innerHTML = "4. Правильный адрес ячейки";
                    question1.innerHTML = "А13С";
                    question2.innerHTML = "125В";
                    question3.innerHTML = "В125";
                }
            } else if (b.dataset.stage == "4") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "3") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Следующий вопрос";
                } else if (b.dataset.action == "next") {
                    b.dataset.stage = "5";
                    b.dataset.action = "valid";
                    b.textContent = "Проверить ответ";
                    block_2__test_item.forEach((e) => {
                        e.style.outline = "1px solid gray";
                    });
                    inputChecked.checked = false;
                    questionTitle.innerHTML = "5. Формула, которая будет получена при копировании в ячейку С3, формулы из ячейки С2";
                    question1.innerHTML = "=А1*А2+В2";
                    question2.innerHTML = "=$А$1*А3+В3";
                    question3.innerHTML = "=$А$2*А3+В3";
                }
            } else if (b.dataset.stage == "5") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "2") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "2" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "2" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Следующий вопрос";
                } else if (b.dataset.action == "next") {
                    b.dataset.stage = "6";
                    b.dataset.action = "valid";
                    b.textContent = "Проверить ответ";
                    block_2__test_item.forEach((e) => {
                        e.style.outline = "1px solid gray";
                    });
                    inputChecked.checked = false;
                    questionTitle.innerHTML = "6. Активная ячейка – это…";
                    question1.innerHTML = "для записи команд";
                    question2.innerHTML = "формула, в которой содержатся ссылки на содержимое зависимой ячейки";
                    question3.innerHTML = "в которой выполняется ввод команд";
                }
            } else if (b.dataset.stage == "6") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "3") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Следующий вопрос";
                }
                else if (b.dataset.action == "next") {
                    b.dataset.stage = "7";
                    b.dataset.action = "valid";
                    b.textContent = "Проверить ответ";
                    block_2__test_item.forEach((e) => {
                        e.style.outline = "1px solid gray";
                    });
                    inputChecked.checked = false;
                    questionTitle.innerHTML = "7. В электронной таблице формула не может включать в себя";
                    question1.innerHTML = "числа";
                    question2.innerHTML = "имена ячеек";
                    question3.innerHTML = "текст";
                }
            } else if (b.dataset.stage == "7") {
                if (b.dataset.action == "valid") {
                    if (inputChecked.dataset.id == "3") {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : null;
                        });
                        if (localStorage.getItem("result_array_success")) {
                            let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        } else {
                            let result_array_success = [];
                            result_array_success.push(b.dataset.stage);
                            localStorage.setItem("result_array_success", JSON.stringify(result_array_success));
                        }
                    } else {
                        block_2__test_item.forEach((e) => {
                            e.dataset.id == "3" ? e.style.outline = "2px solid green" : e.style.outline = "2px solid red";
                        });
                        if (localStorage.getItem("result_array_error")) {
                            let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        } else {
                            let result_array_error = [];
                            result_array_error.push(b.dataset.stage);
                            localStorage.setItem("result_array_error", JSON.stringify(result_array_error));
                        }
                    }
                    b.dataset.action = "next";
                    b.textContent = "Результат";
                } else if (b.dataset.action == "next") {
                    b.dataset.stage = "8";
                    b.dataset.action = "result";
                    b.textContent = "Перейти";
                    questionTitle.innerHTML = "Вот и кончились вопросы. Перейти к подсчету результата?";
                    document.querySelectorAll(".label_test").forEach((e) => {
                        e.style.display = "none";
                    });
                }
            } else if (b.dataset.stage == "8") {
                if (b.dataset.action == "result") {
                    b.dataset.action = "restart";
                    b.textContent = "Перезапуск";
                    questionTitle.innerHTML = "";

                    if (localStorage.getItem("result_array_success")) {
                        let result_array_success = JSON.parse(localStorage.getItem("result_array_success"));
                        questionTitle.innerHTML += `<b>${result_array_success.length}</b> правильных ответов.`;
                        if (result_array_success.length != "0") {
                            let result_array_success_item = JSON.stringify(result_array_success);
                            result_array_success_item = result_array_success_item.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
                            questionTitle.innerHTML += `<br><br> Задания: ${result_array_success_item}`;
                        }
                    }
                    if (localStorage.getItem("result_array_error")) {
                        let result_array_error = JSON.parse(localStorage.getItem("result_array_error"));
                        questionTitle.innerHTML += `<br><br><b>${result_array_error.length}</b> неправильных ответов.`;
                        if (result_array_error.length != "0") {
                            let result_array_error_item = JSON.stringify(result_array_error);
                            result_array_error_item = result_array_error_item.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
                            questionTitle.innerHTML += `<br><br> Задания: ${result_array_error_item}`;
                        }
                    }
                }
            }
        } else if (b.dataset.action == "restart") {
            localStorage.removeItem("result_array_success");
            localStorage.removeItem("result_array_error");
            document.location.reload();
        }
        else {
            block_2__test_item.forEach((e) => {
                e.style.outline = "1px solid red";
            });
        }
    });
});