let Task = [];

let task = this.innerHTML;

function addTask() {
  document.querySelector(".btn1").addEventListener("click", function () {
    // alert("heyy...its working");
    Task.push(task);
  });
}
addTask();
console.log(Task[0]);
