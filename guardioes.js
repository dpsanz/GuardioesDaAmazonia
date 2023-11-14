const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extend: true}));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/guardioesdaamazonia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000
})

const UsuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    endereco: {type: String},
    numero: {type: Number},
    password: {type: String, required: true},
    complemento: {type: String},
    bairro: {type: String},
    cidade: {type: String},
    telefone: {type: Number} 
})

const Usuario = mongoose.model("Usuario", UsuarioSchema);

app.post("/cadastro", async(req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const endereco = req.body.endereco;
    const password = req.body.password;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const telefone = req.body.telefone;



    if(email == null || password == null || nome == null || endereco == null || numero == null || complemento == null || bairro == null || cidade == null || telefone == null){
        return res.status(400).json({error: "Preencher todos os campos"})
    }

    const emailExiste = await Ong.findOne({email:email});

    if(emailExiste) {
        return res.status(400).json({error: "O email informado já existe"})
    }

    const usuario = new Usuario ({
        nome: nome,
        email: email,
        endereco: endereco,
        password: password,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        telefone: telefone
    })

    try {
        const newUsuario = await usuario.save();

        res.json({error : null, msg : "Cadastro feito com sucesso", usuarioId : newUsuario._id});
    }
    catch(error){
        res.status(400).json({error});
    }

    res.json({error: null, msg: "Teste feito com sucesso"});

})

app.get("/cadastro", async(req, res)=> {
    res.sendFile(__dirname + "/cadastro.html")
})

app.get("/", async(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/login", async(req, res)=>{
    res.sendFile(__dirname + "/login.html")
})

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})
