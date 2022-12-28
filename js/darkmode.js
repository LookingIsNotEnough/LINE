let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".theme-icon");

const enableDarkMode = () => {
   document.body.classList.add('dark-mode');
   localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
   document.body.classList.remove('dark-mode');
   localStorage.removeItem("darkMode");
}

if (darkMode == "enabled")
{
   enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
   darkMode = localStorage.getItem("darkMode");
   console.log("Toggle");
   if ( darkMode !== "enabled" )
   {
      enableDarkMode();
      // darkModeToggle.add('icon-moon')
   }
   else 
   {
      disableDarkMode();
      // darkModeToggle.add('icon-sun')
   }
})