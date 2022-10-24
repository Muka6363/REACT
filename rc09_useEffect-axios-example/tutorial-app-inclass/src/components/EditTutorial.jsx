//  bu companentı modal ıcın olusturdukö bootstrap ıcınde aldıgımız hazır bır modalı buya yapısıtırdık. ancak dıkkat edelımö buradakı buton degıl. dıger comp. FaEdıtt butonu tıklandıgında buradakı madal harekete gecmelıı. bunun ıcın onemlı olan  data-bs-toggle="modal"  data-bs-target="#edit-modal" kısmı buradakı butondan bnları alıp  tutoraıl dadıkı faedıt butonuna eklıyoruz. burada dıkkat faedıte yukarıdakılerı eklerken burdakı ıd ıle data-bs-target="#edit-modal" esıt olmalıdır.
//  bunları yaptıktan sonra bu comp dıger taraftan cagırılmalıdır.
// ancak cagırılsa da olmayacaktır. data-bs-toggle="modal"---data-bs-target="#edit-modal" kullandıgımız klasık bootsrapın js kullandıgımız ıcın bootstrapın sıtesıne gıdıp js bendalı var onu alıp ındex.html e yapıstırıalım.. <script
//   src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//   integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
//   crossorigin="anonymous"
// ></script>

const EditTutorial = () => {
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
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
