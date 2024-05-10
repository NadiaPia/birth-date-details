import { useState } from "react";
import heroImage from "./images/tree1.jpg";
import TimezoneSelect from "react-timezone-select";

function App() {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hours, setHours] = useState("");
  const [min, setMin] = useState("");
  const [inputDate, setInputDate] = useState([]);
  const [timeZone, setTimeZone] = useState("")

  const [selectedTimezone, setSelectedTimezone] = useState("");

  //const myBirth = new Date("oct 03, 1987 00:00:00 GMT+00:00");

  const currentDateMls = new Date().getTime();

  const randomDateMls = new Date(
   `${month} ${day}, ${year} ${hours}:${min}:00 ${timeZone ? timeZone : 'GMT+00:00'}`
  );
  
  function showData(event) {
    const dateString = event.target.value; //2013-04-05T21:45    
    const dateArr = dateString.split(/[-T:]/); //['2024', '06', '07', '07', '24']
    setInputDate(dateArr);
  }

  function showTimezone(event) {  
    setSelectedTimezone(event); //console.log("event", event) {value: 'America/Phoenix', label: '(GMT-7:00) Arizona', offset: -7, abbrev: 'MST', altName: 'Mountain Standard Time'}
  }

  function handleCount() {
    setYear(inputDate[0]);
    setMonth(inputDate[1]);
    setDay(inputDate[2]);
    setHours(inputDate[3]);
    setMin(inputDate[4]);

    const timezoneString = (selectedTimezone.label).split(/[""()]/)[1];
    setTimeZone(timezoneString);
  }    

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-700 pb-2">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl w-96">
        {/* -------------Flex Container---------------------- */}
        <div className="flex flex-col rounded-l-xl">
          <img
            src={heroImage}
            alt=""
            className=" rounded-b-none object-cover rounded-xl h-80"
          />

          <div className="p-6">
            <h2 className="font-serif text-xl font-medium text-center text-white">
              Choose your birth date:
            </h2>

            <div>
              <div className="flex flex-col mt-5 space-y-4">
                <input
                  type="datetime-local"
                  onChange={showData}
                  className="w-80 text-base text-white bg-transparent border border-zinc-600 py-2 px-2 outline-none rounded-md"
                />

                <div >
                  <TimezoneSelect
                    value={selectedTimezone}
                    onChange={showTimezone}
                    style={{background: 'red'}}     
                  />
                </div>
                

                <button
                  className="px-5 py-3 text-s font-medium rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
                  onClick={handleCount}
                >
                  Count
                </button>
              </div>
            </div>

            {min && (
              <div className="max-w-xs my-2 text-s leading-7 tracking-wide text-start text-white">

                <p className="font-serif text-l font-medium text-center text-white">
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
                    (currentDateMls - randomDateMls) / 1000 / 3600 / 24 / 7
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
