// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import TextInput from "../components/shared/TextInput";
// import PasswordInput from "../components/shared/PasswordInput";
// import voltkonLogo from "../assets/images/voltkon.svg";

// const SignupComponent = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   // Function to send signup data to MongoDB
//   const signUp = async () => {
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match, please check again");
//       return;
//     }

//     const data = { email, username, password };

//     try {
//       const response = await fetch("http://localhost:5000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("User registered successfully!");
//         navigate("/login");
//       } else {
//         alert(result.message || "Error occurred during signup");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-50">
//       <div className="logo py-3 mb-3 w-full flex justify-between items-center px-11 border-b border-gray-300">
//         <img src={voltkonLogo} alt="Voltkon Logo" className="h-12" />

//         <div className="flex space-x-4">
//           <Link
//             to="/login"
//             className="text-gray-600 font-medium my-auto hover:text-gray-900 transition duration-300"
//           >
//             Log In
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>

//       <div className="inputRegion w-full max-w-lg px-6 py-10 flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg">
//         <div className="font-bold text-xl mb-2 text-center">Sign up</div>

//         <TextInput
//           label="Email address"
//           placeholder="Email"
//           className="my-2 w-full"
//           value={email}
//           setValue={setEmail}
//         />

//         <TextInput
//           label="Username"
//           placeholder="Enter your Username"
//           className="my-2 w-full"
//           value={username}
//           setValue={setUsername}
//         />

//         <PasswordInput
//           label="Create Password"
//           placeholder="Enter a strong password"
//           className="my-2 w-full"
//           value={password}
//           setValue={setPassword}
//         />

//         <PasswordInput
//           label="Confirm Password"
//           placeholder="Confirm your password"
//           className="my-2 w-full"
//           value={confirmPassword}
//           setValue={setConfirmPassword}
//         />

//         <button
//           className="bg-green-500 text-white font-semibold py-3 px-10 rounded-full mt-6 w-full"
//           onClick={(e) => {
//             e.preventDefault();
//             signUp();
//           }}
//         >
//           Sign Up
//         </button>

//         <div className="border-b border-gray-300 w-full my-6"></div>

//         <div className="text-center text-lg font-medium">
//           Already have an account?
//         </div>

//         <div className="mt-4">
//           <Link
//             to="/login"
//             className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
//           >
//             Log in instead
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupComponent;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import voltkonLogo from "../assets/images/voltkon.svg";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Function to send signup data to MongoDB
  const signUp = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match, please check again");
      return;
    }

    const data = { email, username, password };

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        navigate("/login");
      } else {
        alert(result.message || "Error occurred during signup");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Log the username to the console whenever it changes
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    console.log("Username:", value); // This will log the username whenever it changes
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="logo py-3 mb-3 w-full flex justify-between items-center px-11 border-b border-gray-300">
        <img src={voltkonLogo} alt="Voltkon Logo" className="h-12" />

        <div className="flex space-x-4">
          <Link
            to="/login"
            className="text-gray-600 font-medium my-auto hover:text-gray-900 transition duration-300"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="inputRegion w-full max-w-lg px-6 py-10 flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="font-bold text-xl mb-2 text-center">Sign up</div>

        <TextInput
          label="Email address"
          placeholder="Email"
          className="my-2 w-full"
          value={email}
          setValue={setEmail}
        />

        <TextInput
          label="Username"
          placeholder="Enter your Username"
          className="my-2 w-full"
          value={username}
          setValue={handleUsernameChange} // Using the new handleUsernameChange function
        />

        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password"
          className="my-2 w-full"
          value={password}
          setValue={setPassword}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          className="my-2 w-full"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <button
          className="bg-green-500 text-white font-semibold py-3 px-10 rounded-full mt-6 w-full"
          onClick={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          Sign Up
        </button>

        <div className="border-b border-gray-300 w-full my-6"></div>

        <div className="text-center text-lg font-medium">
          Already have an account?
        </div>

        <div className="mt-4">
          <Link
            to="/login"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
          >
            Log in instead
          </Link>
        </div>
      </div>
    </div>
  );
};  
export default SignupComponent;
