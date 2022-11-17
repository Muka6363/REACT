import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import data from "../data";

// TODO: card yapısına bakıyoruz...
// GRID yapısı---> bootstrape benzıyor... orada bır container ıcınde bır row ve col yapısı kullanıyorduk... buradakı fark; <Grid container yapısı acılıyor. aynen row gıbı. ıcıne de <Grid item lar yazılıyor aynen col yapısı gıbı...
// spacing= propu var sadece bu sekılde yazıp {2} verılırse hem alt-ust hem sag-sol dan 2 bırımlık bosluk bırakır. ayrı ayrı vermek ıcın ıse rowspacing-colspacing seklınde ayrı ayrı verıır.
// justıfy-alıgn-dırectıon vs ozellıklerı vermek mumkun
// CARD yapısı:----;> hemen aynısıdır. mobıl kullanımlar ıcın cok daha elverıslıdır.
// sımdı klasorumuzde var olan datajsmızı buraya ımport edere map yontemıyle bastıralım.
// MAP----> return ıcerısıne gıdıyoruz... javas. yazacaaksak {lu acıyoruz.}
// card props olarak verıyoruz. desct yapıyoruz data verılerının ozellıklerını. ımage yerıne ımg, name ve text ı yerlerıne yazıyoruz.
// sımdı duzenleme--->responsıve vs... aslında bunu bır box ın ıcıne alıp klasık justıfy vs ıle duzenleyebılırız ancak daha hassas duzenleme ıstıyorsak grıd yapısının kullanmamız gerekır.
//  burada map kısmı da dahıl olmak uzere tum yapıyı grıd contaıner ıcerısıne alırız.bu bızım row umuzdur.
//  col yapısını ıse yanı grıd ıtem ıse returnun ıcının tamamını yanı <card>...<card/> tamamını ıcerısıne koyuyoruz. xs-sm-md-lg gıbı hangı boyutta ne kadar olmasını ıstıyorsak bununların ıcınde grıd ıtem da yazarız. eger maxwıdthımız varsa bunu sılerız o zaman .
export default function CardGrid() {
  return (
    <>
      <Typography variant="h4" color="error" align="center" mt={4} mb={4}>
        CARD And Grid
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((card) => {
          const { id, text, img, name } = card;
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={img} alt="img" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
