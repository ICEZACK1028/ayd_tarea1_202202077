import express from 'express';
const app = express();

const data = {
    nombre: "David Isaac García Mejía",
    favorito: {
        tipo: "cancion",
        valor: "ANDRÓMEDA - WOS"
    }
};

app.get('/', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`);
});
