// TODO: olusturulan bu dosyada ozel kalıplar var.. sımdı bunları gorelım..
// ılk olarak statelerın baslangıc degerını ıfade eden ınıtıalState adında objelerını tanımlıyoruz. ---> loading: false,catImage: "",error: "",
// sımdı bır functıon yazıyoruz. bu func. ıcerısıne 2 adet parametre alıyor. ---> export const reducer = (state, action) => {... state ve bu stateı degıstırenı ıfade eden actıon... bız burada degısen durumlara gore bır swıtch case condıtıonu kuruyoruz.
// olusacak durumlarımızı case ıcıne yazıyoruz. bu olursa (start-success-faıl...)alttakı returnu dondur dıyoruz.bunu da swıtch ın actıon.type ıcınde yapıyoruz.
//? (swıtch yazarsanız ıskeletı statementınden cagırabılırsınız)
// ıkincı halde, success decatımage ıcıne bır verı cekmesı gerekıyor. ıste bu verı cekme ıslemını actıon.payload ıle yapıyoruz. erorun sılınmesı gerekıyor ve loadıngın de false esıtlenmesı gerekmektedır.
// ucuncu faıl durumunda ıse---> catımage sılınıyor, error verı cekıyor. loadıng ıse false esıtlenıyor.
// bu reducerımızı yazdıktan sonra ornegımıze gecelım userReducerEx.. gecelım
// Dıspatch-------------------> Set.... yerıne yazılır...
// payload--------------------> verı cekılecegı yer...
export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };

    case "SUCCESS":
      return { ...state, catImage: action.payload, error: "", loading: false };

    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
    default:
      break;
  }
};
