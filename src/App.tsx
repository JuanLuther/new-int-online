import { useState } from "react";
import { Member } from "./entity/member";

function App() {
  const [members] = useState([
    new Member(
      "Jerick",
      "Mendoza",
      "Alejandro",
      "Male",
      "02-23-1996",
      "N/A",
      "1223-2341-3245-5768",
      "Zamboanga City",
      "09365776197",
      "N/A",
      "National ID"
    ),
    new Member(
      "Roi Cristofer",
      "Mendoza",
      "Alejandro",
      "Male",
      "02-23-1996",
      "N/A",
      "1223-2341-3245-5768",
      "Zamboanga City",
      "09365776197",
      "N/A",
      "National ID"
    ),
  ]);
  const [search_text, set_search_text] = useState("");
  const [is_logged_in, set_is_logged_in] = useState(false);
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  const [login_text, set_login_text] = useState("Log In");
  const [login_result, set_login_result] = useState("");
  const [is_show_password, set_is_show_password] = useState(false);
  return (
    <>
      {is_logged_in ? (
        <div className="w-full flex flex-col p-2 space-y-2 h-screen">
          <p className="text-center font-semibold text-xl select-none">
            Divine Wealth International ID Zamboanga City
          </p>
          <hr className="border border-blue-400" />

          <div className="pl-2 ml-auto flex justify-between w-3/4 items-end text-sm select-none">
            <p className=" font-semibold">TOTAL MEMBERS: {members.length}</p>
            <input
              className="px-2 py-1 w-1/4 outline-1 ring-2 ring-gray-500 focus:ring-blue-500 bg-gray-100 focus:bg-white rounded focus:outline-none"
              type="search"
              placeholder="Search Name..."
              value={search_text}
              onChange={(e) => set_search_text(e.target.value)}
            />
          </div>
          <div className="flex w-full h-full space-x-2">
            <div className="w-1/4 border-2  rounded border-gray-500 ">
              <p className="select-none bg-gray-800 font-semibold text-center text-base border border-gray-500 text-white">
                Add New
              </p>
              <div className="flex flex-col p-1 pt-2 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">First Name</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Middle Name</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Last Name</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Gender</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Address</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Contact</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Email</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Date of Birth</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="date"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">Type of ID</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">ID Number</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col p-1 select-none">
                <div className="flex items-center text-sm">
                  <p className="w-1/3">ID Expiry</p>
                  <input
                    className="w-2/3 px-2  py-1 ring-2 ring-black rounded focus:outline-none focus:ring-blue-500"
                    type="date"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-10 space-x-5 px-2">
                <button className="w-1/2 font-semibold bg-red-500 hover:bg-red-200 text-white hover:text-black active:scale-95 px-2 py-2 rounded">
                  Clear
                </button>
                <button className="w-1/2 font-semibold bg-blue-500 hover:bg-blue-200 text-white hover:text-black active:scale-95 px-2 py-2 rounded">
                  Add
                </button>
              </div>
            </div>
            <div className="w-3/4 border-2  rounded border-gray-500 ">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                    <th>ID No.</th>
                    <th>ID Type</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {members
                    .filter((x) =>
                      x.first_name
                        .toUpperCase()
                        .startsWith(search_text.toUpperCase())
                    )
                    .map((member, i) => (
                      <tr
                        key={i}
                        className="border-b-2 border-gray-500 select-auto hover:bg-slate-200"
                      >
                        <td className="hover:text-blue-700 font-semibold hover:cursor-pointer hover:underline">
                          {member.last_name}, {member.first_name}{" "}
                          {member.middle_name}
                        </td>
                        <td>{member.gender}</td>
                        <td>{member.birthday}</td>
                        <td>{member.id_num}</td>
                        <td>{member.id_type}</td>
                        <td>{member.contact}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen w-full select-none justify-center">
          <img
            src="/src/assets/Zamboanga d-2 Logo.jpg"
            alt="Zamboanga Logo"
            className="w-60 mb-5"
          />
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={username}
              onChange={(e) => set_username(e.target.value)}
              placeholder="Username"
              className="px-2 py-1 ring-2 ring-blue-500 rounded focus:ring-green-500 focus:outline-none  "
            />
            <form>
              <input
                type={is_show_password ? "text" : "password"}
                autoComplete="off"
                value={password}
                onChange={(e) => set_password(e.target.value)}
                placeholder="Password"
                className="px-2 py-1 ring-2 ring-blue-500 rounded focus:ring-green-500 focus:outline-none"
              />
            </form>
            <div className="flex space-x-2 justify-center">
              <input
                type="checkbox"
                id="show_password"
                checked={is_show_password}
                onChange={() => set_is_show_password(!is_show_password)}
              />
              <label htmlFor="show_password">Show Password</label>
            </div>
            <button
              onClick={() => {
                set_login_text("Logging In ...");
                setTimeout(() => {
                  set_is_logged_in(
                    username === "zambo_encoder" && password === "dwfZamD2"
                  );
                  set_login_text("Log In");
                  set_login_result("Login Failed");
                }, 2000);
              }}
              className="font-semibold bg-blue-500 hover:bg-blue-200 text-white hover:text-black active:scale-95 px-2 py-2 rounded"
            >
              {login_text}
            </button>
            <p className="text-red-500 text-sm font-semibold text-center">
              {login_result}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
