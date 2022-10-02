export default class Transition {
  static start(day) {
    const transition = document.getElementById("modal-transition");
    transition.innerHTML = `<p>Dia ${day}</p>`;
    setTimeout(() => {
      transition.style.opacity = 1;
      setTimeout(() => {
        transition.style.opacity = 0;
        setTimeout(() => {
          transition.innerHTML = "";
        }, 2000);
      }, 4000);
    }, 50);
  }
}
