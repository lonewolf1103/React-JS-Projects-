import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

  const navigate = useNavigate();

  const [signState, setSignState] = useState("Sign In");
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = input;

    setLoading(true)
    
    try {
      if (signState === "Sign Up") {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = res.user;

        await addDoc(collection(db, 'Users'), {
          uid: newUser.uid,
          name,
          authProvide: 'local',
          email,
        });
        
        setUser(newUser);
        toast.success('User signed up successfully')
        console.log('User Signed Up:', newUser);

      } else if (signState === "Sign In") {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const loggedInUser = res.user;
        setUser(loggedInUser);
        toast.success('User logged in succesfully')
        console.log('User Signed In:', loggedInUser);
      }
    } catch (error) {
      toast.error('Something went wrong')
      console.error('Error:', error);
    } finally{
      setLoading(false)
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      console.log('User Logged Out');
    }).catch((error) => {
      console.error('Error Logging Out:', error);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log('Logged In');
        navigate('/')
      }
      else{
        navigate('/login')
      }
    })
  
  }, [])
  

  return (
    loading?<div className="loader">
      <div className='w-full h-0 pb-[100%] relative'><iframe src="https://giphy.com/embed/VseXvvxwowwCc" width="100%"  height="100%"   className="giphy-embed absolute" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/VseXvvxwowwCc">via GIPHY</a></p>
    </div>:
    <div className="login h-screen bg-cover bg-center flex flex-col items-center justify-center px-5 py-[8%] relative">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <img
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        width={150}
        className="relative z-10 mb-8"
      />

      <div className="login-form relative z-10 w-full max-w-[450px] bg-[rgba(0,0,0,0.7)] rounded p-14 m-auto text-white">
        <h1 className="text-3xl font-semibold mb-6">{signState}</h1>
        {!user ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {signState === "Sign Up" && (
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={input.name}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 rounded outline-none focus:bg-gray-600"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 rounded outline-none focus:bg-gray-600"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 rounded outline-none focus:bg-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-red-600 py-2 mt-4 rounded hover:bg-red-700 font-semibold"
            >
              {signState}
            </button>

            <div className="form-help flex justify-between items-center text-sm text-gray-400 mt-4">
              <div className="remember flex items-center">
                <input type="checkbox" name="remember" className="mr-2" />
                <label>Remember Me</label>
              </div>
              <p className="cursor-pointer hover:underline">Need Help?</p>
            </div>
          </form>
        ) : (
          <div className="space-y-5">
            <p>Welcome, {user.email}</p>
            <button
              className="w-full bg-red-600 py-2 mt-4 rounded hover:bg-red-700 font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}

        <div className="form-switch mt-10 text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="ml-2 text-[#fff] font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already Have an Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="ml-2 text-[#fff] font-medium cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
