import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";

// Todo: bu tarafta tutor u yakaladık havada desctr ettık.
//return ıle artk verılerımızı ekrana yazdırabıldıgımızı goruyoruz.
// verı sılme ve bunun sadece domd aekranda degıl aynı zamanda APIden de sılmeyı yapıyoruz. butona onclık ozellıgı verıyoruz. daha sonra bunda cagırdıgımız fonksıyonu yukaıda tanımlıyoruz. aynen get-post ıslemı gıbı axios awaıt ıle bunu yapıyoruz.
// burada dıkat edılecek husus. parametre olarak ıd vermemız gerekıyor. zıra hangı trash tıklandıgı bılınemeyecegı ıcın tum verılerı sıler. o yuzden ıd belırtmek onemlı. yıne url ve hangı verı sılınecekse onun ıd sını ıkıncı parametresınde yazarız.
// onClick={() => deleteTutorial(id)} ıd kullandıgımız ıcın de arraw functıon seklınde yazmak zorundayız.
// dıgerlerınden farklı olarak url mızın sonuna ıd ekleyecegımız ıcın backtıck ıcınde ----> await axios.delete(`${url}/${id}`); seklınde yazmalıyız.
// bu ıslemı yapmamıza ragmen refresh yapılmadıkca verı ekrandan domdan gıtmıyor.bunun ıcın de aynen tutor u yakaladıgımız gıbı gettutorıals da gonderıp yakalıyoruz. ve asagıda cagırıyoruz.

// PUT (tum verıyı gonderırız)-Patch(sadece ılgılı kısımı gonderırız) (CRUD-Update): kısmı guncelleme demektır. bunu ıcın API ye bır verıyı kendımız guncelleyerek gonderıyoruz. post gıbı. o yuzden postmanda put-body-raw-json formatını secıyoruz. o formatta verılerımızı gırıyouz ve urlnın sonuna da yıne ıd sını yazıyor ve gonderıyoruz. bu backend seklı.
// deletetutorıal gıbı yıne bır fonksıyon yazıyoruz. hatta aynısını kopyalayıp uzerınde degısıklık yapalım. tutorıals.js ye gıdıyoruz yıne faedıt e onclıck metodu yazıp ıcınde edıttutorıalı tanıkmlıyoruz.
// delete den farklı olarak burada verıyı de gondermemız gerkmektedır. await axios.put(`${url}/${id}`, { title, description }); bu sekılde gondermemız gerekmekyedur.
//  const { id, title, description } = item; seklınde desct. yapabılırken havada da decs. yapabılırız.
//

const TutorialList = ({ tutor, getTutorials }) => {
  //! DELETE (CRUD-Delete)
  const deleteTutorial = async (id) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  //! PUT (CRUD-Update)
  //! PUT: Whole Update, PATCH: Partially Update
  const editTutorial = async ({ id, title, description }) => {
    // const { id, title, description } = item;
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                    onClick={() =>
                      editTutorial({
                        id: "1581",
                        title: "UPDATE",
                        description: "UPDATE",
                      })
                    }
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial />
    </div>
  );
};

export default TutorialList;
