document.getElementById("hamburger").onclick = function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

//  Download resume
const downloadResume = () => {
	  const a = document.createElement('a');
	  a.href = `${window.location.origin}${Resume}`;
	  // console.log(a.href);
	  a.download = "JaredsResume.pdf";
	  document.body.appendChild(a);
	  a.click();
	  document.body.removeChild(a);
}