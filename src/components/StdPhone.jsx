import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase_config";
import { data, Link } from "react-router-dom";

const StdPhone = () => {
  const [stdPhones, setStdPhones] = useState([]); // FIX: Initialize as empty array
  const [name, setName] = useState("");
  const [sect, setSect] = useState("");
  const [tel, setTel] = useState("");
  const stdPhoneRef = collection(db, "/stdphones");

  const addPhone = () => {
    const phone = { name: name, sect: sect, tel: tel };
    addDoc(stdPhoneRef, phone)
      .then((docRef) => {
        setName("");
        setSect("");
        setTel("");
        console.log(docRef.id);
        getAllPhones();
        //console.log("Added Doc", docRef.id);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getAllPhones = () => {
    getDocs(stdPhoneRef)
      .then((phones) => {
        let allPhones = [];
        phones.docs.map((doc) => {
          return (allPhones = [...allPhones, { id: doc.id, ...doc.data() }]);
        });
        setStdPhones(allPhones);
      })
      .catch((err) => window.alert(err));
  };

  const delPhone = (id) => {
    if (!window.confirm("Do you really want to delete?")) return;
    const targetDoc = doc(stdPhoneRef, id);
    deleteDoc(targetDoc)
      .then(() => {
        getAllPhones();
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <div>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Sect:{" "}
        <input
          type="radio"
          name="rdSect"
          value="ced"
          checked={sect === "ced" ? "checked" : ""}
          onChange={(e) => setSect(e.target.value)}
        />{" "}
        CED
        <input
          type="radio"
          name="rdSect"
          value="tct"
          checked={sect === "tct" ? "checked" : ""}
          onChange={(e) => setSect(e.target.value)}
        />{" "}
        TCT Tel:{" "}
        <input
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <button className="btn btn-sm btn-outline-success" onClick={addPhone}>
          Add Data
        </button>
        <div>
          <table border={2}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sect</th>
                <th>Tel</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stdPhones.length > 0 ? (
                stdPhones.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.sect}</td>
                    <td>{data.tel}</td>
                    <td>
                      <Link to="/edit" state={data.id}>
                        <button
                          className="btn btn-sm
	btn-outline-warning"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={(e) => delPhone(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No Data Available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StdPhone;
