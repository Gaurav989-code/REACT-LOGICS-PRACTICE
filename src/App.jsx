import Calculator from "./components/calculator/Calculatar";
import FAQComponent from "./components/faqComponents/FAQComponent";
import ModelOverlay from "./components/modelOverlay/ModelOverlay";
import Multi_step_form from "./components/multi-step-form/Multi_step_form";
import ShoppingList from "./components/shopping/shoppingList";
import UndoableCounter from "./components/undoable/UnduableCounter";
import Tic_toc_toe from "./components/tic-toc-toe/Tic_toc_toe";
import ImageCarousel from "./components/imageCarousel/ImageCarousel";
import Code_Input from "./components/two-factor-code-input/Code_Input";
import Simple_Calculator from "./components/simple-calculator/Calculator";

function App() {
  return (
    <>
      {/* <h1>Frequently asked questions</h1>
      <FAQComponent /> 
      <Calculator />
      <ModelOverlay />
      <UndoableCounter />
      <ShoppingList />
      <Multi_step_form />
      <Tic_toc_toe />
      <ImageCarousel />
      <Code_Input />
      
      */}

      <Simple_Calculator />
    </>
  );
}

export default App;
