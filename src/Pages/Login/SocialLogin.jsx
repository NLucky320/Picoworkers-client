import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth.jsx";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner.jsx";


const SocialLogin = () => {
  const { googleSignIn, user, loading } = useAuth();
 const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleGoogleSignIn = async () => {
       try {
      // 1. google sign in from firebase
         const result = await googleSignIn();
        //  console.log(result.user)
      const userInfo = {
        email: result?.user?.email,
        image: result?.user?.photoURL,
        // Assuming you have yourName defined somewhere
        name: result?.user?.displayName,
        // Assuming data.role is defined elsewhere
        role: "worker",
        coins:10,
      };

      const response = await axiosPublic.put("/users", userInfo);

      if (response.data.upsertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };


  if (user || loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="my-2 space-y-2">
    
      <button
        disabled={loading}
        onClick={handleGoogleSignIn}
        aria-label="Login with Google"
        type="button"
        className=" disabled:cursor-not-allowed flex w-full max-w-md p-4  bg-[#0044BC] hover:bg-[#6BA6FF] text-white items-center  border-none justify-center space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
      >
        <Toaster></Toaster>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-current"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        <p>Login with Google</p>
          </button>
              <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-white lg:w-1/4"></span>

            <div className="text-xs text-center text-white uppercase ">or</div>

            <span className="w-1/5 border-b border-white lg:w-1/4"></span>
          </div>
    </div>
  );
};

export default SocialLogin;