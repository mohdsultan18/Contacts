import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
  <div className="mx-auto max-w-[370px] px-4">
    <Navbar />
    <div className="flex gap-2">
      <div className="relative flex flex-grow items-center">
        <FiSearch className="absolute ml-1 text-3xl text-white"/>
        <input
         type="text" 
         className=" flex-grow h-10 rounded-md border border-white bg-transparent pl-9 text-white" 
        />
     </div>

       <AiFillPlusCircle className="cursor-pointer text-5xl text-white"/>
    </div>
    <div>
      {contacts.map((contact) => ( 
        <div key={contact.id}>
          <HiOutlineUserCircle />
          <div className="">
            <h2 className="">{contact.name}</h2>
            <p className=""></p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default App;
