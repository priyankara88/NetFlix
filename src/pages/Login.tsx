import Header from "../components/Header";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/DE-en-20250721-TRIFECTA-perspective_dce16a36-990c-42cc-9038-3d76fd400e2a_medium.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-screen bg-black flex  justify-center py-42"
    >
      <Header />

      <div className="w-[500px]  bg-black opacity-85 rounded text-white">
        <h1 className="text-[36px] font-bold text-white ml-10 mt-15 mb-4">
          Sign In
        </h1>
        <form action="" className="flex flex-col pb-10 gap-y-5  mx-20">
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="py-4 bg-gray-800  rounded opacity-50 p-2 text-white border border-gray-300"
          />
          <input
            type="password"
            placeholder="password"
            className="py-4 bg-gray-900 opacity-50 rounded p-2 text-white border border-gray-300"
          />

          <button className="py-3 bg-red-500 rounded ">Sign In</button>
          <div className="flex items-center justify-center">
            <h1>OR</h1>
          </div>
          <button className="py-3 bg-gray-500 rounded font-bold">
            Use a Sign-In Code
          </button>
          <div className="flex items-center justify-center">
            <h1>Forgot Password?</h1>
          </div>
          <div className="text-gray-500">
            New to Netflix?
            <span className="font-bold text-white ml-2">Sign up now</span>
          </div>
          <h1 className="text-[12px] text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
