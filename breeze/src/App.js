import "./App.css";
import img from "./img/Breeze logo.png";

function App() {
  return (
    <>
      <img src={img} alt="Logo" title="Logo Breeze" />
    </>
  );
}

function App() {
    return(
        <>
            <div class="gradiente"></div>

            <div class="logo">
            <img src="./imagens/Breeze logo.png" alt="logo" />
            </div>

            <h2>Acompanhe as condições climáticas em tempo real com precisão</h2>

            <div class="bloco-gradiente">
            Com o Breeze é possível monitorar em tempo real a temperatura e umidade de
            seus ambientes com a precisão do ESP32.
            <br /><br />
            Controle dispositivos como ar-condicionado e ventiladores de forma simples
            e eficiente, garantindo conforto e praticidade. Visualize dados
            classificados automaticamente e gerencie cada ambiente de acordo com sua
            necessidade.
            </div>
        </>
    );
}
export default App;
