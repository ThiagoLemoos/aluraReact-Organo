import './Rodape.css'

export const Rodape = () => {
    return (
        <div className='rodapedapagina'>
            <div className='logos'> 
                <a href='https://facebook.com/'><img src='/imagens/fb.png'  alt='Facebook Logo' /></a>
                <a href="https://twitter.com/"><img src='/imagens/tw.png' alt='Twitter Logo'/></a>
                <a href='https://instagram.com/'><img src='/imagens/ig.png' alt='Instagram Logo'/></a>
            </div>
            <div className='organo'> 
                <img src='/imagens/logo.png' alt='Organo Logo' />
            </div>
            <h5>Desenvolvido por Thiago Lemos.</h5>
        </div>
    )
}