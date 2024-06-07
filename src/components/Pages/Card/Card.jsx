import './index.css';
import Acidente from '/public/img/acidente.jpg';
import Alagamento from '/public/img/alagamento.jpg';
import Animais from '/public/img/animais.jpg';
import Desabamento from  '/public/img/desmoronamento.jpg';
import Incendio from '/public/img/incêndio.jpg';
import Arvore from '/public/img/queda-arvore.jpg';
function Card() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="card__container">
                        <article className="card__article">
                            <img src={Arvore} alt="Queda de Árvore" className="card__img" />
                            <div className="card__data">
                                <span className="card__description">***</span>
                                <h2 className="card__title">Queda de Árvore</h2>
                                <a href="#" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Alagamento} alt="Alagamento" className="card__img" />
                            <div className="card__data">
                                <span className="card__description">***</span>
                                <h2 className="card__title">Alagamento</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/ENCHENTES.pdf" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Desabamento} alt="Desabamento" className="card__img" />
                            <div className="card__data">
                                <span className="card__description">***</span>
                                <h2 className="card__title">Desabamento</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/EDIFICACAO-MAIS-SEGURA.pdf" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Incendio} alt="Incêndio Florestal" className="card__img" />
                            <div className="card__data">
                                <span className="card__description">***</span>
                                <h2 className="card__title">Incêndio Florestal</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/INCENDIO-EM-VEGETACAO.pdf" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Animais} alt="Acidente com animais" className="card__img" />
                            <div className="card__data">
                                <span className="card__description">***</span>
                                <h2 className="card__title">Acidente com animais</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/ACIDENTES-COM-ANIMAIS-PECONHENTOS.pdf" className="card__button">Read More</a>
                            </div>
                        </article>
                        <article className="card__article">
                            <img src={Acidente} alt="Acidente" className="card__img" />
                            <div className="card__data">
                                <span className="card__description">***</span>
                                <h2 className="card__title">Acidente</h2>
                                <a href="http://www.ccb.policiamilitar.sp.gov.br/portalcb/_educacao-publica/midias-edpub/folders/pdf/ACIDENTE-DE-TRANSITO.pdf" className="card__button">Read More</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Card;