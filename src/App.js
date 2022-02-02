import React, {Fragment} from "react";

function App() {
  return (
    <Fragment>
      <div class="fixed flex flex-col items-center justify-center h-screen ml-12">
        <nav>
          <ul>
            <li className="text-2xl border border-white mt-3 rounded-full px-2 py-1.5 text-black bg-white cursor-pointer">EN</li>
            <li className="text-2xl border border-white mt-3 rounded-full px-2 py-1.5 text-white cursor-pointer">KA</li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default App;
