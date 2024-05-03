import { useState } from "react";
import heroImage from "./images/tree1.jpg";

function App() {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hours, setHours] = useState("");
  const [min, setMin] = useState("");
  const [inputDate, setInputDate] = useState([]);

  //const myBirth = new Date("oct 03, 1987 00:00:00 GMT+00:00");

  const currentDateMls = new Date().getTime();
  const randomDateMls = new Date(
    `${month} ${day}, ${year} ${hours}:${min}:00 GMT+00:00`
  ).getTime();

  //console.log("currentDate", currentDate)
  //console.log("currentDateMls", currentDateMls);
  //console.log("birth", birth)
  //console.log("myBirth", myBirth)
  //console.log("randomDateMls", randomDateMls);

  function showData(event) {
    const dateString = event.target.value; //2013-04-05T21:45
    const dateArr = dateString.split(/[-T:]/); //['2024', '06', '07', '07', '24']
    setInputDate(dateArr);
  }

  function handleCount() {
    setYear(inputDate[0]);
    setMonth(inputDate[1]);
    setDay(inputDate[2]);
    setHours(inputDate[3]);
    setMin(inputDate[4]);
  }

  return (
    <div class="flex items-center justify-center h-screen bg-zinc-700">
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl w-96">
        {/* -------------Flex Container---------------------- */}
        <div class="flex flex-col rounded-l-xl">
          <img src={heroImage} alt="" class="object-cover rounded-xl h-80" />

          <div class="p-6">
            <h2 class="font-serif text-xl font-medium text-center text-white">
              Choose your birth date:
            </h2>

            <div>
              <div class="flex flex-col mt-5 space-y-4">
                <input
                  type="datetime-local"
                  onChange={showData}
                  class="w-80 text-base text-white bg-transparent border border-zinc-600 py-2 px-2 outline-none rounded-md"
                />

                <button
                  class="px-5 py-3 text-s font-medium rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
                  onClick={handleCount}
                >
                  Count
                </button>
              </div>
            </div>

            {min && (
              <div class="max-w-xs my-4 text-s leading-8 tracking-wide text-start text-white">
                {/* <div>{currentDateMls - randomDateMls}</div> */}

                <p class="font-serif text-l font-medium text-center text-white">
                  Your age in
                </p>

                <div>
                  <span>years: </span>
                  {Math.floor(
                    (currentDateMls - randomDateMls) / 1000 / 3600 / 24 / 365
                  )}
                </div>

                <div>
                  <span>months: </span>
                  {Math.floor(
                    ((currentDateMls - randomDateMls) /
                      1000 /
                      3600 /
                      24 /
                      365) *
                      12
                  )}
                </div>

                <div>
                  <span>weeks: </span>
                  {Math.floor(
                    ((currentDateMls - randomDateMls) / 1000 / 3600 / 24) / 7
                  )}
                </div>

                <div>
                  <span>days: </span>
                  {Math.floor(
                    (currentDateMls - randomDateMls) / 1000 / 3600 / 24
                  )}
                </div>

                <div>
                  <span>hours: </span>
                  {Math.floor((currentDateMls - randomDateMls) / 1000 / 3600)}
                </div>

                <div>
                  <span>minutes: </span>
                  {Math.floor((currentDateMls - randomDateMls) / 1000 / 60)}
                </div>

                <div>
                  <span>seconds: </span>
                  {Math.floor((currentDateMls - randomDateMls) / 1000)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
