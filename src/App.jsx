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
import Bar_Chart from "./components/bar-chart/Bar_Chart";
import Star_Rating from "./components/star-rating/Star_Rating";
import Task_manager from "./components/task-manager/Task_manager";
import Memory_Game from "./components/memory-game/Memory_Game";
import Infinite_Scrolling from "./components/infinite-scrolling/Infinite_Scrolling";
import ProgressBar from "./components/progressBar/ProgressBar";
import Selectable_Grid from "./components/selectable-grid/Selectable_Grid";
import Debounce_api_call from "./components/debounce-api-call/Debounce_api_call";
import Job_board from "./components/job-board/Job_board";
import TimePass_grid from "./components/Timepass_grid";
import Transfer_Files from "./components/Transfer-File/Transfer_Files";
import Form_Validation from "./components/form_validation/Form_Validation";

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col items-center  ">
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
      <Simple_Calculator />
      <Bar_Chart />
      <Star_Rating />
      <Task_manager />
      <Memory_Game />
      <Infinite_Scrolling />
      <ProgressBar color={"red"} />
      <ProgressBar color={"yellow"} />
      <Selectable_Grid />
      <Debounce_api_call />
      <Job_board />
      
      <TimePass_grid />
      <Transfer_Files />
      */}

      <Form_Validation />
    </div>
  );
}

export default App;
