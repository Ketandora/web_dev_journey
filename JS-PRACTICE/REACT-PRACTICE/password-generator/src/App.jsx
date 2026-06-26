import { useCallback, useState ,useEffect, useRef} from 'react'


function App() {
  const [length , setlength] = useState(8);
  const [numberAllowed , setNumberAllowed ] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  //ref var
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass ="";
    let str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if( numberAllowed )
        str+= "1234567890";
    if( charAllowed)
        str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, 
    charAllowed,setPassword ]
  )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);///use to select by index 0,0
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  },
     [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    {/* <div className="w-full h-screen bg-black flex justify-center items-center"> */}
      <div className=' max-w-md mx-auto mt-8 shadow-md 
        rounded-lg p-4 bg-gray-700'>
          <h1 className='text-white text-center my-3'>
            PASSWORD GENERATOR
          </h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
              type="text"
              value = {password}
              className='outline-none  bg-white text-black w-full py-1 px-3'
              placeholder='Enter Password'
              readOnly
              ref={passwordRef}
            />

            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              COPY
            </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer' 
              onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length : {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              className='cursor-pointer' 
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              className='cursor-pointer' 
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
           
      </div>
  
    </>
  );
}

export default App;
