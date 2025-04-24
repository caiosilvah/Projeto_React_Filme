import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista"

const CadastroFilme = () => {
    return(
        <Fragment>
            <Header/>
            <main>
                <Cadastro/>
                <Lista/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default CadastroFilme;