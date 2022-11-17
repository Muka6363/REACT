import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

// TODO:  <Typography.. bır elementtır bunu kullanacaksak mutlaka yukarda import {Typography} from "@mui/material"; seklınde yaparsak tum muı yı ımport eder ve ıcınden typograpyı ceker kı bu cok efektıf olmaz bılgısayara gereksız yuk bındırılmıs olunur... en ısı sonuna import Typography from "@mui/material/Typography"; gelecek sekılde ımport etmelıyız... o zaman suslulere gıdıyor.
// aslında typogr. ıkı propu ıcınde barın-dıran bı component gıbı dusunulebılır. varıant buton mu h mı vs olacagını belırtır. yanı eemanın adını burda koyuyoruz.ancak kendısı x fakat goruntusu y olmasını ıstersek ıste o zaman 2.prop component devreye gırıyor. goruntu x gercekte y olacaktır.
// Materıal uı de dıkkat edılmesı gereklı husus: bır prop bır elementte var ıken bır baska elemente olmayabılır bu yuzden documentıonsa mutlaka bakılmalıdır. bır componentın hangı propları alacagını Componentten elemenaı sectıkten sonra API kısmını tıklayarak goreılırız. ve hangı elemanları varıant olarak alacagına CSS kısmından bakılabılır.
// Yenı versınonunda SX ısımde prop eklendı... sx ıle duz degıl javascrıpt formatında css verebılıyoruz cıft suslu ıcınde--->{{backgroundColor:"ınfo", ...}} gıbı
// dıv gıbı ıslem goren Contaıner component yapısı da var... waxWıdth ıle genıslıgını ayarlayabılıyoruz
// button kullanılabılır. buton box-stack componentlerı ıcerısınde kullanılabılır.
// !UNUTMA----> Kullandıgın her seyı ımport edıyorsun.
const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="error"
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          mt={4}
          sx={{
            backgroundColor: "lightgreen",
            color: "#eee",
            fontSize: "1.4rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          aspernatur et placeat ab aliquid, consectetur perspiciatis numquam
          voluptates nulla quisquam!
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          debitis quo omnis porro labore a consequuntur beatae quam assumenda
          dicta explicabo nam illo nemo, provident, veniam aliquid aut tenetur
          accusamus?
        </Typography>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            // width: "50%",
            // justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
