import axios from "axios";
import { useEffect, useState } from "react";

//  bu companentı modal ıcın olusturdukö bootstrap ıcınde aldıgımız hazır bır modalı buya yapısıtırdık. ancak dıkkat edelımö buradakı buton degıl. dıger comp. FaEdıtt butonu tıklandıgında buradakı madal harekete gecmelıı. bunun ıcın onemlı olan  data-bs-toggle="modal"  data-bs-target="#edit-modal" kısmı buradakı butondan bnları alıp  tutoraıl dadıkı faedıt butonuna eklıyoruz. burada dıkkat faedıte yukarıdakılerı eklerken burdakı ıd ıle data-bs-target="#edit-modal" esıt olmalıdır.
//  bunları yaptıktan sonra bu comp dıger taraftan cagırılmalıdır.
// ancak cagırılsa da olmayacaktır. data-bs-toggle="modal"---data-bs-target="#edit-modal" kullandıgımız klasık bootsrapın js kullandıgımız ıcın bootstrapın sıtesıne gıdıp js bendalı var onu alıp ındex.html e yapıstırıalım.. <script
//   src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//   integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
//   crossorigin="anonymous"
// ></script>

const EditTutorial = ({ getTutorials, editItem }) => {
  const { id, title: newTitle, description: newDescription } = editItem;

  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.

  //? componentDidUpdate
  //? newTitle veya description her degistiginde local title ve
  //? description state'lerimizi gunceliyoruz.
  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
  }, [newTitle, newDescription]);

  //! Update (PUT:Whole Update,PATCH :Partially Update)
  const editTutorial = async (id, tutor) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, tutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorial(id, { title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
