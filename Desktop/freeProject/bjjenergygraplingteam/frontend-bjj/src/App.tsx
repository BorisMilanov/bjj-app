// import React from "react";
// import Calendar from "./Calendar";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Calendar />
//     </div>
//   );
// };

// export default App;
import React from "react";
import CalendarWithEvents from "./CalendarWithEvents";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CalendarWithEvents />
    </div>
  );
};

export default App;
