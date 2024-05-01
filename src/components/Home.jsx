import { useEffect, useState } from "react";
import makeRequest from "../axios";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
// import AddCertButton from "./AddCertButton";
import AddCertModal from "./AddCertModal";

function Home() {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate()
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await makeRequest.get(
          `students?page=${currentPage}&perPage=${perPage}&search=${searchQuery}`
        );
        setStudents(response.data.data);
        setLoading(false);
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    };

    const debouncedFetchStudents = debounce(fetchStudents, 900);
    debouncedFetchStudents();
    return () => {
      debouncedFetchStudents.cancel();
    };
  }, [currentPage, perPage, searchQuery]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  return (
    <div className="App">
      <Header />

      <main className="flex flex-col md:flex-row">
        {/* <DialogDefault /> */}

        <div className="w-full mx-auto">
          <div className="flex items-center justify-between text-2xl p-5 text-white bg-blue-950">
            <div className=""></div>
            <div className="flex">
              {" "}
              <input
                type="search"
                className="p-2 border-0 w-full text-black focus:outline-none"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="border-0 shadow  bg-blue-500 hover:bg-blue-600 font-bold text-sm px-8 rounded-tr-md rounded-br-md">
                Search
              </button>
            </div>

            <div className="">
              <Link to="/create" className="border-0 shadow rounded-md font-bold text-sm bg-blue-500 hover:bg-blue-600 p-4">
                Add Student
              </Link>
            </div>
          </div>
        </div>
      </main>
      {loading ? (
        <>Loading</>
      ) : (
        <div className="m-5">
          <ul className=" w-full lg:w-12/12">
            <li className="flex uppercase font-bold p-3">
              <span className="w-1/12">S/N</span>
              <span className="w-2/12">Name</span>
              <span className="w-2/12 break-words">NIN</span>
              <span className="w-2/12">PROGRAM</span>
              <span className="w-2/12">STATE</span>
              <span className="w-2/12">CERTIFICATIONS</span>
            </li>
            {students &&
              students.map((student, index) => (
                // <Link to={`students/${student.id}`} onClick={(e)=>{e.stopPropagation()}}>
                <li className="flex border p-3" key={index} onClick={()=>{
                    navigate(`students/${student.id}`)
                }}>
                  <span className="w-1/12">{index + 1}</span>
                  <span className="w-2/12">{student.name}</span>
                  <span className="w-2/12 break-words">{student.nin}</span>
                  <span className="w-2/12">{student.program}</span>
                  <span className="w-2/12">{student.state}</span>
                  <span className="w-2/12">{student.Certification.length}</span>
                  <span className="w-1/12">
                    <div onClick={(e)=>{e.stopPropagation()}} className=" text-white text-sm text-center p-1 rounded shadow bg-blue-500 hover:bg-blue-700">
                      <AddCertModal />
                    </div>
                  </span>
                </li>
              // </Link>
              ))}
          </ul>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-300 p-3" onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={nextPage}>Next</button>
          </div>
        </div>
      )}


    </div>
  );
}

export default Home;
