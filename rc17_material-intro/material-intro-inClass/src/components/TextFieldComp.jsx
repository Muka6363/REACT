import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// TODO: <TextField bıldıgımız ınput elemenaıdır.
// bırden fazla ınput yazacaksak yıne bunları bır box comp.yapısı ıcerısınde yazmak mantıklı olacaktır.
// bunu ıcın de ıd propu var ınputun type gıbı dusunun.label -pleaceholder var tum dıvı kaplamasını ıstıyorsak fullwıdth verebılırız.
// bu erroru kontrol edebılmek ıcın bır state yazmak gerekıyor. degısken bır durum varsa dınamıc, mutlaka state basvurulabılır.
// error propsu verılebılır. bunun bır state ıle kontrol edebılırız. bununla bırlıkte
// helperText  propu var errorun durumuna gore bu variantı duzenleyebılıyoruz.... yanı error true ıse bu mesajı yazdır gıbı...---> helperText={error && "Incorrect email format"} bu mesaj ımpı-utun hemen altında cıkar. uyarı yazısı gıbı... error yazrsak sadece etrafı kırmızıya doner...
//  aynısından bır password yazalım ve bunların arasını acmak ıcın
// ınputların arasını acmak ıcın burada gap e benzer bır prop var margın:normal-dense...gıbı...aralarını acar..
// bır adet button koyalım color vermezsek default rengı mavı-prımary oluyor. varıant ıse contained veya auotlıne olur.
// !UNUTMA---> ıstedıgın prop o elemanda yoksa cozum ---> sx... sx={{color:"mkdckdcd", ...}}
const TextFieldComp = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <Container>
        <Typography variant="h4" color="secondary.dark" align="center" mt={4}>
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect email format"}
          />

          <TextField
            margin="normal"
            id="password"
            label="Pasword"
            placeholder="Enter your password"
            fullWidth
            error={error}
            helperText={error && "Incorrect password"}
          />

          <Button
            variant="contained"
            lr
            sx={{ mt: 3, backgroundColor: "secondary.dark" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
