document.write(
  '<style type="text/css">html { line-height: 1.15; -webkit-text-size-adjust: 100%; } body { margin: 0; font-family: Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", source-sans-pro, sans-serif; } @media (prefers-color-scheme: dark) { body { background-color: #031a50; color: #ffffff; } } a { color: #fff; text-decoration: none; } h1, p { margin: 0; padding: 0; text-align: center; } h1 { font-size: 3rem; line-height: 1; } p { font-size: 2rem; font-weight: 300; letter-spacing: -0.25px; } .container { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; max-width: 640px; margin: 0 auto; } #app { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; margin-top: 2.5rem; padding: 0 1rem; } section { display: flex; margin-top: 2rem; } button { font-size: 1.55rem; font-family: inherit; line-height: 1.15; margin: 0 0.5rem; cursor: pointer; border-radius: 6px; background: #003b8f; color: #b7d5ff; border: 1px solid #084c86; padding: 1rem; transition: background 100ms ease-in-out; min-width: 150px; } button:hover { background: #0a3c81; } .fadeIn { animation: fadeInAnimation 0.5s ease-in; } @keyframes fadeInAnimation { from { opacity: 0; } to { opacity: 1; } } .fadeOut { animation: fadeOutAnimation 0.5s ease-in; } @keyframes fadeOutAnimation { from { opacity: 1; } to { opacity: 0; } }</style>'
);
document.write(
  '<div class="container"> <h1>Tech Support Helper</h1> <div id="app" class="app"><button id="startBtn">Click here to start</button></div> </div> <script> const appContainer = document.getElementById("app"); const startBtn = document.getElementById("startBtn"); const initialHTML = appContainer.innerHTML; const steps = [ { text: "Find a menu item or button which looks related to what you want to do.", choices: [ { text: "Okay, I found one", nextStep: 1 }, { text: "I can\'t find one", nextStep: 2 }, ], }, { text: "Click the menu item or button. Did it work?", choices: [ { text: "Yes", nextStep: 4 }, { text: "No", nextStep: 3 }, ], }, { text: "Pick one at random.", choices: [ { text: "Okay", nextStep: 1 }, { text: "I\'ve tried them all", nextStep: 5 }, ], }, { text: "Google the name of the program plus a few words related to what you want to do. Follow any instructions. Did it work?", choices: [ { text: "Yes", nextStep: 4 }, { text: "No", nextStep: 6 }, ], }, { text: "You\'re done!", choices: [{ text: "Start over", nextStep: -1 }], }, { text: "Have you been trying this for over half an hour?", choices: [ { text: "Yes", nextStep: 6 }, { text: "No", nextStep: 1 }, ], }, { text: "Ask someone for help or give up.", choices: [{ text: "Start over", nextStep: -1 }], }, ]; let currentStep = 0; function handleButtonClick(choiceIndex) { const choice = steps[currentStep].choices[choiceIndex]; if (choice.nextStep === -1) { currentStep = 0; appContainer.innerHTML = initialHTML; appContainer.classList.toggle("fadeIn"); document.getElementById("startBtn").addEventListener("click", renderStep); } else if (choice.nextStep !== undefined) { currentStep = choice.nextStep; appContainer.classList.toggle("fadeIn"); renderStep(); } } function renderStep() { const step = steps[currentStep]; let buttonsHTML = ""; if (step.choices) { buttonsHTML = step.choices.map((choice, index) => `<button onclick="handleButtonClick(${index})">${choice.text}</button>`).join(""); } appContainer.innerHTML = `<p>${step.text}</p><section>${buttonsHTML}</section>`; appContainer.classList.toggle("fadeIn"); } document.getElementById("startBtn").addEventListener("click", renderStep); </script>'
);
